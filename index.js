window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#FF0000",
    "#FF2C00",
    "#FF5800",
    "#FF8500",
    "#FFB100",
    "#FFDD00",
    "#F3FF00",
    "#C7FF00",
    "#9BFF00",
    "#6EFF00",
    "#42FF00",
    "#16FF00",
    "#00FF16",
    "#00FF42",
    "#00FF6E",
    "#00FF9B",
    "#00FFC7",
    "#00FFF3",
    "#00DDFF",
    "#00B1FF",
    "#0085FF",
    "#0058FF",
    "#002CFF",
    "#0000FF"
  ];

  const keycodes = [
    49,50,51,52,53,54,
    81,87,69,82,84,89,
    65,83,68,70,71,72,
    90,88,67,86,66,78
  ];

  // console.log("SOUNDS", sounds);
  // console.log("PADS", pads);
  // console.log("COLORS", colors);
  // console.log("KEYCODES", keycodes);

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      pads[index].classList.add("pressanim");
      sounds[index].currentTime = 0;
      sounds[index].play();
      setTimeout(function(){
        pads[index].classList.remove("pressanim");
      },200);
    });
  });

    window.addEventListener("keydown", function(key) {
      if (keycodes.includes(key.keyCode)){
        let pressed = keycodes.indexOf(key.keyCode);
        pads[pressed].classList.add("pressanim");
        sounds[pressed].currentTime = 0;
        sounds[pressed].play();
        setTimeout(function(){
          pads[pressed].classList.remove("pressanim");
        },200);
      }
    });

});
