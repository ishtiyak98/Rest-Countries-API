const loadAll = () =>{
    document.getElementById('spinner').style.display = 'block';
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => showALL(data));
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

const searchLoad = ()=>{
    document.getElementById('spinner').style.display = 'block';
    const searchInput = document.getElementById('s-input');
    const countryName = searchInput.value;

    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => showRegion(data));

    document.getElementById('s-input').value='';
}

const continenLoad = (continentName)=>{
    document.getElementById('spinner').style.display = 'block';

    const url = `https://restcountries.com/v3.1/region/${continentName}`;
  

    fetch(url)
        .then(response => response.json())
        .then(data => showRegion(data))
}

const showRegion = (data)=>{
    const countryField = document.getElementById('country');
    countryField.innerHTML = '';

    document.getElementById('spinner').style.display = 'none';
    data.forEach(country =>{
        const nativeKey = Object.values(country.name.nativeName);
        const nativeValue = nativeKey[0];

        const langKey = Object.values(country.languages);

        const div =  document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.innerHTML = `<div class="card-country">
                                <div class="d-flex align-items-center mb-2">
                                    <img class="" src="${country.flags.png}" width="50" alt=""><h5 class="ms-2">${country.name.common}</h5>
                                </div>
                                <h6 class="my-1">Native Name : ${nativeValue.common}</h6>
                                <h6 class="my-1">Capital : ${country.capital}</h6>
                                <h6 class="my-1">Languages : ${langKey.map( value => value)}</h6>
                                <h6 class="my-1">Population : ${country.population}</h6>
                                <h6 class="my-1">Region : ${country.region}</h6>
                                <h6 class="my-1">Time Zone : ${country.timezones[0]}</h6>
                            </div>
                        </div>`;
        countryField.appendChild(div);
    })
}

//!-----------Enter key search------

const searchField = document.getElementById('s-input');
searchField.addEventListener('keypress', (e)=>{
    if(e.key=='Enter'){
        searchLoad();
    }
})


//!------active button--------

const buttons = document.getElementsByClassName('c-button');
let activeBtn = null;

for (const element of buttons) {
    element.addEventListener('click', ()=>{
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(" active", "");
        
        element.classList.add('active');
    })
}

loadAll();
            