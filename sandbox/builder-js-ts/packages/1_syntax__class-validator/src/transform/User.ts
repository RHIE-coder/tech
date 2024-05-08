import { plainToInstance } from "class-transformer";

export class User {
  id: number;
  name: string;
  age: number;
  location: string;

  getInfo(): string {
    return `${this.id} / ${this.name} / ${this.age}`;
  }

  isAdult(): boolean {
    return this.age > 19;
  }

  loc(): string {
    return this.location;
  }
}

const jsondata = [
  {
    id: 1,
    name: "Cage",
    age: 27,
    location: "Seoul",
  },
  {
    id: 2,
    name: "Somoni",
    age: 50,
  },
  {
    id: 3,
    name: "Luke",
    age: 12,
    location: 123,
  },
];

let user;
user = plainToInstance(User, jsondata);

if (user != undefined && user[0] !== undefined) {
  console.log(user[1]?.loc());
}
