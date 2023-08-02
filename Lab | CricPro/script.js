let players = [
  {
    name: "dhoni",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png",
  },
  {
    name: "gambhir",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png",
  },
  {
    name: "harbhajan",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg",
  },
  {
    name: "sachin",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png",
  },
  {
    name: "sehwag",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png",
  },
  {
    name: "sreeshanth",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg",
  },
  {
    name: "suresh Raina",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg",
  },
  {
    name: "virat Kohli",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png",
  },
  {
    name: "yuvraj",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png",
  },
  {
    name: "zaheer Khan",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg",
  },
  {
    name: "munaf",
    image:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg",
  },
];
let content = document.querySelector(".container");
let image = document.querySelector(".pop");

function uploading(name) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].name === name) {
      image.src = players[i].image;
      content.style.display = "block";
    }
  }
}

function closing() {
  content.style.display = "none";
}
