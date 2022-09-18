import fs from "fs";
import https from "https";
import { mailError } from "./mailer.mjs";
import todaysList from "./todays-list.json" assert {type:"json"};




const url = "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/0aa7e480-9b48-4919-98e0-6af7615b7809/resource/043f9e44-ed62-4b4e-96d8-bdfcea27ec91/download/Development%20Applications%20Data.json" 

//testing URL
//const url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";

 export function
energize(fileName) { 

    return new Promise( (resolve,reject) => {

        const req = https.get(url, (res) => 
            {
                console.log('downloading...')
                var fileStream = fs.createWriteStream(`./${fileName}.json`);
                res.pipe(fileStream);
                
            
                fileStream.on("error", (err) =>
                {
                    reject(new Error('someting done goofed'));
                    console.log("error downloading to filestream")
                    console.error(err);
                    mailError(err);
                    //Send an email to note of the error
                });
            
            
            
                fileStream.on("finish",() => 
                {
                    
                 resolve('HelloI have finished downloading')
    
                  
              fileStream.close(); 
       
                });
            
            
            });

   
            
            req.on("error", (err) =>
            {
            console.log("error downloading file");
            console.error(err);
            mailError(err);

            
            });

    });


    } 

    export default energize;
/* 
    function
    myPromise()
    {
        return new Promise((resolve,reject) => {
            if (true == false) 
            {
               return reject();
            }
            resolve("IM PASSED BITCHES")
        })
    }

    function
    myPromise2()
    {
        return new Promise((resolve,reject) => {
            if (true == false) 
            {
               return reject();
            }
            setTimeout(()=>{resolve("IM PASSED AGAIN BITCHES")}, 6000)
        })
    }


    // First the pic is downloaded. THen myPromise is executed, then myPromise2 is executed.

    energize("newpic").then(()=> {return myPromise()}).then((text) => {console.log(text);
        return myPromise2();
    
    }).then(text => console.log(text)) */


/* myPromise("dog").then(()=>console.log('it worked'))  */