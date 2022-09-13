 import * as download from "./download.mjs" 
import * as sorter from "./sorter.mjs"



async function
mainFunction()
{
    const downloaded= await download.energize('todays-list1');
    const sort = await sorter.sort();
};

mainFunction();



