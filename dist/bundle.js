/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFDQSwyR0FBMkcsS0FBSyxHQUFHLFlBQVk7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYmlnLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gZ2V0RGF0YUZyb21BUEkoY2l0eSl7XG4gICAgcmV0dXJuIHByb21pc2U9bmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBsZXQgZGF0YT1mZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0gOWU1NjI1MTM4ZDNhNGE4OThlZjgyMTM1MjQyODAzJnE9JHtjaXR5fWAse21vZGU6J2NvcnMnfSk7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVJlc3BvbnNlT2JqZWN0KGNpdHkpe1xuICAgIGxldCByZXNwb25zZT1hd2FpdCBnZXREYXRhRnJvbUFQSShjaXR5KTtcbiAgICBjb25zb2xlLmxvZyhjaXR5KTtcbiAgICBsZXQgcmVzcG9uc2VKc29uPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBsZXQgY3VycmVudD1yZXNwb25zZUpzb24uY3VycmVudDtcbiAgICBsZXQgbG9jYXRpb249cmVzcG9uc2VKc29uLmxvY2F0aW9uO1xuICAgIGxldCByZXNwb25zZU9iaj17XG4gICAgICAgICdjdXJyZW50VGV4dCc6Y3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgJ2N1cnJlbnRIdW1pZGl0eSc6Y3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgJ2N1cnJlbnRUZW1wQyc6Y3VycmVudC50ZW1wX2MsXG4gICAgICAgICdjdXJyZW50VGVtcEYnOmN1cnJlbnQudGVtcF9mLFxuICAgICAgICAnY2l0eSc6bG9jYXRpb24ubmFtZSxcbiAgICAgICAgJ2NvdW50cnknOmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgICdsYXQnOmxvY2F0aW9uLmxhdCxcbiAgICAgICAgJ2xvbmcnOmxvY2F0aW9uLmxvbmdcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlT2JqKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQmFzZWRPbkxvY2F0aW9uKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBjaXR5PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpLnZhbHVlO1xuICAgIGdlbmVyYXRlUmVzcG9uc2VPYmplY3QoY2l0eSk7XG59XG5cbmxldCBva19idG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9rX2J0bicpO1xub2tfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgc2VhcmNoQmFzZWRPbkxvY2F0aW9uKGV2ZW50KTtcbiAgICB9KTtcblxuZ2VuZXJhdGVSZXNwb25zZU9iamVjdCgnYWRkaXMtYWJhYmEnKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9