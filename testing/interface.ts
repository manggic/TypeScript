class User {
  email: string;
  name: string;
  constructor(name, email) {
    this.email = email;
    this.name = name;
  }
}

const hitesh = new User("manish", "h@h.com");

abstract class Person {
  constructor(public name: string, public age: number) {}
}

// const humans = new Person('manish', 34) this is not allowed




function calcSomething<Type>(val: Type):Type{
    return val
}


interface NewUser{
  name:string,
  age : number
}


const humans: NewUser = { name:'manish', age:20}  



// const generic = <Type>(name:Type): Type => {
//   return name
// }


function generic<NewUser>(user:NewUser):NewUser{
    return user
}






interface House{
  name:string,
  price:number,
  size:number,
  buyHouse : (token:number)=> void
}


const miniHouse:House = {name:"miss", price:1000, size:400, buyHouse:(token)=> console.log('done')}


miniHouse.buyHouse(123333)






