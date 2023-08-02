https://nomadcoders.co/typescript-for-beginners
https://www.typescriptlang.org/
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/440px-Typescript_logo_2020.svg.png">

타입스크립트는 데이터와 변수의 타입을 명시적으로 정의할수도 있고 타입을 따로 설정하지않으면 스스로 타입을 추론 해준다.  (보통 명시적 표현은 최소한으로 사용하는것을 권장함 - 코드 길이 최소화)
![](https://velog.velcdn.com/images/evelo/post/419fde97-1bb8-4dcc-8563-ec4534069b9e/image.png)


- Basic Types - number, string, boolean

- Optional
필수 요소 외에 선택 요소를 지정하려면 변수명? 와 같이 사용하면됨

```tsx
const player : {
	name: string,
	age? : number
} = { name : 'youngseok'}
```
age는 값을 준다면 number 안준다면 자동으로 undefined로 설정됨


- Alias  - 반복되는 object 요소를 class와 유사하게 지정해서 재사용할수있음

    type 이름(첫글자는대문자) = { } 와 같이 사용함

    ```tsx
    type Player = {
        readonly name:string,
        age?:number
    }
    const YS : Player ={
        name: "youngseok"
    }
    const JH : Player = {
        name: "jaehyun",
        age: 10
    }
    ```

- function으로 return하는 object타입을 Alias로 지정할수있음

```tsx
function playermaker(name:string) :Player{
    return{
        name
    }
}
const james = playermaker("james")
james.age = 10
```

- 화살표 함수 사용 =  const playermaker = (name:string) : Player ⇒ ({name})

- readonly - 수정이 불가능하게 지정하려할때 readonly 를 작성.

```tsx
type Player = { readonly name: string }

const player2 : { readonly name :string } = { name : “james” }

const numbers : readonly number[] = [1,2,3,4]
```
- Tuple - 정해진 갯수의 요소를 가져야하는 array를 지정할수 있음

    ```tsx
    const player: [string, number, boolean] = ['james',10,true]
    ```

- any - 비어있는 값을 지정하면 기본 속성은 any로 지정됨  타입스크립트를 벗어나는 방법(권장하지않음)

- unknown - 어떤 타입인지 모르는 변수를 지정할때 사용됨 unknown으로 지정하면 if문으로 타입 확인작업을 해야함

```tsx
let a : unknown;
if(typeof a ==='number'){
    let b = a +1
}
if(typeof a ==="string"){
    let b = a.toUpperCase()
}
```

- void - 아무것도 return하지 않는 함수를 대상으로 지정됨 (:void 와 같이 타입을 따로 지정해줄필요없음)