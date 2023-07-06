
// Interface is a good option
export abstract class Vehicle {
  // getNumberOfSeats(): number {
  //   throw Error('Method not implemented');
  // }

  // constructor( protected readonly numberOfSeats: number ) {}
  // getNumberOfSeats(): number {
  //   return this.numberOfSeats;
  // };

  // In this way the subclasses are obliged to implement the method, as they want
  abstract getNumberOfSeats(): number;

}


export class Tesla extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Ford extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}