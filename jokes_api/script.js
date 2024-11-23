let btn=document.querySelector('button');
btn.addEventListener('click',()=>process());
function process(){
    let fetch_data=fetch(`https://official-joke-api.appspot.com/random_joke`);
    fetch_data
    .then(function(value){
        // after getting the data convert it into readable json data
        let readable_json_data=value.json();
        return readable_json_data;
    })
    .then(function(value){
        // now we have got the readable object
        let namei=document.getElementById('namei');
        let namei2=document.getElementById('namei2');
        namei.innerText=value.setup;
        namei2.innerText=` ${value.punchline} `;
        console.log("Fetched successfully.");
    })
}