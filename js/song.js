fetch("https://abbasange-6b28.restdb.io/rest/abbasange/" + "63eb632baa8607500005813f", {
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

/* 
_id: "63eb61beaa8607500005812d"
album: "Arrival"
albumCover: "https://www.udiscovermusic.com/wp-content/uploads/2018/01/ABBA-Arrival-Album-Cover-web-optimised-820.jpg"
chartPosition: Object { swe: 1, aus: 1, aut: 4, … }
​​​
aus: 1
​​​
aut: 4
​​​
ger: 1
​​​
ire: 1
​​​
nld: 1
​​​
nor: 1
​​​
nz: 1
​​​
swe: 1
​​​
uk: 1
​​​
us: 1
​​​
<prototype>: Object { … }
​​
duration: 230
​​
hasAward: true
​​
inMammaMia: true
​​
releaseYear: 1976
​​
spotifyStreams: 801084077
​​
titel: "Dancing Queen"
*/
