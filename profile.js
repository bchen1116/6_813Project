var profileDorms = ["specials"];

$(document).ready(function() {
    
});

function clickedDining(check, dorm) {
    console.log(check, dorm)
    console.log(check.checked)
    if (check.checked == false) {                                  // if it isn't checked, remove the dorm
        var index = profileDorms.indexOf(dorm);
        if (index > -1) {                                   
            profileDorms.splice(index, 1);
            document.getElementById(dorm).checked = false;                          // remove dorm from dormList             // remove it from the document
        }
    } else if (check.checked == true) {                            // otherwise if it is checked
        var index = profileDorms.indexOf(dorm);
        if (index = -1) {                                       // if the dorm isn't in the dormList, add it                             
            profileDorms.push(dorm); 
            document.getElementById(dorm).checked = true;
        }
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

