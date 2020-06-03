const button = document.querySelectorAll(".sch-btn");
let i = 0;
const swipper = document.querySelector(".swiper-wrapper");
const page = document.getElementsByClassName("swiper-pagination-bullet");
const image = document.querySelectorAll(".swiper-slide");
//let's do this!!
const size = image[i].clientWidth;
console.log(size);
console.log(image.length);

let move = 0;

/*for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", () => {
            swipper.style.transition = "transform 0.5s ease-in-out";

            swipper.style.transform = 'translate3d(' + (-size * i) + 'px,' + 0 + 'px,' + 0 + 'px)';
            image[i].style.transform = 'rotateX(' + 0 + 'deg)' + 'rotateY(' + 0 + 'deg)';








        }


    );

} */
for (let i = 0; i < page.length; i++) {

    page[i].addEventListener("click", () => {
        pageactive = document.getElementsByClassName("swiper-pagination-bullet-active");
        pageactive[0].className = pageactive[0].className.replace("swiper-pagination-bullet-active", "");
        page[i].className += " swiper-pagination-bullet-active";

        swipper.style.transition = "transform 0.5s ease-in-out";

        swipper.style.transform = 'translate3d(' + (-size * i) + 'px,' + 0 + 'px,' + 0 + 'px)';
        image[i].style.transform = 'rotateX(' + 0 + 'deg)' + 'rotateY(' + 0 + 'deg)';






        console.log("tapanshu bhai");
    });


}
