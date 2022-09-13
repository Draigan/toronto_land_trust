 import * as download from "./download.mjs" 
import * as sorter from "./sorter.mjs"



async function
mainFunction()
{
    const downloaded= await download.energize('somerandomjson');
    const sort = await sorter.sort();
};

mainFunction();



