// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  const missionAbort = document.getElementById("missionAbort");
  const button = document.getElementById("takeoff");
  const paragraph = document.getElementById("flightStatus");

  // Put your code for the exercises here.
  /*
  We could also use code in LC 101 textbook Ch23 solutions
  button.addEventListener('click', event => {
 paragraph.innerHTML = 'Shuttle in flight.';
  });
  */
  console.log(button);
  button.addEventListener("click", confirmliftoff);
  button.addEventListener("click", statusOfFlight);
  button.addEventListener("click", shuttleBkgrnd);
   button.addEventListener('click', function () {
    button.innerText = "Houston, we have liftoff!";
  });

  missionAbort.addEventListener("mousemove", function () {
    missionAbort.setAttribute('style', 'background-color:rgb(255,0,0');
  });
  missionAbort.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "";
  });
  missionAbort.addEventListener("click", confirmAbort);
  missionAbort.addEventListener("click", abortingMission);

  function confirmliftoff() {
    alert("Confirm that the shuttle is ready for takeoff.");
  }

  function statusOfFlight() {
    paragraph.innerText = "Shuttle in flight.";
  }
   function shuttleBkgrnd(){
    shuttleBackground.setAttribute('style','background-color:rgb(0,0,255');

   }



  function confirmAbort() {
    alert("Are you sure you want to abort the mission ?");
  }

  function abortingMission() {
    alert("Mission aborted ! Space shuttle returning home.");
  }



}

window.addEventListener("load", init);




//=========+++++++ 3:52 PM 3/6/2022  +++===============
//=========+++++++   +++===============
// window.addEventListener('load', function () {
//   let takeOffBtn = document.getElementById(takeoff);
//   takeOffBtn.addEventListener('click', function () {

//     let isReadyToLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
//     if (isReadyToLaunch){
//       let flightStatus = document.getElementById("flightStatus");
//       flightStatus.innerText = "Shuttle in flight.";
//       let shuttleFlightScreen = document.getElementById("ShuttleBackground");
//       shuttleFlightScreen.setAttribute("style", "background-color: #0000ff");

//       let shuttleHeight = document.getElementById("spaceShuttleHeight");
//       shuttleHeight.innerText = "10000";
//     }
//   });

//   let landingBtn = document.getElementById("landing");
//   landingBtn.addEventListener('click', function () {
//     window.alert("The shuttle is landing. Landing gear engaged.");

//     let flightStatus = document.getElementById("flightStatus");
//     flightStatus.innerText = "The shuttle has landed.";

//     let shuttleFlightScreen = document.getElementById("shuttleBackground");
//     shuttleFlightScreen.setAttribute("style", "background-color: #009933");

//     let shuttleHeight = document.getElementById("spaceShuttleHeight");
//     shuttleHeight.innerText = "0";

//   });

//   let abortMissionBtn = document.getElementById("missionAbort");
//   abortMissionBtn.addEventListener('click', function () {
//     // window.confirm()
//     let shouldAbortMission = window.confirm("Confirm that you want to abort the mission.");
//     if (shouldAbortMission) {

//     }


//     let flightStatus = document.getElementById("flightStatus");
//     flightStatus.innerText = "Mission aborted.";

//     let shuttleFlightScreen = document.getElementById("shuttleBackground");
//     shuttleFlightScreen.setAttribute("style", "background-color: #009933");

//     let shuttleHeight = document.getElementById("spaceShuttleHeight");
//     shuttleHeight.innerText = "0";


//   });
//   let rocketImg = this.document.getElementById("rocket");
//   let top = 0;
//   let bottom = 0;
//   let left = 0;
//   let right = 0;


//   let leftBtn = document.getElementById("up");
//   leftBtn.addEventListener('click', function () {
//     left -= 10;
//     document.getElementById("rocket").style.left = (left - 10) + "px";

//     //  let upBtn = document.getElementById("up");
//     //   upBtn.addEventListener('click',function(){
//     //     let shuttleHeight = document.getElementById("spaceShuttleHeight");
//     //    // shuttleHeight.innerText = "0";
//     //     let shuttleHeightAmount = Number(shuttleHeight.innerText);
//     //     shuttleHeightAmount += 10000; 
//     //     shuttleHeight.innerText = shuttleHeightAmount;


//   });

//   let rightBtn = document.getElementById("down");
//   rightBtn.addEventListener('click', function () {
//     let shuttleHeight = document.getElementById("spaceShuttleHeight");
//     // shuttleHeight.innerText = "0";
//     let shuttleHeightAmount = Number(shuttleHeight.innerText);
//     shuttleHeightAmount -= 10000;
//     shuttleHeight.innerText = shuttleHeightAmount;
//     //bottom += 10;
//     left += 10;
//     // document.getElementById("rocket").style.top = (top - 10) + "px";
//     document.getElementById("rocket").style.left = (left - 10) + "px";




//     //   let downBtn = document.getElementById("down");
//     //   downBtn.addEventListener('click',function(){
//     //     let shuttleHeight = document.getElementById("spaceShuttleHeight");
//     //    // shuttleHeight.innerText = "0";
//     //     let shuttleHeightAmount = Number(shuttleHeight.innerText);
//     //     shuttleHeightAmount -= 10000; 
//     //     shuttleHeight.innerText = shuttleHeightAmount;
//     //     //bottom += 10;
//     //     left += 10;
//     //    // document.getElementById("rocket").style.top = (top - 10) + "px";
//     //    document.getElementById("rocket").style.left = (left - 10) + "px";

//   });



// });