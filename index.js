const inquirer = require("inquirer");
const fs = require("fs");

// prompt user for color, shape, and text to make a svg file
inquirer
  .prompt([
    {
      type: "input",
      name: "shape",
      message: "What shape would you like? (triangle, square, circle)",
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What is the color of your shape?",
    },
    {
      type: "input",
      name: "text",
      message: "What is the text in your shape? (up to 3 characters)",
      validate: function (value) {
        if (value.length <= 3) {
          return true;
        } else {
          return "Text must be 3 characters or less";
        }
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "What is the color of your text?",
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Would you like to create the file?",
    },
  ])
  .then(function (data) {
    if (data.confirm === true) {
      const svg = makeSvg(
        data.shape,
        data.shapeColor,
        data.text,
        data.textColor
      );
      fs.writeFile("logo.svg", svg, function (err) {
        if (err) throw err;
        console.log("Generated logo.svg");
        process.exit();
      });
    }
  });

// function to make an svg xml string
function makeSvg(shape, shapeColor, text, textColor) {
  let svgString = ``;
  switch (shape) {
    case "triangle":
      svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="50,150 150,50 250,150" fill="${shapeColor}" />
      <text x="50%" y="50%" fill="${textColor}" font-size="20" text-anchor="middle">${text}</text>
      </svg>`;
      break;
    case "square":
      svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" fill="${textColor}" font-size="20" text-anchor="middle">${text}</text>
      </svg>`;
      break;
    case "circle":
      svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="50%" cy="50%" r="80" fill="${shapeColor}" />
      <text x="50%" y="50%" fill="${textColor}" font-size="20" text-anchor="middle">${text}</text>
      </svg>`;
      break;
    default:
      console.log("Please enter a valid shape!");
      process.exit();
  }
  return svgString;
}
