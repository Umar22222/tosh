function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let result = '';
  
    if (userChoice === computerChoice) {
      result = "Durang! Ikkalasi ham " + userChoice + " tanladi.";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      result = "Siz g'alaba qozondingiz! " + userChoice + " " + computerChoice + "ni yengdi.";
    } else {
      result = "Siz yutqazdingiz! " + computerChoice + " " + userChoice + "ni yengdi.";
    }
  
    document.getElementById('result').innerHTML = result;
  }