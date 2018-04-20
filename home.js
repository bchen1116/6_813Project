// JS code for home page. Handles the clicking responses on the page


// dormList is the list of active dorms on the page
var dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"];
var currentDishes = Object.assign(ALLDISHES)

// allDorms is the dictionary that maps dorm name to Node element of dorm card
var allDorms = {}; 
var dieraryRestrictions = []                                

// called when the checkbox on dorms are clicked/unclicked
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

// called when the checkbox on dietary restrictions is clicked/unclicked
function dietaryUpdate(cb, diet) { 
    if (cb.checked == false) {                                  // remove it from the list of our dietary restrictions  
        if (dieraryRestrictions.includes(diet)) {
            var indexOfRemove = dieraryRestrictions.indexOf(diet);
            dieraryRestrictions.splice(indexOfRemove, 1);
            //console.log(dieraryRestrictions)
        }
    } else {                                                    // add it to the list of our dietary restrictions 
        dieraryRestrictions.push(diet)
    }
    //console.log(dieraryRestrictions)

    var currentDishes = Object.assign(ALLDISHES)                                   // reset currentDishes to be everything
    console.log(ALLDISHES)
    // go through our list of foods and remove the ones that do not fit the restriction & remove 
    for (var dorm in currentDishes) {              // go through the dorms 
        var dormCurrentDishes = currentDishes[dorm]
        //console.log(dormCurrentDishes, currentDishes, dorm)
        for (var dishName in dormCurrentDishes) {  // go through the dishes for that dorm 
            var dish = dormCurrentDishes[dishName]
            for (var i = 0; i < dieraryRestrictions.length; i++) {      // go through restrictions
                //console.log(dish["diet"])
                if (! dish["diet"].includes(dieraryRestrictions[i])) {       // if the food does not satify the restriction 
                    //console.log(dish, dieraryRestrictions[i])
                    delete currentDishes[dorm][dishName]        // remove it from the currentDishes
                }
            }
        }
    }

    // update the cards to reflect this change
    updateDishesForDorms()
}


// repopulates the dishes that are in the dorm based on the current dishes
function updateDishesForDorms() { 
    dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"];         //recall the dormList to initiate allDorms
    for (var i = 0; i < dormList.length; i++) {
        allDorms[dormList[i]] = document.getElementById(dormList[i]);
    }

    //for each of the dorms, go through and populate their menu according to the data we have on file
    for (var i=0; i<dormList.length-1; i++) {
        var dormName = dormList[i]
        var menu = document.getElementById(dormName +"Menu") 
        var dishesForDorm = currentDishes[dormName]

        // clear out all of the dishes that are attached to that menu
        while (menu.firstChild) {                           
                menu.removeChild(menu.firstChild);
        }

        //console.log(currentDishes)
        // for each of the dishes that are being served for that dorm 
        for (var j=0; j<Object.keys(dishesForDorm).length; j++) {
            var dishName = Object.keys(dishesForDorm)[j]
            var dish = Util.create("p", {"class":"card-title", "id": dishName})

            dish.addEventListener('click', function (evt) {
                var foodName = evt.target.closest("p.card-title").id 
                updateStarOnClick(evt)
                updateFavorites(foodName)
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


// updates the star after a click
function updateStarOnClick(e) { 
    try {
        var currentStar = e.target.firstChild.getAttribute("class");
        var newStar = document.createElement("span");
        if (currentStar == "fa fa-star-o") {
            newStar.setAttribute("class", "fa fa-star");
            newStar.style.color = "#d19b3d";
        } else {
            newStar.setAttribute("class", "fa fa-star-o");
        }
        e.target.replaceChild(newStar, e.target.firstChild);
    }   
    catch (E) {
        if (e.target.getAttribute("class") == "fa fa-star-o") {
            e.target.setAttribute("class", "fa fa-star");
            e.target.style.color = "#d19b3d";
        } else {
            e.target.setAttribute("class", "fa fa-star-o");
            e.target.style.color = "black";
        }
    }
    //e.stopPropogation();
}


// update our list of favorite food items
function updateFavorites(dish) { 
    if (favoriteDishes.includes(dish)) { // if the dish is already in favorites then we want to remove it 
        var indexOfRemove = favoriteDishes.indexOf(dish);
        if (indexOfRemove !== -1) {
            favoriteDishes.splice(indexOfRemove, 1);
        }
    } else { // if the dish is not in favorites then add it 
        favoriteDishes.push(dish)
    }
    //console.log(favoriteDishes)
}

// after a dish has been added to favorites 
// go through the other menus and add that dish to their favorites too 
function updateMenu() { 
    for (var i = 0; i < dormList.length-1; i++) {
        var dormName = dormList[i]
        var dishesForDorm = ALLDISHES[dormName]
        for (var j =0; j < Object.keys(dishesForDorm).length; j++) {
            var dishName = Object.keys(dishesForDorm)[j]
            var relevantStar = document.getElementById("star"+dormName+","+dishName)
            if (favoriteDishes.includes(dishName)) { 
                relevantStar.setAttribute("class", "fa fa-star")
                relevantStar.style.color = "#d19b3d"
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
        var dishesForDorm = ALLDISHES[dormName]

        // for each of the dishes that are being served for that dorm 
        for (var j=0; j<Object.keys(dishesForDorm).length; j++) {
            var dishName = Object.keys(dishesForDorm)[j]
            var dish = Util.create("p", {"class":"card-title", "id": dishName})

            dish.addEventListener('click', function (evt) {
                var foodName = evt.target.closest("p.card-title").id 
                updateStarOnClick(evt)
                updateFavorites(foodName)
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
        var special = Util.create("p", {"class":"card-title"})
        var text = document.createTextNode(SPECIALS[i])
        
        special.appendChild(text)
        specialMenu.appendChild(special)
    }




    // calls the menu card pop-up
    var modal = document.getElementById('myModal');
    var modalButton = document.getElementById('menuPopup')
    var modalClose = document.getElementsByClassName("close")[0]
    //console.log(modal, modalButton, modalClose)
    
    // Get the button that opens the modal
    // COMMENTED OUT FOR CONVENIENT TESTING
    // TODO: make modal only display when clicking in area that doesn't highlight star!!!
    for (var i = 0; i < dormList.length; i++) {
        document.getElementById(dormList[i]).addEventListener("click", function() {
            modal.style.display = "block";
        });
    }

    // When the user clicks on the see full button 
    modalButton.onclick = function() {
        modal.style.display = "block"
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

//navbar code for food selection form pop-up
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector(".form-request");
    var trigger = document.querySelector(".form");
    var submit = document.querySelector(".submit-form");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    submit.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});