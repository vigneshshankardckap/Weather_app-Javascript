let search = document.querySelector("#search")
let city =document.querySelector("#city")
let submit=document.querySelector("#submit")
let weather=document.querySelector(".weather")
let errordiv=document.querySelector(".error")

let image=document.createElement('img')
image.setAttribute('class','icon')

window.addEventListener("DOMContentLoaded",()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=816366c90cdddb7e620a6932c7df52ff")
    .then(json=>json.json())
    .then(data=>{
        let cityName=document.createElement("h1")
        cityName.innerText=data.name

        let temp=document.createElement("h2")
        temp.innerHTML=`${Math.floor(data.main.temp-273)}<span>&#8451;</span> `

        let climate=document.createElement("p")
        climate.innerText=`climate:${data.weather[0].main}`

        let maxTemp=document.createElement("h3")
        maxTemp.innerHTML=`${Math.floor(data.main.temp_max-273)}<span>&#8451;</span>`

        let minTemp=document.createElement("h3")
        minTemp.innerHTML=`${Math.floor(data.main.temp_min-273)}<span>&#8451;</span>`

        let wind=document.createElement("h6")
        wind.innerHTML=`${Math.floor(data.wind.speed)}<span>"Km/h"</span>`

        let fetchedImg=data.weather[0].icon
   
        image.src=`https://openweathermap.org/img/w/${fetchedImg}.png`
        
        weather.appendChild(image)
        weather.appendChild(cityName)
        weather.appendChild(temp)
        weather.appendChild(climate)

        submit.addEventListener("click",()=>{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=54a6007f987e1671ca0d5fc2af08e620`)
             .then(json=>json.json())
             .then(data=>{
                // console.log(data)
                if(search.value !=""){
                    let images=document.querySelector(".icon")
                    images.src=`https://openweathermap.org/img/w/${data.weather[0].icon}.png`
                    weather.appendChild(image)
    
                    cityName.innerText=data.name
                    weather.append(cityName)
    
                    temp.innerHTML=`${Math.floor(data.main.temp-273)}<span>&#8451;</span> `
                    weather.append(temp)
    
                    climate.innerText=`climate:+${data.weather[0].main}`
                    weather.append(climate)
                    search.value =""

                }
                else{
                    alert("please enter the city name")
                }
                })
                .catch(error => {

                    alert("unable to fetch the data")
                   
                })

            
            })




    })
    

})



      




