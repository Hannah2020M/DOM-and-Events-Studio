// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load',function(){
let takeOffBtn = dcument.getElementById();
takeOffBtn.addEventListener('click',function(){
let isReadyToLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
  if(isReadyToLaunch{
    let flightStatus = document.getElementById("flightStatus");
    flightStatus.innerText = "Shuttle in flight.";
    let shuttleFlightScreen = document.getElementById("ShuttleBackground");
    shuttleFlightScreen.setAttribute("style","background-color: #009933");
}
});

});