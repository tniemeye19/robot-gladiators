// Games States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function
var fight = function(enemyNames) {
    // Repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        // Ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
            
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");

            // Award player money for winning
            playerMoney = playerMoney + 20;

            // Leave while() loop since enemy is dead
            break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        // Remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that is worked.
        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // Leave while() loop if player is dead
            break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

for (var i = 0; i < enemyNames.length; i++) {

    // Function to start a game
    var startGame = function() {

        // Reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        for (var i = 0; i < enemyNames.length; i ++) {
            if (playerHealth > 0) {
                // Let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );

                // Pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];

                // Reset enemyHealth before starting new fight
                enemyHealth = 50;

                // Use debugger to pause script from running and check what's going on at that moment in the code
                // debugger;

                // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyName);
            } else {
                window.alert("You have lost your robot in battle! Game over!");
            break;
            }
        }

        // After loop ends, player is either out of health or enemies to fight, so run the endgame function
        endGame();
    };

    // Function to end the entire game
    var endGame = function() {
        // If player is still alive, player wins!
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        } else {
            window.alert("You've lost your robot in battle.");
        }

        // Ask the player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            // Restart the game
            startGame();
        } else {
            window.alert("Thank your for playing Robot Gladiators! Come back soon!");
        }
    };

    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

// Start the game when the page loads
startGame();