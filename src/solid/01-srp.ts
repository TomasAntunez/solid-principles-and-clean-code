(() => {

  interface Product { 
    id:   number;
    name: string;
  }


  class ProductService {

    getProduct(id: number) {
      console.log('Producto: ',{ id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product );
    }

  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private productService : ProductService;
    private mailer         : Mailer;


    constructor( productService: ProductService, mailer: Mailer ) {
      this.productService = productService;
      this.mailer         = mailer;
    }


    loadProduct( id: number ) {
      this.productService.getProduct(id);
    }

    saveProduct( product: Product ) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail({ emailList: ['email@email.com'], template: "to-clients" });
    }

  }


  interface SendEmailProps {
    emailList : Array<string>;
    template  : 'to-clients'|'to-admins';
  }

  class Mailer {

    private ownEmail: string = "myCompanyEmail@email.com";

    sendEmail({ emailList, template }: SendEmailProps) {
      console.log(`Enviando el correo: ${template}, a los clientes: ${emailList}, desde: ${ this.ownEmail }`);
    }

  }


  class CartBlock {

    private items: Array<Product> = [];

    addToCart( productId: number ) {
      console.log('Agregando al carrito ', productId );
    }

  }


  const productService = new ProductService();
  const mailer         = new Mailer();
  

  const productBloc = new ProductBloc( productService, mailer );
  const cartBlock   = new CartBlock();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBlock.addToCart(10);


})();
