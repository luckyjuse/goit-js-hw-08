import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const currentTimeUpdate = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(currentTimeUpdate, 1000));

function currentTimeCheck() {
  if (localStorage.getItem('videoplayer-current-time')) {
    return localStorage.getItem('videoplayer-current-time');
  }
}

player
  .setCurrentTime(currentTimeCheck())
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
