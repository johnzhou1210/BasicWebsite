window.onload = () => {
  const teamAButton = document.querySelector("#team-a-increment");
  const teamAScoreText = document.querySelector("#team-a-score");

  const teamBButton = document.querySelector("#team-b-increment");
  const teamBScoreText = document.querySelector("#team-b-score");

  const resetButton = document.querySelector("#score-reset");

  teamAButton.addEventListener("click", () => {
        teamAScoreText.textContent = parseInt(teamAScoreText.textContent) + 1;
        updateLeadStatus();
  });

  teamBButton.addEventListener("click", () => {
    teamBScoreText.textContent = parseInt(teamBScoreText.textContent) + 1;
    updateLeadStatus();
});

resetButton.addEventListener("click", () => {
    teamAScoreText.textContent = 0;
    teamBScoreText.textContent = 0;
    updateLeadStatus();
});

function updateLeadStatus() {
    const leadStatus = document.querySelector("#lead-status");
    const teamAReaction = document.querySelector("#team-a-reaction");
    const teamBReaction = document.querySelector("#team-b-reaction");

    if (teamAScoreText.textContent > teamBScoreText.textContent) {
        leadStatus.textContent = "Team A is currently in the lead!"
        teamAReaction.getElementsByTagName('img')[0].src = "images/happy.png";
        teamBReaction.getElementsByTagName('img')[0].src = "images/sad.png";
        teamAReaction.getElementsByTagName('p')[0].innerText = "Team A is happy!"
        teamBReaction.getElementsByTagName('p')[0].innerText = "Team B is unhappy..."
    } else if (teamBScoreText.textContent > teamAScoreText.textContent) {
        leadStatus.textContent = "Team B is currently in the lead!"
        teamAReaction.getElementsByTagName('img')[0].src = "images/sad.png";
        teamBReaction.getElementsByTagName('img')[0].src = "images/happy.png";
        teamAReaction.getElementsByTagName('p')[0].innerText = "Team A is unhappy..."
        teamBReaction.getElementsByTagName('p')[0].innerText = "Team B is happy!"
    } else {
        leadStatus.textContent = "No team is currently in the lead..."
        teamAReaction.getElementsByTagName('img')[0].src = "images/neutral.png";
        teamBReaction.getElementsByTagName('img')[0].src = "images/neutral.png";
        teamAReaction.getElementsByTagName('p')[0].innerText = "Team A is neutral."
        teamBReaction.getElementsByTagName('p')[0].innerText = "Team B is neutral."
    }
}


};
