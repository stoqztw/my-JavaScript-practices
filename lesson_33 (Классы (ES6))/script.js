'use strict';

class Rectangle {
	constructor (height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height*this.width;
	}
}

class ColoredRectangleWithText extends Rectangle {
	constructor (height, width, bgColor, text) {
		super(height, width);
		this.bgColor = bgColor;
		this.text = text;
	}

	showMyProps() {
		console.log(`Text: ${this.text}, color: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'red', 'helloWorld');
div.showMyProps();
console.log(div.calcArea());


// const square = new Rectangle(100, 100);
// const long = new Rectangle(20, 100);
// console.log(long.calcArea());