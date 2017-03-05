
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
    // lose heart
}
