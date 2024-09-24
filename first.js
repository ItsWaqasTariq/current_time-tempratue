console.log("weather api czn burak")
// alert("working")
const button=document.getElementById("search-btn")
const input=document.getElementById("text-input")

const cityName=document.getElementById("name")
const cityTime=document.getElementById("time")
const cityTemp=document.getElementById("temp")

async function gettingData(cityName){
const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=29845a8955234c4f811114759242109&q=${cityName}&aqi=yes`
);
return await promise.json();
}

button.addEventListener('click',async()=>{
    // alert("DOM working")
    // console.log(input.value)
    const value=input.value
    const result= await gettingData(value)
// console.log(result)
console.log(result.current.temp_c)
cityTemp.innerText=`${result.current.temp_c} °C`;
// console.log(result.location.name)
// console.log(result.location.region)
// console.log(result.location.country)
cityName.innerText=`${result.location.name} ,${result.location.region}-${result.location.country}.`
console.log(result.location.localtime)
cityTime.innerText=result.location.localtime;
})
