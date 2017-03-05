
var bossHealth = 100;
var playerHealth = 3;

function battleStarted() {
    bossHealth = 100;
    playerHealth = 3;

    $healthBar = $('.healthBar');
    $('.healthBar').css('width', '100%');
}

function bossHit() {
    $healthBar = $('.healthBar');

    playSound("punch");

    bossHealth -= 34;
    if(bossHealth <= 34)
      bossGraphic.changeToDying();

    $healthBar.animate({
        width: bossHealth + '%'
    }, 1600, function() {
        reset_potions();
        if (bossHealth <= 0) {
            $('.bossPanel').fadeOut(1000);
            bossGraphic.changeToDead();
            winScreen();
        }
    });
}

function loseLife() {
    playerHealth--;

    if (playerHealth <= 0) {
        lostBattle("You guessed incorrectly too many times!");
    } else {
        $('.messageOverlay').addClass('visible').find('h2').text(playerHealth + " chances remaining!");

        window.setTimeout(function() {
            console.log('trying to remove overlay class');
            $('.messageOverlay').removeClass('visible');
        }, 3000);
    }
}

function loseBattle() {
    reset_potions();
    bossGraphic.changeToIdle();
    currentLevelNumber = 98;
    levelCompleted();
}

function lostBattle(message) {
    // FADE IN OVERLAY
    $('.levelOverPanel').fadeIn(1200);
    $('.levelOverPanel').addClass('fail');
    $('.levelOverPanel').find('.congrats').addClass('outOfTime').text(message);


    window.setTimeout(function (){
        loseBattle();
        window.setTimeout(function() {
            $('.levelOverPanel')
                .removeClass('fail')
                .find('.congrats')
                .removeClass('outOfTime')
                .text('Congratulations!');
        }, 2000);
    }, 5000);
}

function winScreen() {
    createjs.Sound.stop();
    showLevelEndScreen();
}

function createTimer($element) {
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

        if (minutes < 1) {
            timerWarning($element);
        }

        // Display the result in the element with id="demo"
        $element.text(minutes + "m " + seconds + "s ");

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $('#bossTimer').hide();
            lostBattle("Out of Time!");
        }
    }, 1000);
}

function timerWarning ($element) {
    $element.css('font-size', '150px');
    $element.css('height', '150px');
    $element.css('opacity', '0.75');
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

