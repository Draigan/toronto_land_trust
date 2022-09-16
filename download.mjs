import fs from "fs";
import https from "https";



const url = "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/0aa7e480-9b48-4919-98e0-6af7615b7809/resource/043f9e44-ed62-4b4e-96d8-bdfcea27ec91/download/Development%20Applications%20Data.json" 

//testing URL
//const url = "https://doc-0c-80-docs.googleusercontent.com/docs/securesc/37pit3impsiatvl2j01jjn33s4u7qstq/l8h4out1b66dnb80sv7ouqfet7k2sgk4/1663357650000/01967764509661569759/01967764509661569759/1QcLnVL0ITNw0rFhsOR8eIEIUlbgQIPp7?e=download&authuser=0&nonce=k2fel4bh6ung8&user=01967764509661569759&hash=eioes0f53r89ubi3rcd1igocgbier9od";

 export function
energize(fileName) { 

    return new Promise( (resolve,reject) => {

        const req = https.get(url, (res) => 
            {
                var fileStream = fs.createWriteStream(`./${fileName}.json`);
                res.pipe(fileStream);
            
                fileStream.on("error", (err) =>
                {
                    reject(new Error('someting done goofed'));
                    console.log("error downloading to filestream")
                    console.error(err);
                    //Send an email to note of the error
                });
            
            
            
                fileStream.on("finish",() => 
                {
                    
                 
                    console.log(`Download of ${fileName} Complete!`)
                    fileStream.close(resolve);
                   
                });
            
            
            });

   
            
            req.on("error", (err) =>
            {
            console.log("error downloading file");
            console.error(err);
            
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