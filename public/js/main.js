const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtn= document.getElementById("submitBtn");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const data_hide = document.querySelector(".middle_layer");

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Plz write the name before search";
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=674a380abe02aa8b6fa180239919ba6f`;
            const response =await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            data_hide.classList.remove('data_hide');

            if (temp_status === "Clear") {
                weatherCondition.innerHTML = "<i class='fa fa-sun-o' style='color:#eccc68'></i>";
            } else if (temp_status === "Clouds") {
                weatherCondition.innerHTML = "<i class='fa fa-cloud' style='color:#dfe4ea'></i>";
            } else if (temp_status === "Rainy") {
                weatherCondition.innerHTML = "<i class='fa fa-tint' style='color:#a4b0be'></i>";
            } else {
                temp_status.innerHTML = "<i class='fa fa-sun-o' style='color:#eccc68'></i>";
            }  
        }
        catch{
            city_name.innerText = "Plz enter the city name properly";
            data_hide.classList.add('data_hide');
        }   
}
}

submitBtn.addEventListener('click',getInfo);