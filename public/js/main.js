const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');


const datahide = document.querySelector('.middle_layer');




const getInfo = async (e) => {
    e.preventDefault();

    let cityVal = cityName.value;
    console.log(cityVal);

    if (cityVal === "") {
        city_names.innerText = `Please write the name before search`;
        

    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0388e34ecccf395e1a50589a877ba607`;
            const response = await fetch(url);

            const data = await response.json();
          
          
            
           
            
            const text = `${data.name} ${data.sys.country}`;
            city_names.textContent = text;
           
         

            temp_real_val.innerText = data.main.temp;

            const tempMood = data.weather[0].main;
            
          

            if (tempMood == "Clear") {
               
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #f1f2f6;'></i>";
            }

        }
        catch{
            city_names.innerText = `Please write the city name properly`;
            
            
        }

    }

}

submitBtn.addEventListener('click', getInfo);