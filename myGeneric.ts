const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

/*
"generic":-generics provide a way to create reusable and flexible components that can work with a variety of types. They allow you to write functions, classes, and interfaces that can operate on different types while still maintaining type safety.

'important point':-
most of time you will find '<Type,>' that tell it is not tsx ,it  is generic and you will find who use react mostly used this

*/
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true)

function identityFour<T>(val: T): T {
  return val;
}


/*
create own generic type and futher used
*/
interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({})


/*
above created generic type used in below
*/
function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}


//generic also define in this way and this is array
const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, {})

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
