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

// uodating the color on a star
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
}

//when the document is ready
Util.events(document, {
    "DOMContentLoaded": function() {
        for (var dishType in favoriteDishes.dishTypes) {

            var element = document.getElementById(dishType)
            for (var dishName in favoriteDishes.favorites(dishType)){
                console.log(dishName)
                var dish = Util.create("p", {"class":"card-title", "id": dishName+"FavPage"})

                // make it so that you can click anywhere on the dish to add/remove from favorites
                dish.addEventListener('click', function (evt) {
                    var foodName = evt.target.closest("p.card-title").id 
                    updateStarOnClick(evt)
                    updateFavorites("Entrees", foodName)
                    updateMenu()
                })

                var fav = Util.create("span", {"class":"fa fa-star", "id": "star" + dishName})
                var text = document.createTextNode(" "+dishName)
                
                dish.appendChild(fav)
                dish.appendChild(text)
                element.appendChild(dish)
            }
        }
    }
})
    