class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C("instance of C");
const d: C = { foo: "object literal" };

/**
 * d가 C타입에 할당되는 이유
 * 
 * d는 string 타입의 foo 속성을 가지고
 * 하나의 매개변수로 호출이 되는 생성자(Object.prototype으로 부터 비롯된)를 가짐
 * 그래서 구조적으로는 필요한 속성과 생성자가 존재하기 때문에 문제가 없음
 * 
 * 만약 C의 생성자에 단순 할당이 아닌 연산 로직이 존재한다면
 * d는 생성자를 실행하지 않으므로 문제가 발생
 */