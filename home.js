// JS code for home page. Handles the clicking responses on the home page
var dorms = ["baker", "mccormick", "simmons", "next", "maseeh"]
// dictionary to translate dietary tags into words
var dietDict = {"halal": "halal", "gluten free" : "gluten", "gluten-free" : "gluten", "vegan" : "vegan" , "kosher": "kosher" , "vegetarian": "vegeterian"}
// var dormList = ["baker", "maseeh", "mccormick", "next", "simmons","specials"]; // dormList is the list of active dorms on the page
var currentDishes; 
var starColor = "#FF9B01";
var allDorms = {};                                              // allDorms is the dictionary that maps dorm name to Node element of dorm card
var dieraryRestrictions = []                                    // list of the dietary restirctions that are active on the page
var globalMealTime = "dinner"
var globalDate = "05/07/2018"
if (sessionStorage.favoriteDishes != null) {
    var favDishes = JSON.parse(sessionStorage.getItem("favoriteDishes"))
    for (var d = 0; d < favDishes['dishes']['Entrees'].length; d++){
        if (!favoriteDishes.isIn('Entrees', favDishes['dishes']['Entrees'][d])) {
            favoriteDishes.addDish('Entrees', favDishes['dishes']['Entrees'][d])
        }
    }
} else {
    var favDishes = {"dishes":{"Entrees":[], "Sides":[]}}
}
if (sessionStorage.dietStorage != null) {
    var dietStore = JSON.parse(sessionStorage.dietStorage);
        for (var key in dietStore) {
            if (dietStore[key]) {
                dieraryRestrictions.push(key)
            }
        }
}
// given a dictionary make a deep copy of the dictionary 
// used to create a copy of all of the dishes in our database 
function copyDishes(mainDict, globalMealTime, globalDate) { 
    //console.log(mainDict, globalMealTime, globalDate)
    newDishes = {} 
    for (var dorm in mainDict) {                                            // for each dorm 
        dormDishes = {}
        for (var meal in mainDict[dorm]) {                                  // for each meal type, i.e. Entree, Side, Dessert  
            mealType = {}
            for (var dish in mainDict[dorm][meal]) { 
                if (dorm == "baker" && meal == "Entrees" && dish == "Eggs Benedict") {
                    console.log(dorm, dish, globalDate, mainDict[dorm][meal][dish]["date"],  mainDict[dorm][meal][dish]["date"]==globalDate, mainDict[dorm][meal][dish]["time"] == globalMealTime)
                }                       // for each dish  
                                
                if (mainDict[dorm][meal][dish]["time"] == globalMealTime && mainDict[dorm][meal][dish]["date"] == globalDate) {   // if the meal time is the same 
                    mealType[dish] = mainDict[dorm][meal][dish]             // copy the dish data over, this is the deepest level of the dictionary 
                }
            }
            dormDishes[meal] = mealType                         
        }
        newDishes[dorm] = dormDishes                            
    }
    console.log(newDishes)
    return newDishes                                                        // return the new dictionary 
}    


// called when the checkbox on dorms are clicked/unclicked
// used for filtering the dorms, in order to change what cards appear on the page 
function onCheckClicked(cb, dorm) {
    console.log("dormList", dormList)
    currentDishes = copyDishes(ALLDISHES, globalMealTime, globalDate)
    if (cb.checked == false) {                                  // if it isn't checked, remove the dorm
        var index = dormList.indexOf(dorm);
        if (index > -1) {                                   
            dormList.splice(index, 1);                          // remove dorm from dormList
            document.getElementById(dorm).remove();             // remove it from the document
        }
    } else if (cb.checked == true) {                            // otherwise if it is checked
        var main = document.getElementById("mainClass");
        var index = dormList.indexOf(dorm);
        if (index == -1) {                                       // if the dorm isn't in the dormList, add it                             
            dormList.push(dorm);
            var newDorms = sortDorms(dormList);                 // sort the dorms in order again
            if (newDorms.indexOf("specials") > -1) {
                newDorms.splice(newDorms.indexOf("specials"), 1);
                newDorms.unshift("specials");
            }
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

// updates dorm card display based on whether there are available meals
function dormHasMeals(dishes){
    for (var dorm in dorms){
        try {
        if (Object.keys(dishes[dorms[dorm]]["Entrees"]).length == 0  && Object.keys(dishes[dorms[dorm]]["Sides"]).length == 0 ){
            var index = dormList.indexOf(dorm);  
            document.getElementById(dorms[dorm]+"Menu").innerHTML = "No Food Available.";           // remove it from the document
        }    
    } catch (E) {}     
    }
    updateCardLayout();   
 
}    

function restoreCards(){
    for (var dorm in dorms){    
        var main = document.getElementById("mainClass");
        var index = dormList.indexOf(dorm);    
        if (index = -1) {                             // if the dorm isn't in the dormList, add it                             
            dormList.push(dorms[dorm]);
            var newDorms = sortDorms(dormList);                 // sort the dorms in order again
            if (newDorms.indexOf("specials") > -1) {
                newDorms.splice(newDorms.indexOf("specials"), 1);
                newDorms.unshift("specials");
            }
            while (main.firstChild) {                           // clear out the current dorms from the main
                main.removeChild(main.firstChild);
            }
            for (var j = 0; j < newDorms.length; j++) {         // add the dorms in sorted order back to main
                main.appendChild(allDorms[newDorms[j]]);
            }
        }
    }
}              


//called when the radio button to specify which meal type is to be displayed 
function mealTimeUpdate(cb, mealTime){
    // we can assume that tgus us called we are changing the display to be of that meal type
    restoreCards();
    globalMealTime = mealTime;
    performdietaryFiltering(); // filter out the dishes based on what we want
    timeUpdate(mealTime);
}

// called when radiobutton on date is clicked. 
// mealDate is the MM/DD/YYYY, while day is the written day
function mealDateUpdate(cb, mealDate, day) {
    restoreCards();
    globalDate = mealDate;
    performdietaryFiltering();
    dayUpdate(day);
}
// called when the checkbox on dietary restrictions is clicked/unclicked
// used to trigger filtering of dishes based on the restrictions 
function dietaryUpdate(cb, diet) { 
    restoreCards();
    if (cb.checked == false) {                                      // if the checkbox is not checked 
        while (dieraryRestrictions.includes(diet)) {                   // if it is already in the list of restrictions
            var indexOfRemove = dieraryRestrictions.indexOf(diet);  // remove it from the list of our dietary restrictions
            dieraryRestrictions.splice(indexOfRemove, 1);
        }
    } else {                                                        // if the checkbox is checked 
        dieraryRestrictions.push(diet)                              // add it to the list of our dietary restrictions 
    }
    performdietaryFiltering()                                       // filter the dorms 
}

// updates the day display on the home page
function dayUpdate(day) {
    var dateDisplay = document.querySelector('.dateDisplay');
    dateDisplay.innerHTML = day;
}

// updates the time display on the home page
function timeUpdate(meal) {
    var dateDisplay = document.querySelector('.mealDisplay');
    dateDisplay.innerHTML = meal;
}

// filter out the dishes that are available based on the dietary restictions
// TODO: This is where I'd assume we'd add the Mealtype, and Date filtering functionality
function performdietaryFiltering() {
    //console.log(globalMealTime)
    currentDishes = copyDishes(ALLDISHES, globalMealTime, globalDate)       // reset currentDishes to be everything
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
    updateDishesForDorms(currentDishes);  
    dormHasMeals(currentDishes);
                                       // update the cards to reflect this change
}

//search
var a = document.getElementById('food-search');
a.addEventListener('submit',function(e) {
    restoreCards();
    e.preventDefault();
    var b = document.getElementById('text-input').value;
    currentDishes = copyDishes(ALLDISHES, globalMealTime, globalDate) ;
    // go through our list of foods and remove the ones that do not fit the restriction & remove 
    for (var dorm in currentDishes) {                                       // go through the dorms 
        var dormCurrentDishes = currentDishes[dorm]
        for (var meal in currentDishes[dorm]) {                             // go through all of the meals 
            var currentMealDishes = currentDishes[dorm][meal]
            for (var dishName in currentMealDishes) {                       // go through the dishes for that meal 
                var dish = currentMealDishes[dishName]
                console.log(b)
                if ((! dish["description"].toUpperCase().includes(b.toUpperCase()))&&(!dish["diet"].includes(dietDict[b]))) {  // if the food does not satify the restriction 
                    delete currentDishes[dorm][meal][dishName]          // remove it from the currentDishes
                }
            }
        }  
    }


    // update the cards to reflect this change
    //console.log(currentDishes);
    updateDishesForDorms(currentDishes)
    dormHasMeals(currentDishes);
    // restoreCards();

    
});

// repopulates the dishes that are in the dorm based on the current dishes 
// updates the dishes presented on the cards  
function updateDishesForDorms(currentDishes) { 
    // dormList = ["specials"]
    // dormList = ["baker", "maseeh", "mccormick", "next", "simmons","specials"];         //recall the dormList to initiate allDorms
    for (var i = 0; i < dormList.length; i++) {                                         // for each dorm 
        allDorms[dormList[i]] = document.getElementById(dormList[i]);                   // populate the card that is attached to the dorm 
    }
    //for each of the dorms, go through and populate their menu according to the data we have on file
    for (var i=0; i<dormList.length-1; i++) {
        // console.log("currentdish", currentDishes)
        if (dormList[i] != "specials"){
        var dormName = dormList[i]
        // console.log(dormName, currentDishes[dormName])
        var menu = document.getElementById(dormName +"Menu") 
        var dishesForDorm = currentDishes[dormName]["Entrees"]

        // clear out all of the dishes that are attached to that menu
        while (menu.firstChild) {    
            menu.removeChild(menu.firstChild);
        }

        // for each of the dishes that are being served for that dorm 
        for (var j=0; j<Object.keys(dishesForDorm).length; j++) {
            var dishName = Object.keys(dishesForDorm)[j].slice(0,-3)
            var dish = Util.create("p", {"class":"card-title", "id": dishName})

            dish.addEventListener('click', function (evt) {
                var foodName = evt.target.closest("p.card-title").id 
                updateStarOnClick(evt)
                updateFavorites("Entrees",foodName)
                updateMenu()
            })
            // if (favDishes['dishes']['Entrees'].indexOf(dishName) == -1) {
                // console.log(favDishes, dishName, "in top")
                var fav = Util.create("span", {"class":"fa fa-star-o", "id": "star" + dormName + "," + dishName})
            // } else {
            //     console.log(favDishes, dishName, "in bottom")
            //     var fav = Util.create("span", {"class":"fa fa-star", "id": "star" + dormName + "," + dishName})
            //     fav.style.color = starColor;
            // }
            var text = document.createTextNode(" "+dishName)
            
            dish.appendChild(fav)
            dish.appendChild(text)
            menu.appendChild(dish)
        }
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

function updateStar(target) {
    var currentStar = target.firstChild                                   // find the star that we want to address 
        var currentStarClass  = target.firstChild.getAttribute("class")       
        if (currentStarClass == "fa fa-star-o") {                            
            currentStar.classList = "fa fa-star"
            currentStar.style.color = starColor
        } else { 
            currentStar.classList = "fa fa-star-o"
            currentStar.style.color = "black"
        }
}

// update the list of favorite food items
function updateFavorites(dishtype, dish) { 
    //console.log ("Iwascalled")
    //console.log(favoriteDishes.favorites(dishtype))
    //console.log(favoriteDishes.isIn(dishtype, dish))
    // console.log(fav)
    if (favoriteDishes.isIn(dishtype, dish)) {                            // if the dish is already in favorites then we want to remove it 

        favoriteDishes.removeDish(dishtype,dish)
    } else {                                                             // if the dish is not in favorites then add it 

        favoriteDishes.addDish(dishtype,dish)
    }
    sessionStorage.setItem("favoriteDishes", JSON.stringify(favoriteDishes))
}

// after a dish has been added to favorites 
// go through the other menus and add that dish to their favorites too 
function updateMenu() { 
    for (var i = 0; i < dormList.length-1; i++) {
        if (dormList[i] != 'specials') {
        var dormName = dormList[i]
        var dishesForDorm = currentDishes[dormName]["Entrees"]
        for (var j =0; j < Object.keys(dishesForDorm).length; j++) {
            var dishName = Object.keys(dishesForDorm)[j].slice(0,-3)
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

    dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"]; 
    // console.log("dorm",document.getElementById("request_dorm").value,
    //     "time",document.getElementById("request_time").value,
    //     "date",document.getElementById("request_date").value,
    //     "food",document.getElementById("request_food").value)
   
    if (sessionStorage.dietStorage != null) {
        var dietStore = JSON.parse(sessionStorage.dietStorage);
        for (var key in dietStore) {
            if (dietStore[key]) {
                document.querySelector("#"+key).checked = true;
                dieraryRestrictions.push(key)
            }
        }
        performdietaryFiltering();
    }

    // called when the document is ready 
    currentDishes = copyDishes(ALLDISHES, globalMealTime, globalDate)
    //console.log(currentDishes)
    for (var i = 0; i < dormList.length; i++) {
        allDorms[dormList[i]] = document.getElementById(dormList[i]);
    }


    //for each of the dorms, go through and populate their menu according to the data we have on file
    for (var i=0; i<dormList.length-1; i++) {
        var dormName = dormList[i]
        var menu = document.getElementById(dormName +"Menu") 
        var dishesForDorm = currentDishes[dormName]["Entrees"]


        // clear out all of the dishes that are attached to that menu, before you add them again.
        while (menu.firstChild) {    
            menu.removeChild(menu.firstChild);
        }

        // for each of the dishes that are being served for that dorm 
        for (var j=0; j<Math.min(Object.keys(dishesForDorm).length, 6); j++) {
            var dishName = Object.keys(dishesForDorm)[j].slice(0,-3)
            var dish = Util.create("p", {"class":"card-title", "id": dishName})
            dish.addEventListener('click', function (evt) {
                var foodName = evt.target.closest("p.card-title").id 
                updateStarOnClick(evt)
                updateFavorites("Entrees", foodName)
                updateMenu()
            })
            var fav = Util.create("span", {"class":"fa fa-star-o", "id": "star" + dormName + "," + dishName})
            var text = document.createTextNode(" " + dishName)
            
            dish.appendChild(fav)
            dish.appendChild(text)
            menu.appendChild(dish)
        }
        if (Object.keys(currentDishes[dormName]["Entrees"]).length == 0  && Object.keys(currentDishes[dormName]["Sides"]).length == 0 ){                     // remove dorm from dormList
            menu.innerHTML = "No Food Available.";           // remove it from the document
        } 
    }


    // if there is favorites: update the menu to reflect that 
    if (sessionStorage.favoriteDishes != null) {
        var favDishes = JSON.parse(sessionStorage.getItem("favoriteDishes"))
        for (var d = 0; d < favDishes['dishes']['Entrees'].length; d++){
            if (!favoriteDishes.isIn('Entrees', favDishes['dishes']['Entrees'][d])) {
                favoriteDishes.addDish('Entrees', favDishes['dishes']['Entrees'][d])
            }
        }
        updateMenu()
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
        })  
    }




    // When the user clicks the close button
    modalClose.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if (sessionStorage.dormCheckboxStorage != null) {
        var dormCheckboxStore= JSON.parse(sessionStorage.dormCheckboxStorage);
        for (var key in dormCheckbox){
            if (!dormCheckboxStore[key]) {
                document.querySelector("#"+key+"Check").checked = false;
                dormList.splice(dormList.indexOf(key),1)
                allDorms[key] = document.getElementById(key)
                document.getElementById(key).remove();             // remove it from the document
            } else {
                document.querySelector("#"+key+"Check").checked = true;
            }
        }
        updateCardLayout();
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
                var dishName = dish.slice(0,-3)
                //var food = Util.create("div", {"class": "food-item", "id":dish})
                var foodItem = Util.create("p", {"class": "food-item", "id": dishName})
                var foodDescription = Util.create("div", {"class": "food-description", "id": dishName})
                var foodRestrictions = Util.create("p", {"class": "food-restriction", "id": dishName})
                var fav = Util.create("span", {"class":"fa fa-star-o", "id": dishName})

                foodItem.appendChild(fav)
                var foodTitle = Util.create("h6", {"class":"modal-food-name"})
                foodTitle.appendChild(document.createTextNode(" " + dishName))

                foodItem.appendChild(foodTitle)
                //restriction = "    ("
                for (var rest=0; rest< Object.keys(dishes[dish]["diet"]).length-1; rest ++) {
                    //restriction += "--" +dishes[dish]["diet"][rest] + ", "
                    restriction = dishes[dish]["diet"][rest]
                    var img = Util.create("img", {"class":"image icon-diet", "src":"images/"+restriction+".svg"});
                    foodRestrictions.appendChild(img)
                }
                foodItem.appendChild(foodRestrictions)
                foodItem.appendChild(Util.create("br"))

                description = document.createTextNode(dishes[dish]["description"])

                foodDescription.appendChild(description)
                foodItem.appendChild(foodDescription)


                modalBody.appendChild(foodItem)

                // This is what happens when we click on a star
                foodItem.addEventListener('click', function(evt) {
                    var foodName = evt.path[0].id
                    updateStar(evt.target.closest("p.food-item"))
                    updateFavorites('Entrees', foodName)
                    updateMenu()
                })


                //make sure that the favorites are updated
                if (favoriteDishes.isIn("Entrees",dishName)) { 
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

function notSideBarClick(inputClass) {
    classLists = ["rad", "list-group", "panel", "strong", "list-group-submenu", "list-group-item", "cb", "collapse", "radioLabel"]
    if (classLists.indexOf(inputClass) == -1) {
        return true;
    } else {
        return false;
    }
}

//navbar code for food selection form pop-up
window.addEventListener('load', function() {
    var modal = document.querySelector(".form-request");
    var trigger = document.querySelector(".form");
    var submit = document.querySelector(".submit-form");
    var closeButton = document.querySelector(".close-button");
    var a1 = document.querySelector(".dropdown-item");
    var navigationalItems = document.querySelectorAll(".nav-link");
    navigationalItems[0].style.color = "#f0eceb"
    var navButton = document.querySelector(".navbar-toggler");
    var dropDown = document.querySelector(".original");
    var icons = document.querySelector("#iconTabs");
    var wrapper = document.querySelector(".wrapper");
    var mainClassCards = document.querySelector(".bigMainClass");
    var rSubmit = document.getElementById("request-submit");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        } else if (event.target === a1) {
            if (event.target.id === "profilePage") {
                window.location.replace("/profile.html");
            }
        } else if (event.target === navButton) {
            if (dropDown.style.display == 'none' || dropDown.style.display == "") {
                dropDown.style.display = 'block';
            } else {
                dropDown.style.display = 'none';
            }
        } else if (event.target.id == "icons" || event.target.id =="iconTabs") {
            icons.style.display = "none";
            wrapper.style.marginLeft = "0px";
            wrapper.style.zIndex = "1";
            mainClassCards.style.zIndex = "-1"

        } else if (window.innerWidth < 930 && notSideBarClick(event.target.classList[0])) {
            icons.style.display = "block";
            wrapper.style.marginLeft = "-200px";
            wrapper.style.zIndex = "0";
            mainClassCards.style.zIndex = "0"

        }
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
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});
