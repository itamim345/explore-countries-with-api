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
        div.innerHTML = `<h3 class="text-warning">${country.name.common}</h3>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Get Details</button> 
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <p>Name : kiamson jarfred</p>
                                <p>Name : kiamson jarfred</p>
                                <p>Name : kiamson jarfred</p>
                                <p>Name : kiamson jarfred</p>
                                <p>Name : kiamson jarfred</p>
                                <p>Name : kiamson jarfred</p>
                                <p>Name : kiamson jarfred</p>
                                <p>Name : kiamson jarfred</p>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
        wrapper.appendChild(div)
    });
}