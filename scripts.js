// Write your JavaScript code here.
window.addEventListener("load", function() {
    let takeOffButton = document.getElementById("takeoff");
    let shuttleBackgound = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landingButton = document.getElementById("landing");
    let abortMissionButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("Up");
    let downButton = document.getElementById("Down");
    let rightButton = document.getElementById("Right");
    let leftButton = document.getElementById("Left");
    let rocket = document.getElementById("rocket");


    takeOffButton.addEventListener("click", function() {
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeOffConfirmation === true) {
             flightStatus.innerHTML = 'Shuttle in Flight.';
             shuttleBackgound.style.backgroundColor = 'blue';
             spaceShuttleHeight.innerHTML = '10000';
        }
    });
    landingButton.addEventListener("click", function() {
        let landing = window.alert("The shuttle islanding. Landing gear engaged.");
            flightStatus.innerHTML = 'The shuttle has landed.';
            shuttleBackgound.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
    });
    abortMissionButton.addEventListener("click", function() {
        let abortMission = window.confirm("Confirm that you want to abort the mission.");
        if (abortMission === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackgound.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
        }
    });
    upButton.addEventListener("click", function() {
        if (upButton === true) {

        }
    })
})
// Remember to pay attention to page loading!