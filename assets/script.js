// Render Current Date

var currentDate = moment().format("MMM Do YY");
var currentDay = moment().format('dddd');

console.log(currentDate);
console.log(currentDay);

$('#currentDay').append(currentDay + ", " + currentDate);
$('#currentDay').css("color", "#06AED5");

// Storage of Tasks & Event Listener

var taskForm = document.getElementById("taskForm");
var task9Am = document.getElementById("task9Am");
var task10Am = document.getElementById("task10Am");
// var task11Am = document.getElementById("task11Am");
// var task12Pm = document.getElementById("task12Pm");
// var task1Pm = document.getElementById("task1Pm");
// var task2Pm = document.getElementById("task2Pm");
// var task3Pm = document.getElementById("task3Pm");
// var task4Pm = document.getElementById("task4Pm");
// var task5Pm = document.getElementById("task5Pm");

taskForm.addEventListener("submit", function (event) {

    localStorage.setItem("9 AM Task", task9Am.value);
    localStorage.setItem("10 AM Task", task10Am.value);
    // localStorage.setItem("11 AM Task", task11Am.value);
    // localStorage.setItem("12 PM Task", task12Pm.value);
    // localStorage.setItem("1 PM Task", task1Pm.value);
    // localStorage.setItem("2 PM Task", task2Pm.value);
    // localStorage.setItem("3 PM Task", task3Pm.value);
    // localStorage.setItem("4 PM Task", task4Pm.value);
    // localStorage.setItem("5 PM Task", task5Pm.value);


});

// Render Tasks to Text Area

window.onload = function () {

    var savedValue9Am = localStorage.getItem("9 AM Task");
    var savedValue10Am = localStorage.getItem("10 AM Task");
    // var savedValue11Am = localStorage.getItem("11 AM Task");
    // var savedValue12Pm = localStorage.getItem("12 PM Task");
    // var savedValue1Pm = localStorage.getItem("1 PM Task");
    // var savedValue2Pm = localStorage.getItem("2 PM Task");
    // var savedValue3Pm = localStorage.getItem("3 PM Task");
    // var savedValue4Pm = localStorage.getItem("4 PM Task");
    // var savedValue5Pm = localStorage.getItem("5 PM Task");

    document.getElementById("task9Am").value = savedValue9Am;
    document.getElementById("task10Am").value = savedValue10Am;
    // document.getElementById("task11Am").value = savedValue11Am;
    // document.getElementById("task12Pm").value = savedValue12Pm;
    // document.getElementById("task1Pm").value = savedValue1Pm;
    // document.getElementById("task2Pm").value = savedValue2Pm;
    // document.getElementById("task3Pm").value = savedValue3Pm;
    // document.getElementById("task4Pm").value = savedValue4Pm;
    // document.getElementById("task5Pm").value = savedValue5Pm;

};