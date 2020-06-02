let para = document.querySelectorAll('.inside');
let link = document.querySelectorAll('.accordion a');

for (let i = 0; i < para.length; i++) {

    link[i].addEventListener("mouseover", () => { setTimeout(myFuncs, 1000) });



    link[i].addEventListener("mouseout", function() { setTimeout(myFunc, 0) });

    function myFuncs() {
        para[i].style.display = "block";


    }


    function myFunc() {


        para[i].style.display = "none";

    }

}
