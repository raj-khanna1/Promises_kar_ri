let btn=document.querySelector('button');
btn.addEventListener('click',()=>process());
function process(){
    let country=document.querySelector('#input1').value;
    let zip_code=document.querySelector('#input2').value;
    let fetch_data=fetch(`https://api.zippopotam.us/${country}/${zip_code}`);
    fetch_data
    .then(function(value){
        // after getting the data convert it into readable json data
        let readable_json_data=value.json();
        return readable_json_data;
    })
    .then(function(value){
        // now we have got the readable object
        let country=document.getElementById('country');
        let state=document.getElementById('state');
        let place=document.getElementById('place');
        let longitude=document.getElementById('longitude');
        let latitude=document.getElementById('latitude');
        let s="place name";
        country.innerText=`Country: ${value.country}`;
        state.innerText=`State: ${value.places[0].state}`;
        place.innerText=`Place: ${value.places[0]["place name"]}`;
        longitude.innerText=`Longitude: ${value.places[0].longitude}`;
        latitude.innerText=`Latitude: ${value.places[0].latitude}`;
        console.log("Fetched successfully.");
    })
}