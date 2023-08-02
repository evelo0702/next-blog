## 함수형 프로그래밍이란?
함수형 프로그래밍(functional programming)은 자료 처리를 수학적 함수의 계산으로 취급하고 상태와 가변 데이터를 멀리하는 프로그래밍 패러다임의 하나를 뜻함.

함수형 프로그래밍은 거의 모든 것을 순수 함수로 나누어 문제를 해결하는 기법으로, 작은 문제를 해결하기 위한 함수를 작성하여 가독성을 높이고 유지보수를 용이하게 해준다.

함수형 프로그래밍 언어는 불변성을 지향하는 프로그래밍 언어 패러다임이라고 말할 수 있다. 즉, 변경 가능한 상태를 최대한 제거하려고 노력한 프로그래밍 언어이며 순수 함수를 지향하는 프로그래밍 언어라고 설명하기도 함.

## 함수형 프로그래밍 특징
### 1. 순수함수
순수함수는 함수에서 외부의 상태 값을 참조하거나 변경하는것이 불가능하며 동일한 인자를 넣었을 때 항상 동일한 결과값을 반환하고 외부의 영향을 받지 않도록 작성해야함
```js
순수 함수의 잘못된 예
let number = 0;

function add(num) {
  return num + number;
}

옳바른 예
function add(a, b) {
  return a + b;
}
const result = add(3, 4);
```

### 2. 불변성 유지

인자로 전달 받은 데이터를 변경할수 없고 데이터 변경 할시 새로운 버전의 새로운 오브젝트를 만들어서 결과값으로 전달해야함

함수형 프로그래밍에서는 외부의 상태나 함수에 인자로 전달된 데이터의 상태를 변경하지 않음으로써 side effect(부작용)을 만들지 않음으로 불변성을 유지하기 때문에 동시 다발적인 멀티 스레딩 환경에서도 안정적으로 동작가능함.

JS에서는 Object.freeze 라는 함수를 이용해서 오브젝트를 불변성으로 만들어 줄 수 있음

```js
불변성의 잘못된 예

let evelo = { name: "youngseok", age: 20 };

function changeAge(person) {
  evelo.age = evelo.age + 1;
  return evelo;
}

옳바른 예
const person = { name: "youngseok", age: 20 };

function changeAge2(person) {
  return { ...person, age: person.age + 1 };
}
let person2 = changeAge2(person); // person2= {name: 'youngseok', age: 21}
```
### 3. Expressions only (표현식만 사용)
> expression (표현식) ?
특정한 결괏값으로 계산되는 것
```js
let plus = 1 + 2;
let b = plus;
b;
```

>statement (문) ?
실행 가능한 최소의 독립적인 코드 조각
statement는 흔히 한 개 이상의 expression이나 프로그래밍 키워드를 포함하는 경우가 많다.
```js
for (let i = 0; i < 5; i++) {} // for statment
while (true) {} // while statment
if (true) {} // if statment
function b() {} // function declaration statement
```

함수형 프로그래밍에선 if, for, switch와 같은 여러가지의 표현식을 사용하지 않는다.

### 4. First-class(일급함수),Higher-order functions(고차함수)

함수를 변수에 할당하거나 함수에 인자를 전달하거나 리턴하는등의 일들을 할 수 있는 일급함수,
함수 자체를 인자로 전달하거나 함수에서 또 다른 함수를 리턴하는 고차 함수
이 두가지 함수의 속성을 지녀야함.
```js
firstclass (일급함수)

const addTwo = a => a+2;
const multiplyTwo = a => a*2
const transform = numbers => numbers.map(addTwo).map(multiplyTwo)
transform([1,2,3,4]) // [6,8,10,12]

higher-order functions (고차함수)

const addToppings = (topping) => (food) => food + "/" + topping;
const egg = addToppings("egg");
const bacon = addToppings("bacon");
console.log(egg("sandwich"));   // sandwich/egg
console.log(bacon("pancake"));  // pancake/bacon
```

## 함수형 프로그래밍 특징

### 1. 프로그램의 검증이 쉽다
불변성은 프로그램의 검증을 수월하게 함. 프로그램을 구성하는 모듈들이 오로지 입력 값의 영향만 받기 때문에 테스트 코드를 작성하기 쉽고, 프로그래머가 예측하지 못하는 시점에 변경될 수 있는 내부 상태가 없기 때문에 프로그램이 예측 가능해지기 때문.

### 2.최적화가 가능하다
불변성은 다양한 최적화를 가능하게 함. 이전에 계산한 함수의 값을 캐싱(caching)해 두었다가 필요할 때 다시 사용하는 메모이제이션(memoization)은 함수의 불변성이 보장되지 않으면 불가능하다. 호출할 때마다 결과 값이 달라지는 함수는 캐싱을 하는 것이 의미가 없기 때문. 결과가 함수의 호출 순서와는 관계 없이 오로지 함수의 입력 값에만 의존하기 때문에, 필요한 경우 런타임이 자발적으로 코드의 실행 순서를 변경하여 성능을 향상시킬 수 있는 것이다.

### 3.동시성 프로그램을 작성하기 쉽다
멀티프로세서 환경에서 동작하는 동시성 프로그램을 작성할 때 함수형 프로그래밍 언어가 유용하다. 동시성 프로그램을 작성하기 힘든 이유는 여러 스레드(Thread)들이 프로그램 상태를 공유하기 때문인데 함수형 프로그래밍 언어에서는 변경 가능한 상태를 원천적으로 배제하기 때문에 프로그래머는 잠금(Lock)과 동기화(Synchronize)와 같은 골치 아픈 스레드 관련 문제에서 벗어나 핵심 로직 구현에 집중할 수 있다.

### 4. 외부 데이터 혹은 내부 데이터의 상태를 조작할 수 없다.