import fs from "fs";
import * as sorter from "./sorter.mjs";
// import list from "./test2.json" assert { type: "json" };
import energize from "./download.mjs";


function read() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/test.json', 'utf8', (err, data) => {
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

energize("test.json").then(() => { return read() }).then((data) => { sorter.sort(data, "hey") })
