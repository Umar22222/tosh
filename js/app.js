function playGame(userChoice) {
    const choices = ['Tosh', `Qog'oz`, 'Qaychi'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let result = '';
  
    if (userChoice === computerChoice) {
      result = "Durang! Ikkalasi ham " + userChoice + " tanladi.";
    } else if (
      (userChoice === 'Tosh' && computerChoice === 'Qaychi') ||
      (userChoice === 'Qaychi' && computerChoice === `Qog'oz`) ||
      (userChoice === `Qog'oz` && computerChoice === 'Tosh')
    ) {
      result = "Siz g'alaba qozondingiz! " + userChoice + " " + computerChoice + "ni yengdi.";
    } else {
      result = "Siz yutqazdingiz! " + computerChoice + " " + userChoice + "ni yengdi.";
    }
  
    document.getElementById('result').innerHTML = result;
  }