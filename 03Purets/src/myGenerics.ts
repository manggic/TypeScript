
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


