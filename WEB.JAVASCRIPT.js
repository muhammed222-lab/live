var light = document.getElementById("check")


light.addEventListener("click", function() {
    var fall = document.querySelector(".under");
    var body = document.querySelector(".bodie");
    fall.classList.toggle("left");
    if (fall.style.marginLeft == "30px") {

        body.style.background = "#333";
    } else {
        body.style.background = "#333";
    }

})