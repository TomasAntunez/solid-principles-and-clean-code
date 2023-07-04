
type Size = '' | 'S' | 'M' | 'XL';

class Product {

  constructor(
    public name:  string = '',
    public price: number = 0,
    public size:  Size   = '',
  ) {}

  
  isValidProduct() {
    for ( const key in this ) {
      switch( typeof this[key] ) {
        case 'string':
          if ( !this[key] ) throw new Error(`${ key } is empty`);
        break;
        case 'number':
          if ( <number>this[key] <= 0 ) throw new Error(`${ key } is not valid`);
        break;
        default:
          throw Error(`${ typeof this[key] } is not valid`);
      }
    }
  }


  toString() {
    // No DRY
    // if ( !this.name )  throw new Error('name is empty');
    // if ( !this.price ) throw new Error('price is empty');
    // if ( !this.size )  throw new Error('size is empty');

    this.isValidProduct();

    return `${ this.name } (${ this.price }), ${ this.size }`;
  }
}


( () => {

  const bluePants = new Product('Blue Large Pants', 50);
  console.log( bluePants.toString() );

})();
