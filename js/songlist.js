fetch("https://abbasange-6b28.restdb.io/rest/abbasange", {
  method: "get",
  headers: {
    "x-apikey": "63eb762d478852088da6824e",
  },
})
  .then((e) => e.json())
  .then(showSongs);

function showSongs(data) {
  console.log(data);
  data.forEach(showSong);
}

function showSong(song) {
  //fange template

  const template = document.querySelector("#songTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre i indhold

  copy.querySelector(".albumCover").src = song.albumCover;
  copy.querySelector(".albumCover").alt = song.titel;

  copy.querySelector(".songTitel").textContent = song.titel;
  //appende
  document.querySelector(".songlistDiv").appendChild(copy);
}
