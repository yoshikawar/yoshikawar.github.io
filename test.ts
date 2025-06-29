export const test = () => {
//    const name :string = "Mike";
//    const age :number = 25;
//    const isStudent :boolean = false;
//    const hobbies :string[] = ["Reading", "Coding", "Gaming"];
//    const address :object = {
//        street: "123 Main St",
//        city: "Los Angeles",
//        state: "CA"
//    };
//    const today:Date = new Date();
//    const none:null = null;
//    const notDefined:undefined = undefined;
//    const random: any = "Hello World";
//
//    const gender: "male" | "female" = "male"; //union
//    const value: string | number | null = "Hello World";
//
//    const reverseArray = (arr:string[], hasTom?:boolean): string[] =>{
//        let reversedArray:string[] = [];
//        let index:number = arr.length -1;
//        while(index >= 0){
//            reversedArray.push(arr[index]);
//            index --;
//        }
//
//        if (hasTom == true){
//            reversedArray.push("Tom");
//        }
//
//        return reversedArray;
//    }
//
//    console.log(reverseArray(["a", "b", "c"], true));
//
//    const user = {
//        userId: 1,
//        name: "Mike",
//        age: 25,
//        email: "mike@gmail.com",
//        isActive: true,
//    }
//
//    interface UserProps { // type Userprops = {}
//        userId: number;
//        name: string;
//        age: number;
//        email: string;
//        isActive: boolean;
//    }
//
//    interface Admin extends UserProps { // type Admin = Userprops & {}
//        role: string;
//    }
//
//    const create = (accountInfo: Admin) => {
//        //
//    }
//
//    create({
//        userId: 1,
//        name: "Mije",
//        age: 25,
//        email: "mile@gmail.com",
//        isActive: true,
//        role: "Admin",
//    })
//    class User {
//        userId: number;
//        name: string;
//        age: number;
//        email: string;
//        isActive: boolean;
//
//        constructor(userId: number, name: string, age: number, email: string, isActive: boolean){
//            this.userId = userId;
//            this.name = name;
//            this.age = age;
//            this.email = email;
//            this.isActive = isActive;
//        }
//
//        public getProfile(): string { //public, private, protected
//            return `Name: ${this.name}, Age: ${this.age}`;
//        }
//
//        public static sayHelloWorld(): void {
//            console.log("Hello World")
//        }
//    }
//
//    const user = new User(1, "Mike", 25, "Mike@gmail.com", true);
//    User.sayHelloWorld();
//    user.getProfile();
//
//    class Admin extends User {
//        role: string;
//
//        constructor(userId: number, name: string, age: number, email: string, isActive: boolean, role: string){
//            super(userId, name, age, email, isActive);
//            this.role = role;
//        }
//    }
//    const foo = (arg: string ) : string => {
//        return arg;
//    }
//
//    const foo = <T>(arg: T): T => {
//        return arg;
//    }
//
//    foo <string>("Hello World");
//
}