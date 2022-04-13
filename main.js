const map = document.querySelector(".map");
const player = document.querySelector(".player");
let topY = -window.innerHeight / 2;
let leftX = -window.innerWidth / 2;
const cellSize = 50;

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

map.style = `transform: translate3d(${leftX}px, ${topY}px, 0px)`;
player.style = `transform: translate3d(${-leftX}px, ${-topY}px, 0px)`;

let keysPressed = {};

document.addEventListener("keydown", (e) => {
  keysPressed[e.key] = true;

  if (
    (keysPressed["s"] && e.key == "a") ||
    (keysPressed["a"] && e.key == "s")
  ) {
    topY -= cellSize;
    leftX += cellSize;
  }

  if (
    (keysPressed["s"] && e.key == "d") ||
    (keysPressed["d"] && e.key == "s")
  ) {
    topY -= cellSize;
    leftX -= cellSize;
  }

  if (
    (keysPressed["w"] && e.key == "a") ||
    (keysPressed["a"] && e.key == "w")
  ) {
    topY += cellSize;
    leftX += cellSize;
  }

  if (
    (keysPressed["w"] && e.key == "d") ||
    (keysPressed["d"] && e.key == "w")
  ) {
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

  map.style = `transform: translate3d(${leftX}px, ${topY}px, 0px)`;
  player.style = `transform: translate3d(${-leftX}px, ${-topY}px, 0px)`;
});

document.addEventListener("keyup", (e) => {
  delete keysPressed[e.key];
});

const placeGameObject = (x, y, html) => {
  const object = document.createElement('template');
  object.innerHTML = html;
  object.style = `width: ${cellSize}px; height: ${cellSize}px; background: black; position: absolute; transform: translate(${
    x * cellSize - cellSize
  }px, ${y * cellSize - cellSize}px);`;
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

map.addEventListener("click", (e) => {
  if (e.target.className === "map") {
    console.log(e.target.className);
    let x = 0;
    let y = 0;
    const offsetX = e.offsetX - 7;
    if (offsetX % cellSize < 15) {
      x = offsetX - (offsetX % cellSize);
    } else {
      x = offsetX - (offsetX % cellSize) + cellSize;
    }

    if (e.offsetY % cellSize < 15) {
      y = e.offsetY - (e.offsetY % cellSize);
    } else {
      y = e.offsetY - (e.offsetY % cellSize) + cellSize;
    }

    placeGameObject(x / cellSize, y / cellSize);
  }
});
