let getCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then(data => displayCountries(data))
}
getCountries()

let displayCountries = countries =>{
    //console.log(countries);
    let wrapper = document.getElementById('countries-wrapper');
    countries.forEach(country => {
        //console.log(country.name.common);
        let div = document.createElement('div');
        div.classList.add('single-country');
        div.innerHTML = `<h3 class="text-warning">${country.name.common}</h3>
                        <button onclick="getSingleCountry('${country.name.common}')" type="button" class="btn btn-primary">Get Details</button> 
                        `;
        wrapper.appendChild(div)
    });
}

let getSingleCountry = (cname) =>{
    let url = `https://restcountries.com/v3.1/name/${cname}`
    fetch (url)
    .then (resp => resp.json())
    .then(data => detailsInfo(data))
}
function detailsInfo (data){
    console.log(data);
    let wrap = document.getElementById('single-country-details');
    wrap.innerHTML = `<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${data[0].flags.png}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title text-center">${data[0].name.common}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Capital : - ${data[0].capital}</li>
                            <li class="list-group-item">Population: ${data[0].population}</li>
                            <li class="list-group-item">Region : ${data[0].region}</li>
                            <li class="list-group-item">Start of Week: ${data[0].startOfWeek}</li>
                            <li class="list-group-item">TimeZone : ${data[0].timezones}</li>
                        </ul>
                    </div>
                        `;
}