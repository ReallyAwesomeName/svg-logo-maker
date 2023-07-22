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
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="50,150 150,50 250,150" fill="${this.color}" /><text x="50%" y="50%" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text></svg>`;
    return svgString;
  }
}

class Circle extends Shapes {
  render() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="50%" cy="50%" r="80" fill="${this.color}" /><text x="50%" y="50%" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text></svg>`;
    return svgString;
  }
}

class Square extends Shapes {
  render() {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="${this.color}" /><text x="50%" y="50%" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text></svg>`;
    return svgString;
  }
}

module.exports = { Triangle, Circle, Square };
