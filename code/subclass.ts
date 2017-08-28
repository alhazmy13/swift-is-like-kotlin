class NamedShape {
    numberOfSides: number = 0;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    simpleDescription(): string {
        return "A shape with " + this.numberOfSides +
         " sides.";
    }
}

class Square extends NamedShape {
    sideLength: number;

    constructor(sideLength: number, name: string) {
        super(name);
        this.sideLength = sideLength;
        this.numberOfSides = 4;
    }

    area() : number {
        return this.sideLength * this.sideLength
    }

    simpleDescription(): string {
        return "A square with sides of length " +
        this.sideLength + "."
    }
}

let test = new Square(5.2, "square");
test.area();
test.simpleDescription();
