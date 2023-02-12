import fs from "fs";

let newApplicationList = [

  {
    "APPLICATION_NUMBER": "09 177984 000 00 CO",
    "DESCRIPTION": "To obtain consent to establish a right-of-way for a mutual laneway.",
    "ID": 24547804,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "CO",
    "DATE_SUBMITTED": "2009-10-13",
    "REFERENCE_FILE_NUMBER": "B0100/09TEY",
    "HEARING_DATE": "2009-11-04",
    "STREET_NAME": "DOWLING",
    "STREET_NUM": "182",
    "STREET_TYPE": "AVE",
    "LON": "-79.43988229358979",
    "LAT": "43.639270249999996",
    "COORDINATES": [
      "-79.43988229358979",
      "43.639270249999996"
    ]
  },
  {
    "APPLICATION_NUMBER": "09 177995 000 00 CO",
    "DESCRIPTION": "To obtain consent to establish a right-of-way for a mutual laneway.",
    "ID": 24547805,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "CO",
    "DATE_SUBMITTED": "2009-10-13",
    "REFERENCE_FILE_NUMBER": "B0101/09TEY",
    "HEARING_DATE": "2009-11-04",
    "STREET_NAME": "DOWLING",
    "STREET_NUM": "184",
    "STREET_TYPE": "AVE",
    "LON": "-79.43990044329269",
    "LAT": "43.63935545",
    "COORDINATES": [
      "-79.43990044329269",
      "43.63935545"
    ]
  },
  {
    "APPLICATION_NUMBER": "09 186178 000 00 MV",
    "DESCRIPTION": "To construct a rear second-storey deck above the first floor portion of the existing three-storey semi-detached dwelling.",
    "ID": 24551021,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2009-11-06",
    "REFERENCE_FILE_NUMBER": "A0011/10TEY",
    "HEARING_DATE": "2010-01-13",
    "STREET_NAME": "BEATY",
    "STREET_NUM": "9",
    "STREET_TYPE": "AVE",
    "LON": "-79.43981470062378",
    "LAT": "43.6370531",
    "COORDINATES": [
      "-79.43981470062378",
      "43.6370531"
    ]
  },
  {
    "APPLICATION_NUMBER": "22 190730 S45 04 TLAB",
    "DESCRIPTION": "To alter the existing three-storey detached dwelling by removing the existing rear and side additions and constructing: a complete third storey addition, a rear three-storey addition; front and rear third storey terraces; and front and rear basement walkouts. This alteration will increase the number of dwelling units from 4 units to 6 units (1 primary unit and 5 secondary suites). Also, to construct a one-storey ancillary building (detached garage) for a total of 4 parking spaces (2 of which will be below-grade) and a two-storey ancillary building (laneway suite) with one surface parking space, in the rear yard, abutting the laneway.",
    "ID": 24541513,
    "POSTAL": "M6K",
    "STATUS": "Hearing Scheduled",
    "APPLICATION_TYPE": "TLAB",
    "DATE_SUBMITTED": "2022-08-15",
    "REFERENCE_FILE_NUMBER": "22-190730",
    "HEARING_DATE": null,
    "STREET_NAME": "WILSON PARK",
    "STREET_NUM": "44",
    "STREET_TYPE": "RD",
    "LON": "-79.44214174960734",
    "LAT": "43.6378782",
    "COORDINATES": [
      "-79.44214174960734",
      "43.6378782"
    ]
  },
  {
    "APPLICATION_NUMBER": "21 247394 STE 04 MV",
    "DESCRIPTION": "To construct a new four-storey apartment building with a parking deficiency of four parking spaces and two visitor parking spaces. ",
    "ID": 24541784,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2021-12-10",
    "REFERENCE_FILE_NUMBER": "A1518/21TEY",
    "HEARING_DATE": "2022-03-30",
    "STREET_NAME": "SPRINGHURST",
    "STREET_NUM": "155",
    "STREET_TYPE": "AVE",
    "LON": "-79.43741669778807",
    "LAT": "43.6363406",
    "COORDINATES": [
      "-79.43741669778807",
      "43.6363406"
    ]
  },
  {
    "APPLICATION_NUMBER": "22 205345 S45 04 TLAB",
    "DESCRIPTION": "To alter the existing 16-unit, three-storey multi-residential building by adding two additional units for a total of 18 residential units (15 bachelor units and 3 two-bedroom units).",
    "ID": 24542135,
    "POSTAL": "M6K",
    "STATUS": "Appeal Received by TLAB",
    "APPLICATION_TYPE": "TLAB",
    "DATE_SUBMITTED": "2022-09-19",
    "REFERENCE_FILE_NUMBER": "22-205345",
    "HEARING_DATE": null,
    "STREET_NAME": "MAYNARD",
    "STREET_NUM": "20",
    "STREET_TYPE": "AVE",
    "LON": "-79.43791835069355",
    "LAT": "43.6376013",
    "COORDINATES": [
      "-79.43791835069355",
      "43.6376013"
    ]
  },
  {
    "APPLICATION_NUMBER": "08 148757 000 00 MV",
    "DESCRIPTION": "To enclose the porch area of the Coach House.",
    "ID": 24543659,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2008-04-18",
    "REFERENCE_FILE_NUMBER": "A0585/08TEY",
    "HEARING_DATE": "2008-06-25",
    "STREET_NAME": "BEATY",
    "STREET_NUM": "39",
    "STREET_TYPE": "AVE",
    "LON": "-79.44009145668663",
    "LAT": "43.6377596",
    "COORDINATES": [
      "-79.44009145668663",
      "43.6377596"
    ]
  },
  {
    "APPLICATION_NUMBER": "08 141805 000 00 MV",
    "DESCRIPTION": "To alter the existing three-unit semi-detached dwelling by converting the third floor attic into living space and constructing a rear third floor dormer addition.",
    "ID": 24543935,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2008-03-31",
    "REFERENCE_FILE_NUMBER": "A0536/08TEY",
    "HEARING_DATE": "2008-06-11",
    "STREET_NAME": "COWAN",
    "STREET_NUM": "160",
    "STREET_TYPE": "AVE",
    "LON": "-79.43223414444444",
    "LAT": "43.63881671111111",
    "COORDINATES": [
      "-79.43223414444444",
      "43.63881671111111"
    ]
  },
  {
    "APPLICATION_NUMBER": "08 108565 000 00 MV",
    "DESCRIPTION": "To permit a restaurant with an accessory dance floor in the four-storey commercial building.",
    "ID": 24544011,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2008-02-04",
    "REFERENCE_FILE_NUMBER": "A0384/08TEY",
    "HEARING_DATE": "2008-05-14",
    "STREET_NAME": "LIBERTY",
    "STREET_NUM": "135",
    "STREET_TYPE": "ST",
    "LON": "-79.422948",
    "LAT": "43.6376928",
    "COORDINATES": [
      "-79.422948",
      "43.6376928"
    ]
  },
  {
    "APPLICATION_NUMBER": "08 170362 000 00 MV",
    "DESCRIPTION": null,
    "ID": 24544923,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2008-06-13",
    "REFERENCE_FILE_NUMBER": "A0736/08TEY",
    "HEARING_DATE": null,
    "STREET_NAME": "BROCK",
    "STREET_NUM": "5",
    "STREET_TYPE": "AVE",
    "LON": "-79.432193",
    "LAT": "43.6420465",
    "COORDINATES": [
      "-79.432193",
      "43.6420465"
    ]
  },
  {
    "APPLICATION_NUMBER": "22 231638 STE 04 CO",
    "DESCRIPTION": "To obtain consent for the technical severance of the property for the purpose of re-establishing two residential lots which merged on title.",
    "ID": 25750660,
    "POSTAL": "M6K",
    "STATUS": "Accepted",
    "APPLICATION_TYPE": "CO",
    "DATE_SUBMITTED": "2022-11-21",
    "REFERENCE_FILE_NUMBER": "B0084/22TEY",
    "HEARING_DATE": null,
    "STREET_NAME": "LANSDOWNE",
    "STREET_NUM": "193",
    "LON": "-79.43874559999999",
    "LAT": "43.64647558",
    "COORDINATES": [
      "-79.43874559999999",
      "43.64647558"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "22 172116 STE 04 MV",
    "DESCRIPTION": "To convert a portion of the basement of the existing three unit, detached tri-plex into a studio apartment and to alter the existing parking area.",
    "ID": 25750674,
    "POSTAL": "M6P",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2022-07-05",
    "REFERENCE_FILE_NUMBER": "A0774/22TEY",
    "HEARING_DATE": "2022-10-27",
    "STREET_NAME": "INDIAN",
    "STREET_NUM": "580",
    "LON": "-79.46275524444445",
    "LAT": "43.666318366666665",
    "COORDINATES": [
      "-79.46275524444445",
      "43.666318366666665"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "22 237717 STE 04 MV",
    "DESCRIPTION": "To permit a learning center (children's cooking school) use within the two-storey building.",
    "ID": 25750685,
    "POSTAL": "M6P",
    "STATUS": "Tentatively Scheduled",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2022-12-08",
    "REFERENCE_FILE_NUMBER": "A1390/22TEY",
    "HEARING_DATE": "2023-03-22",
    "STREET_NAME": "BLOOR",
    "STREET_NUM": "1982",
    "LON": "-79.4684087",
    "LAT": "43.6530171",
    "COORDINATES": [
      "-79.4684087",
      "43.6530171"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "21 234433 STE 04 MV",
    "DESCRIPTION": "To convert the existing two-storey detached building into a two-storey mixed-use building containing office use.",
    "ID": 25750718,
    "POSTAL": "M6P",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2021-11-04",
    "REFERENCE_FILE_NUMBER": "A1363/21TEY",
    "HEARING_DATE": "2022-03-02",
    "STREET_NAME": "ANNETTE",
    "STREET_NUM": "86",
    "LON": "-79.4630267",
    "LAT": "43.6636407",
    "COORDINATES": [
      "-79.4630267",
      "43.6636407"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "22 138287 STE 04 MV",
    "DESCRIPTION": "To convert the existing two-and-one-half-storey semi-detached dwelling from five units into six units (one primary unit and five secondary suites) by installing a new dwelling unit within the basement.",
    "ID": 25750758,
    "POSTAL": "M6K",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2022-04-26",
    "REFERENCE_FILE_NUMBER": "A0509/22TEY",
    "HEARING_DATE": "2022-11-02",
    "STREET_NAME": "WILSON PARK",
    "STREET_NUM": "77",
    "LON": "-79.4419506429977",
    "LAT": "43.638903400000004",
    "COORDINATES": [
      "-79.4419506429977",
      "43.638903400000004"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "22 223172 STE 04 MV",
    "DESCRIPTION": "To install a front yard parking pad.",
    "ID": 25750806,
    "POSTAL": "M6R",
    "STATUS": "Hearing Scheduled",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2022-10-28",
    "REFERENCE_FILE_NUMBER": "A1240/22TEY",
    "HEARING_DATE": "2023-02-22",
    "STREET_NAME": "SORAUREN",
    "STREET_NUM": "75",
    "LON": "-79.441800994906",
    "LAT": "43.6425993",
    "COORDINATES": [
      "-79.441800994906",
      "43.6425993"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "22 213849 STE 04 MV",
    "DESCRIPTION": "To alter the existing two-storey mixed-use building by constructing a third storey addition, and a rear three-storey addition.",
    "ID": 25750878,
    "POSTAL": "M6P",
    "STATUS": "Approved",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2022-10-06",
    "REFERENCE_FILE_NUMBER": "A1090/22TEY",
    "HEARING_DATE": "2023-01-25",
    "STREET_NAME": "DUNDAS",
    "STREET_NUM": "3122",
    "LON": "-79.4739339857143",
    "LAT": "43.665651957142856",
    "COORDINATES": [
      "-79.4739339857143",
      "43.665651957142856"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "22 171208 STE 04 MV",
    "DESCRIPTION": "To alter the existing two-and-one-half-storey detached dwelling by constructing a one-storey east side addition, and a rear ground level deck.",
    "ID": 25750914,
    "POSTAL": "M6R",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2022-07-03",
    "REFERENCE_FILE_NUMBER": "A0804/22TEY",
    "HEARING_DATE": "2022-10-19",
    "STREET_NAME": "PEARSON",
    "STREET_NUM": "50",
    "LON": "-79.44129124",
    "LAT": "43.64329032",
    "COORDINATES": [
      "-79.44129124",
      "43.64329032"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "22 171214 STE 04 MV",
    "DESCRIPTION": "To alter the existing two-and-one-half-storey detached dwelling by constructing a rear ground floor addition with a deck, and a rear third storey addition with a balcony.",
    "ID": 25750915,
    "POSTAL": "M6R",
    "STATUS": "Closed",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2022-07-03",
    "REFERENCE_FILE_NUMBER": "A0789/22TEY",
    "HEARING_DATE": "2022-10-19",
    "STREET_NAME": "FERMANAGH",
    "STREET_NUM": "54",
    "LON": "-79.44592679090908",
    "LAT": "43.647097900000006",
    "COORDINATES": [
      "-79.44592679090908",
      "43.647097900000006"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "21 215471 S53 04 TLAB",
    "DESCRIPTION": "To obtain consent to sever the residential lot into two undersized residential lots.",
    "ID": 25750952,
    "POSTAL": "M6P",
    "STATUS": "Decision Issued",
    "APPLICATION_TYPE": "TLAB",
    "DATE_SUBMITTED": "2021-09-21",
    "REFERENCE_FILE_NUMBER": "21-215471",
    "HEARING_DATE": null,
    "STREET_NAME": "INDIAN",
    "STREET_NUM": "549",
    "LON": "-79.46220911",
    "LAT": "43.665608240000005",
    "COORDINATES": [
      "-79.46220911",
      "43.665608240000005"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "21 215475 S45 04 TLAB",
    "DESCRIPTION": "To maintain the existing three-storey five-unit detached dwelling on the retained lot described in Consent Application B0036/21TEY.",
    "ID": 25750953,
    "POSTAL": "M6P",
    "STATUS": "Decision Issued",
    "APPLICATION_TYPE": "TLAB",
    "DATE_SUBMITTED": "2021-09-21",
    "REFERENCE_FILE_NUMBER": "21-215475",
    "HEARING_DATE": null,
    "STREET_NAME": "INDIAN",
    "STREET_NUM": "549",
    "LON": "-79.46220911",
    "LAT": "43.665608240000005",
    "COORDINATES": [
      "-79.46220911",
      "43.665608240000005"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "21 215476 S45 04 TLAB",
    "DESCRIPTION": "To build a new two-and-a-half-storey detached dwelling on the conveyed lot described in Consent Application B0036/21TEY.",
    "ID": 25750954,
    "POSTAL": "M6P",
    "STATUS": "fake",
    "APPLICATION_TYPE": "TLAB",
    "DATE_SUBMITTED": "2021-09-21",
    "REFERENCE_FILE_NUMBER": "21-215476",
    "HEARING_DATE": null,
    "STREET_NAME": "INDIAN",
    "STREET_NUM": "549",
    "LON": "-79.46220911",
    "LAT": "43.665608240000005",
    "COORDINATES": [
      "-79.46220911",
      "43.665608240000005"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },
  {
    "APPLICATION_NUMBER": "21 238187 STE 04 MV",
    "DESCRIPTION": "To alter the existing two-storey building by constructing an east porch and a third storey addition with a west side third storey balcony and an east side exterior staircase to grade.",
    "ID": 25750955,
    "POSTAL": "M6R",
    "STATUS": "asdasdasdasmcfaasdasds",
    "APPLICATION_TYPE": "MV",
    "DATE_SUBMITTED": "2021-11-16",
    "REFERENCE_FILE_NUMBER": "A1393/21TEY",
    "HEARING_DATE": "WHO CARES BRUHHHHHHHHHHHHHHHHHHHH",
    "STREET_NAME": "INDIAN",
    "STREET_NUM": "107",
    "LON": "-79.45286288413632",
    "LAT": "43.64312889908411",
    "COORDINATES": [
      "-79.45286288413632",
      "43.64312889908411"
    ],
    "WITHIN_NORTH_WARD": true,
    "SORTED_ITEM": true
  },

];
let pastItems = fs.readFileSync('./past-items.json', 'utf8');
pastItems = JSON.parse(pastItems);
// console.log(newApplicationList.find((item) => item.APPLICATION_NUMBER == "21 238187 STE 04 MV"));
// console.log(pastItems)
// console.log(pastItems.find((item) => item.APPLICATION_NUMBER == "21 238187 STE 04 MV"));
function statusChanges(sortedList) {
  let matches = [];
  let statusDifferences = [];
  for (let i = 0; i < pastItems.length; i++) {
    for (let j = newApplicationList.length - 1; j > 0; j--) {
      if (pastItems[i].APPLICATION_NUMBER == newApplicationList[j].APPLICATION_NUMBER) {
        if (pastItems[i].STATUS != newApplicationList[j].STATUS) {
          statusDifferences.push(newApplicationList[j]);
        }
        matches.push(newApplicationList[j]);
        console.log("New entry is on past entries list. Updating past entries");
        pastItems[i] = newApplicationList[j];
        j = -1;
      }

    }
  }
  newApplicationList.forEach((sortedItem) => {
    if (!pastItems.find((pastItem) => sortedItem.APPLICATION_NUMBER == pastItem.APPLICATION_NUMBER)) {
      pastItems.push(sortedItem);
      console.log("Added an item that wasn't on the list.")
    }
  })
  console.log("matches", matches)
  console.log("STATUS", statusDifferences)


  //   // let myArr = [];
  //   // for (let i = 0; i < pastItems.length; i++) {
  //   //   let match = newApplicationList.find((item) => item.APPLICATION_NUMBER == pastItems[i].APPLICATION_NUMBER);
  //   //   if (match) {
  //   //     pastItems[i] = match;
  //   //   }
  //   // }
  //   // return console.log(myArr);
}
statusChanges();


fs.writeFileSync("past-items.json", JSON.stringify(pastItems));
