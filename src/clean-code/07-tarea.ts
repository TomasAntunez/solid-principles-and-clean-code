( ()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';

  interface IdProp { id: string }
  interface HtmlElementProps extends IdProp {
    type : HtmlType;
  }
 
  class HtmlElement {
    public id   : string;
    public type : HtmlType;

    constructor({ id, type }: HtmlElementProps) {
      this.id   = id;
      this.type = type;
    }
  }


  interface InputAttributesProps {
    placeholder : string;
    value       : string;
  }

  class InputAttributes {
    public placeholder : string;
    public value       : string;

    constructor({ placeholder, value }: InputAttributesProps) {
      this.placeholder = placeholder;
      this.value       = value;
    }
  }


  class InputEvents {

    constructor() {}

    setFocus() {};
    getValue() {};
    isActive() {};
    removeValue() {};
  }


  //? Idea para la nueva clase InputElement
  interface InputElementProps extends IdProp, InputAttributesProps {}

  class InputElement {
    public html       : HtmlElement;
    public attributes : InputAttributes;
    public events     : InputEvents;

    constructor({ id, placeholder, value }: InputElementProps) {
      this.html       = new HtmlElement({ id, type: "input" });
      this.attributes = new InputAttributes({ placeholder, value });
      this.events     = new InputEvents();
    }
  }


  const nameField = new InputElement({
    id          : 'txtName',
    placeholder : 'Enter first name',
    value       : 'Fernando',
  });

  console.log({ nameField });

})();
