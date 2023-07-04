
( () => {

  
  
  // class Person {
  
  //   public name     : string;
  //   public gender   : Gender;
  //   public birthdate: Date;
  
  //   constructor( name: string, gender: Gender, birthdate: Date ) {
  //     this.name      = name;
  //     this.gender    = gender;
  //     this.birthdate = birthdate;
  //   }
  
  // }

  // Does not apply the single responsibility principle
      
  type Gender = 'M' | 'F';
    
  class Person {
    constructor(
      public name     : string,
      public gender   : Gender,
      public birthdate: Date,
    ) {}
  }


  class User extends Person {

    public lastAccess: Date;

    constructor(
      public  email: string,
      public  role : string,
      name         : string,
      gender       : Gender,
      birthdate    : Date,
    ) {
      super( name, gender, birthdate );
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }

  }


  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder  : string,
      email                  : string,
      role                   : string,
      name                   : string,
      gender                 : Gender,
      birthdate              : Date,
    ) {
      super( email, role, name, gender, birthdate );
    }
  }


  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'test@test.com',
    'ADMIN',
    'Tomas',
    'M',
    new Date( 1999, 4, 28 )
  );

  console.log({ userSettings });


})();