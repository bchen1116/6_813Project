//navbar code for food selection form pop-up
window.addEventListener('load', function() {
    var modal = document.querySelectorAll(".form-request");   // contains [formRequest, signIn/LogIn] modals 
    var trigger = document.querySelector(".form");           // only contains card for formRequest
    var trigger2 = document.querySelectorAll(".form2");          // contains cards singIn and logIn
    var submit = document.querySelectorAll(".submit-form");         // submit button for both formRequest and signIn/logIn
    var closeButton = document.querySelectorAll(".close-button");       // x button for both formrequest and signIn/logIn
    var a1 = document.querySelector(".dropdown-item");
    var navigationalItems = document.querySelectorAll(".nav-link");
    navigationalItems[0].style.color = "#f0eceb"
    var navButton = document.querySelector(".navbar-toggler");
    var dropDown = document.querySelector(".original");
    var signIn = document.querySelector("#signUp");                 // sign up button
    var login = document.querySelector("#login");                   // log in button
    var signInModal = document.querySelector(".signBody");
    var signInLabel = document.querySelector("#signInLabel");
    var loginModal = document.querySelector(".loginBody");
    var logInLabel = document.querySelector("#logInLabel");
    var header = document.querySelector(".signUpHeader");
    var logHead = document.querySelector("#logText");
    var signHead = document.querySelector("#signText");

    console.log(trigger2);
    function toggleModal() {
        modal[0].classList.toggle("show-modal");
        modal[1].classList.remove("show-modal")
    }

    function toggleSignInModal() {
        modal[1].classList.toggle("show-modal");
        modal[0].classList.remove("show-modal");
        loginModal.style.display = "none";
        signInModal.style.display = "block";
        setColors(false)
    }

    function toggleLogInModal() {
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
                signInModal.style.display = "none";
                loginModal.style.display = "block";
            } else {
                loginModal.style.display = "none";
                signInModal.style.display = "block";
            }
        }
    }

    function closeModal() {
        modal[1].classList.remove("show-modal");
    }

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
    }




    trigger.addEventListener("click", toggleModal);
    closeButton[0].addEventListener("click", toggleModal);
    submit[0].addEventListener("click", toggleModal);
    trigger2[0].addEventListener("click", toggleLogInModal);
    trigger2[1].addEventListener("click", toggleSignInModal);
    closeButton[1].addEventListener("click", closeModal);
    submit[1].addEventListener("click", toggleSignInModal);
    window.addEventListener("click", windowOnClick);
});

var profileDorms = ["specials"];
var dormCheckbox = {"baker": false, "mccormick": false, "simmons": false, "next": false, "maseeh": false} 

window.addEventListener('load', function() {
  for (var key in dormCheckbox){
    if (dormCheckbox[key] == true) {
        console.log(document.getElementById(key));
        document.getElementById(key).checked = true;
    }
  }
});

function clickedDining(check, dorm) {
    console.log(check, dorm)
    console.log(check.checked)
    if (check.checked == false) {    
        console.log("false"); 
        dormCheckbox[dorm] = false;                               // if it isn't checked, remove the dorm
        var index = profileDorms.indexOf(dorm);
        if (index > -1) {                                   
            profileDorms.splice(index, 1);
                                    // remove dorm from dormList             // remove it from the document
        }
    } else if (check.checked == true) {                            // otherwise if it is checked
        console.log("true");
        console.log(dorm);
        console.log(document.getElementById(dorm).checked);
        var index = profileDorms.indexOf(dorm);
        dormCheckbox[dorm] = true;
        if (index = -1) {                                       // if the dorm isn't in the dormList, add it                             
            profileDorms.push(dorm); 
            
        }
        console.log(event.target);


    }
    if (profileDorms != ["specials"]) {
        dormList = profileDorms;
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