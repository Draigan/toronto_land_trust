import fetch from 'node-fetch';
import * as d3  from "d3-geo";
import geoWard from "./geoward4.json" assert { type: "json" };
import yesterdaysList from "./yesterdays-list.json" assert {type: "json"}
import todaysList from "./todays-list.json" assert {type: 'json'} 
import https from "https";


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
                "COORDINATES" : []
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


const promiseArray = [];

    const httpRequest = (url,index) => 
    {
        return new Promise((resolve,reject) =>
        {

            fetch(url).then( response => response.json())
            .then( json => {
        
                //Adding lon and lat to my list item
       
                newList[index].LON = json[0].lon;
                newList[index].LAT = json[0].lat;
                newList[index].COORDINATES.push(json.LON, json.LAT);
          
                resolve();
        }).catch(reject);
    });
};

for (let i = 0; i< newList.length; i++)
{
let url = `https://nominatim.openstreetmap.org/search?q=${newList[i].STREET_NUM}+${newList[i].STREET_NAME}+${newList[i].STREET_TYPE},+toronto&format=json`;

   setTimeout( () => {promiseArray.push(httpRequest(url,i))}, 3000 * i);

}
setTimeout( () => {Promise.all(promiseArray).then(()=> {console.log(newList)})}, newList.length * 3001)


/*                                                                                      Failed attempt do to http module not parsing my json properly? something about jsonP? Very annoying that fetch worked but https
                                                                                            module did not.                                 
const promiseArray = [];



    const httpRequest = (url,index) => 
    {
        return new Promise((resolve,reject) =>
        {
            https.get(url, res => {

                if ( 1 == 2 ) { return reject;}

                let data = "";

                res.on("data", chunk => {
                    data += chunk;
                });
             
                res.on("end", () => {
                    let JSONdata = JSON.parse(data);
                    console.log(JSONdata);
                    newList[index].LON = JSONdata.LON;
                    newList[index].LAT = JSONdata.LAT;
                    newList[index].COORDINATES.push(JSONdata.LON, JSONdata.LAT);
                    resolve();
                })
            
            })
        })
    }

    for (let i = 0; i< newList.length; i++)
    {
  let url = `https://nominatim.openstreetmap.org/search?q=${newList[i].STREET_NUM}+${newList[i].STREET_NAME}+${newList[i].STREET_TYPE},+toronto&format=json`;
    
       promiseArray.push(httpRequest(url,i))
    
    }
    Promise.all(promiseArray).then(()=> {console.log('thishappenedafter')})
 */


