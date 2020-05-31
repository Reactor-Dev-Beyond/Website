const button = document.querySelectorAll(".sch-btn");
let i = 0;
const swipper = document.querySelector(".swiper-wrapper")
const image = document.querySelectorAll(".swiper-slide");
//let's do this!!
const size = image[i].clientWidth;
console.log(size);
console.log(image.length);

let move = 0;

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", () => {
            swipper.style.transition = "transform 0.5s ease-in-out";

            swipper.style.transform = 'translate3d(' + (-size * i) + 'px,' + 0 + 'px,' + 0 + 'px)';
            image[i].style.transform = 'rotateX(' + 0 + 'deg)' + 'rotateY(' + 0 + 'deg)';








        }


    );

}
const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));