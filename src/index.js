import { domManipulation,displayLoader } from "./Dom";
import style from './style.css'
let city='addis-ababa';
function getDataFromAPI(city){
    return new Promise((resolve,reject)=>{
        let data=fetch(`https://api.weatherapi.com/v1/current.json?key= 9e5625138d3a4a898ef82135242803&q=${city}`,{mode:'cors'});
        if(data){
            resolve(data);
        }
        else{
            reject(new Error('Something went wrong'));
        }
    })
}

async function generateResponseObject(){
    let response=await getDataFromAPI(city);
    displayLoader();
    let responseJson=await response.json();
    let current=responseJson.current;
    let location=responseJson.location;
    let responseObj={
        'currentText':current.condition.text,
        'currentHumidity':current.humidity,
        'currentTempC':current.temp_c,
        'currentTempF':current.temp_f,
        'city':location.name,
        'country':location.country,
        'lat':location.lat,
        'long':location.long
    };
    return responseObj;
}
function searchBasedOnLocation(event){
    event.preventDefault();
    city=document.getElementById('location').value;
    generateResponseObject();
}

let ok_btn=document.querySelector('.ok_btn');
ok_btn.addEventListener('click',(event)=>{
    displayLoader().classList.remove('loader-hidden');
    searchBasedOnLocation(event);
    domManipulation();
    });
generateResponseObject().catch((err)=> console.log(err));
domManipulation();
export {generateResponseObject};
