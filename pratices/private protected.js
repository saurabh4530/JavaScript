//!                           Private properties and methods

//  Private properties and methods  are accessable within the class only .... not outside the class
// if we try to access it generate error

{
  class Bottle {
    #name = "milton";
    constructor(name) {
      this.#name = name;
    }
    #getname() {
      return `this is the ${this.#name}`;
    }
    show() {
      console.log(this.#getname()+" "+this.#name);
    }
  }
  let bottle = new Bottle("nirlon");
  bottle.show();

  // console.log(bottle.#getname());//! Private field '#getname' must be declared in an enclosing class
class Nirlon extends Bottle{
  // constructor(name){
  //   super(name)
  // }
// WRONG WAY
}
let  nirlon=new Nirlon("platsic bottle");
nirlon.show()
}

//!                          protected properties and methods

// protected

{
  class Bottle {
    constructor(name) {
      this._name = name;//protected
    }

    _drink() {
      return( `I drink water by using ${this._name}`);
    }
  }
 

  class Milton extends Bottle {
    constructor(name, type) {
      super(name);
      this._type = type;
    }
    _getWater() {
      return `we drink water by using ${this._name} and which is ${this._type} bottle`;
    }

    details() {
      return this._getWater();
    }
  }

  let milton = new Milton("milton", "ss");
  console.log(milton._getWater());
  console.log(milton.details());
  console.log(milton._drink());
}


//////////////////////////////////////////////////////
{
  
}