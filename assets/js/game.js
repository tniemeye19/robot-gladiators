var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;

// Check to see if the value of playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
};

var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + "attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // Check enemy's health
    if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
    else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that is worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();