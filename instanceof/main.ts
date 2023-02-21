class Person {
  age: number;
  name: string;

  constructor (age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  speak (val: any) {
    console.log(val);
  }
}

const me: Person = new Person(30, 'woogie');
me.speak(me instanceof Person); // -> true

const v = typeof Person; //-> 문자열 'function'
type T1 = typeof me;

const he: T1 = {
  age: 20,
  name: "John",
  speak: (val: any) => console.log(val)
}
he.speak(he instanceof Person); // -> false