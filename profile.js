dorms = ["baker", "mccormick", "simmons", "next", "maseeh"];

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
    var trashButton = document.querySelectorAll(".trash");

    deleteTrash(trashButton)
    function toggleModal() {
        modal[0].classList.toggle("show-modal");
        modal[1].classList.remove("show-modal")
        modal[0].style.zIndex = "2"
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
            var foodGrid = document.getElementById("food-grid2");
            var allDivMore = document.createElement("div")
            var allDiv = document.createElement("div")
            allDiv.classList.add("food-grid")
            var divText = document.createElement("div")
            var divTrash = document.createElement("div")

            var divFood = document.createElement("div");
            var divDate = document.createElement("div");
            var linebreak = document.createElement("br");
            var linebreak2 = document.createElement("br");

            var foodReq = document.createTextNode(rFood);
            divFood.appendChild(foodReq);

            realDate = changeDate(rDate)
            realTime = changeTime(rTime)

            var dateReq = document.createTextNode(realDate + ", " + realTime + " " + rDorm)
            divDate.appendChild(dateReq)

            divText.appendChild(foodReq)
            divText.appendChild(linebreak)
            divText.appendChild(dateReq)
            divText.appendChild(linebreak2)

            var trashBtn = document.createElement("BUTTON");
            trashBtn.classList.add("trash")
            var trashImg = document.createElement("IMG");
            trashImg.setAttribute("src", "images/trash.svg");
            trashImg.classList.add("icon-trash")

            trashBtn.appendChild(trashImg)
            divTrash.appendChild(trashBtn)

            allDiv.appendChild(divText)
            allDiv.appendChild(divTrash)
            allDivMore.appendChild(allDiv)
            foodGrid.appendChild(allDivMore)

            trashButton = document.querySelectorAll(".trash");
            toggleModal();
            deleteTrash(trashButton);
        }
    }

    rSubmit.addEventListener("click", validateForm);
    // newButton.addEventListener("click", function() {
        // console.log("new food request click")
    // })
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

function deleteTrash(trashClass) {
    trashClass[trashClass.length-1].addEventListener('click', function() {
        remove(trashClass[trashClass.length-1])
    });
}

function remove(elem){
    elem.parentElement.parentElement.style.display = "none"
}
function changeDate(date) {
    toMonth = {"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June",
               "07":"July","08":"August","09":"September","10":"October","11":"November","12":"December",}
    month = toMonth[date.substring(5,7)]
    space = " " 
    day = date.substring(8,10)
    console.log(month.concat(space).concat(day))
    return month.concat(space).concat(day)
}

function changeTime(time) {
    toTime = {"01":"1","02":"2","03":"3","04":"4","05":"5","06":"6",
               "07":"7","08":"8","09":"9","10":"10","11":"11","12":"12",
               "13":"1","14":"2","15":"3","16":"4","17":"5","18":"6",
               "19":"7","20":"8","21":"9","22":"10","23":"11","24":"12"}
    hour = toTime[time.substring(0,2)]
    minutes = time.substring(2,5)
    light = ""
    if (parseInt(time.substring(0,2)) < 12 || parseInt(time.substring(0,2)) == 24) {
        light = "am"
    }
    else {
        light = "pm"
    }
    return hour.concat(minutes).concat(light)
}

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
