const goat = document.getElementById("goat");
const untouchable = document.getElementById("untouchable");
const rollin = document.getElementById("rollin");
const lemonade = document.getElementById("lemonade");
const days = document.getElementById("days");
const east = document.getElementById("east");
const game = document.getElementById("game");
const speak = document.getElementById("speak");
const tinted = document.getElementById("tinted");

const music = document.querySelector("audio");
const img = document.querySelector("img");
const sound = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const songs = [
  {
    name: "image-1",
    title: "GOAT",
    artist: "Diljit Dosanj",
    song: "goat",
  },
  {
    name: "image-2",
    title: "UNTOUCHABLE",
    artist: "Tegi Pannu",
    song: "untouchable",
  },
  {
    name: "image-3",
    title: "WE ROLLIN",
    artist: "Shubh",
    song: "we rollin",
  },
  {
    name: "image-4",
    title: "LEMONADE",
    artist: "Diljit Dosanj",
    song: "Lemonade",
  },
  {
    name: "image-5",
    title: "THESE DAYS",
    artist: "Sidhu Moosewala",
    song: "These Days - Sidhu Moose Wala",
  },
  {
    name: "east",
    title: "East Side FLow",
    artist: "Sidhu Moosewala",
    song: "east",
  },
  {
    name: "game",
    title: "Game",
    artist: "Sidhu Moosewala",
    song: "game",
  },
  {
    name: "speak",
    title: "speak",
    artist: "Raja",
    song: "speak",
  },
  {
    name: "tinted",
    title: "tinted",
    artist: "elly managat",
    song: "tinted",
  },
];

let isPlaying = false;
//for play functionality
const playMusic = () => {
  isPlaying = true;
  music.play();
  sound.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

//for pause functionality
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  sound.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

// changing music data

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.song}.mp3`;
  img.src = `images/${songs.name}.jpg`;
  // document.body.style.backgroundImage = `images/image-1.jpg`;
};
songIndex = 0;

const nextSong = () => {
  // console.log(song);
  songIndex = (songIndex + 1) % songs.length;
  // songIndex = song;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const playSong = (song) => {
  console.log(songs[song - 1]);
  loadSong(songs[song - 1]);
  playMusic();
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
$(document.getElementById("test")).on("click", function () {
  // alert("Hello"); /* do stuff */
  playSong(2);
});

//   goat.addEventListener("click", nextSong(1), false);
$(goat).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(goat).addClass("green");
  playSong(1);
});
//   untouchable.addEventListener("click", nextSong(2), false);
$(untouchable).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(untouchable).addClass("green");
  playSong(2);
});
//   rollin.addEventListener("click", playSong(3), false);
$(rollin).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(rollin).addClass("green");
  playSong(3);
});
//   lemonade.addEventListener("click", playSong(4), false);
$(lemonade).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(lemonade).addClass("green");
  playSong(4);
});
//   days.addEventListener("click", playSong(5), false);
$(days).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(days).addClass("green");
  playSong(5);
});

$(east).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(east).addClass("green");
  playSong(6);
});
$(game).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(game).addClass("green");
  playSong(7);
});
$(speak).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(speak).addClass("green");
  playSong(8);
});
$(tinted).on("click", function () {
  $(document.querySelectorAll(".text")).removeClass("green");
  $(tinted).addClass("green");
  playSong(9);
});
