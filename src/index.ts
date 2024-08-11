/*
// classes concept
private :-it provide restriction user can't access directly and inheritancec class doesn't access private variable only inner classes access private variable
protect=>it can be accessed inheritance classes also
*/

// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name

//     }
// }
class User {
  protected _courseCount = 1;

  readonly city: string = "Jaipur";
  public mohan: string = "mohan";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}
  private deleteToken() {
    console.log("Token deleted");
  }

  deepak = new User("d@gmail.com", "deepak");

  /*
"get" keyword used to access private or public data directly
"set" keyword used to user can modify in private data but you couldn't return or print inside "set" keyword
*/

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const hitesh = new User("h@h.com", "hitesh");
// hitesh.name

// hitesh.deleteToken()
