let ShoppingCart = document.querySelector('.shopingcart');
document.querySelector('#cart-btn').onclick = () => {
    ShoppingCart.classList.toggle('active')
}

// close by x button
const abc = document.getElementById('abc');
const openCartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');

openCartBtn.addEventListener('click', () => {
    abc.style.display = 'block'; // Show the shopping cart
});

closeCartBtn.addEventListener('click', () => {
    abc.style.display = 'none'; // Hide the shopping cart
});


// loginform code
let LoginForm = document.querySelector('.loginform');
document.querySelector('#login-btn').onclick = () => {
    LoginForm.classList.toggle('active')
}
// food1 buy now button
let food1 = document.querySelector('.food1');
document.querySelector('#open-btn').onclick = () => {
    food1.classList.toggle('active')
}

// food1 buy now me jo x button hai uska code 



const chicken = document.getElementById('chicken');
const openbuyBtn = document.getElementById('open-btn');
const closebuyBtn = document.getElementById('close-buy');
document.addEventListener('DOMContentLoaded', () => {
    chicken.style.display = 'none';
});

openbuyBtn.addEventListener('click', () => {
    chicken.style.display = 'block'; // Show the shopping cart
});

closebuyBtn.addEventListener('click', () => {
    chicken.style.display = 'none'; // Hide the shopping cart
});


// if i click health so only health item will show ,if we click on clothes so only clothes abd food are default


function showItems(category) {
    const sections = document.querySelectorAll('.items');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');
}

// food2 buy now button
let food2 = document.querySelector('.food2');
document.querySelector('#open-btn2').onclick = () => {
    food2.classList.toggle('active')
}


// food2 buy now me jo x button hai uska code 



const Burger = document.getElementById('Burger');
const openbuyBtn2 = document.getElementById('open-btn2');
const closebuyBtn2 = document.getElementById('close-buy2');
document.addEventListener('DOMContentLoaded', () => {
    Burger.style.display = 'none';
});
openbuyBtn2.addEventListener('click', () => {
    Burger.style.display = 'block'; // Show the shopping cart
});
closebuyBtn2.addEventListener('click', () => {
    Burger.style.display = 'none'; // Hide the shopping cart
});





// food3 buy now button
let food3 = document.querySelector('.food3');
document.querySelector('#open-btn3').onclick = () => {
    food3.classList.toggle('active')
}
// food3 buy now me jo x button hai uska code 



const paneerrice = document.getElementById('paneerrice');
const openbuyBtn3 = document.getElementById('open-btn3');
const closebuyBtn3 = document.getElementById('close-buy3');
document.addEventListener('DOMContentLoaded', () => {
    paneerrice.style.display = 'none';
});

openbuyBtn3.addEventListener('click', () => {
    paneerrice.style.display = 'block'; // Show the shopping cart
});
closebuyBtn3.addEventListener('click', () => {
    paneerrice.style.display = 'none'; // Hide the shopping cart
});




// food4 buy now button
let food4 = document.querySelector('.food4');
document.querySelector('#open-btn4').onclick = () => {
    food4.classList.toggle('active')
}
// food4 buy now me jo x button hai uska code 



const Pizza = document.getElementById('Pizza');
const openbuyBtn4 = document.getElementById('open-btn4');
const closebuyBtn4 = document.getElementById('close-buy4');
document.addEventListener('DOMContentLoaded', () => {
    Pizza.style.display = 'none';
});
openbuyBtn4.addEventListener('click', () => {
    Pizza.style.display = 'block'; // Show the shopping cart
});
closebuyBtn4.addEventListener('click', () => {
    Pizza.style.display = 'none'; // Hide the shopping cart
});

// food5 buy now button
let food5 = document.querySelector('.food5');
document.querySelector('#open-btn5').onclick = () => {
    food5.classList.toggle('active')
}
// food5 buy now me jo x button hai uska code 



const Chowmein = document.getElementById('Chowmein');
const openbuyBtn5 = document.getElementById('open-btn5');
const closebuyBtn5 = document.getElementById('close-buy5');
document.addEventListener('DOMContentLoaded', () => {
    Chowmein.style.display = 'none';
});

openbuyBtn5.addEventListener('click', () => {
    Chowmein.style.display = 'block'; // Show the shopping cart
});
closebuyBtn5.addEventListener('click', () => {
    Chowmein.style.display = 'none'; // Hide the shopping cart
});

// food6 buy now button
let food6 = document.querySelector('.food6');
document.querySelector('#open-btn6').onclick = () => {
    food6.classList.toggle('active')
}
// food6 buy now me jo x button hai uska code 



const Sammosa = document.getElementById('Sammosa');
const openbuyBtn6 = document.getElementById('open-btn6');
const closebuyBtn6 = document.getElementById('close-buy6');
document.addEventListener('DOMContentLoaded', () => {
    Sammosa.style.display = 'none';
});
openbuyBtn6.addEventListener('click', () => {
    Sammosa.style.display = 'block'; // Show the shopping cart
});
closebuyBtn6.addEventListener('click', () => {
    Sammosa.style.display = 'none'; // Hide the shopping cart
});

// food7 buy now button
let food7 = document.querySelector('.food7');
document.querySelector('#open-btn7').onclick = () => {
    food7.classList.toggle('active')
}
// food7 buy now me jo x button hai uska code 



const Dosa = document.getElementById('Dosa');
const openbuyBtn7 = document.getElementById('open-btn7');
const closebuyBtn7 = document.getElementById('close-buy7');
document.addEventListener('DOMContentLoaded', () => {
    Dosa.style.display = 'none';
});
openbuyBtn7.addEventListener('click', () => {
    Dosa.style.display = 'block'; // Show the shopping cart
});
closebuyBtn7.addEventListener('click', () => {
    Dosa.style.display = 'none'; // Hide the shopping cart
});

// food8 buy now button
let food8 = document.querySelector('.food8');
document.querySelector('#open-btn8').onclick = () => {
    food8.classList.toggle('active')
}
// food8 buy now me jo x button hai uska code 



const Idli = document.getElementById('Idli');
const openbuyBtn8 = document.getElementById('open-btn8');
const closebuyBtn8 = document.getElementById('close-buy8');
document.addEventListener('DOMContentLoaded', () => {
    Idli.style.display = 'none';
});
openbuyBtn8.addEventListener('click', () => {
    Idli.style.display = 'block'; // Show the shopping cart
});
closebuyBtn8.addEventListener('click', () => {
    Idli.style.display = 'none'; // Hide the shopping cart
});
// food9 buy now button
let food9 = document.querySelector('.food9');
document.querySelector('#open-btn9').onclick = () => {
    food9.classList.toggle('active')
}
// food9 buy now me jo x button hai uska code 



const Aloopuri = document.getElementById('Aloopuri');
const openbuyBtn9 = document.getElementById('open-btn9');
const closebuyBtn9 = document.getElementById('close-buy9');
document.addEventListener('DOMContentLoaded', () => {
    Aloopuri.style.display = 'none';
});
openbuyBtn9.addEventListener('click', () => {
    Aloopuri.style.display = 'block'; // Show the shopping cart
});
closebuyBtn9.addEventListener('click', () => {
    Aloopuri.style.display = 'none'; // Hide the shopping cart
});
// food10 buy now button    chilli panner ka name mattar panner likha hai id me
let food10 = document.querySelector('.food10');
document.querySelector('#open-btn10').onclick = () => {
    food10.classList.toggle('active')
}
// food10 buy now me jo x button hai uska code            chilli panner ka name mattar panner likha hai id me
const Mattarpanner = document.getElementById('Mattarpanner');
const openbuyBtn10 = document.getElementById('open-btn10');
const closebuyBtn10 = document.getElementById('close-buy10');
document.addEventListener('DOMContentLoaded', () => {
    Mattarpanner.style.display = 'none';
});
openbuyBtn10.addEventListener('click', () => {
    Mattarpanner.style.display = 'block'; // Show the shopping cart
});
closebuyBtn10.addEventListener('click', () => {
    Mattarpanner.style.display = 'none'; // Hide the shopping cart
});
// food11 buy now button
let food11 = document.querySelector('.food11');
document.querySelector('#open-btn11').onclick = () => {
    food11.classList.toggle('active')
}
// food11 buy now me jo x button hai uska code
const manchurean = document.getElementById('manchurean');
const openbuyBtn11 = document.getElementById('open-btn11');
const closebuyBtn11 = document.getElementById('close-buy11');
document.addEventListener('DOMContentLoaded', () => {
    manchurean.style.display = 'none';
});
openbuyBtn11.addEventListener('click', () => {
    manchurean.style.display = 'block'; // Show the shopping cart
});
closebuyBtn11.addEventListener('click', () => {
    manchurean.style.display = 'none'; // Hide the shopping cart
});
// food12 buy now button

let food12 = document.querySelector('.food12');
document.querySelector('#open-btn12').onclick = () => {
    food12.classList.toggle('active')
}
// food12 buy now me jo x button hai uska code
const vegthali = document.getElementById('vegthali');
const openbuyBtn12 = document.getElementById('open-btn12');
const closebuyBtn12 = document.getElementById('close-buy12');
document.addEventListener('DOMContentLoaded', () => {
    vegthali.style.display = 'none';
});
openbuyBtn12.addEventListener('click', () => {
    vegthali.style.display = 'block'; // Show the shopping cart
});
closebuyBtn12.addEventListener('click', () => {
    vegthali.style.display = 'none'; // Hide the shopping cart
});
// food13 buy now button
let food13 = document.querySelector('.food13');
document.querySelector('#open-btn13').onclick = () => {
    food13.classList.toggle('active')
}
// food13 buy now me jo x button hai uska code
const NonVegthali = document.getElementById('NonVegthali');
const openbuyBtn13 = document.getElementById('open-btn13');
const closebuyBtn13 = document.getElementById('close-buy13');
document.addEventListener('DOMContentLoaded', () => {
    NonVegthali.style.display = 'none';
});
openbuyBtn13.addEventListener('click', () => {
    NonVegthali.style.display = 'block'; // Show the shopping cart
});
closebuyBtn13.addEventListener('click', () => {
    NonVegthali.style.display = 'none'; // Hide the shopping cart
});
// food14 buy now button
let food14 = document.querySelector('.food14');
document.querySelector('#open-btn14').onclick = () => {
    food14.classList.toggle('active')
}
// food14 buy now me jo x button hai uska code
const Pastry = document.getElementById('Pastry');
const openbuyBtn14 = document.getElementById('open-btn14');
const closebuyBtn14 = document.getElementById('close-buy14');
document.addEventListener('DOMContentLoaded', () => {
    Pastry.style.display = 'none';
});
openbuyBtn14.addEventListener('click', () => {
    Pastry.style.display = 'block'; // Show the shopping cart
});
closebuyBtn14.addEventListener('click', () => {
    Pastry.style.display = 'none'; // Hide the shopping cart
});
// food15 buy now button
let food15 = document.querySelector('.food15');
document.querySelector('#open-btn15').onclick = () => {
    food15.classList.toggle('active')
}
// food15 buy now me jo x button hai uska code
const Cake = document.getElementById('Cake');
const openbuyBtn15 = document.getElementById('open-btn15');
const closebuyBtn15 = document.getElementById('close-buy15');
document.addEventListener('DOMContentLoaded', () => {
    Cake.style.display = 'none';
});
openbuyBtn15.addEventListener('click', () => {
    Cake.style.display = 'block'; // Show the shopping cart
});
closebuyBtn15.addEventListener('click', () => {
    Cake.style.display = 'none'; // Hide the shopping cart
});
// food16 buy now button
let food16 = document.querySelector('.food16');
document.querySelector('#open-btn16').onclick = () => {
    food16.classList.toggle('active')
}
// food16 buy now me jo x button hai uska code
const Biryani = document.getElementById('Biryani');
const openbuyBtn16 = document.getElementById('open-btn16');
const closebuyBtn16 = document.getElementById('close-buy16');
document.addEventListener('DOMContentLoaded', () => {
    Biryani.style.display = 'none';
});
openbuyBtn16.addEventListener('click', () => {
    Biryani.style.display = 'block'; // Show the shopping cart
});
closebuyBtn16.addEventListener('click', () => {
    Biryani.style.display = 'none'; // Hide the shopping cart
});
function openProductDetails() {
    window.open("product-details.html", "_blank");
}

function openProductDetails2() {
    window.open("product-details2.html", "_blank");
}
function openProductDetails3() {
    window.open("product-details3.html", "_blank");
}
function openProductDetails4() {
    window.open("product-details4.html", "_blank");
}

function openProductDetails5() {
    window.open("product-details5.html", "_blank");
}
function openProductDetails6() {
    window.open("product-details6.html", "_blank");
}
function openProductDetails7() {
    window.open("product-details7.html", "_blank");
}
function openProductDetails8() {
    window.open("product-details8.html", "_blank");
}
function openProductDetails9() {
    window.open("product-details9.html", "_blank");
}
function openProductDetails10() {
    window.open("product-details10.html", "_blank");
}
function openProductDetails11() {
    window.open("product-details11.html", "_blank");
}
function openProductDetails12() {
    window.open("product-details12.html", "_blank");
}
function openCab() {
    window.open("cab.html", "_blank");
}
