// ----------------------------------------------signup & login------------------------------------------------------------------------------
let user = [];
let i = 0;
if (window.location.pathname == "/index.html") {
  let sign = document.getElementById("signup");
  console.log(sign);
  sign.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("container1").style.display = "none"; // every time you click on signup main display will disappear.
    window.location.href = "signup.html"; // signup page.
  });


    let login1 = document.getElementById("login");
    login1.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("container1").style.display = "none"; // every time you click on signup main display will disappear.
      window.location.href = "login.html"; // signup page.

    });
  }
console.log(window.location.pathname);

if (window.location.pathname == "/signup.html") {
  let signup = document.getElementById("btnOfSignup");
  signup.addEventListener("click", (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value; // input values
    let Lname = document.getElementById("Lname").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    localStorage.setItem('name', name);
    localStorage.setItem('Lname', Lname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password1);

    window.location.href = "login.html";
  });
}

if (window.location.pathname == "/login.html") {
  document.getElementById("Login").addEventListener('click', (e) =>{
      
    let email = document.getElementById('email-login').value;
    let pass = document.getElementById('password-login').value;

    let localemail = localStorage.getItem('email');
    let localpass =  localStorage.getItem('password');
    if(email === localemail && pass === localpass){
      window.location.href = "shop.html";
    }
  });
}
 

// ------------------------------------------------------------------Shop.html----------------------------------------------------------------

let url = "https://fakestoreapi.com/products";

async function getData() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  renderData(data);
}

getData();

//rendering
let color = ["Red", "Blue", "Black", "Yellow", "Gray"];

function renderData(data) {
  let inhtml = "";

  data.forEach((value, index) => {
    let random = Math.floor(Math.random() * color.length);
    if (value.category === "men's clothing") {
      inhtml += `
          <div class="cards">
          <img src="${value.image}" alt="">
          <div class="middle">
              <p>$${value.price}</p>
              <p class="special-p">S,M,L</p>
          </div>
          <p>Colors: ${color[random]}</p>
          <p>Rating: ${value.rating.rate}</p>
          <button type="button" id="addTocard-btn" onclick = "addToCart(${value.id})">Add To Cart</button>
          </div>
          `;

      document.getElementById("mens-cards").innerHTML = inhtml;
    }
  });

  inhtml = " ";
  data.forEach((value, index) => {
    let random = Math.floor(Math.random() * color.length);
    if (value.category === "women's clothing") {
      console.log(value);
      inhtml += `
        <div class="cards">
        <img src="${value.image}" alt="">
        <div class="middle">
            <p>$${value.price}</p>
            <p class="special-p">S,M,L</p>
        </div>
        <p>Colors:  ${color[random]}</p>
        <p>Rating:  ${value.rating.rate}</p>
        <button type="button" id="addTocard-btn" onclick = "AddToCart(${value.id})">Add To Cart</button>
        </div>
        `;

      document.getElementById("womens-cards").innerHTML = inhtml;
    }
  });

  inhtml = " ";
  data.forEach((value, index) => {
    let random = Math.floor(Math.random() * color.length);
    if (value.category === "jewelery") {
      console.log(value);
      inhtml += `
        <div class="cards">
        <img src="${value.image}" alt="">
        <div class="middle">
            <p>$${value.price}</p>
        </div>
        <p>Colors:  ${color[random]}</p>
        <p>Rating:  ${value.rating.rate}</p>
        <button type="button" id="addTocard-btn" onclick = "AddToCart(${value.id}, ${data})">Add To Cart</button>
        </div>
        `;

      document.getElementById("jewellerys-cards").innerHTML = inhtml;
    }
  });

  inhtml = " ";
  data.forEach((value, index) => {
    if (value.category === "electronics") {
      console.log(value);
      inhtml += `
      <div class="cards">
      <img src="${value.image}" alt="">
      <div class="middle">
          <p>$${value.price}</p>
      </div>
      <p>Rating: ${value.rating.rate}</p>
      <button type="button" id="addTocard-btn">Add To Cart</button>
      </div>
      `;

      document.getElementById("electronics-cards").innerHTML = inhtml;
    }
  });
}

// -------------------------------------------------------------------------Shoppingcard.html--------------------------------------------------------------



function addToCart(id) {
  let inhtml = "";

  data.forEach((value, index) => {
    let random = Math.floor(Math.random() * color.length);
    if (value.id === id) {
      inhtml += `
        <div class="cards">
        <img src="${value.image}" alt="">
        <div class="middle">
            <p>$${value.price}</p>
            <p class="special-p">S,M,L</p>
        </div>
        <p>Colors: ${color[random]}</p>
        <p>Rating: ${value.rating.rate}</p>
        <button type="button" id="addTocard-btn" onclick = "AddToCart(${value.id})">Add To Cart</button>
        </div>
        `;

      document.getElementById("carts").innerHTML = inhtml;
    }
  });
}

if (window.location.pathname == "shop.html") {
  let myCart = document.addEventListener("myCart");
  myCart.addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("container2").style.display = "none";

    window.location.href = "Shoppingcart.html";
  });
}
