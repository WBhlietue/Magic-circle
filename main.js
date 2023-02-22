const mainColor = "#ff0000";
const backColor = "#000000";

const width = 5;
const bigWidth = 70;

const runes1 = [
  "ᛁ ᚪᛘ ᚦᛖ ᛒᚩᚾᛖ ᚩᚠ ᛘᛁ ᛋᚹᚩᚱᛞ ᛋᛏᛖᛖᛚ ᛁᛋ ᛘᛁ ᛒᚩᛞᛁ ᚪᚾᛞ ᚠᛁᚱᛖ ᛁᛋ ᛘᛁ ᛒᛚᚩᚩᛞ",
  "ᛁ ᚻᚪᚠᛖ ᚳᚱᛠᛏᛖᛞ ᚩᚠᛖᚱ ᚪ ᚦᚩᚢᛋᚪᚾᛞ ᛒᛚᚪᛞᛖᛋ",
  "ᚢᚾᚪᚹᚪᚱᛖ ᚩᚠ ᛚᚩᛋᛋ",
  "ᚾᚩᚱ ᚪᚹᚪᚱᛖ ᚩᚠ ᚷᚪᛁᚾ",
  "ᚹᛁᚦᛋᛏᚩᚩᛞ ᛈᚪᛁᚾ ᛏᚩ ᚳᚱᛠᛏᛖ ᚹᛠᛈᚩᚾᛋ ᚹᚪᛁᛏᛁᛝ ᚠᚩᚱ ᚩᚾᛖ ᛋ ᚪᚱᚱᛁᚠᚪᛚ",
  "ᛁ ᚻᚪᚠᛖ ᚾᚩ ᚱᛖᚷᚱᛖᛏᛋ ᛏᚻᛁᛋ ᛁᛋ ᚦᛖ ᚩᚾᛚᛁ ᛈᚪᚦ",
  "ᛘᛁ ᚹᚻᚩᛚᛖ ᛚᛁᚠᛖ ᚹᚪᛋ ᚢᚾᛚᛁᛘᛁᛏᛖᛞ ᛒᛚᚪᛞᛖ ᚹᚩᚱᚳᛋ",
];
const runes2 = [
  "ᛖᚷᚩ ᛋᚢᛘ ᚩᛋ ᚷᛚᚪᛞᛁᛁ ᛘᛖᛁ",
  "ᚠᛖᚱᚱᚢᛘ ᛖᛋᛏ ᚳᚩᚱᛈᚢᛋ ᛘᛖᚢᛘ ᛖᛏ ᛁᚷᚾᛁᛋ ᛖᛋᛏ ᛋᚪᛝᚢᛁᛋ ᛘᛖᚢᛋ",
  "ᛘᛁᛚᛚᛖ ᛏᛁᛒᛁ ᛞᛖᛞᛁ ᛋᚢᛈᛖᚱ ᛋᚳᚪᛈᚢᛚᚪᛋ",
  "ᛘᚩᚱᛏᛁ ᛁᚷᚾᚩᛏᛇ",
  "ᚾᛖᚳ ᚾᚩᛏᚪ ᚠᛁᛏᛇ",
  "ᛘᚢᛚᛏᚩᛋ ᚪᚱᛘᚪ ᚳᚱᛠᚠᛁ ᛞᚩᛚᚩᚱᛖ ᚱᛖᛋᛏᛁᛏᛁ",
  "ᚪᛏᚳᚢᛁ ᛘᚪᚾᚢᛋ ᛁᛚᛚᛇ ᚾᚢᚾᚳᚢᚪᛘ ᚳᚢᛁᚳᚳᚢᚪᛘ ᛏᛖᚾᛖᚾᛏ",
  "ᛁᛏᚪᚳᚢᛖ ᚢᛏ ᛈᚱᛖᚳᚩᚱ ᛁᚾᚠᛁᚾᛁᛏᚢᛋ ᛒᛚᚪᛞᛖ ᚹᚩᚱᚳᛋ",
];

document
  .getElementById("main")
  .appendChild(
    AddCircleTextSet(
      700,
      runes1[0] + runes1[1] + runes1[2] + runes1[3] + runes1[4],
      "normal",
      bigWidth,
      30,
      9
    )
  );
document
  .getElementById("main")
  .appendChild(
    AddCircleTextSet(
      630,
      runes2[0] +
        runes2[1] +
        runes2[2] +
        runes2[3] +
        runes2[4] +
        runes2[5] +
        runes2[6],
      "reverse",
      bigWidth,
      30,
      7
    )
  );
AddStar(550);
document
  .getElementById("main")
  .appendChild(
    AddCircleTextSet(250, runes1[5] + runes1[6], "normal", bigWidth, 30, 5)
  );
document
  .getElementById("main")
  .appendChild(
    AddCircleTextSet(180, runes2[7] + runes2[8], "reverse", bigWidth, 30, 3)
  );

function CreateCircle(size, color, child = null) {
  size += "px";
  var circle = document.createElement("div");
  circle.className = "circle";
  circle.style = "--size:" + size + "; background-color:" + color;
  if (child != null) {
    circle.appendChild(child);
  }
  return circle;
}

function CreateCircleSet(outSize, distance = bigWidth) {
  var circle = CreateCircle(
    outSize,
    mainColor,
    CreateCircle(
      outSize - width,
      backColor,
      CreateCircle(
        outSize - width - distance,
        mainColor,
        CreateCircle(outSize - width - distance - width, backColor)
      )
    )
  );
  return circle;
}

function TextCircle(size, text, dir = "normal", fontSize = 30, aniDur = 10) {
  size += "px";
  var circle = document.createElement("div");
  circle.className = "textCirlce";
  circle.style =
    "--size:" +
    size +
    "; animation-direction:" +
    dir +
    "; animation-duration:" +
    aniDur +
    "s";
  var t = text.split(" ");
  text = "";
  t.map((i) => {
    text += i;
  });
  var rotationStep = 360.0 / text.length;
  for (let i = 0; i < text.length; i++) {
    var div = document.createElement("div");
    div.className = "textChild";
    div.innerHTML = text[i];
    div.style =
      "--rot:" + i * rotationStep + "deg; " + "font-size:" + fontSize + "px";
    circle.appendChild(div);
  }
  return circle;
}

function AddCircleTextSet(
  size,
  text,
  dir,
  distance = bigWidth,
  fontSize = 30,
  aniDur = 10
) {
  var set = document.createElement("div");
  set.className = "fill";
  set.appendChild(CreateCircleSet(size, distance));
  set.appendChild(TextCircle(size, text, dir, fontSize, aniDur));
  return set;
  //   document.getElementById("main").appendChild(CreateCircleSet(size));
  //   document.getElementById("main").appendChild(TextCircle(size, text, dir));
}

function AddStar(size) {
  var circle = GetStar(size);
  var circle2 = GetStar(size);
  var circle1 = GetStar(size);
  circle1.style = "transform:rotateZ(180deg)";
  for (var i = 0; i < 6; i++) {
    var t = document.createElement("div");
    t.className = "textChild";
    var inC = AddCircleTextSet(
      120,
      "ᚳᛁᛚᛚᛖᚱ ᚳᚢᛖᛖᚾ ᛞᚪᛁᛋᚪᚾ ᚾᚩ ᛒᚪᚳᚢᛞᚾᚪ ᛒᛁᛏᛖᛋ ᚪ ᛞᚢᛋᛏ",
      "normal",
      30,
      10,
      3
    );
    inC.style = "transform:scale(1)";
    t.style = "--size:420px; --rot:" + i * 60 + "deg; ";
    t.appendChild(inC);
    circle.appendChild(t);
  }
  for (var i = 0; i < 6; i++) {
    var t = document.createElement("div");
    t.className = "textChild";
    var inC = AddCircleTextSet(
      70,
      "ᛋᚪ ᚹᚪᚱᚢᛞᚩ ᛏᚩᚳᛁ ᛁᚩ ᛏᚩᛘᚪᚱᛖ",
      "reverse",
      30,
      10,
      3
    );
    inC.style = "transform:scale(1)";
    t.style = "--size:420px; --rot:" + i * 60 + "deg; ";
    t.appendChild(inC);
    circle.appendChild(t);
  }
  for (var i = 0; i < 6; i++) {
    var t = document.createElement("div");
    t.className = "textChild";
    var inC = AddCircleTextSet(
      90,
      "ᛞᛁᚱᛏᛁ ᛞᛖᛖᛞᛋ ᛞᚩᚾᛖ ᛞᛁᚱᛏ ᚳᚻᛠᛈ",
      "reverse",
      30,
      10,
      3
    );
    inC.style = "transform:scale(1)";
    t.style = "--size:345px; --rot:" + (i * 60 + 30) + "deg; ";
    t.appendChild(inC);
    circle.appendChild(t);
  }
  document.getElementById("main").appendChild(circle);
  document.getElementById("main").appendChild(circle1);
  document.getElementById("main").appendChild(circle2);
}

function GetStar(size) {
  let width = 5;
  var circle = document.createElement("div");
  circle.classList.add("starOut");
  var st1 = document.createElement("div");
  st1.className = "stick";
  let r = size / 2;
  let x = (-r / 2) * Math.cos((30 * Math.PI) / 180);
  let y = -r / 4;
  st1.style =
    "width:" +
    width +
    "px; height:" +
    size * Math.sin((60 * Math.PI) / 180) +
    "px; transform: translate(" +
    x +
    "px," +
    y +
    "px) rotateZ(30deg)";
  circle.appendChild(st1);
  var st2 = document.createElement("div");
  st2.className = "stick";
  x = (r / 2) * Math.cos((30 * Math.PI) / 180);
  y = -r / 4;
  st2.style =
    "width:" +
    width +
    "px; height:" +
    size * Math.sin((60 * Math.PI) / 180) +
    "px; transform: translate(" +
    x +
    "px," +
    y +
    "px) rotateZ(-30deg)";
  circle.appendChild(st2);
  var st3 = document.createElement("div");
  st3.className = "stick";
  x = 0;
  y = r / 2;
  st3.style =
    "width:" +
    width +
    "px; height:" +
    size * Math.sin((60 * Math.PI) / 180) +
    "px; transform: translate(" +
    x +
    "px," +
    y +
    "px) rotateZ(90deg)";
  circle.appendChild(st3);

  return circle;
}
