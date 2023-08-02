## 객체 지향 프로그래밍이란?

**객체 지향 프로그래밍(Object Oriented Programming)**은 프로그램을 수많은 '객체(object)'형태로 묶어서 관리하는 것을 뜻한다. 객체는 하나의 역할을 수행하는 '메소드와 변수(데이터)'의 묶음으로 봐야 한다.

## 객체 지향 프로그래밍 특징

객체 지향 프로그래밍은 **추상화(Abstraction)** , **캡슐화(Encapsulation)** , **상속(Inheritance)** , **다형성(Polymorphism)** 의 네가지 특징을 가진다.

### 1. 추상화

추상화란 공통의 속성이나 기능을 묶어서 클래스를 설계하는 것 자체를 의미한다.
![](https://4.bp.blogspot.com/-Ia1i0SAIYiw/XUMpw5FdV7I/AAAAAAAAH_8/FF78CSJIfHQpDypfL3eZ7YckUKF6VbSVQCLcBGAs/s1600/python%2Boop_1.png)

이미지 출처 : https://www.listendata.com/2019/08/python-object-oriented-programming.html

```js
class Person {
  //constructor 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}:hello!`);
  }
}
const james = new Person("james", 31);
console.log(james.name); // james
console.log(james.age); // 31
james.speak(); // james:hello!
```

### 2. 캡슐화

속성과 기능을 정의하는 변수와 메소드를 클래스라는 캡슐에 넣어서 분류하는 것으로 재활용이 원활하다는 장점이 있고 캡슐화를 통해서 정보은닉에 활용 할 수도 있다.
내부 데이터에 직접 접근하는것을 막을수있고 데이터와 관련 메소드를 함께 보관할수있음.

![](https://logicmojo.com/assets/dist/new_pages/images/encapsulation-image.jpg)

이미지 출처 : https://logicmojo.com/encapsulation-in-oops

```js
class car {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
  getColor() {
    return this.color;
  }

  setPrice(price) {
    if (price < 0) {
      throw Error("음수값 저장 불가");
    }
    this.price = price;
  }
}
```

### 3. 상속

클래스의 변수와 메소드를 하위 클래스에 물려주는것을 뜻한다.
상속 받은 클래스는 부모클래스의 속성과 기능을 그대로 이어받아 사용할 수 있고 일부분을 변경해야 할 경우 상속받은 자식클래스에서 해당 기능만 다시 정의하여 사용할 수 있게 하는 것이다.

```js
// 부모 클래스
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

//shape 클래스를 상속.
class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400
```

### 4. 다형성

객체 지향 프로그래밍은 하나의 클래스 내부에 같은 이름의 행위를 여러개 정의하거나 상위 클래스의 행위를 하위 클래스에서 재정의하여 사용할 수 있기 때문에 다형성이라는 특징을 갖게 된다.

> 오버라이딩 : 부모클래스의 메서드와 같은 이름, 매개변수를 재정의 하는것.

> 오버로딩 : 같은 이름의 함수를 여러개 정의하고, 매개변수의 타입과 개수를 다르게 하여 매개변수에 따라 다르게 호출할 수 있게 하는 것.

```js
class Triangle extends Shape {
  draw() {
    console.log("▲"); //이렇게 필요한 부분만 고치는것을 오버라이딩이라함

    //오버라이딩 하면 기존의 함수가 대체되기때문에 기존의 함수를 추가하는 방법은 super.함수명() 이다.
    super.draw();
    // 공통적으로 정의한 shape의 draw 도 출력하고 싶을시 super을 사용
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const triangle = new Triangle(20, 20, "red");

// 오버라이딩한 함수와 super로 부모클래스의 함수를 추가한 draw가 실행됨
triangle.draw(); // ▲ , drawing red color of

console.log(triangle.getArea()); // 200
```

## 객체 지향 프로그래밍 장단점

> #### 장점
>
> 업무 분담이 편리하고 대규모 소프트웨어 개발에 적합하다.
> 클래스 단위로 수정이 가능하기 때문에 유지 보수가 편리하다.
> 클래스를 재사용하거나 상속을 통해 확장함으로써 코드 재사용이 용이하다.

> #### 단점
>
> 처리속도가 상대적으로 느리다.
> 객체의 수가 많아짐에 따라 용량이 커질 수 있다.
> 설계시 많은 시간과 노력이 필요하게 될 수 있다.
