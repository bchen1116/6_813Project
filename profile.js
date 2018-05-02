var profileDorms = ["specials"];

$(document).ready(function() {
    
});

function clickedDining(check, dorm) {
    console.log(check, dorm)
    console.log(check.checked)
    if (check.checked == false) {                                  // if it isn't checked, remove the dorm
        var index = profileDorms.indexOf(dorm);
        if (index > -1) {                                   
            profileDorms.splice(index, 1);                          // remove dorm from dormList             // remove it from the document
        }
    } else if (check.checked == true) {                            // otherwise if it is checked
        var index = profileDorms.indexOf(dorm);
        if (index = -1) {                                       // if the dorm isn't in the dormList, add it                             
            profileDorms.push(dorm); 
        }
    }
    console.log(profileDorms);
}

// function profileChecks() { 
//     console.log(checkedValue, "in");
//     var inputElements = document.getElementsByClassName('checkmark');
//     for(var i=0; inputElements[i]; ++i){
//           if(inputElements[i].checked){
//                checkedValue.push(inputElements[i].value);
//           }
//           else {
//             if (checkedValue.includes(inputElements[i])) {
//                 var index = checkedValue.indexOf(inputElements[i]);
//                 checkedValue.splice(index, 1);
//             }
//           }
//     }
// }

window.addEventListener('load', function() {
    var modal = document.querySelector(".form-request");
    var trigger = document.querySelector(".form");
    var submit = document.querySelector(".submit-form");
    var closeButton = document.querySelector(".close-button");
    var a1 = document.querySelector(".dropdown-item");
    var newButton = document.querySelector("#order-button");

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
        }
    }

    newButton.addEventListener("click", toggleModal);
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    submit.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});