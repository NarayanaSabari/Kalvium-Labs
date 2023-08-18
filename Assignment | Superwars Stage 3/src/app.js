const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
// Instead of forloop use Map method
// Code here
const initPlayers = (players) => {
  let detailedPlayers = players.map(function (players, i) {
    if (i % 2 === 0) {
      var type = "hero";
    } else {
      var type = "villain";
    }
    const details = {
      name: players,
      strength: getRandomStrength(),
      image: `images/super-${i + 1}.png`,
      type: type,
    };
    return details;
  });
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Build player template
const buildPlayers = (players, type) => {
  let fragment = "";
  // filter players starts from here
  const hero = players.filter(function (obj) {
    return obj.type === "hero";
  });
  const villain = players.filter(function (obj) {
    return obj.type === "villain";
  });
  // filter players ends from here

  if (type === "hero") {
    // creating a innerHTML array of each player
    var x = hero.map(function (players) {
      let frag = `<div class="player">
      <img src="${players.image}" alt="">
      <div class="name">${players.name}</div>
      <div class="strength">${players.strength}</div>
    </div>`;
      // returning each innerHTML to frag
      return frag;
    });
    // Joining all the elements in frag into string
    fragment = x.join(" ");
  } else {
    // creating a innerHTML array of each player
    var x = villain.map(function (players) {
      let frag = `<div class="player">
      <img src="${players.image}" alt="">
      <div class="name">${players.name}</div>
      <div class="strength">${players.strength}</div>
    </div>`;
      // returning each innerHTML to frag
      return frag;
    });
    // Joining all the elements in frag into string
    fragment = x.join(" ");
  }
  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
