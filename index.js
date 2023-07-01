const inquirer = require("inquirer");
const fs = require("fs");

// prompt user for color, shape, and text to make a svg file
inquirer
  .prompt([
    {
      type: "input",
      name: "color",
      message: "What is the color of your shape?",
    },
    {
      type: "input",
      name: "shape",
      message: "What shape would you like?",
    },
    {
      type: "input",
      name: "text",
      message: "What is the text in your shape?",
    },
    {
      type: "input",
      name: "fileName",
      message: "What is the name of your svg file?",
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Would you like to create a new file?",
    },
  ])
  .then(function (data) {
    if (data.confirm === true) {
      const svg = makeSvg(data.color, data.shape, data.text);
      fs.writeFile(data.fileName + ".svg", svg, function (err) {
        if (err) throw err;
        console.log("Your svg file has been created!");
        process.exit();
      });
    }
  });

// function to make an svg file
function makeSvg(color, shape, text) {
  let svgString = ``;
  if (shape === "rectangle" || shape === "square") {
    shape = "rect";
    svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <${shape} width="100%" height="100%" fill="${color}" />
    <text x="150" y="150" fill="white" font-size="20" text-anchor="middle">${text}</text>
    </svg>`;
  }
  if (shape === "circle") {
    svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <${shape} cx="150" cy="100" r="80" fill="${color}" />
    <text x="150" y="150" fill="white" font-size="20" text-anchor="middle">${text}</text>
    </svg>`;
  }
  return svgString;
}
