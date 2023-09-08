var bodyCard = document.querySelectorAll(".bodyCard-d-none");
var load = document.querySelector(".btn-loadMore");
load.addEventListener("click", LoadMore);
function LoadMore() {
  bodyCard.forEach((value, index) => {
    if (value.classList.contains("bodyCard-d-none")) {
      value.classList.remove("bodyCard-d-none");
      console.log(value);
    }
  });
}

// var card = document.querySelectorAll(".card");
// console.log(card);

// var cardLink = document.querySelectorAll(".card-link");
// card.addEventListener("hover", (_) => {
//   cardLink.style.display = "block";
// });

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
