import fs from "fs";
import https from "https";



// real one                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 const url = "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/0aa7e480-9b48-4919-98e0-6af7615b7809/resource/043f9e44-ed62-4b4e-96d8-bdfcea27ec91/download/Development%20Applications%20Data.json"
const url = "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"

 export function
energize(fileName) { return new Promise((resolve,reject)=>
    {
        const req = https.get(url, (res) => 
            {
                var fileStream = fs.createWriteStream(`./${fileName}.jpg`)
                res.pipe(fileStream)
            
                fileStream.on("error", (err) =>
                {
                    reject(new Error('someting done goofed'));
                    console.log("error downloading to filestream")
                    console.error(err);
                    //Send an email to note of the error
                })
            
            
            
                fileStream.on("finish",() => 
                {
                    
                 
                    console.log("Done!")
                    fileStream.close(() => resolve("passed"));
                })
            
            
            });
            
            req.on("error", (err) =>
            {
            console.log("error downloading file");
            console.error(err);
            
            });} 

    )} 
export default energize

/* myPromise("dog").then(()=>console.log('it worked'))  */