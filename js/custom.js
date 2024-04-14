const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    menu.classList.add("visible");
})

close.addEventListener("click", () => {
    menu.classList.remove("visible")
})

$(document).ready(function(){
    $('.collab__slider').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });  
  })

  $(document).ready(function(){
    $('.director__slider').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });  
  })