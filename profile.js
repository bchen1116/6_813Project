dorms = ["baker", "mccormick", "simmons", "next", "maseeh"]

//navbar code for food selection form pop-up
window.addEventListener('load', function() {
    var modal = document.querySelectorAll(".form-request");   // contains [formRequest, signIn/LogIn] modals 
    var trigger = document.querySelector(".form");           // only contains card for formRequest
    var trigger2 = document.querySelectorAll(".form2");          // contains cards singIn and logIn
    var submit = document.querySelectorAll(".submit-form");         // submit button for both formRequest and signIn/logIn
    var closeButton = document.querySelectorAll(".close-button");       // x button for both formrequest and signIn/logIn
    var a1 = document.querySelector(".dropdown-item");
    var navigationalItems = document.querySelectorAll(".nav-link");
    navigationalItems[2].style.color = "#f0eceb"
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
    var newButton = document.querySelector("#order-button");
    var rSubmit = document.getElementById("request-submit");

    console.log(trigger)
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
    newButton.addEventListener("click", toggleModal);
    trigger.addEventListener("click", toggleModal);
    closeButton[0].addEventListener("click", toggleModal);
    // submit[0].addEventListener("click", toggleModal);
    trigger2[0].addEventListener("click", toggleLogInModal);
    trigger2[1].addEventListener("click", toggleSignInModal);
    closeButton[1].addEventListener("click", closeModal);
    submit[1].addEventListener("click", toggleSignInModal);
    window.addEventListener("click", windowOnClick);
});

// var profileDorms = ["specials"];
if (sessionStorage.dormCheckboxStorage == null) {
    var dormCheckboxStore = {"baker": true, "mccormick": true, "simmons": true, "next": true, "maseeh": true};
    sessionStorage.setItem("dormCheckboxStorage", JSON.stringify(dormCheckboxStore));
} else {
    var dormCheckboxStore= JSON.parse(sessionStorage.dormCheckboxStorage);
}
if (sessionStorage.dietStorage == null) {
    var dietStore = {"gluten": false, "halal": false, "kosher": false, "vegan": false, "vegetarian": false};
    sessionStorage.setItem("dietStorage", JSON.stringify(dietStore));
} else {
    var dietStore= JSON.parse(sessionStorage.dietStorage);
}

window.addEventListener('load', function() {
    var dormCheckbox = JSON.parse(sessionStorage.getItem('dormCheckboxStorage'));
    var checks = {};

    for (var i = 0, emp; i < dormCheckbox.length; i++) {
        emp = dormCheckbox[i];
        checks[dormCheckbox[i]] = emp;
    }
    for (var key in Object.keys(dormCheckbox)){
        if (dormCheckbox[dorms[key]]) {
            document.querySelector("#"+dorms[key]).checked = true;
        } else {
            document.querySelector("#"+dorms[key]).checked = false;
        }
    }

    var dietStore = JSON.parse(sessionStorage.getItem('dietStorage'))
    for (var key in dietStore){
        console.log(document.querySelector("#"+key), dietStore[key])
        document.querySelector("#"+key).checked = dietStore[key]
    }
});

function clickedDining(check, dorm) {
    if (check.checked == false) {     
        dormCheckboxStore[dorm] = false;                     
        sessionStorage.dormCheckboxStorage = JSON.stringify(dormCheckboxStore);
    } else if (check.checked == true) {                            // otherwise if it is checked
        dormCheckboxStore[dorm] = true;
        sessionStorage.dormCheckboxStorage = JSON.stringify(dormCheckboxStore);
        if (index = -1) {                                       // if the dorm isn't in the dormList, add it                             
            profileDorms.push(dorm); 
        }
    }
    if (profileDorms != ["specials"]) {
        dormList = profileDorms;
    }
}

function clickedDiet(check, diet) {
    if (check.checked == false) {     
        dietStore[diet] = false;                     
        sessionStorage.dietStorage = JSON.stringify(dietStore);
    } else if (check.checked == true) {                            // otherwise if it is checked
        dietStore[diet] = true;                     
        sessionStorage.dietStorage = JSON.stringify(dietStore);
    }
}
