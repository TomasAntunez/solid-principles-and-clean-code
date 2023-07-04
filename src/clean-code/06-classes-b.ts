
( () => {

  // class Person {
  
  //   public name      : string;
  //   public gender    : Gender;
  //   public birthdate : Date;
  
  //   constructor( name: string, gender: Gender, birthdate: Date ) {
  //     this.name      = name;
  //     this.gender    = gender;
  //     this.birthdate = birthdate;
  //   }
  
  // }

  // Does not apply the single responsibility principle
      
  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate : Date;
    gender    : Gender;
    name      : string;
  }
    
  class Person {
    public birthdate : Date;
    public gender    : Gender;
    public name      : string;

    constructor({ birthdate, gender, name }: PersonProps) {
      this.birthdate = birthdate;
      this.gender    = gender;
      this.name      = name;
    }
  } 


  interface UserProps extends PersonProps {
    email : string;
    role  : string;
  }

  class User extends Person {

    public email      : string;
    public lastAccess : Date;
    public role       : string;

    constructor({ birthdate, gender, name, email, role }: UserProps) {
      super({ birthdate, gender, name });
      this.email      = email;
      this.lastAccess = new Date();
      this.role       = role;
    }

    checkCredentials(): boolean {
      return true;
    }

  }


  interface UserSettingsProps extends UserProps {
    workingDirectory : string;
    lastOpenFolder   : string;
  }

  class UserSettings extends User {

    public lastOpenFolder   : string;
    public workingDirectory : string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.lastOpenFolder   = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }


  // const userSettings = new UserSettings({
  //   '/usr/home',
  //   '/home',
  //   'test@test.com',
  //   'ADMIN',
  //   'Tomas',
  //   'M',
  //   new Date( 1999, 4, 28 )
  // });

  const userSettings = new UserSettings({
    birthdate        : new Date( 1999, 4, 28 ),
    email            : 'test@test.com',
    gender           : 'M',
    lastOpenFolder   : '/home',
    name             : 'Tomas',
    role             : 'ADMIN',
    workingDirectory : '/usr/home',
  });

  console.log({ userSettings });


})();
