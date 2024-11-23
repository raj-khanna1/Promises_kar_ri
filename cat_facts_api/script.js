let url="https://catfact.ninja/fact";
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
        let heading=document.querySelector('h1');
        heading.innerText=value.fact;
    })
}