$('.beginGame').on('click', function() {
    $('.splashScreen').fadeTo(400, 0, function() {
       $(this).hide();
    });

    var p, player;
    function main() {
        console.log(playerGraphic);
        p = new Person(1, 1, playerGraphic);
        player = new Commands(p);
        //console.log(orientation);
        p.wait();
        window.requestAnimationFrame(render);
    }

    currentLevelNumber = 0;
    levelCompleted();













})