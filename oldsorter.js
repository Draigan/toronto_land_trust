
import fetch from "node-fetch";
import * as mailer from "./mailer.mjs";
import * as d3 from "d3-geo";
import geoWard from "./data/geoward4.json" assert { type: "json" };
import pastItems from "./data/past-items.json" assert { type: "json" };

export function sort(data1, data2) {
  const todaysList = data1
  const yesterdaysList = data2

  const todaysTotalNewEntries = todaysList.length - yesterdaysList.length;
  const newEntries = todaysList.slice(-todaysTotalNewEntries);
  // console.log(newEntries);
  console.log("Total new entries for today.");
  console.log(todaysTotalNewEntries);
  console.log("todays list size");
  console.log(todaysList.length);
  console.log("yesterdays list size");
  console.log(yesterdaysList.length);


  return new Promise((res, rej) => {
    if (false == true) {
      rej;
    }

    const postalCode = ["M6K", "M6H", "M6P", "M6R", "M6J", "M5X", "M5J", "M5K", "M6L", "M3C", "M5H",];

    const oldList = cleanUpList(yesterdaysList);
    const newApplicationList = cleanUpList(todaysList);
    const newStatusList = cleanUpList(todaysList);
    const refinedNewStatusList = [];

    function cleanUpList(list) {
      return list.filter((item) => {
        for (let code of postalCode) {
          if (code == item.POSTAL) {
            return true;
          }
        }

        return false;
      })
        .map((item) => {
          return {
            APPLICATION_NUMBER: item.APPLICATION_NUMBER,
            DESCRIPTION: item.DESCRIPTION,
            ID: item._id,
            POSTAL: item.POSTAL,
            STATUS: item.STATUS,
            APPLICATION_TYPE: item.APPLICATION_TYPE,
            DATE_SUBMITTED: item.DATE_SUBMITTED,

            REFERENCE_FILE_NUMBER: item.REFERENCE_FILE_NUMBER,
            HEARING_DATE: item.HEARING_DATE,

            STREET_NAME: item.STREET_NAME,
            STREET_NUM: item.STREET_NUM,
            STREET_TYPE: item.STREET_TYPE,
            LON: null,
            LAT: null,
            COORDINATES: [],
          };
        });
    }

    function findChangedStatus() {
      for (let i = 0; i < pastItems.length; i++) {
        for (let j = newStatusList.length - 1; j > 0; j--) {
          if (pastItems[i].APPLICATION_NUMBER == newStatusList[j].APPLICATION_NUMBER) {
            if (pastItems[i].STATUS != newStatusList[j].STATUS) {
              refinedNewStatusList.push(newStatusList[j]);

            }
          }
        }
      }
    }

    findChangedStatus();

    function getRidOfCopies(originalList, modifiedList) {
      for (let i = 0; i < modifiedList.length; i++) {
        if (!modifiedList[i].APPLICATION_NUMBER) {
          console.log(modifiedList[i])
          continue;
        }
        for (let item of originalList) {
          if (modifiedList[i].APPLICATION_NUMBER == item.APPLICATION_NUMBER) {
            modifiedList.splice(i, 1);
          }
        }
      }
    }
    getRidOfCopies(oldList, newApplicationList);

    const promiseArray = [];

    const httpRequest = (url, index) => {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            //Adding lon and lat to my list item
            if (json[0] != undefined) {
              newApplicationList[index].LON = json[0].lon;
              newApplicationList[index].LAT = json[0].lat;
              newApplicationList[index].COORDINATES.push(
                json[0].lon,
                json[0].lat
              );
            } else {
              console.log("An API request for coordinates failed. This is due to the address being incorrect in some way. Here is the item:");
              console.log(newApplicationList[index]);
              newApplicationList[index].Note = "This entry might not be in ward 4."
            }

            resolve();
          })
          .catch(reject);
      });
    };

    for (let i = 0; i < newApplicationList.length; i++) {
      let url = `https://nominatim.openstreetmap.org/search?q=${newApplicationList[i].STREET_NUM}+
      ${newApplicationList[i].STREET_NAME}+${newApplicationList[i].STREET_TYPE},+toronto&format=json`;

      setTimeout(() => {
        promiseArray.push(httpRequest(url, i));
      }, 3000 * i);
    }

    setTimeout(() => {
      Promise.all(promiseArray).then(() => {
        for (let i = 0; i < newApplicationList.length; i++) {

          // Null Check
          if (newApplicationList[i].LON == undefined) {
            continue;
          }

          if (
            //checks to see if listings long and lat falls within ward4's geojson
            d3.geoContains(geoWard, newApplicationList[i].COORDINATES) == false
          ) {
            newApplicationList.splice(i, 1);
          }
        }

        let listArray = [];
        listArray.push(newApplicationList, refinedNewStatusList);

        res(listArray);
      });
    }, newApplicationList.length * 3001);
  });
}


