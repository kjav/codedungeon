$('.beginGame').on('click', function() {
    $('.splashScreen').fadeTo(400, 0, function() {
       $(this).hide();
    });

    currentLevelNumber = 0;
    createjs.Sound.stop();
    levelCompleted();













})