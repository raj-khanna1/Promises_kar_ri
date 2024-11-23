let btn=document.querySelector('button');
btn.addEventListener('click',()=>process());
function process(){
    let name=document.querySelector('input').value;
    let fetch_data=fetch(`https://api.genderize.io?name=${name}`);
    fetch_data
    .then(function(value){
        // after getting the data convert it into readable json data
        let readable_json_data=value.json();
        return readable_json_data;
    })
    .then(function(value){
        // now we have got the readable object
        let namei=document.getElementById('namei');
        namei.innerText=`${name} is a ${value.gender} with Probability of ${Number((value.probability)*100).toFixed()}%`;
        console.log("Fetched successfully.");
    })
}