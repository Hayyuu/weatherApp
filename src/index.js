
function getDataFromAPI(city){
    return promise=new Promise((resolve,reject)=>{
        let data=fetch(`https://api.weatherapi.com/v1/current.json?key= 9e5625138d3a4a898ef82135242803&q=${city}`,{mode:'cors'});
        if(data){
            resolve(data);
        }
        else{
            reject(new Error('Something went wrong'));
        }
    })
}

async function generateResponseObject(city){
    let response=await getDataFromAPI(city);
    console.log(city);
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
    console.log(responseObj);
}

function searchBasedOnLocation(event){
    event.preventDefault();
    let city=document.getElementById('location').value;
    generateResponseObject(city);
}

let ok_btn=document.querySelector('.ok_btn');
ok_btn.addEventListener('click',(event)=>{
    searchBasedOnLocation(event);
    });

generateResponseObject('addis-ababa');

