const loadAll = () =>{
    document.getElementById('spinner').style.display = 'block';
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => showALL(data)) 
}

const showALL = (data) =>{
    const countryField = document.getElementById('country');
    countryField.innerHTML = '';
    
    document.getElementById('spinner').style.display = 'none';
    data.forEach(country => {
        const div =  document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.innerHTML = `<div class="card-country">
                                <div class="d-flex align-items-center mb-2">
                                    <img class="" src="${country.flag}" width="50" alt=""><h5 class="ms-2">${country.name}</h5>
                                </div>
                                <h6 class="my-1">Native Name : ${country.nativeName}</h6>
                                <h6 class="my-1">Capital : ${country.capital}</h6>
                                <h6 class="my-1">Languages : ${country.languages.map(lang => lang.name)}</h6>
                                <h6 class="my-1">Population : ${country.population}</h6>
                                <h6 class="my-1">Region : ${country.region}</h6>
                                <h6 class="my-1">Time Zone : ${country.timezones[0]}</h6>
                                
                            </div>
                        </div>`;
        countryField.appendChild(div);
    })
}

loadAll();

const searchLoad = ()=>{
    const searchInput = document.getElementById('s-input');
    const countryName = searchInput.value;
    const url = `https://restcountries.com/v2/name/${countryName}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => showALL(data)) 
}


            