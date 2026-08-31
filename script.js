function buynow() {
    alert ("Thank you for choosing E-Bike Hub! Our team will contact you soon.")

    
}
function likeBike(button){

    if(button.innerHTML=="🤍"){
        button.innerHTML="❤️";
    }
    else{
        button.innerHTML="🤍";
    }

}
function searchBike(){

    let input = document.getElementById("searchBox").value.toLowerCase();

    let bikes = document.querySelectorAll(".bike-card");

    bikes.forEach(function(bike){

        let name = bike.querySelector("h3").innerText.toLowerCase();

        if(name.includes(input)){
            bike.style.display = "block";
        }
        else{
            bike.style.display = "none";
        }

    });

}

let images = [
  "images/1 loader.webp",
  "images/2 loader.webp",
  "images/3 loader.jpg",
  "images/4 loader.webp",
  "images/5 loader.jpg",
  "images/6 loader.jpg"
];

let index = 0;

function changeImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("sliderImage").src = images[index];
}

setInterval(changeImage, 3000);

function bookRide(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let bike = document.getElementById("bike").value;
    let date = document.getElementById("date").value;

    let message =
`Hello E-Bike Hub,
I want to book a Test Ride.

👤 Name: ${name}
📞 Mobile: ${phone}
🏍 Bike: ${bike}
📅 Date: ${date}`;

    let url = "https://wa.me/918956888421?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}   



function searchBike() {

    let input = document.getElementById("searchBox").value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card){

        let bikeName = card.querySelector("h3").textContent.toLowerCase();

        if(bikeName.includes(input)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}   

function buyNow(bikeName){

    let phone = "918956888421";

    let message = "Hello E-Bike Hub, I am interested in buying the " + bikeName + ". Please share more details.";

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}   


function showDetails(bike){

    document.getElementById("popup").style.display="block";

    document.getElementById("bikeTitle").innerHTML=bike;

    if(bike=="Bijlee"){
        document.getElementById("bikeInfo").innerHTML=
        "Price: ₹82,000 <br> Battery: 60V 30Ah <br> Range: 60 KM";
    }

    else if(bike=="Vajra"){
        document.getElementById("bikeInfo").innerHTML=
        "Price: ₹95,000 <br> Battery: 60V 50Ah <br> Range: 100 KM";
    }

    else{
        document.getElementById("bikeInfo").innerHTML=
        "Price: ₹1,20,000 <br> Battery: 60V 50Ah <br> Range: 100 KM";
    }

}

function closePopup(){

    document.getElementById("popup").style.display="none";

}  

function filterBike(){

    let value = document.getElementById("filter").value;

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card){

        if(value=="all"){
            card.style.display="block";
        }
        else if(card.classList.contains(value)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

}    


// Scroll To Top Button

document.addEventListener("DOMContentLoaded", function(){

let btn = document.getElementById("scrollBtn");

window.addEventListener("scroll", function () {

    if(window.scrollY > 200){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }

});

btn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

});