let key=`tripData`;
let tripData = JSON.parse(localStorage.getItem(key));
window.onload = ()=>{
    document.title= tripData.name;
};
let hname= document.querySelector("#hotel-name");
hname.textContent= tripData.name;

let hrating= document.querySelector("#rating-box");
hrating.textContent= tripData.price;

let hprice = document.querySelector(".card-price");
hprice.textContent= `₹${tripData.price}`;

let hreserve= document.querySelector('#book-hotel');
hreserve.onclick = ()=>{
    let hotel_key=`hotelData`;
    localStorage.setItem(hotel_key,JSON.stringify(tripData));
};
