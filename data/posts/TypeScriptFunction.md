@ Call Signatures

 -   함수가 어떻게 호출되는지 설명해주는 과정.  함수를 구현하기전에 함수의 타입을 먼저 정의하는 것을 뜻함
 -   먼저 함수의 타입을 정의하고 나서 코드를 구현하기 때문에 구현단계에서 따로 타입을 지정해줄 필요가없음
```tsx
 	type Add = (a:number, b:number) => number ;

	const add :Add = (a,b) => a+b
```

@ Overloading

 -   함수가 서로 다른 여러 개의 call signatures를 가지고 있는것을 나타냄

@ Polymorphism(다형성)

- generic 타입의 placeholder와 같은 것 타입스크립트가 타입을 유추할수있게함
    call signature 를 작성할때, 확실한 타입을 모를 때 generic을 사용함
         대부분 라이브러리를 만들거나할때 직접 작성함.
```tsx      type Print ={
    <T,M>(a: T[], b:M) : void
    // generic사용 < > 안에 이름은 상관없음. 대문자로 시작하기만하면됨
      }
      const Print : Print = (a,b) => {
          console.log(a)
          console.log(b)
      }

      Print([1,2,3,4],'hello')
      Print([true,false,true],1)
      Print(['1','2','3','4'],[1,2,3])
  ```