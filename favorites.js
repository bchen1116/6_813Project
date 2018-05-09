var starColor = "#FF9B01";
favDishes = JSON.parse(sessionStorage.getItem('favoriteDishes'));


// uodating the color on a star
// function updateStarOnClick(e) { 
//     try {
//         var currentStar = e.target.firstChild                                   // find the star that we want to address 
//         var currentStarClass  = e.target.firstChild.getAttribute("class")       
//         if (currentStarClass == "fa fa-star-o") {                            
//             currentStar.classList = "fa fa-star"
//             currentStar.style.color = starColor
//         } else { 
//             currentStar.classList = "fa fa-star-o"
//             currentStar.style.color = "black"
//         }
//     }   
//     catch (E) {
//         if (e.target.getAttribute("class") == "fa fa-star-o") {
//             e.target.setAttribute("class", "fa fa-star");
//             e.target.style.color = starColor;
//         } else {
//             e.target.setAttribute("class", "fa fa-star-o");
//             e.target.style.color = "black";
//         }
//     }
//     // try {        
//     //     for (var index in Object.keys(favDishes.dishes)) {
//     //         var dishType =  Object.keys(favDishes.dishes)[index]
//     //         var element = document.getElementById(dishType+"FavPage")
//     //         //console.log("ELEMENT",dishType, element)
//     //         for (var dishIndex in favDishes.dishes[dishType]){
//     //             var dishName = favDishes.dishes[dishType][dishIndex]
//     //             //console.log(dishIndex, dishName)
//     //             var dish = Util.create("p", {"class":"card-title", "id": dishName})

//     //             // make it so that you can click anywhere on the dish to add/remove from favorites
//     //             dish.addEventListener('click', function (evt) {
//     //                 var foodName = evt.target.closest("p.card-title").id 
//     //                 updateStarOnClick(evt)
//     //                 updateFavorites("Entrees", foodName)
//     //                 updateMenu()
//     //             })

//     //             var fav = Util.create("span", {"class":"fa fa-star", "id": "star" + dishName})
//     //             fav.style.color = starColor
//     //             var text = document.createTextNode(" "+dishName)
                
//     //             dish.appendChild(fav)
//     //             dish.appendChild(text)
//     //             element.appendChild(dish)
//     //         }
//     //     }
//     //     var currentStar = e.target.firstChild
//     //     var currentStarClass  = e.target.firstChild.getAttribute("class")
//     //     if (currentStarClass == "fa fa-star-o") {
//     //         currentStar.classList = "fa fa-star"
//     //         currentStar.style.color = starColor
//     //     } else { 
//     //         currentStar.classList = "fa fa-star-o"
//     //         currentStar.style.color = "black"
//     //     }
//     // }   
//     // catch (E) {
//     //     if (e.target.getAttribute("class") == "fa fa-star-o") {
//     //         e.target.setAttribute("class", "fa fa-star");
//     //         e.target.style.color = starColor;
//     //     } else {
//     //         e.target.setAttribute("class", "fa fa-star-o");
//     //         e.target.style.color = "black";
//     //     }
//     // }
// }

//when the document is ready
$( window ).on( "load", function() {
        toggleFavorites()

    })

function toggleFavorites() {
    console.log(favDishes)
    for (var index in Object.keys(favDishes.dishes)) {
        var dishType =  Object.keys(favDishes.dishes)[index]
        var element = document.getElementById(dishType+"FavPage")
        //console.log("ELEMENT",dishType, element)
        for (var dishIndex in favDishes.dishes[dishType]){
            var dishName = favDishes.dishes[dishType][dishIndex]
            //console.log(dishIndex, dishName)
            var dish = Util.create("p", {"class":"card-title", "id": dishName})

            // make it so that you can click anywhere on the dish to add/remove from favorites
            dish.addEventListener('click', function (evt) {
                var foodName = evt.target.closest("p.card-title").id 
                updateStarOnClick(evt)
                updateFavoritos("Entrees", foodName)
            })

            var fav = Util.create("span", {"class":"fa fa-star", "id": "star" + dishName})
            fav.style.color = starColor
            var text = document.createTextNode(" "+dishName)
            
            dish.appendChild(fav)
            dish.appendChild(text)
            element.appendChild(dish)
        }
    }
}

function updateFavoritos(dishtype, dish) {
    console.log(dishtype, dish)
    if (favDishes['dishes'][dishtype].indexOf(dish) != -1) {                            // if the dish is already in favorites then we want to remove it 
        favDishes['dishes'][dishtype].splice(favDishes['dishes'][dishtype].indexOf(dish))
    } else {                                                             // if the dish is not in favorites then add it 
        favDishes['dishes'][dishtype].push(dish)
    }
    sessionStorage.setItem("favoriteDishes", JSON.stringify(favDishes))
}

//navbar code for food selection form pop-up
window.addEventListener('load', function() {
    var modal = document.querySelectorAll(".form-request");   // contains [formRequest, signIn/LogIn] modals 
    var trigger = document.querySelector(".form");           // only contains card for formRequest
    var trigger2 = document.querySelectorAll(".form2");          // contains cards singIn and logIn
    var submit = document.querySelectorAll(".submit-form");         // submit button for both formRequest and signIn/logIn
    var closeButton = document.querySelectorAll(".close-button");       // x button for both formrequest and signIn/logIn
    var a1 = document.querySelector(".dropdown-item");                  // for dropdown items 
    var navigationalItems = document.querySelectorAll(".nav-link");         // for coloring the homepage
    navigationalItems[1].style.color = "#f0eceb"   
    var navButton = document.querySelector(".navbar-toggler");              // button for navbar when screen is smaller
    var dropDown = document.querySelector(".original");             
    var signIn = document.querySelector("#signUp");                 // sign up button
    var login = document.querySelector("#login");                   // log in button
    var signInModal = document.querySelector(".signBody");
    var loginModal = document.querySelector(".loginBody");
    var header = document.querySelector(".signUpHeader");
    var logHead = document.querySelector("#logText");
    var signHead = document.querySelector("#signText");
    var currentModal = 0;                                           // currentModal is 0 for formRequest, 1 for log in, 2 for sign up
    var rSubmit = document.getElementById("request-submit");

    console.log(submit);
    function toggleModal() {
        modal[0].classList.toggle("show-modal");
        modal[1].classList.remove("show-modal");
        currentModal = 0;
    }

    // opens or closes sign-in tab
    function toggleSignInModal() {
        currentModal = 2;
        modal[1].classList.toggle("show-modal");
        modal[0].classList.remove("show-modal");
        loginModal.style.display = "none";
        signInModal.style.display = "block";
        setColors(false)
    }

    // opens or closes log-in tab
    function toggleLogInModal() {
        currentModal = 1;
        modal[1].classList.toggle("show-modal");
        modal[0].classList.remove("show-modal");
        signInModal.style.display = "none";
        loginModal.style.display = "block";
        setColors(true);
    }

    function switchSignLogModal(bool) {
        console.log("im triggered")
        // if bool == true, is on log in, else on sign-up
        if (modal[1].classList.contains("show-modal")) {
            setColors(bool);
            if (bool){
                currentModal = 1;
                signInModal.style.display = "none";
                loginModal.style.display = "block";
            } else {
                currentModal = 2;
                loginModal.style.display = "none";
                signInModal.style.display = "block";
            }
        }
    }

    // gets inputs of form before submit
    function submitModal() {
        document.querySelector("#profilePage").style.display="block";
        document.querySelector("#logout").style.display="block";
        signIn.style.display = "none";
        login.style.display="none";
        toggleLogInModal();
    }

    // closes the sign-up/log in modal
    function closeModal() {
        modal[1].classList.remove("show-modal");
    }

    // sets the colors of the signup/login modal
    function setColors(bool) {
        // if true, is on log-in, else is on sign-up
        if (modal[1].classList.contains("show-modal")) {

            if (bool) {
                logHead.style.color = "#333333";
                signHead.style.color = "#f6f3f3";
                header.style.background = "linear-gradient(90deg, #f6f3f3 50%, #333333 0%)";

            } else {
                signHead.style.color = "#333333";
                logHead.style.color = "#f6f3f3";
                header.style.background = "linear-gradient(90deg, #333333 50%, #f6f3f3 0%)";

            }
        }
    }

    function windowOnClick(event) {
        if (event.target === modal[0]) {
            toggleModal();
        } else if (event.target === a1) {
            if (event.target.id === "profilePage") {
                window.location.replace("/profile.html");
            }
        } else if (event.target === navButton) {
            console.log(dropDown.style.display)
            if (dropDown.style.display == 'none' || dropDown.style.display == "") {
                dropDown.style.display = 'block';
            } else {
                dropDown.style.display = 'none';
            }
        } else if (event.target === modal[1]) {
            toggleSignInModal();
        } else if (event.target === signHead) {
            switchSignLogModal(false);
        } else if (event.target === logHead) {
            switchSignLogModal(true)
        }
        console.log(event.target);
    }

    function validateForm() {

        var rKerberos=document.getElementById("request_kerberos").value;
        var rId=document.getElementById("request_ID").value;
        var rDorm=document.getElementById("request_dorm").value;
        var rFood=document.getElementById("request_food").value;
        var rDate=document.getElementById("request_date").value;
        var rTime=document.getElementById("request_time").value;

        if ((rId==null || rId=="") || (rKerberos==null || rKerberos=="") || 
            (rDorm==null || rDorm=="") || (rFood==null || rFood=="") || 
            (rDate==null || rDate=="") || (rTime==null || rTime=="")) {
            alert("Please Fill All Required Fields");
            return false;
        }
        else {
            toggleModal();
        }
    }

    rSubmit.addEventListener("click", validateForm);
    trigger.addEventListener("click", toggleModal);
    closeButton[0].addEventListener("click", toggleModal);
    // submit[0].addEventListener("click", toggleModal);
    trigger2[0].addEventListener("click", toggleLogInModal);
    trigger2[1].addEventListener("click", toggleSignInModal);
    closeButton[1].addEventListener("click", closeModal);
    submit[1].addEventListener("click", submitModal);
    window.addEventListener("click", windowOnClick);
});