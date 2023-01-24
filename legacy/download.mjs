// import fs from "fs";
import https from "https";
// import { mailError } from "./mailer.mjs";


const url =
  "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/0aa7e480-9b48-4919-98e0-6af7615b7809/resource/043f9e44-ed62-4b4e-96d8-bdfcea27ec91/download/Development%20Applications%20Data.json";

//testing URL
//const url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";

export function energize(fileName) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      console.log("downloading...");
      const fileStream = fs.createWriteStream(`./data/${fileName}`);
      res.pipe(fileStream);

      fileStream.on("error", (err) => {
        reject(new Error("someting done goofed"));
        console.log("error downloading to filestream");
        console.error(err);
        mailError(err);
        //Send an email to note of the error
      });

      fileStream.on("finish", () => {
        resolve("I have finished downloading");

        fileStream.close();
      });
    });

    req.on("error", (err) => {
      console.log("error downloading file");
      console.error(err);
      mailError(err);
    });
  });
}

energize("test.json")
export default energize;
