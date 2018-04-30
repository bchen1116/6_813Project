var starColor = "#FF9B01";

//navbar code for food selection form pop-up
window.addEventListener('load', function() {
    var modal = document.querySelector(".form-request");
    var trigger = document.querySelector(".form");
    var submit = document.querySelector(".submit-form");
    var closeButton = document.querySelector(".close-button");
    var a1 = document.querySelectorAll(".dropdown-item")

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        } else if (event.target === a1[0]) {
            window.location.replace("/profile.html");
        } else if (event.target === a1[1]) {
           window.location.replace("/login.html");
        }
        
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    submit.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});

function updateStarOnClick(e) { 
    try {
        var currentStar = e.target.firstChild
        var currentStarClass  = e.target.firstChild.getAttribute("class")
        if (currentStarClass == "fa fa-star-o") {
            currentStar.classList = "fa fa-star"
            currentStar.style.color = starColor
        } else { 
            currentStar.classList = "fa fa-star-o"
            currentStar.style.color = "black"
        }
        // var currentStar = e.target.firstChild.getAttribute("class");
        // var newStar = document.createElement("span");
        // if (currentStar == "fa fa-star-o") {
        //     newStar.setAttribute("class", "fa fa-star");
        //     newStar.style.color = "#d19b3d";
        // } else {
        //     newStar.setAttribute("class", "fa fa-star-o");
        // }
        // e.target.replaceChild(newStar, e.target.firstChild);
    }   
    catch (E) {
        if (e.target.getAttribute("class") == "fa fa-star-o") {
            e.target.setAttribute("class", "fa fa-star");
            e.target.style.color = starColor;
        } else {
            e.target.setAttribute("class", "fa fa-star-o");
            e.target.style.color = "black";
        }
    }
    //e.stopPropogation();
}
