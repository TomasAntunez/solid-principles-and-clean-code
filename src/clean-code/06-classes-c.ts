
( () => {

  // Applying the single responsibility principle
  // PRIORITIZE COMPOSITION OVER INHERITANCE
      
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


  interface UserProps {
    email : string;
    role  : string;
  }

  class User {

    public email      : string;
    public lastAccess : Date;
    public role       : string;

    constructor({ email, role }: UserProps) {
      this.email      = email;
      this.lastAccess = new Date();
      this.role       = role;
    }

    checkCredentials(): boolean {
      return true;
    }

  }


  interface SettingsProps {
    workingDirectory : string;
    lastOpenFolder   : string;
  }

  class Settings {

    public lastOpenFolder   : string;
    public workingDirectory : string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.lastOpenFolder   = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }


  interface UserSettingsProps {
    birthdate        : Date;
    gender           : Gender;
    name             : string;
    email            : string;
    role             : string;
    lastOpenFolder   : string;
    workingDirectory : string;
  }

  class UserSettings {

    public person   : Person;
    public user     : User;
    public settings : Settings;

    constructor({
      birthdate, gender, name,
      email, role,
      lastOpenFolder,workingDirectory,
    }: UserSettingsProps ) {
      this.person   = new Person({ birthdate, gender, name });
      this.user     = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
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

  console.log( userSettings );


})();
