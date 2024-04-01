import {generateResponseObject } from ".";

export async function domManipulation(){
    console.log(await generateResponseObject());
    let responseObj=await generateResponseObject();
    let headers=document.querySelectorAll('.container p');
    headers[0].textContent=responseObj.currentText;
    headers[1].textContent=responseObj.currentHumidity;
    headers[2].textContent=responseObj.currentTempC + ' degree celcuis';
    headers[3].textContent=responseObj.currentTempF;
    headers[4].textContent=responseObj.city;
    headers[5].textContent=responseObj.country;
    headers[6].textContent=responseObj.lat;
    headers[7].textContent=responseObj.long;
    if(responseObj.currentText=='Partly cloudy'){
     document.querySelector('body').style.background='lightblue';
    }
    else{
        document.querySelector('body').style.background='rgb(211, 122, 198)';
    }
    
}