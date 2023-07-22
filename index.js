const { Shapes, Triangle, Circle, Square } = require("./lib/shapes.js");
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
      svgString = new Triangle(50, 50, shapeColor, text, textColor);
      svgString = svgString.render();
      break;
    case "square":
      svgString = new Square(50, 50, shapeColor, text, textColor);
      svgString = svgString.render();
      break;
    case "circle":
      svgString = new Circle(50, 50, shapeColor, text, textColor);
      svgString = svgString.render();
      break;
    default:
      console.log("Please enter a valid shape!");
      process.exit();
  }
  return svgString;
}
