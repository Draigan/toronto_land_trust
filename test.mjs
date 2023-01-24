import energize from "./download.mjs";
import * as sorter from "./sorter.mjs";
// import * as mailer from "./mailer.mjs";
// import * as sorter from "./sorter.mjs";
// import moment from "moment";
import fs from "fs";
// import pastItems from "./past-items.json" assert { type: "json" };

// let date =
//   moment().format("D") + moment().format("MMM") + moment().format("YYYY");
// fs.copyFileSync("./yesterdays-list.json", `./history/${date}.json`);
//fs.renameSync("./yesterdays-list.json", `./history/${date}.json`);
//fs.renameSync("./todays-list.json", "./yesterdays-list.json");
// Promise.all(promises).then((data) => { console.log(data[0]) })

// parseToday().then((data) => { console.log(data) })
energize("todays-list.json")
  .then(() => { return Promise.all(promises) })
  .then((data) => { console.log(data[0]) })
// .then((data) => { sorter.sort(data[0], data[1]) })


function parseToday() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/todays-list.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject();
        return;
      }
      let dataParsed = JSON.parse(data)
      resolve(dataParsed)
    });
  })
}
function parseYesterday() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/yesterdays-list.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject();
        return;
      }
      let dataParsed = JSON.parse(data)
      return resolve(dataParsed);
    });
  })
}
let promises = [parseToday(), parseYesterday()];

// energize("todays-list.json")
//   .then(() => { Promise.all(promises) })
//   .then((data) => { console.log(data) })
  // .then((listArray) => { console.log(listArray[0]) }

// async function main() {
//   const download = await energize("todays-list.json");
//   const parseData = await Promise.all(promises);
// const sort = await sorter.sort();
// const applicationList = listArray[0];
// const statusList = listArray[1];
// console.log(applicationList);

// }
// main();

// energize("todays-list.json").then(() => {
//   sorter.sort().then((listArray) => {
//     console.log("finished sorting");
//     const applicationList = listArray[0];
//     const statusList = listArray[1];

//     //Updating the status of items from pastList with their current status.
//     statusList.forEach((statusItem) => {
//       pastItems.find(
//         (pastItem) =>
//           statusItem.APPLICATION_NUMBER == pastItem.APPLICATION_NUMBER
//       ).STATUS = statusItem.STATUS;
//     });

//     //Adding items from application list to the pastItems List
//     applicationList.forEach((item) => {
//       pastItems.push(item);
//     });

//     let data = JSON.stringify(pastItems);
//     fs.writeFileSync("pastItems.json", data);

//     console.log("APPLICATIONS LIST _____________");
//     console.log(applicationList);

//     console.log("STATUS LIST _____________");
//     console.log(statusList);

//     // Transfering todays list to yesterdays list.
//     // fs.copyFileSync("./yesterdays-list.json", `./history/${date}.json`);
//     // fs.copyFileSync("./todays-list.json", "./yesterdays-list.json");

//     if (statusList.length != 0 || applicationList.length != 0) {
//       console.log("Emailing...");

//       mailer
//         .mail(applicationList, statusList)
//         .catch((err) => {
//           mailer.mailError(err);
//           console.log(err);
//         })
//         .catch((err) => {
//           mailer.mailError(err);
//           console.log(err);
//         });
//     } else {
//       console.log("There are no new entries to email");
//     }
//   });
// });

