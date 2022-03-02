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
        console.log(data);
        const parent = document.getElementById('phone-container');
        const div = document.createElement('div');
    div.innerHTML =`
    
    <div class="container">
    <div class="row">
      <div class="col-sm p-5">
        <div id='color' class="card border">
            <div class="pro-pic">
                <img class="w-50" src="${data.image}" alt="">
            </div>
            <h4>Phone Name: ${data.phone_name}</h4>
            <h5>Phone Brand:${data.brand}</h5>
            <div class="allbutton">
                <button onclick='details("${data.status}")' class="btn btn-info">Details</button>
            </div>
        </div>
      </div>
      <div class="col-sm p-5">
        <div class="card border">
            <div class="pro-pic">
                <img class="w-50" src="${data.image}" alt="">
            </div>
            <h4>Phone Name: ${data.phone_name}</h4>
            <h5>Phone Brand: ${data.brand}</h5>
            <div class="allbutton">
                <button onclick='details("${data.status}")' class="btn btn-info">Details</button>
            </div>
        </div>
      </div>
      <div class="col-sm p-5">
        <div class="card border">
            <div class="pro-pic">
                <img class="w-50" src="${data.image}" alt="">
            </div>
            <h4>Phone Name: ${data.phone_name}</h4>
            <h5>Phone Brand:${data.brand}</h5>
            <div class="allbutton">
                <button onclick='details("${data.status}")' class="btn btn-info">Details</button>
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
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => console.log(data.status))
}
