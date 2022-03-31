function kurtha(){
    var image = document.getElementById("cart-product-main-img");
    image.src = "./images/shop-2.jpg";
    document.getElementById("cart-product-img1").src = "./images/shop-2.jpg";
    document.getElementById("cart-product-img2").src = "./images/shop-2.jpg";
    document.getElementById("cart-product-img3").src = "./images/shop-2.jpg";
    document.getElementById("cart-product-img4").src = "./images/shop-2.jpg";
    document.getElementById("cart-product-heading").innerHTML = "Cotton Flared Kurta";
    document.getElementById("cart-product-heading").style.fontWeight = "bold";
    document.getElementById("productPrice").innerHTML = "$599.99";
    document.getElementById("line-through-price").innerHTML ="$775.00";
}
function shirt(){
    var image = document.getElementById("cart-product-main-img");
    image.src = "./images/shop-3.jpg";
    document.getElementById("cart-product-img1").src = "./images/shop-3.jpg";
    document.getElementById("cart-product-img2").src = "./images/shop-3.jpg";
    document.getElementById("cart-product-img3").src = "./images/shop-3.jpg";
    document.getElementById("cart-product-img4").src = "./images/shop-3.jpg";
    document.getElementById("cart-product-heading").innerHTML = "Men Casual Shirt";
    document.getElementById("cart-product-heading").style.fontWeight = "bold";
    document.getElementById("productPrice").innerHTML = "$799.99";
    document.getElementById("line-through-price").innerHTML ="$875.00";
}
function blendKurtha(){
    var image = document.getElementById("cart-product-main-img");
    image.src = "./images/shop-4.jpg";
    document.getElementById("cart-product-img1").src = "./images/shop-4.jpg";
    document.getElementById("cart-product-img2").src = "./images/shop-4.jpg";
    document.getElementById("cart-product-img3").src = "./images/shop-4.jpg";
    document.getElementById("cart-product-img4").src = "./images/shop-4.jpg";
    document.getElementById("cart-product-heading").innerHTML = "Blend Straight Kurta";
    document.getElementById("cart-product-heading").style.fontWeight = "bold";
    document.getElementById("productPrice").innerHTML = "$399.99";
    document.getElementById("line-through-price").innerHTML ="$475.00";
}



let btnPlus = document.querySelector(".plus-btn");
let btnMinus = document.querySelector(".minus-btn");
let input = document.querySelector(".quantity");

btnPlus.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1;
});

btnMinus.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1;
});

