let getCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then(data => displayCountries(data))
}
getCountries()

let displayCountries = countries =>{
    console.log(countries);
    let wrapper = document.getElementById('countries-wrapper');
    countries.forEach(country => {
        //console.log(country.name.common);
        let div = document.createElement('div');
        div.classList.add('single-country');
        div.innerHTML = `<h3>${country.name.common}</h3>
                        <button>Get Details</button> 
                        `;
        wrapper.appendChild(div)
    });
}