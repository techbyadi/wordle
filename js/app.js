const lvl1Words = [
  "which",
  "there",
  "their",
  "about",
  "would",
  "these",
  "other",
  "words",
  "could",
  "write",
  "first",
  "water",
  "after",
  "where",
  "right",
  "think",
  "three",
  "years",
  "place",
  "sound",
  "great",
  "again",
  "still",
  "every",
  "small",
  "found",
  "those",
  "never",
  "under",
  "might",
  "while",
  "house",
  "world",
  "below",
  "asked",
  "going",
  "large",
  "until",
  "along",
  "shall",
  "being",
  "often",
  "earth",
  "began",
  "since",
  "study",
  "night",
  "light",
  "above",
  "paper",
  "parts",
  "young",
  "story",
  "point",
  "times",
  "heard",
  "whole",
  "white",
  "given",
  "means",
  "music",
  "miles",
  "thing",
  "today",
  "later",
  "using",
  "money",
  "lines",
  "order",
  "group",
  "among",
  "learn",
  "known",
  "space",
  "table",
  "early",
  "trees",
  "short",
  "hands",
  "state",
  "black",
  "shown",
  "stood",
  "front",
  "voice",
  "kinds",
  "makes",
  "comes",
  "close",
  "power",
  "lived",
  "vowel",
  "taken",
  "built",
  "heart",
  "ready",
  "quite",
  "class",
  "bring",
  "round",
  "horse",
  "shows",
  "piece",
  "green",
  "stand",
  "birds",
  "start",
  "river",
  "tried",
  "least",
  "field",
  "whose",
  "girls",
  "leave",
  "added",
  "color",
  "third",
  "hours",
  "moved",
  "plant",
  "doing",
  "names",
  "forms",
  "heavy",
  "ideas",
  "cried",
  "check",
  "floor",
  "begin",
  "woman",
  "alone",
  "plane",
  "spell",
  "watch",
  "carry",
  "wrote",
  "clear",
  "named",
  "books",
  "child",
  "glass",
  "human",
  "takes",
  "party",
  "build",
  "seems",
  "blood",
  "sides",
  "seven",
  "mouth",
  "solve",
  "north",
  "value",
  "death",
  "maybe",
  "happy",
  "tells",
  "gives",
  "looks",
  "shape",
  "lives",
  "steps",
  "areas",
  "sense",
  "speak",
  "force",
  "ocean",
  "speed",
  "women",
  "metal",
  "south",
  "grass",
  "scale",
  "cells",
  "lower",
  "sleep",
  "wrong",
  "pages",
  "ships",
  "needs",
  "rocks",
  "eight",
  "major",
  "level",
  "total",
  "ahead",
  "reach",
  "stars",
  "store",
  "sight",
  "terms",
  "catch",
  "works",
  "board",
  "cover",
  "songs",
  "equal",
  "stone",
  "waves",
  "guess",
  "dance",
  "spoke",
  "break",
  "cause",
  "radio",
  "weeks",
  "lands",
  "basic",
  "liked",
  "trade",
  "fresh",
  "final",
  "fight",
  "meant",
  "drive",
  "spent",
  "local",
  "waxes",
  "knows",
  "train",
  "bread",
  "homes",
  "teeth",
  "coast",
  "thick",
  "brown",
  "clean",
  "quiet",
  "sugar",
  "facts",
  "steel",
  "forth",
  "rules",
  "notes",
  "units",
  "peace",
  "month",
  "verbs",
  "seeds",
  "helps",
  "sharp",
  "visit",
  "woods",
  "chief",
  "walls",
  "cross",
  "wings",
  "grown",
  "cases",
  "foods",
  "crops",
  "fruit",
  "stick",
  "wants",
  "stage",
  "sheep",
  "nouns",
  "plain",
  "drink",
  "bones",
  "apart",
  "turns",
  "moves",
  "touch",
  "angle",
  "based",
  "range",
  "marks",
  "tired",
  "older",
  "farms",
  "spend",
  "shoes",
  "goods",
  "chair",
  "twice",
  "cents",
  "empty",
  "alike",
  "style",
  "broke",
  "pairs",
  "count",
  "enjoy",
  "score",
  "shore",
  "roots",
  "paint",
  "heads",
  "shook",
  "serve",
  "angry",
  "crowd",
  "wheel",
  "quick",
  "dress",
  "share",
  "alive",
  "noise",
  "solid",
  "cloth",
  "signs",
  "hills",
  "types",
  "drawn",
  "worth",
  "truck",
  "piano",
  "upper",
  "loved",
  "usual",
  "faces",
  "drove",
  "cabin",
  "boats",
  "towns",
  "proud",
  "court",
  "model",
  "prime",
  "fifty",
  "plans",
  "yards",
  "prove",
  "tools",
  "price",
  "sheet",
  "smell",
  "boxes",
  "raise",
  "match",
  "truth",
  "roads",
  "threw",
  "enemy",
  "lunch",
  "chart",
  "scene",
  "graph",
  "doubt",
  "guide",
  "winds",
  "block",
  "grain",
  "smoke",
  "mixed",
  "games",
  "wagon",
  "sweet",
  "topic",
  "extra",
  "plate",
  "title",
  "knife",
  "fence",
  "falls",
  "cloud",
  "wheat",
  "plays",
  "enter",
  "broad",
  "steam",
  "atoms",
  "press",
  "lying",
  "basis",
  "clock",
  "taste",
  "grows",
  "thank",
  "storm",
  "agree",
  "brain",
  "track",
  "smile",
  "funny",
  "beach",
  "stock",
  "hurry",
  "saved",
  "sorry",
  "giant",
  "trail",
  "offer",
  "ought",
  "rough",
  "daily",
  "avoid",
  "keeps",
  "throw",
  "allow",
  "cream",
  "laugh",
  "edges",
  "teach",
  "frame",
  "bells",
  "dream",
  "magic",
  "occur",
  "ended",
  "chord",
  "false",
  "skill",
  "holes",
  "dozen",
  "brave",
  "apple",
  "climb",
  "outer",
  "pitch",
  "ruler",
  "holds",
  "fixed",
  "costs",
  "calls",
  "blank",
  "staff",
  "labor",
  "eaten",
  "youth",
  "tones",
  "honor",
  "globe",
  "gases",
  "doors",
  "poles",
  "loose",
  "apply",
  "tears",
  "exact",
  "brush",
  "chest",
  "layer",
  "whale",
  "minor",
  "faith",
  "tests",
  "judge",
  "items",
  "worry",
  "waste",
  "hoped",
  "strip",
  "begun",
  "aside",
  "lakes",
  "bound",
  "depth",
  "candy",
  "event",
  "worse",
  "aware",
  "shell",
  "rooms",
  "ranch",
  "image",
  "snake",
  "aloud",
  "dried",
  "likes",
  "motor",
  "pound",
  "knees",
  "refer",
  "fully",
  "chain",
  "shirt",
  "flour",
  "drops",
  "spite",
  "orbit",
  "banks",
  "shoot",
  "curve",
  "tribe",
  "tight",
  "blind",
  "slept",
  "shade",
  "claim",
  "flies",
  "theme",
  "queen",
  "fifth",
  "union",
  "hence",
  "straw",
  "entry",
  "issue",
  "birth",
  "feels",
  "anger",
  "brief",
  "rhyme",
  "glory",
  "guard",
  "flows",
  "flesh",
  "owned",
  "trick",
  "yours",
  "sizes",
  "noted",
  "width",
  "burst",
  "route",
  "lungs",
  "uncle",
  "bears",
  "royal",
  "kings",
  "forty",
  "trial",
  "cards",
  "brass",
  "opera",
  "chose",
  "owner",
  "vapor",
  "beats",
  "mouse",
  "tough",
  "wires",
  "meter",
  "tower",
  "finds",
  "inner",
  "stuck",
  "arrow",
  "poems",
  "label",
  "swing",
  "solar",
  "truly",
  "tense",
  "beans",
  "split",
  "rises",
  "weigh",
  "hotel",
  "stems",
  "pride",
  "swung",
  "grade",
  "digit",
  "badly",
  "boots",
  "pilot",
  "sales",
  "swept",
  "lucky",
  "prize",
  "stove",
  "tubes",
  "acres",
  "wound",
  "steep",
  "slide",
  "trunk",
  "error",
  "porch",
  "slave",
  "exist",
  "faced",
  "mines",
  "marry",
  "juice",
  "raced",
  "waved",
  "goose",
  "trust",
  "fewer",
  "favor",
  "mills",
  "views",
  "joint",
  "eager",
  "spots",
  "blend",
  "rings",
  "adult",
  "index",
  "nails",
  "horns",
  "balls",
  "flame",
  "rates",
  "drill",
  "trace",
  "skins",
  "waxed",
  "seats",
  "stuff",
  "ratio",
  "minds",
  "dirty",
  "silly",
  "coins",
  "hello",
  "trips",
  "leads",
  "rifle",
  "hopes",
  "bases",
  "shine",
  "bench",
  "moral",
  "fires",
  "meals",
  "shake",
  "shops",
  "cycle",
  "movie",
  "slope",
  "canoe",
  "teams",
  "folks",
  "fired",
  "bands",
  "thumb",
  "shout",
  "canal",
  "habit",
  "reply",
  "ruled",
  "fever",
  "crust",
  "shelf",
  "walks",
  "midst",
  "crack",
  "print",
  "tales",
  "coach",
  "stiff",
  "flood",
  "verse",
  "awake",
  "rocky",
  "march",
  "fault",
  "swift",
  "faint",
  "civil",
  "ghost",
  "feast",
  "blade",
  "limit",
  "germs",
  "reads",
  "ducks",
  "dairy",
  "worst",
  "gifts",
  "lists",
  "stops",
  "rapid",
  "brick",
  "claws",
  "beads",
  "beast",
  "skirt",
  "cakes",
  "lions",
  "frogs",
  "tries",
  "nerve",
  "grand",
  "armed",
  "treat",
  "honey",
  "moist",
  "legal",
  "penny",
  "crown",
  "shock",
  "taxes",
  "sixty",
  "altar",
  "pulls",
  "sport",
  "drums",
  "talks",
  "dying",
  "dates",
  "drank",
  "blows",
  "lever",
  "wages",
  "proof",
  "drugs",
  "tanks",
  "sings",
  "tails",
  "pause",
  "herds",
  "arose",
  "hated",
  "clues",
  "novel",
  "shame",
  "burnt",
  "races",
  "flash",
  "weary",
  "heels",
  "token",
  "coats",
  "spare",
  "shiny",
  "alarm",
  "dimes",
  "sixth",
  "clerk",
  "mercy",
  "sunny",
  "guest",
  "float",
  "shone",
  "pipes",
  "worms",
  "bills",
  "sweat",
  "suits",
  "smart",
  "upset",
  "rains",
  "sandy",
  "rainy",
  "parks",
  "sadly",
  "fancy",
  "rider",
  "unity",
  "bunch",
  "rolls",
  "crash",
  "craft",
  "newly",
  "gates",
  "hatch",
  "paths",
  "funds",
  "wider",
  "grace",
  "grave",
  "tides",
  "admit",
  "shift",
  "sails",
  "pupil",
  "tiger",
  "angel",
  "cruel",
  "agent",
  "drama",
  "urged",
  "patch",
  "nests",
  "vital",
  "sword",
  "blame",
  "weeds",
  "screw",
  "vocal",
  "bacon",
  "chalk",
  "cargo",
  "crazy",
  "acted",
  "goats",
  "arise",
  "witch",
  "loves",
  "queer",
  "dwell",
  "backs",
  "ropes",
  "shots",
  "merry",
  "phone",
  "cheek",
  "peaks",
  "ideal",
  "beard",
  "eagle",
  "creek",
  "cries",
  "ashes",
  "stall",
  "yield",
  "mayor",
  "opens",
  "input",
  "fleet",
  "tooth",
  "cubic",
  "wives",
  "burns",
  "poets",
  "apron",
  "spear",
  "organ",
  "cliff",
  "stamp",
  "paste",
  "rural",
  "baked",
  "chase",
  "slice",
  "slant",
  "knock",
  "noisy",
  "sorts",
  "stays",
  "wiped",
  "blown",
  "piled",
  "clubs",
  "cheer",
  "widow",
  "twist",
  "tenth",
  "hides",
  "comma",
  "sweep",
  "spoon",
  "stern",
  "crept",
  "maple",
  "deeds",
  "rides",
  "muddy",
  "crime",
  "jelly",
  "ridge",
  "drift",
  "dusty",
  "devil",
  "tempo",
  "humor",
  "sends",
  "steal",
  "tents",
  "waist",
  "roses",
  "reign",
  "noble",
  "cheap",
  "dense",
  "linen",
  "geese",
  "woven",
  "posts",
  "hired",
  "wrath",
  "salad",
  "bowed",
  "tires",
  "shark",
  "belts",
  "grasp",
  "blast",
  "polar",
  "fungi",
  "tends",
  "pearl",
  "loads",
  "jokes",
  "veins",
  "frost",
  "hears",
  "loses",
  "hosts",
  "diver",
  "phase",
  "toads",
  "alert",
  "tasks",
  "seams",
  "coral",
  "focus",
  "naked",
  "puppy",
  "jumps",
  "spoil",
  "quart",
  "macro",
  "fears",
  "flung",
  "spark",
  "vivid",
  "brook",
  "steer",
  "spray",
  "decay",
  "ports",
  "socks",
  "urban",
  "goals",
  "grant",
  "minus",
  "films",
  "tunes",
  "shaft",
  "firms",
  "skies",
  "bride",
  "wreck",
  "flock",
  "stare",
  "hobby",
  "bonds",
  "dared",
  "faded",
  "thief",
  "crude",
  "pants",
  "flute",
  "votes",
  "tonal",
  "radar",
  "wells",
  "skull",
  "hairs",
  "argue",
  "wears",
  "dolls",
  "voted",
  "caves",
  "cared",
  "broom",
  "scent",
  "panel",
  "fairy",
  "olive",
  "bends",
  "prism",
  "lamps",
  "cable",
  "peach",
  "ruins",
  "rally",
  "schwa",
  "lambs",
  "sells",
  "cools",
  "draft",
  "charm",
  "limbs",
  "brake",
  "gazed",
  "cubes",
  "delay",
  "beams",
  "fetch",
  "ranks",
  "array",
  "harsh",
  "camel",
  "vines",
  "picks",
  "naval",
  "purse",
  "rigid",
  "crawl",
  "toast",
  "soils",
  "sauce",
  "basin",
  "ponds",
  "twins",
  "wrist",
  "fluid",
  "pools",
  "brand",
  "stalk",
  "robot",
  "reeds",
  "hoofs",
  "buses",
  "sheer",
  "grief",
  "bloom",
  "dwelt",
  "melts",
  "risen",
  "flags",
  "knelt",
  "fiber",
  "roofs",
  "freed",
  "armor",
  "piles",
  "aimed",
  "algae",
  "twigs",
  "lemon",
  "ditch",
  "drunk",
  "rests",
  "chill",
  "slain",
  "panic",
  "cords",
  "tuned",
  "crisp",
  "ledge",
  "dived",
  "swamp",
  "clung",
  "stole",
  "molds",
  "yarns",
  "liver",
  "gauge",
  "breed",
  "stool",
  "gulls",
  "awoke",
  "gross",
  "diary",
  "rails",
  "belly",
  "trend",
  "flask",
  "stake",
  "fried",
  "draws",
  "actor",
  "handy",
  "bowls",
  "haste",
  "scope",
  "deals",
  "knots",
  "moons",
  "essay",
  "thump",
  "hangs",
  "bliss",
  "dealt",
  "gains",
  "bombs",
  "clown",
  "palms",
  "cones",
  "roast",
  "tidal",
  "bored",
  "chant",
  "acids",
  "dough",
  "camps",
  "swore",
  "lover",
  "hooks",
  "males",
  "cocoa",
  "punch",
  "award",
  "reins",
  "ninth",
  "noses",
  "links",
  "drain",
  "fills",
  "nylon",
  "lunar",
  "pulse",
  "flown",
  "elbow",
  "fatal",
  "sites",
  "moths",
  "meats",
  "foxes",
  "mined",
  "attic",
  "fiery",
  "mount",
  "usage",
  "swear",
  "snowy",
  "rusty",
  "scare",
  "traps",
  "relax",
  "react",
  "valid",
  "robin",
  "cease",
  "gills",
  "prior",
  "safer",
  "polio",
  "loyal",
  "swell",
  "salty",
  "marsh",
  "vague",
  "weave",
  "mound",
  "seals",
  "mules",
  "virus",
  "scout",
  "acute",
  "windy",
  "stout",
  "folds",
  "seize",
  "hilly",
  "joins",
  "pluck",
  "stack",
  "lords",
  "dunes",
  "burro",
  "hawks",
  "trout",
  "feeds",
  "scarf",
  "halls",
  "coals",
  "towel",
  "souls",
  "elect",
  "buggy",
  "pumps",
  "loans",
  "spins",
  "files",
  "oxide",
  "pains",
  "photo",
  "rival",
  "flats",
  "syrup",
  "rodeo",
  "sands",
  "moose",
  "pints",
  "curly",
  "comic",
  "cloak",
  "onion",
  "clams",
  "scrap",
];

function getWord(lvl) {
  if (lvl === 1)
    return lvl1Words[Math.floor(Math.random() * lvl1Words.length - 1)];
}

function checkWord(word) {
  if (lvl1Words.includes(word)) return true;
}
/*---------------- Constants ---------------*/

let words;
let validLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";

/*--------- Variables (state) ----------*/

let todaysWord = `${getWord(1).toUpperCase()}`;
let cursor = 0;
let generatedWord;
let result = false;
let rowIndex = 0;

/*------- Cached Element References ------*/

const rowElements = document.querySelectorAll(".row.elements");
const allElements = document.querySelectorAll(".sqr");
const keyboardEls = document.querySelectorAll(".rowKeys");
const keyboardElements = document.querySelectorAll(".keyboard");
const messageEl = document.getElementById("message");
const resetEl = document.getElementById("reset");

/*-------- Functions -----------------*/

init();

function init() {
  words = ["", "", "", "", ""];
  generatedWord = "";
  cursor = 0;
  console.log(`Today's word is: ${todaysWord.toUpperCase()}`);
}

function handleKeyboardClick(event) {
  let enteredLetter = event.target.id;
  if (enteredLetter === "del") {deleteLetter();}
  displayWord(enteredLetter);
}


function compareWords() {
  for (let letter = 0; letter < todaysWord.length; letter++) {
    if (checkWord(generatedWord.toLowerCase())) {
      if (generatedWord[letter] === todaysWord[letter]) {
        rowElements[rowIndex].children[letter].style.backgroundColor =
          "rgb(106, 170, 100)";
        document.getElementById(generatedWord[letter]).style.backgroundColor =
          "rgb(106, 170, 100)";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
        setTimeout(2000);
      } else if (todaysWord.includes(generatedWord[letter])) {
        rowElements[rowIndex].children[letter].style.backgroundColor =
          "rgb(201, 180, 88)";
        document.getElementById(generatedWord[letter]).style.backgroundColor =
          "rgb(201, 180, 88)";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
        setTimeout(2000);
      } else {
        rowElements[rowIndex].children[letter].style.backgroundColor = "gray";
        document.getElementById(generatedWord[letter]).style.backgroundColor =
          "gray";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
        setTimeout(2000);
      }
    } else {
      rowElements[rowIndex].children[letter].classList.remove(
        "animate__animated",
        "animate__fadeIn"
      );
      rowElements[rowIndex].children[letter].classList.add(
        "animate__animated",
        "animate__shakeX"
      );
      
    }
  }
  if (generatedWord === todaysWord) {
    result = true;
    confetti.start(1500);
  }
  if (checkWord(generatedWord.toLowerCase())) {
    rowIndex++;
    if(!result && rowIndex ===6){
      messageEl.classList.add("animate__animated","animate__zoomInDown");
      messageEl.textContent = `I got you! The WORDLE was: ${todaysWord}`;
    }
    console.log(`Row index is: ${rowIndex}`);
  }
}

function displayWord(selectedLetter) {
  if (!result) {
    if (validLetters.includes(selectedLetter)) {
      if (words[0] === "") {
        words[0] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (words[1] === "") {
        words[1] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (words[2] === "") {
        words[2] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (words[3] === "") {
        words[3] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (words[4] === "") {
        words[4] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      }

      if (generatedWord.length >= 0 && generatedWord.length < words.length) {
        generatedWord = `${generatedWord}${selectedLetter}`;
        cursor++;
      }
      
    }
  }
}

function deleteLetter() {
  if (cursor >= 1) {
    rowElements[rowIndex].children[cursor - 1].textContent = "";
    words[cursor - 1] = "";
    generatedWord = generatedWord.slice(0, generatedWord.length - 1);
    cursor--;
  }
}

function reset() {
  window.location.reload();
}
/*----------- Event Listeners ----------*/

keyboardElements.forEach((keyboardElement) => {
  if(rowIndex<6){
  keyboardElement.addEventListener("click", handleKeyboardClick);}
});

document.addEventListener("keydown", (evt) => {
  if(rowIndex<6){
  displayWord(evt.key.toUpperCase());}

  if (evt.key === "Enter" && !result && cursor === 5 && rowIndex<6) {
    compareWords();
    if (checkWord(generatedWord.toLowerCase())) {
      init();
    }
  }

  if (evt.key === "Backspace" && cursor >= 0) {
    deleteLetter();
  }
});

resetEl.addEventListener("click", reset);
