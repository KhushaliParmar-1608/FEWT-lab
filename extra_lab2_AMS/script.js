
let startRoll = 0;
let endRoll = 0;
let currentRoll = 0;

let present = 0;
let absent = 0;
let remaining = 0;

// Start Attendance
document.getElementById("startBtn").addEventListener("click", function () {

    startRoll = Number(document.getElementById("startRoll").value);
    endRoll = Number(document.getElementById("endRoll").value);

    if (startRoll == 0 || endRoll == 0) {
        alert("Please Enter Roll Numbers");
        return;
    }

    if (startRoll > endRoll) {
        alert("Start Roll Number should be less than End Roll Number");
        return;
    }

    currentRoll = startRoll;
    present = 0;
    absent = 0;
    remaining = endRoll - startRoll + 1;

    showRoll();
    updateCount();

});

// Present Button
document.getElementById("presentBtn").addEventListener("click", function () {
    markAttendance("Present");
});

// Absent Button
document.getElementById("absentBtn").addEventListener("click", function () {
    markAttendance("Absent");
});

// Arrow Keys
document.addEventListener("keydown", function (event) {

    if (event.key == "ArrowRight") {
        markAttendance("Present");
    }

    if (event.key == "ArrowLeft") {
        markAttendance("Absent");
    }

});

// Attendance Function
function markAttendance(type) {

    if (currentRoll == 0) {
        alert("Click Start Attendance First");
        return;
    }

    if (currentRoll > endRoll) {
        alert("Attendance Completed");
        return;
    }

    if (type == "Present") {

        present++;

        document.getElementById("status").innerHTML = "✔ PRESENT";
        // document.getElementById("status").className = "present";

    }
    else {

        absent++;

        document.getElementById("status").innerHTML = "✖ ABSENT";
        // document.getElementById("status").className = "absent";

    }

    remaining--;

    updateCount();

    currentRoll++;

    if (currentRoll <= endRoll) {

        showRoll();

    }
    else {

        document.getElementById("currentRoll").innerHTML = "DONE";

        setTimeout(function () {

            alert("Attendance Completed");

        }, 300);

    }

}

// Show Roll Number
function showRoll() {

    document.getElementById("currentRoll").innerHTML = currentRoll;

}

// Update Count
function updateCount() {

    document.getElementById("presentCount").innerHTML = present;

    document.getElementById("absentCount").innerHTML = absent;

    document.getElementById("remainingCount").innerHTML = remaining;

}
