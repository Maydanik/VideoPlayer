
let videoViewer = document.querySelector('.player_viewer');
let btnPlayPause = document.querySelector('.btn_play_pause');
let progressVideo = document.getElementById('progressvideo');
progressVideo.value = 0;
progressVideo.min = 0;
progressVideo.max = videoViewer.duration;
let currentProgressVideo;
let volumeOff = document.querySelector('.volume_off');
let volume = document.getElementById('volume');
volume.value = 30;
videoViewer.volume = 0.3;

btnPlayPause.addEventListener('click', function (e) {

  changePlayPause();
});


videoViewer.addEventListener('click', function (e) {

  changePlayPause();
});

function changePlayPause() {

  if (videoViewer.paused) {
    videoViewer.play();
    currentProgressVideo = setInterval(initInterval, 1000 / 666);
  }
  else {
    videoViewer.pause();
    clearInterval(currentProgressVideo);
  }
}

function initInterval() {

  progressVideo.value = videoViewer.currentTime;
}

progressVideo.addEventListener('mousedown', function (e) {

  clearInterval(currentProgressVideo);

  if (!videoViewer.paused) {
    changePlayPause();
  }
});

progressVideo.addEventListener('mouseup', function (e) {

  videoViewer.currentTime = progressVideo.value;
  changePlayPause();
});

volumeOff.addEventListener('click', function (e) {

  if (videoViewer.volume !== 0) {
    videoViewer.volume = 0;
  }
  else {
    videoViewer.volume = volume.value / 100;
  }
});

volume.addEventListener('mousemove', function (e) {

  videoViewer.volume = volume.value / 100;
});