
const count :Array<number> =[] 
const names :Array<string> =[] 



function identityOne(val: boolean | number): boolean| number{
    return val
}


function identityTwo(val: any):any {
    return val
}


// Type is dynamic here, it can be T, H or A
function identityThree<Type>(val: Type):Type {
    return val
}


interface Bootle{
    brand: string
    type: string
}


function identityFour<H>(val: H):H {
    return val
}

identityFour<Bootle>({brand: 'brand', type: 'type'})




function getSearchProduct<T>(products: T[]):T{
    return products[3]
}


const getSearchProductN = <T>(products:T[]):T =>{
    return products[1]
}





interface Database{
    connection : string,
    username: string,
    password: string
}

function anotherFunction<T,U extends Database >(valOne:T , valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}


// anotherFunction(2, 'nanny') // error U must be of type number
 


interface Quiz {
    type: string
    name: string
}


interface Course{
     name: string
     author: string
     subject: string
}


class Sellable<T>{

    public cart:T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }


}








