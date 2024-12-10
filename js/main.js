const wrapper = document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem");

const products = [
{
	id:1,
	title:"Air Force",
	price:119,
	colors:[ n
	{
       code:"black",
       img:"./img/air.png"
	},
	{
		code:"blue",
		img:"./img/air2.png" 
	},
    ],
},
{
	id:2,
	title:"Air Jordan",
	price:149,
	colors:[
 {
 	code:"black",
 	img:"./img/jordan.png",
 },
 {
 	code:"#574418",
 	img:"./img/jordan2.WEBP",  
 },
 ],
},
{
	id:3,
	title:"Blazer",
	price:109,
	colors:[
	{
		code:"lightgray",
		img:"./img/blazer.WEBP",
	},
   {
   	code:"cyan",
		img:"./img/blazer2.WEBP",
   },
   ],
},
{
	id:4,
	title:"Crater",
	price:129,
	colors:[
 {
 	code:"black",
 	img:"./img/crater.WEBP",
 },
 {
 	code:"lightgray",
 	img:"./img/crater2.WEBP",
 },
 ],
},
{
	id:5,
	title:"Hippie",
	price:99,
	colors:[
 {
 	code:"gray",
 	img:"./img/hippie.png",
},
{
	code:"black",
 	img:"./img/hippie2.png",
},
],
},
];
let choosenProduct = products[0]
const currentProductImg= document.querySelector(".productImg");
const currentProductTitle= document.querySelector(".productTitle");
const currentProductPrice= document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes= document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
   item.addEventListener("click", () => {
   	/*change size*/
   	
   	wrapper.style.transform= `translateX(${-100 * index}vw)`;
     /*change shoe,product*/
     
     choosenProduct =products[index]
     
     /*change text*/
     currentProductTitle.textContent= choosenProduct.title
     currentProductPrice.textContent="$" + choosenProduct.price
     
     /*new colors shoes*/
     currentProductImg.src= choosenProduct.colors[0].img
     currentProductColors.forEach((color,index)=>{
     color.style.backgroundColor =choosenProduct.colors[index].code;
     })
   });
});





currentProductColors.forEach((color,index)=>{
      color.addEventListener("click" , ()=>{
      	currentProductImg.src =  choosenProduct.colors[index].img
      })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
    	currentProductSizes.forEach((size)=>{
       size.style.backgroundColor="white"
     size.style.color="black"
    	});

    size.style.backgroundColor="black"
     size.style.color="white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
	payment.style.display="flex"
})
close.addEventListener("click", ()=>{
	payment.style.display="none"
})