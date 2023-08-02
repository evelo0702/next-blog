## 프로세스

메모리 상에서 실행 중인 프로그램을 뜻함

![](https://gmlwjd9405.github.io/images/os-process-and-thread/process.png)
이미지 출처 : https://inpa.tistory.com/entry/%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%E2%9A%94%EF%B8%8F-%EC%93%B0%EB%A0%88%EB%93%9C-%EC%B0%A8%EC%9D%B4

> 여러 프로세스가 동시에 실행되고 관리 되는거라 착각할수 있지만 CPU는 한번에 한가지 명령어 밖에 처리하지 못하기 때문에 **동시가 아니라 빠른 속도로** 프로세스들을 번걸아가며 실행하고 관리하는것이다.

## 스레드

한 프로세스 안에서 여러 갈래의 작업들이 진행되는데 이 갈래를 스레드라 칭함

![](https://goodgid.github.io/assets/img/os/what_is_thread_1.png)
이미지 출처: https://goodgid.github.io/What-is-Thread/

## 프로세스 & 스레드

프로세스들은 컴퓨터의 자원을 분할해서 사용하지만 (별도의 주사공간을 독립적으로 할당받음 code,heap,stack 등)
스레드는 프로세스마다 주어진 자원을 함께 사용함 (stack만 할당받고 나머지 영역은 같은 프로세스 안에 있는 스레드끼리는 공유함)

## 멀티 프로세스 & 멀티 스레드

**멀티 프로세스** - 하나의 어플리케이션을 여러개의 프로세스로 구성하여 각 프로세스가 하나의 작업을 처리하도록 하는것을 뜻함

- 메모리 사용량이 많음
- 구현이 간단하고, 각 프로세스들이 자원을 서로 다르게 할당함
- 서로 다른 프로세스에 영향을 주지않기때문에 안정성이 좋음

**멀티 스레드** - 한 프로세스 안에 진행되는 여러 갈래의 작업들을 뜻함

- 여러개의 스레드가 동인한 데이터 공간을 공유하기때문에
  해당 공간을 수정할 경우 안정성에 문제가 생길수있다.
- 자원 공유가 쉬움
- 구현 및 테스트, 디버깅이 어려움
- 응답성이 좋다.

![](https://images.velog.io/images/sehrltjr/post/eb4dec8d-0bcd-49ef-9dbf-f18a1bfb3096/image.png)

이미지 출처 : https://velog.io/@sehrltjr/Thread
