import * as download from "./download.mjs";
import * as mailer from "./mailer.mjs";
import * as sorter from "./sorter.mjs";
import moment from "moment";
import * as fs from 'fs';
import pastItems from "./pastItems.json" assert {type: "json"};


export function
  copy() {
  return new Promise(res => {
    fsPromises.copyFile("./todays-list.json", "./yesterdays-list.json");

    download.energize('todays-list').then(() => { res(); })
  });
}

fs.renameSync("./test.txt", "./history/hello.txt")



// setTimeout(3000, () => { fs.renameSync("./something.txt", "./test.txt") })






/* 
fs.copyFileSync("./todays-list.json", "./yesterdays-list.json")

download.energize('todays-list').then(() => sorter.sort()).then((listArray)=> {
    console.log(listArray[0])
    console.log(listArray[1])

        }) */

/* download.energize('todays-list').then(() => sorter.sort()).then( listArray => {
    console.log('finished sorting')
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

 if (statusList.length != 0 || applicationList.length != 0 ){
 console.log("Emailing...");
 mailer.mail(applicationList,statusList).catch(err => {

    mailer.mailError(err);
    console.log(err);
    
    
    }).catch(err => {

        mailer.mailError(err);
        console.log(err);
        
        
        });} else { console.log('There are no new entries to email')}
 } );

 

*/




