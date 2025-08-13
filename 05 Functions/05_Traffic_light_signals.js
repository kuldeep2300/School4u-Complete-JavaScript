// 5) Write a function that takes a traffic light color and gives the correct instruction (e.g. "go" for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).

function trafficLightInstructions(color) {
  if (color === "green") {
    console.log("Go");
  } else if (color === "red") {
    console.log("Stop");
  } else if (color === "yellow") {
    console.log("Caution");
  } else {
    console.log("Invalid color!");
  }
}

trafficLightInstructions('yellow');