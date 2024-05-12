const music = new Audio("audio/1.mp3");
// music.play();

const songs = [
  {
    id: 1,
    songName: `Relief<br>
             <div class="subtitle">Hang Øver</div>`,
    Poster: "cover/1.jpeg",
  },
  {
    id: "2",
    songName: `Dandelions<br>
              <div class="subtitle">Ruth B.</div>`,
    Poster: "cover/2.jpeg",
  },
  {
    id: "3",
    songName: `Thunder<br>
                        <div class="subtitle">Imagine Dragons</div>`,
    Poster: "cover/3.jpeg",
  },
  {
    id: "4",
    songName: `Bones<br>
                        <div class="subtitle">Imagine Dragons</div>`,
    Poster: "cover/4.jpeg",
  },
  {
    id: "5",
    songName: `On My Way<br>
                        <div class="subtitle">Alan Walker , K-391 , Emelie Hollow</div>`,
    Poster: "cover/5.jpeg",
  },
  {
    id: "6",
    songName: `Sunflower<br>
                        <div class="subtitle">Post Malone , Swae Lee</div>`,
    Poster: "cover/6.jpeg",
  },
  {
    id: "7",
    songName: `Faded<br>
                        <div class="subtitle">Alan Walker</div>`,
    Poster: "cover/7.jpeg",
  },
  {
    id: "8",
    songName: `Closer<br>
                        <div class="subtitle">The Chainsmokers , Halsey</div>`,
    Poster: "cover/8.jpeg",
  },
  {
    id: "9",
    songName: `Let Me Love You<br>
                        <div class="subtitle">DJ Snake , Justin Bieber</div>`,
    Poster: "cover/9.jpeg",
  },
  {
    id: "10",
    songName: `Night Changes<br>
                        <div class="subtitle">One Direction</div>`,
    Poster: "cover/10.jpeg",
  },

  {
    id: "11",
    songName: `One Call Away<br>
                        <div class="subtitle">Charlie Puth</div>`,
    Poster: "cover/11.jpeg",
  },
  {
    id: "12",
    songName: `Something Just Like This<br>
                        <div class="subtitle">The Chainsmokers , Coldplay</div>`,
    Poster: "cover/12.jpeg",
  },
  {
    id: "13",
    songName: `Darkside<br>
                        <div class="subtitle">Alan Walker</div>`,
    Poster: "cover/13.jpeg",
  },
  {
    id: "14",
    songName: `Despacito - Remix<br>
                        <div class="subtitle">Luis Fonsi ,Daddy Yankee , Justin Bieber</div>`,
    Poster: "cover/14.jpeg",
  },
  {
    id: "15",
    songName: `Alone<br>
                        <div class="subtitle">Alan Walker</div>`,
    Poster: "cover/15.jpeg",
  },
  {
    id: "16",
    songName: `Ek Din Teri Raahon<br>
                        <div class="subtitle">Javed Ali , Pritam</div>`,
    Poster: "cover/16.jpeg",
  },
  {
    id: "17",
    songName: `Teri Yaddon Mein<br>
                        <div class="subtitle">KK , Shreya Ghoshal</div>`,
    Poster: "cover/17.jpeg",
  },
  {
    id: "18",
    songName: `Jeena Jeena<br>
                        <div class="subtitle">Atif Aslam</div>`,
    Poster: "cover/18.jpeg",
  },
  {
    id: "19",
    songName: `Tere Hawale<br>
                        <div class="subtitle">Pritam , Arijit Singh , Shreya Ghoshal</div>`,
    Poster: "cover/19.jpeg",
  },
  {
    id: "20",
    songName: `Apna Banale<br>
                        <div class="subtitle">Arijit Singh , Sachin-jigar</div>`,
    Poster: "cover/20.jpeg",
  },
  {
    id: "21",
    songName: `Rasiya<br>
                        <div class="subtitle">Pritam , Arijit Singh , Amitabh Bhattacharya</div>`,
    Poster: "cover/21.jpeg",
  },
];
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  // console.log(songs[0].Poster);
  // e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-fill");
    el.classList.remove("bi-pause-fill");
  });
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgba(16, 7, 73 , .0)";
  });
};
////
let input = document.getElementsByTagName("input")[0];
const playlistsContainer = document.querySelector(".playlists");
const songsContainer = document.querySelector(".menu_song");
const searchIcon = document.getElementById("search_icon");

input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_result.getElementsByTagName("a");

  for (let i = 0; i < items.length; i++) {
    let as = items[i].getElementsByClassName("content")[0];
    let text_value = as.textContent || as.innerText;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      playlistsContainer.classList.add("deactivated");
      songsContainer.classList.add("deactivated");
      items[i].style.display = "flex";
    } else {
      playlistsContainer.classList.add("deactivated");
      songsContainer.classList.remove("deactivated");
      items[i].style.display = "none";
    }
    if (input.value == 0) {
      search_result.style.display = "none";
      playlistsContainer.classList.add("deactivated");
      songsContainer.classList.add("deactivated");
    } else {
      search_result.style.display = "";
      searchIcon.addEventListener("click", () => {
        playlistsContainer.classList.remove("deactivated");
        songsContainer.classList.remove("deactivated");
        items[i].style.display = "none";
      });
    }
  }
});
// click play
let masterPlay = document.getElementById("masterPlay");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

let index = 0;
console.log(index);
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `cover/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgba(63, 23, 111, 0.5)";
    makeAllplays();
    el.target.classList.remove("bi-play-fill");
    el.target.classList.add("bi-pause-fill");
  });
});

let cuurentStart = document.getElementById("currentStart");
let cuurentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  // console.log(music_curr);

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  cuurentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  // console.log(seek.value);
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

// volumeUpIcon.classList.add("active");
vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fil");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fil");
    vol_icon.classList.remove("bi-volume-off-fil");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index--;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
    // console.log(index);
  }
  music.src = `audio/${index}.mp3`;
  // Set poster image only once
  poster_master_play.src = `cover/${index}.jpeg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  let songTitles = songs.filter((els) => els.id == index);

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgba(63, 23, 111, 0.5)";
  makeAllplays();
  masterPlay.target.classList.remove("bi-play-fill");
  masterPlay.target.classList.add("bi-pause-fill");
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }

  music.src = `audio/${index}.mp3`;
  // Set poster image only once
  poster_master_play.src = `cover/${index}.jpeg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  let songTitles = songs.filter((els) => els.id == index);

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgba(63, 23, 111, 0.5)";
  makeAllplays();
  masterPlay.target.classList.remove("bi-play-fill");
  masterPlay.target.classList.add("bi-pause-fill");
});

