
var bossHealth = 100;
var playerHealth = 3;

function bossHit() {
    $healthBar = $('.healthBar');

    bossHealth -= 34;

    $healthBar.animate({
        width: bossHealth + '%'
    }, 1600, function() {
        if (bossHealth <= 0) {
            $('.bossPanel').fadeOut(1000);

        }
    });
}

function loseLife() {
    playerHealth--;
    if (playerHealth <= 0) {
        currentLevelNumber = 98;
        levelCompleted();
    }
    // lose heart
}

function createTimer() {
    // Set the date we're counting down to
    var countDownDate = addMinutes(new Date(), 5);

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

createTimer();