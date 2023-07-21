const { Shapes, Triangle, Circle, Square } = require('./shapes.mjs');
const { test, expect } = require('@jest/globals');

test('Triangle Passed', () => {
    const thisShape = new Triangle(50, 50, 'cyan', 'wow', 'red');
    const svgString = thisShape.render();
    expect(svgString).toBe(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <polygon points="50,150 150,50 250,150" fill="cyan" />
    <text x="50%" y="50%" fill="red" font-size="20" text-anchor="middle">wow</text>
    </svg>`)
});

test('Square Passed', () => {
    const thisShape = new Square(50, 50, 'cyan', 'wow', 'red');
    const svgString = thisShape.render();
    expect(svgString).toBe(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="cyan" />
    <text x="50%" y="50%" fill="red" font-size="20" text-anchor="middle">wow</text>
    </svg>`)
});

test('Circle Passed', () => {
    const thisShape = new Circle(50, 50, 'cyan', 'wow', 'red');
    const svgString = thisShape.render();
    expect(svgString).toBe(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="50%" cy="50%" r="80" fill="cyan" />
    <text x="50%" y="50%" fill="red" font-size="20" text-anchor="middle">wow</text>
    </svg>`)
});
