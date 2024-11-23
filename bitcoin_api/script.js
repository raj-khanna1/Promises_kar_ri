let url="https://api.coindesk.com/v1/bpi/currentprice.json";
let image_btn=document.querySelector('img');
image_btn.addEventListener('click',()=>fetchData());
function fetchData(){
    // fetch function will return an resolved Promise
    let json_data=fetch(url);
    json_data
    .then(function(value){
        // now convert that data to readable json
        let data=value.json();
        return data;
    })
    .then(function(value){
        // now we have got the value
        let heading1=document.querySelector('#time');
        let heading2=document.querySelector('#usd');
        let heading3=document.querySelector('#eur');
        heading1.innerText=`Time of Fetched Price: ${value.time.updated}`;
        heading2.innerText=`Price USD: ${value.bpi.USD.rate}`;
        heading3.innerText=`Price EUR: ${value.bpi.EUR.rate}`;
        console.log("Data fetched Successfully baby!");
    })
}