 import * as download from "./download.mjs" 
import mail from "./mailer.mjs";
import * as sorter from "./sorter.mjs"



async function
mainFunction()
{
    console.log( "Downloading todays list...")
    const downloaded= await download.energize('todays-list1');
    console.log("Sorting list and requesting lon and lat from api...")
    const sort = await sorter.sort().then( listArray => {
        var applicationList = listArray[0];
        var statusList = listArray[1];

     console.log("APPLICATIONS LIST _____________")
     console.log(applicationList);

     console.log("STATUS LIST _____________")
     console.log(statusList);
     console.log("Emailing...")
     mail(applicationList,statusList).then(x => console.log(x))
     } )

 

};

mainFunction();



