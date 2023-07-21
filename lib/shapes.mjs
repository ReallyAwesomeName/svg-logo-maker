// shapes class to be used as base for all shapes

class Shapes {
  constructor(x, y, color, text, textColor) {
    this.x = x;
    this.y = y;
    this.color = color;
	this.text = text;
	this.textColor = textColor;
  }
  // setter method for color
  setColor(color) {
    this.setAttribute("fill", color);
  }
}

class Triangle extends Shapes {
	render() {
	  let myTriangle = new SVGPolygonElement();
	  // myTriangle.points = "150, 18 244, 182 56, 182";
	  myTriangle.points = "50,150 150,50 250,150";
	  myTriangle.style.fill = this.color;
	  return myTriangle;
	}
  }

class Circle extends Shapes {
	render() {
		let radius = 50;
		let myCircle = SVGCircleElement(this.x, this.y, radius);
		myCircle.style.fill = this.color;
		return myCircle;
	}
}

class Square extends Shapes {
	render() {
		let height = 100;
		let width = height;
		let myRect = SVGRectElement(this.x, this.y, height, width);
		myRect.setColor(this.color);
		return myRect;
	}
}

module.exports = { Shapes, Triangle, Circle, Square };
