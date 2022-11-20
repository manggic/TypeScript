


abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

     abstract getSepia():void

     getReelTime():number{
         // some calc
         return 9
     }
}



// not allowed
// const man =  new TakePhoto('','')

class Instagram extends TakePhoto{
    constructor( public cameraMode: string,
        public filter: string){
            super(cameraMode, filter)
        }
        getSepia():void{
            console.log('sepia');
            
        }
}


const man =  new Instagram('','')
