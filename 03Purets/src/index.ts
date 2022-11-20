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
  

  private _courseCount = 1
  private readonly city: string = "";
  constructor(public name:string,public email:string ) {
   
  }

  private deleteToken(){
    console.log('Token is deleted');
    
  }

  get getAppleName():string{
    return `apple${this.email}`
  }

  get getCourseCount(): number{
    return this._courseCount
  }


  set setCourseCount(courseNum:number){
    if(courseNum <= 1){
       throw new Error('course count must be at least 1')
    }
    this._courseCount = courseNum  
  }



}
