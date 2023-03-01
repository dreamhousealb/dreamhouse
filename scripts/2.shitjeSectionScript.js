// SLIDESHOWS

let slideIndex = [1, 1, 1, 1];
let slideId = ["slides0", "slides1", "slides2", "slides3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

// MODAL

const modal = document.getElementById("modal");
const modalButton = document.getElementById("modalButton");

function modalTrigger(n) {
  const slideImage = document.getElementsByClassName("slideImage")[n];
  console.log(modal.style.display);
  if (modal.style.display == "" || modal.style.display == "none") {
    slideImage.classList.add("active");
    modal.style.display = "block";
    modalButton.style.display = "block";
    modalButton.addEventListener("click", function e() {
      slideImage.classList.remove("active");
      modal.style.display = "none";
      modalButton.style.display = "none";
    });
  }
}
