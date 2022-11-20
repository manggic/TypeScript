class User {
  email: string;
  name: string;
  private readonly city: string = "";
  constructor(name:string, email:string) {
    this.name = name;
    this.email = email;
    // this.city  // allowed to access here
  }
}

const hitesh = new User('history','h@h.com')

// hitesh.city  // not allowed to access private outside class



// another syntax
class AnotherUser {
  
  private readonly city: string = "";
  constructor(public name:string,public email:string , private userId: string) {
   
  }
}
