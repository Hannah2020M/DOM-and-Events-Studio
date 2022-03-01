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
    shuttleFlightScreen.setAttribute("style","background-color: #0000ff");
    
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerText = "10000";
  }
});

 let landingBtn = document.getElementById("landing");
 landingBtn.addEventListener('click',function(){
 window.alert("The shuttle is landing. Landing gear engaged.");

let flightStatus = document.getElementById("flightStatus");
flightStatus.innerText = "The shuttle has landed.";

let shuttleFlightScreen = document.getElementById("shuttleBackground");
shuttleFlightScreen.setAttribute("style","background-color: #009933");

 let shuttleHeight = document.getElementById("spaceShuttleHeight");
 shuttleHeight.innerText = "0";

 });

 let abortMissionBtn = document.getElementById("missionAbort");
 abortMissionBtn.addEventListener('click',function(){
  // window.confirm()
let shouldAbortMission = window.confirm("Confirm that you want to abort the mission.");
  if(shouldAbortMission){

  }


let flightStatus = document.getElementById("flightStatus");
    flightStatus.innerText = "Mission aborted.";
    
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
shuttleFlightScreen.setAttribute("style","background-color: #009933");

let shuttleHeight = document.getElementById("spaceShuttleHeight");
 shuttleHeight.innerText = "0";


 });
 let rocketImg = this.document.getElementById("rocket");
 let top = 0;
 let bottom = 0;
 let left = 0;
 let right = 0; 


 let leftBtn = document.getElementById("up");
  leftBtn.addEventListener('click',function(){
   left -= 10;
   document.getElementById("rocket").style.left = (left - 10) + "px";
 
//  let upBtn = document.getElementById("up");
//   upBtn.addEventListener('click',function(){
//     let shuttleHeight = document.getElementById("spaceShuttleHeight");
//    // shuttleHeight.innerText = "0";
//     let shuttleHeightAmount = Number(shuttleHeight.innerText);
//     shuttleHeightAmount += 10000; 
//     shuttleHeight.innerText = shuttleHeightAmount;


  });

  let rightBtn = document.getElementById("down");
  rightBtn.addEventListener('click',function(){
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
   // shuttleHeight.innerText = "0";
    let shuttleHeightAmount = Number(shuttleHeight.innerText);
    shuttleHeightAmount -= 10000; 
    shuttleHeight.innerText = shuttleHeightAmount;
    //bottom += 10;
    left += 10;
   // document.getElementById("rocket").style.top = (top - 10) + "px";
   document.getElementById("rocket").style.left = (left - 10) + "px";




//   let downBtn = document.getElementById("down");
//   downBtn.addEventListener('click',function(){
//     let shuttleHeight = document.getElementById("spaceShuttleHeight");
//    // shuttleHeight.innerText = "0";
//     let shuttleHeightAmount = Number(shuttleHeight.innerText);
//     shuttleHeightAmount -= 10000; 
//     shuttleHeight.innerText = shuttleHeightAmount;
//     //bottom += 10;
//     left += 10;
//    // document.getElementById("rocket").style.top = (top - 10) + "px";
//    document.getElementById("rocket").style.left = (left - 10) + "px";

  });



});