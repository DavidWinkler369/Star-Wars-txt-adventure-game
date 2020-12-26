alert('Hello, welcome to a long time ago in a Galaxy Far Far Away');
const name = prompt('What is your name?');
alert(`It's very nice to meet you, ${name}!`);
function beginGame() {
  const isJedi = confirm('Are you a Jedi?');
  if (isJedi === true) {
    alert('May the Force be with you!');
    jediAdventure();
  } else {
    const isSith = confirm('Are you perhaps then...a Sith?');
    if (isSith === true) {
      alert('The Dark Side is in our blood.');
      sithAdventure();
    } else {
      alert(
        `Savior, conqueror, hero, villain. You are all things, ${name}, and yet you are nothing. In the end you belong to neither the light nor the darkness. You will forever stand alone.`
      );
    }
  }
}
beginGame();
//setting up the user and giving them options to go down their force adventure path! 
function jediAdventure() {
  const master = prompt('Who trained you in the Jedi ways?');
  if (master.toLowerCase() === 'yoda') {
    alert('Very skilled, you are.');
  } else if (master.toLowerCase() === 'mace windu') {
    alert(`If what you've told me is true, you will have gained my trust.`);
  } else {
    alert('Verrrrrrry interesting.');
  }
  alert(
    `Careful, don't be tempted by the Dark Side... Continue your training and use the Force for good.`
  );
  alert(`Oh no! The Sith are attacking!! ${name}, grab your lightsaber!`);
  lightsaberDuel();
  //take us out of this function and runs the lightsaber duel 
  if (name.toLowerCase() === 'luke') {
    alert('You should know before you go... Luke, I am your father.');
  }
}
//setting up the Jedi path and getting the lightsaber duel function ready to go! 
function sithAdventure() {
  const motive = prompt('What brought you to the Dark Side? Power? Revenge?');
  if (motive.toLowerCase() === 'power') {
    alert(
      'The dark side of the Force is a pathway to many abilities some consider to be... unnatural.'
    );
  } else if (motive.toLowerCase() === 'revenge') {
    alert(
      `The dark side is emotion, ${name}. Anger, hate, love, lust. These are what make us strong, Peace is a lie. There is only passion. Your passion is still there, ${name}. Seek it out. Reclaim it.`
    );
  } else {
    alert(
      'You see through the lies of the Jedi. You do not fear the dark side as others do.'
    );
  }
  alert(`Oh no! The Jedi are attacking!! ${name}, grab your lightsaber!`);
  darksaberDuel();
}
//setting up the Sith path and getting the darksaber duel function ready to go! 
function enemyAction() {
  // Three actions from which the user can choose and the enemy randomly chooses.
  const actions = ['Strike', 'Parry', 'Force'];
  const randomAction = Math.floor(Math.random() * actions.length);
  //takes a floating point number from 0 to 1 (inclusive of 0 but not inclusive of 1) and multiplies it by the length of actions (which is always three). Math.floor takes the number and rounds it down. 
  const randomEnemyAction = actions[randomAction];
  //the rounded down number then becomes and index for the enemy's action. The number will only ever be 0, 1, or 2 to match the enemy move set.  
  return randomEnemyAction;
}
//this function serves as a kind of rock, paper, scissors game where the user will select one of three actions and play against the computer in a force battle. 
function lightsaberDuel() {
  // Setting enemy and user health points.
  let enemyHealth = 100;
  let userHealth = 100;
  prompt('Your archenemy stands before you! Choose your lightsaber color:');
  alert('Kwishuuuuuuuuuu!')
  // changed syntax inside while loop
  while (enemyHealth > 0 && userHealth > 0) {
    // Asks user to choose an action and determines winner of the actionPhase.
    const actionPhase = prompt(
      `${name}, what is your next move? \nStrike | Parry | Force`
    );
    // lowercased strike, If user chooses strike
    if (actionPhase.toLowerCase() === `strike`) {
      alert('You swing your lightsaber.');
      if (enemyAction() === `Strike`) {
        //go back and explain enemyAction
        alert('Your blades clash, trying to find an opening...');
      } else if (enemyAction() === 'Parry') {
        alert('Your attack was countered!');
        userHealth -= 50;
        if (userHealth === 0) {
          alert(
            '[You failed!] You were the Chosen One! It was said that you would destroy the Sith, not join them! Bring balance to the force, not leave it in darkness!'
          );
        }
      } else {
        alert(`You resist your enemy's Force attack and land a hit.`);
        enemyHealth -= 50;
        if (enemyHealth === 0) {
          alert(
            '[You succeeded!] You have brought peace and balance to the Force.'
          );
        }
      }
    } 
    //all this is just if the action selected was 'strike.' 
    // Else if user chooses parry
    else if (actionPhase.toLowerCase() === 'parry') {
      alert(`You attempt to counter your enemy's attack.`);
      if (enemyAction() === `Strike`) {
        alert(`You block your enemy's strike and quickly strike back.`);
        enemyHealth -= 50;
        if (enemyHealth === 0) {
          alert(
            '[You succeeded!] You have brought peace and balance to the Force.'
          );
        }
      } else if (enemyAction() === `Parry`) {
        alert('You both flail your lightsabers about looking like fools.');
      } else {
        alert(
          'Your enemy puts you into a Force choke and throws you against the wall!'
        );
        userHealth -= 50;
        if (userHealth === 0) {
          alert(
            '[You failed!] You were the Chosen One! It was said that you would destroy the Sith, not join them! Bring balance to the force, not leave it in darkness!'
          );
        }
      }
    }
    // Else if user chooses force
    else if (actionPhase.toLowerCase() === `force`) {
      alert('You tap into the Force to try and control your enemy.');
      if (enemyAction() === `Strike`) {
        alert('Your enemy resists your Force attack and strikes you.');
        userHealth -= 50;
        if (userHealth === 0) {
          alert(
            '[You failed!] You were the Chosen One! It was said that you would destroy the Sith, not join them! Bring balance to the force, not leave it in darkness!'
          );
        }
      } else if (enemyAction() === `Parry`) {
        alert('You Force grab a huge boulder and throw it at your enemy!');
        enemyHealth -= 50;
        if (enemyHealth === 0) {
          alert(
            '[You succeeded!] You have brought peace and balance to the Force.'
          );
        }
      } else {
        alert(
          `You both try to Force choke each other but instead manage to make it look like you're offering each other invisible cups...`
        );
      }
      // else: user mistypes or does not choose one of three given choices
    } else {
      alert('The enemy is approaching. You must act quickly!');
    }
  }
}
function darksaberDuel() {
  // Setting enemy and user health points.
  let enemyHealth = 100;
  let userHealth = 100;
  let saberColor = prompt('Your archenemy stands before you! Choose you lightsaber color:'); 
  if (saberColor.toLowerCase() !== "red") {
    alert('Just kidding, your lightsaber is red. True Sith Lords know ')}
  alert('Schvrmmmmmmm!')
  // changed syntax inside while loop
  while (enemyHealth > 0 && userHealth > 0) {
    // Asks user to choose an action and determines winner of the actionPhase.
    const actionPhase = prompt(
      `What is your next move? \nStrike | Parry | Force`
    );
    // lowercased strike, If user chooses strike
    if (actionPhase.toLowerCase() === `strike`) {
      alert(`You swing your lightsaber.`);
      if (enemyAction() === `Strike`) {
        alert(`Your blades clash, trying to find an opening...`);
      } else if (enemyAction() === `Parry`) {
        alert(`Your attack was countered!`);
        userHealth -= 50;
        if (userHealth === 0) {
          alert('[You failed!] I have studied you, and found nothing but weakness!');
        }
      } else {
        alert(`You resist your enemy's Force attack and land a hit.`);
        enemyHealth -= 50;
        if (enemyHealth === 0) {
          alert(
            '[You succeeded!] Peace is a lie, there is only passion. Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory. Through victory, my chains are broken. The Force shall free me.'
          );
        }
      }
    }
    // Else if user chooses parry
    else if (actionPhase.toLowerCase() === `parry`) {
      alert(`You attempt to counter your enemy's attack.`);
      if (enemyAction() === `Strike`) {
        alert(`You block your enemy's strike and quickly strike back.`);
        enemyHealth -= 50;
        if (enemyHealth === 0) {
          alert(
            '[You succeeded!] Peace is a lie, there is only passion. Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory. Through victory, my chains are broken. The Force shall free me.'
          );
        }
      } else if (enemyAction() === `Parry`) {
        alert(`You both flail your lightsabers about looking like fools.`);
      } else {
        alert(
          `Your enemy puts you into a Force choke and throws you against the wall!`
        );
        userHealth -= 50;
        if (userHealth === 0) {
          alert('[You failed!] I have studied you, and found nothing but weakness!');
        }
      }
    }
    // Else if user chooses force
    else if (actionPhase.toLowerCase() === `force`) {
      alert('You tap into the Force to try and control your enemy.');
      if (enemyAction() === `Strike`) {
        alert('Your enemy resists your Force attack and strikes you.');
        userHealth -= 50;
        if (userHealth === 0) {
          alert('[You failed!] I have studied you, and found nothing but weakness!');
        }
      } else if (enemyAction() === `Parry`) {
        alert('You Force grab a huge boulder and throw it at your enemy!');
        enemyHealth -= 50;
        if (enemyHealth === 0) {
          alert(
            '[You succeeded!] Peace is a lie, there is only passion. Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory. Through victory, my chains are broken. The Force shall free me.'
          );
        }
      } else {
        alert(
          `You both try to Force choke each other but instead manage to make it look like you're offering each other invisible cups...`
        );
      }
      // else: user mistypes or does not choose one of three given choices
    } else {
      alert('The enemy is approaching. You must act quickly!');
    }
  }
}