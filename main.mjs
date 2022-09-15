 import * as download from "./download.mjs" 
import * as sorter from "./sorter.mjs"



async function
mainFunction()
{
    const downloaded= await download.energize('todays-list1');
    const sort = await sorter.sort().then( listArray => {
        const applicationsList = listArray[0];
        const statusList = listArray[1];

     console.log("APPLICATIONS LIST _____________")
     console.log(applicationsList);

     console.log("STATUS LIST _____________")
     console.log(statusList);
     } )

};

mainFunction();



