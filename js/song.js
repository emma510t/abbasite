const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://abbasange-6b28.restdb.io/rest/abbasange/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63eb762d478852088da6824e",
  },
})
  .then((e) => e.json())
  .then(showSong);

function showSong(data) {
  console.log(data);
  //h1
  document.querySelector("h1").textContent = data.titel;
  //img
  document.querySelector(".albumCover").src = data.albumCover;
  document.querySelector(".albumCover").alt = data.titel;
  //aside
  document.querySelector(".album").textContent = data.album;

  //mammamia
  if (data.inMammaMia) {
    document.querySelector(".inMammaMia").textContent = "This song appears in Mammamia";
  }
  //! betyder not
  if (!data.hasAward) {
    document.querySelector(".awardContainer").remove();
  }
  document.querySelector(".releaseYear").textContent = data.releaseYear;
  document.querySelector(".duration").textContent = data.duration;
  //resten
  document.querySelector(".spotifyStreams").textContent = data.spotifyStreams;
  //chart
  document.querySelector(".chart_swe").textContent = data.chartPosition.swe;
  document.querySelector(".chart_aus").textContent = data.chartPosition.aus;
  document.querySelector(".chart_aut").textContent = data.chartPosition.aut;
  document.querySelector(".chart_ger").textContent = data.chartPosition.ger;
  document.querySelector(".chart_ire").textContent = data.chartPosition.ire;
  document.querySelector(".chart_nld").textContent = data.chartPosition.nld;
  document.querySelector(".chart_nor").textContent = data.chartPosition.nor;
  document.querySelector(".chart_nz").textContent = data.chartPosition.nz;
  document.querySelector(".chart_uk").textContent = data.chartPosition.uk;
  document.querySelector(".chart_us").textContent = data.chartPosition.us;
}
