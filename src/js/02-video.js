import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

//  player.on('play', function () {
//    console.log('played the video!');
//  });

const player = new Player('vimeo-player');

const currentTimeUpdate = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', currentTimeUpdate);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
