const map = document.querySelector(".map");
let topY = 0;
let leftX = 0;
const cellSize = 30;

// document.addEventListener("keydown", (e) => {
//   console.log(e);

//   if (e.key === "s") {
//     topY -= cellSize;
//   }

//   if (e.key === "w") {
//     topY += cellSize;
//   }

//   if (e.key === "d") {
//     leftX -= cellSize;
//   }

//   if (e.key === "a") {
//     leftX += cellSize;
//   }

//   map.style = `top: ${topY}px; left: ${leftX}px`;
// });

let keysPressed = {};

document.addEventListener("keydown", (e) => {
  keysPressed[e.key] = true;

  if ((keysPressed["s"] && e.key == "a") || (keysPressed["a"] && e.key == "s")) {
    topY -= cellSize;
    leftX += cellSize;
  }

  if ((keysPressed["s"] && e.key == "d") || (keysPressed["d"] && e.key == "s")) {
    topY -= cellSize;
    leftX -= cellSize;
  }

  if ((keysPressed["w"] && e.key == "a") || (keysPressed["a"] && e.key == "w")) {
    topY += cellSize;
    leftX += cellSize;
  }

  if ((keysPressed["w"] && e.key == "d") || (keysPressed["d"] && e.key == "w")) {
    topY += cellSize;
    leftX -= cellSize;
  }

  if (e.key === "s") {
    topY -= cellSize;
  }

  if (e.key === "w") {
    topY += cellSize;
  }

  if (e.key === "d") {
    leftX -= cellSize;
  }

  if (e.key === "a") {
    leftX += cellSize;
  }


  map.style = `top: ${topY}px; left: ${leftX}px`;
});

document.addEventListener("keyup", (e) => {
  delete keysPressed[e.key];
});

const placeGameObject = (x, y) => {
  const object = document.createElement("div");
  object.style = `width: ${cellSize - 2}px; height: ${
    cellSize - 2
  }px; background: black; position: absolute; transform: translate(${
    x * cellSize
  }px, ${y * cellSize}px);`;
  map.appendChild(object);
};

const mapGrid = [
  {
    x: 0,
    y: 50,
  },
  {
    x: 1,
    y: 50,
  },
  {
    x: 2,
    y: 50,
  },
  {
    x: 3,
    y: 50,
  },
  {
    x: 4,
    y: 50,
  },
  {
    x: 0,
    y: 1,
  },
  {
    x: 1,
    y: 1,
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 3,
    y: 1,
  },
  {
    x: 4,
    y: 1,
  },
  {
    x: 0,
    y: 2,
  },
  {
    x: 1,
    y: 2,
  },
  {
    x: 2,
    y: 2,
  },
];

mapGrid.forEach((item, index) => {
  setTimeout(() => {
    placeGameObject(item.x, item.y);
  }, index * 300);
});
