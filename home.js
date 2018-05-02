// JS code for home page. Handles the clicking responses on the home page



var dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"]; // dormList is the list of active dorms on the page
var currentDishes = ALLDISHES 
var starColor = "#FF9B01";
var allDorms = {};                                              // allDorms is the dictionary that maps dorm name to Node element of dorm card
var dieraryRestrictions = []                                    // list of the dietary restirctions that are active on the page
var globalMealTime = "dinner"
var globalDate = "05/02/2018"

// given a dictionary make a deep copy of the dictionary 
// used to create a copy of all of the dishes in our database 
function copyDishes(mainDict, globalMealTime) { 
    newDishes = {} 
    for (var dorm in mainDict) {                                            // for each dorm 
        dormDishes = {}
        for (var meal in mainDict[dorm]) {                                  // for each meal type, i.e. Entree, Side, Dessert  
            mealType = {}
            for (var dish in mainDict[dorm][meal]) {                        // for each dish                  
                if (mainDict[dorm][meal][dish]["time"] == globalMealTime && mainDict[dorm][meal][dish]["date"] == globalDate) {   // if the meal time is the same 
                    mealType[dish] = mainDict[dorm][meal][dish]             // copy the dish data over, this is the deepest level of the dictionary 
                }
            }
            dormDishes[meal] = mealType                         
        }
        newDishes[dorm] = dormDishes                            
    }
    return newDishes                                                        // return the new dictionary 
}                      

// called when the checkbox on dorms are clicked/unclicked
// used for filtering the dorms, in order to change what cards appear on the page 
function onCheckClicked(cb, dorm) {
    if (cb.checked == false) {                                  // if it isn't checked, remove the dorm
        var index = dormList.indexOf(dorm);
        if (index > -1) {                                   
            dormList.splice(index, 1);                          // remove dorm from dormList
            document.getElementById(dorm).remove();             // remove it from the document
        }
    } else if (cb.checked == true) {                            // otherwise if it is checked
        var main = document.getElementById("mainClass");
        var index = dormList.indexOf(dorm);
        if (index = -1) {                                       // if the dorm isn't in the dormList, add it                             
            dormList.push(dorm);
            var newDorms = sortDorms(dormList);                 // sort the dorms in order again
            while (main.firstChild) {                           // clear out the current dorms from the main
                main.removeChild(main.firstChild);
            }
            for (var j = 0; j < newDorms.length; j++) {         // add the dorms in sorted order back to main
                main.appendChild(allDorms[newDorms[j]]);
            }
        }
    }
    updateCardLayout();   
}

//called when the radio button to specify which meal type is to be displayed 
function mealTimeUpdate(cb, mealTime){
    // we can assume that tgus us called we are changing the display to be of that meal type
    globalMealTime = mealTime
    performdietaryFiltering() // filter out the dishes based on what we want
}

function mealDateUpdate(cb, mealDate) {
    globalDate = mealDate
    performdietaryFiltering()
}
// called when the checkbox on dietary restrictions is clicked/unclicked
// used to trigger filtering of dishes based on the restrictions 
function dietaryUpdate(cb, diet) { 
    if (cb.checked == false) {                                      // if the checkbox is not checked 
        if (dieraryRestrictions.includes(diet)) {                   // if it is already in the list of restrictions
            var indexOfRemove = dieraryRestrictions.indexOf(diet);  // remove it from the list of our dietary restrictions
            dieraryRestrictions.splice(indexOfRemove, 1);
        }
    } else {                                                        // if the checkbox is checked 
        dieraryRestrictions.push(diet)                              // add it to the list of our dietary restrictions 
    }
    performdietaryFiltering()                                       // filter the dorms 
}


// filter out the dishes that are available based on the dietary restictions
// TODO: This is where I'd assume we'd add the Mealtype, and Date filtering functionality
function performdietaryFiltering() {
    console.log(globalMealTime)
    currentDishes = copyDishes(ALLDISHES, globalMealTime)                                   // reset currentDishes to be everything
    // go through our list of foods and remove the ones that do not fit the restriction & remove 
    for (var dorm in currentDishes) {                                       // go through the dorms 
        var dormCurrentDishes = currentDishes[dorm]
        for (var meal in currentDishes[dorm]) {                             // go through all of the meals 
            var currentMealDishes = currentDishes[dorm][meal]
            for (var dishName in currentMealDishes) {                       // go through the dishes for that meal 
                var dish = currentMealDishes[dishName]
                for (var i = 0; i < dieraryRestrictions.length; i++) {      // go through restrictions
                    if (! dish["diet"].includes(dieraryRestrictions[i])) {  // if the food does not satify the restriction 
                        delete currentDishes[dorm][meal][dishName]          // remove it from the currentDishes
                    }
                }
            }
        }  
    }
    updateDishesForDorms(currentDishes)                                     // update the cards to reflect this change
}

//search
var a = document.getElementById('food-search');
console.log(a);
a.addEventListener('submit',function(e) {
    e.preventDefault();
    var b = document.getElementById('text-input').value;
    console.log(b);
    
    currentDishes = copyDishes(ALLDISHES)                                   // reset currentDishes to be everything
    // go through our list of foods and remove the ones that do not fit the restriction & remove 
    for (var dorm in currentDishes) {                                       // go through the dorms 
        var dormCurrentDishes = currentDishes[dorm]
        for (var meal in currentDishes[dorm]) {                             // go through all of the meals 
            var currentMealDishes = currentDishes[dorm][meal]
            for (var dishName in currentMealDishes) {                       // go through the dishes for that meal 
                var dish = currentMealDishes[dishName]
                if (! dish["description"].toUpperCase().includes(b.toUpperCase())) {  // if the food does not satify the restriction 
                    delete currentDishes[dorm][meal][dishName]          // remove it from the currentDishes
                }
            }
        }  
    }
    // update the cards to reflect this change
    updateDishesForDorms(currentDishes)

});

// repopulates the dishes that are in the dorm based on the current dishes 
// updates the dishes presented on the cards  
function updateDishesForDorms(currentDishes) { 
    dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"];         //recall the dormList to initiate allDorms
    for (var i = 0; i < dormList.length; i++) {                                         // for each dorm 
        allDorms[dormList[i]] = document.getElementById(dormList[i]);                   // populate the card that is attached to the dorm 
    }

    //for each of the dorms, go through and populate their menu according to the data we have on file
    for (var i=0; i<dormList.length-1; i++) {
        var dormName = dormList[i]
        var menu = document.getElementById(dormName +"Menu") 
        var dishesForDorm = currentDishes[dormName]["Entrees"]

        // clear out all of the dishes that are attached to that menu
        while (menu.firstChild) {    
            menu.removeChild(menu.firstChild);
        }

        // for each of the dishes that are being served for that dorm 
        for (var j=0; j<Object.keys(dishesForDorm).length; j++) {
            var dishName = Object.keys(dishesForDorm)[j]
            var dish = Util.create("p", {"class":"card-title", "id": dishName})

            dish.addEventListener('click', function (evt) {
                var foodName = evt.target.closest("p.card-title").id 
                updateStarOnClick(evt)
                updateFavorites("Entrees",foodName)
                updateMenu()
            })

            var fav = Util.create("span", {"class":"fa fa-star-o", "id": "star" + dormName + "," + dishName})
            var text = document.createTextNode(" "+Object.keys(dishesForDorm)[j])
            
            dish.appendChild(fav)
            dish.appendChild(text)
            menu.appendChild(dish)
        }
    }
    updateMenu() // add back the favorites if there were any 
}


// updates the star for favoriting after it has been pressed 
function updateStarOnClick(e) { 
    try {
        var currentStar = e.target.firstChild                                   // find the star that we want to address 
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


// update the list of favorite food items
function updateFavorites(dishtype, dish) { 
    if (favoriteDishes.isIn(dishtype,dish)) {                            // if the dish is already in favorites then we want to remove it 
        favoriteDishes.removeDish(dishtype,dish)
    } else {                                                             // if the dish is not in favorites then add it 
        favoriteDishes.addDish(dishtype,dish)
    }
}

// after a dish has been added to favorites 
// go through the other menus and add that dish to their favorites too 
function updateMenu() { 
    for (var i = 0; i < dormList.length-1; i++) {
        var dormName = dormList[i]
        var dishesForDorm = currentDishes[dormName]["Entrees"]
        for (var j =0; j < Object.keys(dishesForDorm).length; j++) {
            var dishName = Object.keys(dishesForDorm)[j]
            var relevantStar = document.getElementById("star" + dormName + "," + dishName)
            if (favoriteDishes.isIn("Entrees",dishName)) { 
                relevantStar.setAttribute("class", "fa fa-star")
                relevantStar.style.color = starColor
            } else { 
                relevantStar.setAttribute("class", "fa fa-star-o")
                relevantStar.style.color = "black"
            }
        }
    }
}


// updates the card layout on rows or columns
function updateCardLayout() {
    if (dormList.length == 4) {                                                             // layout for 4 dorms
        document.documentElement.style.setProperty("--cols", ""+2);
        document.documentElement.style.setProperty("--rows", ""+2);
    } else {                                                                                // layout for != 4 dorms
        document.documentElement.style.setProperty("--cols", ""+3);
        if (dormList.length < 4) {          
            document.documentElement.style.setProperty("--rows", ""+1);
            if (dormList.length < 3) {
                document.documentElement.style.setProperty("--cols", ""+dormList.length);
            }
        } else {
            document.documentElement.style.setProperty("--rows", ""+2);
        }
    }
}

// simple function to sort the list of dorms
// returns the sorted list of dorms
function sortDorms(dorms) {
    var listitems = [];
    for (var i = 0; i< dorms.length; i++) {
        listitems.push(dorms[i]);
    }
    listitems.sort(function(a, b) {
        var compA = a;
        var compB = b;
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    });
    return listitems;                                           
}

$(document).ready(function() { 
    // called when the document is ready 
    dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"];         //recall the dormList to initiate allDorms
    for (var i = 0; i < dormList.length; i++) {
        allDorms[dormList[i]] = document.getElementById(dormList[i]);
    }

    //for each of the dorms, go through and populate their menu according to the data we have on file
    for (var i=0; i<dormList.length-1; i++) {
        var dormName = dormList[i]
        var menu = document.getElementById(dormName +"Menu") 
        var dishesForDorm = currentDishes[dormName]["Entrees"]

        // for each of the dishes that are being served for that dorm 
        for (var j=0; j<Object.keys(dishesForDorm).length; j++) {
            var dishName = Object.keys(dishesForDorm)[j]
            var dish = Util.create("p", {"class":"card-title", "id": dishName})

            dish.addEventListener('click', function (evt) {
                var foodName = evt.target.closest("p.card-title").id 
                updateStarOnClick(evt)
                updateFavorites("Entrees", foodName)
                updateMenu()
            })

            var fav = Util.create("span", {"class":"fa fa-star-o", "id": "star" + dormName + "," + dishName})
            var text = document.createTextNode(" "+Object.keys(dishesForDorm)[j])
            
            dish.appendChild(fav)
            dish.appendChild(text)
            menu.appendChild(dish)
        }
    }

    var specialMenu = document.getElementById("specialsMenu")
    // populate the specials menu card 
    for (var i=0; i < SPECIALS.length; i++) { 
        var special = Util.create("p", {"class":"specials-card-title"})
        var text = document.createTextNode(SPECIALS[i])
        
        special.appendChild(text)
        specialMenu.appendChild(special)
    }

    // calls the menu card pop-up
    var modal = document.getElementById('myModal');
    var modalClose = document.getElementsByClassName("close")[0]
    var modalBody = document.getElementById("modal-body")
    

    // Get the button that opens the modal
    // COMMENTED OUT FOR CONVENIENT TESTING
    // TODO: make modal only display when clicking in area that doesn't highlight star!!!
    for (var i = 0; i < dormList.length-1; i++) {
        var modalButton = document.getElementById('menuPopup'+ dormList[i])

        // add a listener for each button
        // When the user clicks on the see full button 
        modalButton.onclick = function(e) {
            loadModal(e)
            modal.style.display = "block"
        }

        document.getElementById(dormList[i]).addEventListener("click", function(e) {
            if (e.target.getAttribute("class") != 'card-title' && e.target.getAttribute("class") != "fa fa-star" &&  e.target.getAttribute("class") != "fa fa-star-o") {
                loadModal(e)
                modal.style.display = "block"
            }
        });
    }


    // When the user clicks the close button
    modalClose.onclick = function() {
        //console.log("Im here")
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})




function loadModal(e) {
    var nameToHeading = {"baker": "Baker", "maseeh": "Maseeh", "mccormick": "McCormick", "next": "Next", "simmons":"Simmons"}
    var modalBody = document.getElementById("modal-body")
    //remove everything from the body that was previously there
    while (modalBody.firstChild) {
    modalBody.removeChild(modalBody.firstChild) 
    }

    if (e.target.getAttribute("class") != 'card-title') {
        // add thigs to the body of the modal
        var dormName = e.path[1].id
        var popupTitleBackGround = Util.create("div", {"class": "card-header"})
        var popupTitle = Util.create("h3", {"class":"popup-title"})
        popupTitle.appendChild(document.createTextNode(" " + nameToHeading[dormName]))
        popupTitleBackGround.appendChild(popupTitle)
        modalBody.appendChild(popupTitleBackGround)


        for (var meal in currentDishes[dormName]) {
            var mealType = Util.create("h4", {"class":"modal-food-type", "id": meal})
            mealType.appendChild(document.createTextNode(""+ meal))
            modalBody.appendChild(mealType)

            var dishes = currentDishes[dormName][meal]
            for (var dish in dishes) {
                //var food = Util.create("div", {"class": "food-item", "id":dish})
                var foodItem = Util.create("p", {"class": "food-item", "id": dish})
                var foodDescription = Util.create("div", {"class": "food-description"})
                var foodRestrictions = Util.create("p", {"class": "food-restriction"})
                var fav = Util.create("span", {"class":"fa fa-star-o", "id": dish})

                foodItem.appendChild(fav)
                var foodTitle = Util.create("h6", {"class":"modal-food-name"})
                foodTitle.appendChild(document.createTextNode(" " + dish + "         "))

                foodItem.appendChild(foodTitle)
                //restriction = "    ("
                for (var rest=0; rest< Object.keys(dishes[dish]["diet"]).length-1; rest ++) {
                    //restriction += "--" +dishes[dish]["diet"][rest] + ", "
                    restriction = dishes[dish]["diet"][rest]
                    var img = Util.create("img", {"class":"image icon-diet", "src":"images/"+restriction+".png"});
                    foodRestrictions.appendChild(img)
                }
                foodItem.appendChild(foodRestrictions)
                foodItem.appendChild(Util.create("br"))
                //restriction += "--" + dishes[dish]["diet"][rest] + ")"
                description = document.createTextNode(dishes[dish]["description"])
                //diet = document.createTextNode(restriction)

                
                //foodItem.appendChild(foodRestrictions)
                //foodItem.appendChild(document.createElement("br"));
                foodDescription.appendChild(description)
                foodItem.appendChild(foodDescription)
                //foodItem.appendChild(document.createElement("br"));
                


                 
                // foodRestrictions.appendChild(diet)
                // food.appendChild(foodItem)
                // food.appendChild(foodDescription)
                // food.appendChild(foodRestrictions)
                // modalBody.appendChild(food)


                modalBody.appendChild(foodItem)
                // modalBody.appendChild(foodDescription)
                // modalBody.appendChild(foodRestrictions)


                // This is what happens when we click on a star
                foodItem.addEventListener('click', function(evt) {
                    var foodName = evt.path[0].id
                    var foodType = evt.target.closest("h4.modal-food-type").id
                    //console.log("food",evt.path[0], foodName)
                    updateStarOnClick(evt)
                    updateFavorites(foodType, foodName)
                    updateMenu()
                })


                //make sure that the favorites are updated
                if (favoriteDishes.isIn("Entrees",dish)) { 
                    fav.setAttribute("class", "fa fa-star")
                    fav.style.color = starColor
                } else { 
                    fav.setAttribute("class", "fa fa-star-o")
                    fav.style.color = "black"
                }
            }
        }
    }
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
    navigationalItems[0].style.color = "#f0eceb"                            
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

    trigger.addEventListener("click", toggleModal);
    closeButton[0].addEventListener("click", toggleModal);
    submit[0].addEventListener("click", toggleModal);
    trigger2[0].addEventListener("click", toggleLogInModal);
    trigger2[1].addEventListener("click", toggleSignInModal);
    closeButton[1].addEventListener("click", closeModal);
    submit[1].addEventListener("click", submitModal);
    window.addEventListener("click", windowOnClick);
});
