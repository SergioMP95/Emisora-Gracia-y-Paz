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
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: 
    [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });  
})

$(document).ready(function(){
  $('.director__slider').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: 
    [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });  
})

$(document).ready(function(){
  $('.announcers__slider').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: 
    [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });  
})
