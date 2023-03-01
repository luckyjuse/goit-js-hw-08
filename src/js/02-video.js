import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

//  player.on('play', function () {
//    console.log('played the video!');
//  });

const player = new Player('vimeo-player', {});

player.on('play', function () {
  console.log('played the video!');
});
