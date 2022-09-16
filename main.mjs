 import * as download from "./download.mjs"; 
import * as mailer from "./mailer.mjs";
import * as sorter from "./sorter.mjs";
import moment from "moment";
import fs from "fs";
import pastItems from "./pastItems.json" assert {type:"json"};

let date = moment().format("D") + moment().format("MMM") + moment().format("YYYY");


async function
mainFunction()
{
    fs.copyFileSync("./yesterdays-list.json", `./history/${date}.json`)
    fs.copyFileSync("./todays-list.json", `./yesterdays-list.json`)
   

    console.log( "Downloading todays list...");
    const downloaded= await download.energize('todays-list').catch(err => {

        mailer.mailError(err);
        console.log(err);
        
        
        });
    console.log("Sorting list and requesting lon and lat from api...")


    const sort = await sorter.sort().then( listArray => {
        const applicationList = listArray[0];
        const statusList = listArray[1];

     //Updating the status of items from pastList with their current status. 
        statusList.forEach( statusItem => {
            pastItems.find( pastItem => statusItem.APPLICATION_NUMBER == pastItem.APPLICATION_NUMBER ).STATUS = statusItem.STATUS;
        })

        //Adding items from application list to the pastItems List
applicationList.forEach(item => {
    pastItems.push(item);
});

        let data = JSON.stringify(pastItems);
fs.writeFileSync('pastItems.json', data);

     console.log("APPLICATIONS LIST _____________");
     console.log(applicationList);

     console.log("STATUS LIST _____________");
     console.log(statusList);

     if (statusList.length != 0 ){
     console.log("Emailing...");
     mailer.mail(applicationList,statusList).catch(err => {

        mailer.mailError(err);
        console.log(err);
        
        
        }).catch(err => {

            mailer.mailError(err);
            console.log(err);
            
            
            });} else { console.log('There are no new entries to email')}
     } );

 

};

mainFunction();



