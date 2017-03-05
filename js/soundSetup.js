  createjs.Sound.registerSound("../../sounds/text-scroll.mp3", "text");
  createjs.Sound.registerSound("../../sounds/boss.mp3", "boss");
  createjs.Sound.registerSound("../../sounds/menu.mp3", "menu");
  createjs.Sound.registerSound("../../sounds/levelWin.mp3", "levelWin");
  createjs.Sound.registerSound("../../sounds/pickup.mp3", "pickup");
  createjs.Sound.registerSound("../../sounds/evilLaugh.mp3", "evilLaugh");
  createjs.Sound.registerSound("../../sounds/punch.mp3", "punch");
  createjs.Sound.registerSound("../../sounds/ending.mp3", "ending");


  createjs.Sound.addEventListener("fileload", handleFileLoad);
  function handleFileLoad(event) {
      console.log('Loaded sound: ' + event.id);
      // A sound has been preloaded.
      if (event.id == "menu") {
        playSound("menu");
      }
  }

  function playSound(soundName) {
      console.log("in play sound: " + soundName);
      var instance = createjs.Sound.play(soundName);
  }