import fs from "fs";
import https from "https";



const url = "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/0aa7e480-9b48-4919-98e0-6af7615b7809/resource/043f9e44-ed62-4b4e-96d8-bdfcea27ec91/download/Development%20Applications%20Data.json" 
//const url = "https://r4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-4bb67cfd2391ef49d5148b291dcc5cf0.jpg";

 export function
energize(fileName) { 

    return new Promise( (resolve,reject) => {

        const req = https.get(url, (res) => 
            {
                var fileStream = fs.createWriteStream(`./${fileName}.jpg`);
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