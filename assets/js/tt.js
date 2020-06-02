let para = document.querySelectorAll('.inside');
let link = document.querySelectorAll('.accordion a');

for (let i = 0; i < para.length; i++) {

    link[i].addEventListener("click", () => { setTimeout(myFuncs) });





    function myFuncs() {
        if (para[i].style.display === "none") {
            console.log("block");
            para[i].style.display = "block";


        } else {
            para[i].style.display = "none";
            console.log("none");
        }




    }

}
