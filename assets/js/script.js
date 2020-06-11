$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

const items = document.querySelectorAll(".accordion a");
let para = document.querySelectorAll('.inside');
let link = document.querySelectorAll('.accordion a');

for (let i = 0; i < para.length; i++) {

    items[i].addEventListener("click", () => {

        if (para[i].style.display === "none") {

            para[i].style.display = "block";
        } else {

            para[i].style.display = "none";
        };
        toggleAccordion;
    });
}



function toggleAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

//items.forEach(item => item.addEventListener('click', toggleAccordion));

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
    });
}


(function($) {
    "use strict"; // Start of use strict
  
    // Floating label headings for the contact form
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  
    // Show the navbar when the page is scrolled up
    var MQL = 992;
  
    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
      var headerHeight = $('#mainNav').height();
      $(window).on('scroll', {
          previousTop: 0
        },
        function() {
          var currentTop = $(window).scrollTop();
          //check if user is scrolling up
          if (currentTop < this.previousTop) {
            //if scrolling up...
            if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
              $('#mainNav').addClass('is-visible');
            } else {
              $('#mainNav').removeClass('is-visible is-fixed');
            }
          } else if (currentTop > this.previousTop) {
            //if scrolling down...
            $('#mainNav').removeClass('is-visible');
            if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
          }
          this.previousTop = currentTop;
        });
    }
  
  })(jQuery); // End of use strict
  

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

/* curator-feed-default-layout */
(function() {
    var i,
        e,
        d = document,
        s = "script";
    i = d.createElement("script");
    i.async = 1;
    i.src =
        "https://cdn.curator.io/published/81e8cf6e-9875-4818-a4d8-4a473000b160.js";
    e = d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e);
})();