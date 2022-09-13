import fetch from 'node-fetch';
import * as d3  from "d3-geo";
import geoWard from `./geoward4.json` assert { type: `json` };
/* import yesterdaysList from "./yesterdays-list.json" assert {type: 'json'}
import todaysList from "./todays-list.json" assert {type: 'json'} */

const postalCode = [ 'M6K', 'M6H', 'M6P', 'M6R', 'M6J', 'M5X', 'M5J', 'M5K', 'M6L', 'M3C', 'M5H'];

const oldList = cleanUpList(yesterdaysList);
const newList = cleanUpList(todaysList);
const dailyRelevantListings = [];

function
cleanUpList(list)
{
    return list.filter( item => 
    {
        for ( let code of postalCode)
        {
            if ( code == item.POSTAL ) 
            {
                return true;
            }
        } 
        
            return false; 
        
    } ).map( (item) =>
         {
            return {
                'APPLICATION_NUMBER' : item.APPLICATION_NUMBER,
                'ID': item._id,
                'POSTAL' : item.POSTAL,

                'APPLICATION_TYPE' : item.APPLICATION_TYPE,
                'DATE_SUBMITTED' : item.DATE_SUBMITTED,

                'REFERENCE_FILE_NUMBER': item.REFERENCE_FILE_NUMBER,
                'HEARING_DATE': item.HEARING_DATE,
          
                "STREET_NAME": item.STREET_NAME, 
                "STREET_NUM": item.STREET_NUM, 
                "STREET_TYPE": item.STREET_TYPE,
                "LON" : null,
                "LAT" : null,
            }
         }
         )
        }
 

function
getRidOfCopies()
{
for (let i = 0; i < newList.length; i++)
{
    for (let oldItem of oldList)
    {
        if (newList[i].APPLICATION_NUMBER == oldItem.APPLICATION_NUMBER ){
            newList.splice(i,1);
    } 

    }
}
}
getRidOfCopies();


  for (let i = 0; i< newList.length; i++)
{
    const url = `https://nominatim.openstreetmap.org/search?q=${newList[i].STREET_NUM}+${newList[i].STREET_NAME}+${newList[i].STREET_TYPE},+toronto&format=json`;

    fetch(url).then( response => response.json())
    .then( json => {

        //Adding lon and lat to my list item
        newList[i].LON = json[i].lon;
        newList[i].LAT = json[i].lat 
        let coordinates = [newList[i].LON, newList[i].LAT];


            //Checking to see if listing falls within ward 4 geojson. 
         if (d3.geoContains(geoWard, coordinates)) 
         { 
            dailyRelevantListings.push(newList[i]);
        }
        console.log('DAILY LISTINGS');
        console.log(dailyRelevantListings);
    }).catch(err => console.error(err + 'WARNING WILL ROBINSON! WARNING!'));

}



