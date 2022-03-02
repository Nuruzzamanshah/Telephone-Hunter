const allPhone = () =>{
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    console.log(url);
     fetch(url)
    .then((Response) => Response.json())
    .then((data) => showPhoneDetails(data.data));
};

const showPhoneDetails = (datas) =>{
    
    
    for(const data of datas ){
        const parent = document.getElementById('phone-container');
        const div = document.createElement('div');
    div.innerHTML =`
    
    <div class="container">
    <div class="row">
      <div class="col-sm p-5">
        <div  class="card border">
            <div class="pro-pic">
                <img class="w-50" src="${data.image}" alt="">
            </div>
            <span>Phone Name: ${data.phone_name}</span>
            <span>Phone Brand: ${data.brand}</span>
            <span>Id: ${data.slug}</span>
            <div class="allbutton">
                <button onclick='details("${data.slug}")' class="btn btn-info">Details</button>
            </div>
        </div>
      </div>
      <div class="col-sm p-5">
        <div class="card border">
            <div class="pro-pic">
                <img class="w-50" src="${data.image}" alt="">
            </div>
            <span>Phone Name: ${data.phone_name}</span>
            <span>Phone Brand: ${data.brand}</span>
            <span>Id: ${data.slug}</span>
            <div class="allbutton">
                <button onclick='details("${data.slug}")' class="btn btn-info">Details</button>
            </div>
        </div>
      </div>
      <div class="col-sm p-5">
        <div class="card border">
            <div class="pro-pic">
                <img class="w-50" src="${data.image}" alt="">
            </div>
            <span>Phone Name: ${data.phone_name}</span>
            <span>Phone Brand:${data.brand}</span>
            <span>Id: ${data.slug}</span>
            <div class="allbutton">
                <button onclick='details("${data.slug}")' class="btn btn-info">Details</button>
            </div>
        </div>
      </div>
    </div>
  </div>
    `;
    parent.appendChild(div);
    }
};

const details = (id) =>{
    const url =` https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => setDetails(data.data));
}

const setDetails = (info) =>{
    console.log(info);
    document.getElementById('details-container').innerHTML = `
    <div class='border'>
    <h3>Id: ${info.slug}</h3>
    <h3>Name: ${info.name}</h3>
    <h3>Releasedate: ${info.releaseDate}</h3>
    <h3>Brand: ${info.brand}</h3>
    </div>
    `
}