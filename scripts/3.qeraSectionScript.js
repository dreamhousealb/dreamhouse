let slideIndexQ = [1, 1, 1, 1];
let slideIdQ = ["slides0Q", "slides1Q", "slides2Q", "slides3Q"];
showSlidesQ(1, 0);
showSlidesQ(1, 1);
showSlidesQ(1, 2);
showSlidesQ(1, 3);

function plusSlidesQ(n, no) {
  showSlidesQ((slideIndexQ[no] += n), no);
}

function showSlidesQ(n, no) {
  let i;
  let x = document.getElementsByClassName(slideIdQ[no]);
  if (n > x.length) {
    slideIndexQ[no] = 1;
  }
  if (n < 1) {
    slideIndexQ[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexQ[no] - 1].style.display = "block";
}

//MODAL

const modalQ = document.getElementById("modalQ");
const modalButtonQ = document.getElementById("modalButtonQ");

function modalTriggerQ(n) {
  const slideImageQ = document.getElementsByClassName("slideImageQ")[n];
  console.log(modalQ.style.display);
  if (modalQ.style.display == "" || modalQ.style.display == "none") {
    slideImageQ.classList.add("active");
    modalQ.style.display = "block";
    modalButtonQ.style.display = "block";
    modalButtonQ.addEventListener("click", function e() {
      slideImageQ.classList.remove("active");
      modalQ.style.display = "none";
      modalButtonQ.style.display = "none";
    });
  }
}