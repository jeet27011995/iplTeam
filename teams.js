let urlData = location.href;
let newUrl = new URL(urlData);
let teamFull = newUrl.searchParams.get("name");
// console.log(urlData);

// console.log(teamFull);

// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));
var teamMainBox = document.getElementById("container_teams");
var tableTeam = document.getElementById("table-team");

var cnt = 0;

for (var i = 0; i < playersDetails.length; i++) {
  console.log(playersDetails[i]);
  if (teamFull == playersDetails[i].from) {
    var isPlay = "";
    if (playersDetails[i].isPlaying == true) {
      isPlay = "Playing";
    } else {
      isPlay = "On Bench";
    }
    var currentP = playersDetails[i].playerName;

    cnt++;
    teamMainBox.innerHTML += `
<div    onclick="makethisinclick('${currentP}')"    class="minibox mn2">

<img src="${playersDetails[i].playerImg}" class="mainimage" alt=""/> 
<div class="dataodcard">

  <p class="text1"> ${playersDetails[i].playerName}   </p>
  <p class="text2"> Worth : ${playersDetails[i].price} </p>
  <p class="text2"> Playing : ${isPlay} </p>
  <p class="text2">
   ${playersDetails[i].description} </p>
 
</div>

</div>

`;
  }
  function makethisinclick(res) {
    window.open(`./playerDetails.html?name=${res}`, "_self");
  }
}
// search for top batsman
var topBatsman = "";
for (var j = 0; j < playersDetails.length; j++) {
  if (
    playersDetails[j].description == "Batsman" &&
    playersDetails[j].from == teamFull
  ) {
    topBatsman = playersDetails[j].playerName;

    break;
  } else {
    topBatsman = "No Player";
  }
}
// search for top bowler
var topBowler = "";
for (var j = 0; j < playersDetails.length; j++) {
  if (
    playersDetails[j].description == "Bowler" &&
    playersDetails[j].from == teamFull
  ) {
    topBowler = playersDetails[j].playerName;

    break;
  } else {
    topBowler = "No Player";
  }
}

// team table
console.log(cnt);
teamsDetails.map((item) => {
  if (teamFull == item.sName) {
    return (tableTeam.innerHTML += `
 


<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        TEAM NAME
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>NAME OF THE TEAM</strong> 
        ${item.teamFullName}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        TEAM ICON
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>TEAM ICON IS</strong> 
        <img src="${item.teamIcon}" class="team-page-icon
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        PLAYERS IN THE TEAM
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>PLAYER COUNT IS</strong>
        ${cnt}
      </div>
    </div>
  </div>
</div>

<div class="team-details">
 <div class="cardD"><span class="span-head"> Team name: ${item.teamFullName} </span>
 <span> </span></div>

 <div class="cardD"><span class="span-head"> Team icon:</span>
 <span>   <img src="${item.teamIcon}" class="team-page" alt=""></span></div>

 <div class="cardD"><span class="span-head"> Player count: ${cnt} </span>
 <span> </span></div>

 <div class="cardD"><span class="span-head"> Top Batsman: ${topBatsman}</span>
 </div>

 <div class="cardD"><span class="span-head"> Top Bowler: ${topBowler}  </span>
 </div>

 <div class="cardD"><span class="span-head"> Won Count: ${item.WonCount} </span>
 </div>

 
   





















`);
  }
});

// {
//   "id": 0,
//   "teamFullName": "Mumbai Indians",
//   "sName": "MI",
//   "fullSname":"MI (Mumbai Indians)" ,
//   "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
//   "WonCount": 5,
// },
