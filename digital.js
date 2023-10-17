// "use strict";

//ASM3-11. (Nâng cao) Bổ sung Project Charter cho các dự án

// if (document.location.href.includes("duan-cv")) {
//   let cacDAcv = document.querySelector(".duancv");
//   cacDAcv.classList.toggle("hidden");
// } else if (document.location.href.includes("duan-te")) {
//   let cacDAcv = document.querySelector(".duante");
//   cacDAcv.classList.toggle("hidden");
// } else if (document.location.href.includes("duan-tv")) {
//   let cacDAcv = document.querySelector(".duantv");
//   cacDAcv.classList.toggle("hidden");
// }
if (document.location.href.includes("duan-cv")) {
  document.querySelector(".duancv").classList.toggle("hidden");
} else if (document.location.href.includes("duan-te")) {
  document.querySelector(".duante").classList.toggle("hidden");
} else if (document.location.href.includes("duan-tv")) {
  document.querySelector(".duantv").classList.toggle("hidden");
}
