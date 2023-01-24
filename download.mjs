import fs from "fs";
import https from "https";
// import { mailError } from "./mailer.mjs";


// const url =
//   "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/0aa7e480-9b48-4919-98e0-6af7615b7809/resource/043f9e44-ed62-4b4e-96d8-bdfcea27ec91/download/Development%20Applications%20Data.json";
const url =
  "https://filesamples.com/samples/code/json/sample4.json"
//testing URL
//const url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";

export function energize(fileName) {
  return new Promise((resolve, reject) => {
    const require = https.get(url, (res) => {
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
        fileStream.close();
        fs.readFile('./data/yesterdays-list.json', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          resolve(data);

        });
      });
    });

    // req.on("error", (err) => {
    //   console.log("error downloading file");
    //   console.error(err);
    //   mailError(err);
    // });
  });
}

// function parseToday() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./data/todays-list.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//         reject();
//         return;
//       }
//       resolve(data)
//     });
//   })
// }
// function parseYesterday() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./data/yesterdays-list.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//         reject();
//         return;
//       }
//       resolve(data);
//     });
//   })
// }
// let promises = [parseToday(), parseYesterday()];
// Promise.all(promises).then((data) => { console.log(data[0]) })

// energize("test.json").then((data) => {
//   console.log(data.people[0])
// })
// async function main() {
//   const download = await energize("test.json");
//   const log = console.log("./data/test.json");
// }
// main();
export default energize;
