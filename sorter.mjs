//MODULE SYNOPSIS
/* 
1. Takes todays list and eliminates most of the entries on the list based on postal code. Which is a crude narrowing of the list. Just to remove obvious entries.
2. Maps easier to read objects onto the list.
3. Compares todays list to yesterdays list and eliminates any entries from the list that are contained in both. newList now only contains
new entries.
4. Asks an API for longitude and latitude of every item on the refined list
5. Checks that the coordinates of a list item falls within the geojson shape of torontos ward 4 and eliminates it from the list if not.
 */
import fetch from 'node-fetch';
import * as d3  from "d3-geo";
import geoWard from "./geoward4.json" assert { type: "json" };
import yesterdaysList from "./yesterdays-list.json" assert {type: "json"};
import todaysList from "./todays-list.json" assert {type: 'json'}; 
import https from "https";
import { resolve } from 'path';
import pastItems from "./pastItems.json" assert {type:"json"};

export function 
sort(){

    return new Promise((resolve,reject) =>
    {

        if (true == false) {reject} //temp

        const postalCode = [ 'M6K', 'M6H', 'M6P', 'M6R', 'M6J', 'M5X', 'M5J', 'M5K', 'M6L', 'M3C', 'M5H'];

        const oldList = cleanUpList(yesterdaysList);
        const newApplicationList = cleanUpList(todaysList);
        const newStatusList = cleanUpList(todaysList);
        const refinedNewStatusList = [];
               
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
                        'DESCRIPTION' : item.DESCRIPTION,
                        'ID': item._id,
                        'POSTAL' : item.POSTAL,
                        "STATUS" : item.STATUS,
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
        findChangedStatus()
        {
            for (let i = 0; i < pastItems.length; i ++)
            {
            for (let j = newStatusList.length - 1;  j > 0; j--)   //working backwards to stop at the most recent application number
            {
                if (pastItems[i].APPLICATION_NUMBER == newStatusList[j].APPLICATION_NUMBER)
                {
                    if (pastItems[i].STATUS != newStatusList[j].STATUS)
                    {
                        refinedNewStatusList.push(newStatusList[j]);
                        break;
                    }
                }
            }
        }
        } 

        findChangedStatus();

                

        
     function
        getRidOfCopies(originalList,modifiedList)
        {
        for (let i = 0; i < modifiedList.length; i++)
        {
            for (let item of originalList)
            {
                if (modifiedList[i].APPLICATION_NUMBER == item.APPLICATION_NUMBER ){
                    modifiedList.splice(i,1);
            } 
        
            }
        }
        }
        getRidOfCopies(oldList,newApplicationList); 
        
        
        
        const promiseArray = [];
        
            const httpRequest = (url,index) => 
            {
                return new Promise((resolve,reject) =>
                {
        
                    fetch(url).then( response => response.json())
                    .then( json => {
                
                        //Adding lon and lat to my list item
               
                        newApplicationList[index].LON = json[0].lon;
                        newApplicationList[index].LAT = json[0].lat;
                        newApplicationList[index].COORDINATES.push(json[0].lon, json[0].lat);
                  
                        resolve();
                }).catch(reject);
            });
        };
        
        for (let i = 0; i< newApplicationList.length; i++)
        {
        let url = `https://nominatim.openstreetmap.org/search?q=${newApplicationList[i].STREET_NUM}+${newApplicationList[i].STREET_NAME}+${newApplicationList[i].STREET_TYPE},+toronto&format=json`;
        
           setTimeout( () => {promiseArray.push(httpRequest(url,i))}, 3000 * i);
        
        }
        setTimeout( () => {Promise.all(promiseArray).then(()=> 
            {
              for (let i = 0; i < newApplicationList.length; i++)
                {
                    //checks to see if listings long and lat falls within ward4's geojson
                if (d3.geoContains(geoWard,newApplicationList[i].COORDINATES) == false) 
                {
                     newApplicationList.splice(i,1)
                }; 
            } 
              
     
                let listArray = [];
                listArray.push(newApplicationList, refinedNewStatusList);
                console.log(newApplicationList)
                console.log(refinedNewStatusList)
                 resolve(listArray);
        
            })}, newApplicationList.length * 3001)
    });

}

export default sort;
sort();

/*                                                                                      Failed attempt do to http module not parsing my json properly? something about jsonP? Very annoying
 that fetch worked but https  module did not.                                 
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
