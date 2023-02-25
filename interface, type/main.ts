/**
 * 해당 파일에서 prefix로
 * T는 type
 * I는 interface
 * 를 붙혔으나 실제코드에서는 이렇게 하면 안된다.
 */

type TState = {
  name: string;
  capital: string;
};

interface IState {
  name: string;
  capital: string;
}

type TPopulation = {
  population: number;
};

interface IPopulation {
  population: number;
}

// 서로를 이용해 확장 가능
type TIState = TState & IPopulation;
interface ITState extends IState, TPopulation {}

const tiState: TIState = {
  name: "Korea",
  capital: "Seoul",
  population: 50000000,
};

const itState: ITState = {
  name: "Korea",
  capital: "Seoul",
  population: 50000000,
};

// 유니온
type AorB = "a" | "b";

type Input = {
  input: number;
};

type Output = {
  output: number;
};

type NamedVariable = (Input | Output) & { name: string };

const inVal: NamedVariable = {
  input: 500,
  name: "Oh",
};

const outVal: NamedVariable = {
  output: 1000,
  name: "Oh",
};

const inOutVal: NamedVariable = {
  input: 500,
  output: 1000,
  name: "Oh",
};

type Tuple = [number, number];
const tuple1: Tuple = [10, 20];

interface ITuple {
  0: number;
  1: number;
  length: 2;
}
const tuple2: ITuple = [10, 20];

// 보강(augment)
interface Person {
  age: number;
  name: string;
}

interface Person {
  job: string;
}

const person: Person = {
  age: 30,
  name: "woogie",
  job: "developer"
}