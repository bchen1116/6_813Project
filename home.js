// JS code for home page. Handles the clicking responses on the page

// dormList is the list of active dorms on the page
var dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"];

// allDorms is the dictionary that maps dorm name to Node element of dorm card
var allDorms = {};                                  


// called when the checkbox on dorms are clicked/unclicked
function onCheckClicked(cb, dorm) {
    if (cb.checked == false) {                                  // if it isn't checked, remove the dorm
        var index = dormList.indexOf(dorm);
        if (index > -1) {                                   
            dormList.splice(index, 1);                          // remove dorm from dormList
            document.getElementById(dorm).remove();             // remove it from the document
        }
    } else if (cb.checked == true) {                            // otherwise if it is checked
        var main = document.getElementById("main");
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
    e.stopPropogation();
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

// called when the document is ready 
$(document).ready(function() {

    dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"];         //recall the dormList to initiate allDorms
    for (var i = 0; i < dormList.length; i++) {
        allDorms[dormList[i]] = document.getElementById(dormList[i]);
    }

    // calls the menu card pop-up
    var modal = document.getElementById('myModal');
    
    // Get the button that opens the modal
    // COMMENTED OUT FOR CONVENIENT TESTING
    // TODO: make modal only display when clicking in area that doesn't highlight star!!!
    // for (var i = 0; i < dormList.length; i++) {
    //     document.getElementById(dormList[i]).addEventListener("click", function() {
    //         modal.style.display = "block";
    //     });
    // }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});