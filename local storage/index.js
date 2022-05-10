// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", matchSub)
 var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
var matchArr = [];

function matchSub(){
    event.preventDefault();


    var  matchObj = {
        matchNumber: document.querySelector("#matchNum").value,
        teamA: document.querySelector("#teamA").value,
        teamB: document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue: document.querySelector("#venue").value,


    }
    matchArr.push(matchObj);
    console.log(matchArr);
    localStorage.setItem("schedule", JSON.stringify(matchArr));
    // window.location.href="matches.html"

}
