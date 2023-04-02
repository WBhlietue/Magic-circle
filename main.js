var color1 = "#ff0000";
var color2 = "#0000ff";
var initRot = 60;
var isRot = false;
var rotDuration = "0.4s";
var inverse = true;
var glow = 0;
var backColor = "#000000";
// var gradient = "none";
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

Set();

function Set() {
  document.getElementById("main").innerHTML = "";
  document.getElementById("main").style.backgroundColor = backColor;
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
      AddCircleTextSet(250, runes1[5] + runes1[6], "reverse", bigWidth, 30, 3)
    );
  document
    .getElementById("main")
    .appendChild(AddCircleTextSet(180, runes2[7], "normal", bigWidth, 30, 2));

  function CreateCircle(size, color, child = null) {
    size += "px";
    var circle = document.createElement("div");
    circle.className = "circle";
    circle.style = "--size:" + size + "; background-color:" + color + "; --glow:" + glow;
    if (child != null) {
      circle.appendChild(child);
    }
    return circle;
  }

  function CreateCircleSet(outSize, distance = bigWidth) {
    var circle = CreateCircle(
      outSize,
      "#ffffff",
      CreateCircle(
        outSize - width,
        "#000000",
        CreateCircle(
          outSize - width - distance,
          "#ffffff",
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
      t.style = "--size:420px; --rot:" + i * 60 + "deg;";
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
    var f = document.createElement("div");
    f.className = "aniFill";

    f.appendChild(circle1);
    f.appendChild(circle2);
    f.appendChild(circle);
    document.getElementById("main").appendChild(f);
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
      "px) rotateZ(30deg);";
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
      "px) rotateZ(-30deg);";
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
      "px) rotateZ(90deg);";
    circle.appendChild(st3);

    return circle;
  }

  document.getElementById("mask").style.background =
    "linear-gradient(to bottom," +
    color1 +
    ", " +
    color1 +
    ", " +
    color2 +
    ", " +
    color2 +
    ")";
  if (isRot) {
    document.getElementById("mask").style.animationDuration = rotDuration + "s";
    document.getElementById("mask").style.animationDirection = inverse
      ? "reverse"
      : "normal";
  } else {
    document.getElementById("mask").style.animationDuration = "0s";
    document.getElementById("mask").style.animationDirection = inverse
      ? "reverse"
      : "normal";
    document.getElementById("mask").style.transform =
      "translate(-50%, -50%) rotateZ("+initRot+"deg)"
  }
}

document.getElementById("setBtn").addEventListener("click", () => {
  color1 = document.getElementById("color1").value;
  color2 = document.getElementById("color2").value;
  initRot = document.getElementById("initRot").value;
  isRot = document.getElementById("autoRot").checked;
  rotDuration = document.getElementById("rotDur").value;
  inverse = document.getElementById("rev").checked;
  glow = document.getElementById("glow").value;
  console.log(isRot);

  Set();
});
document.getElementById("color1").value = "#ff0000";
document.getElementById("color2").value = "#0000ff";
document.getElementById("initRot").value = 60;
document.getElementById("autoRot").checked = false;
document.getElementById("rotDur").value = "0.4s";
document.getElementById("rev").checked = true;
document.getElementById("glow").value = glow;

document.getElementById("edit").addEventListener("click", () => {
  document.getElementById("set").style.display = "inherit";
  document.getElementById("edit").style.display = "none";
});
document.getElementById("exitBtn").addEventListener("click", () => {
  document.getElementById("set").style.display = "none";
  document.getElementById("edit").style.display = "inherit";
});
