### HTTP?
HTTP(Hypertext Transfer Protocol)는 브라우저와 서버 간에 데이터를 주고 받기 위한 방식으로 사용되며 상호 간에 정의한 규칙을 의미합니다.

### HTTP특징
HTTP는 상태가 없는(stateless) 프로토콜입니다.

> 상태가 없다 - 데이터를 주고 받기 위한 각각의 데이터 요청이 서로 독립적으로 관리됨.

이러한 특징 덕에 서버는 세션과 같은 별도의 추가 정보를 관리 하지 않아도 되고, 다수의 요청 처리 및 서버의 부하를 줄일 수 있는 성능의 이점이 생깁니다.

HTTP는 일반적으로 TCP/IP 통신 위에서 동작하며 기본 포트는 80번입니다.

### HTTP Request & HTTP Response
요청 & 응답
HTTP로 데이터를 주고 받기 위해서는 아래와 같이 요청을 보내고 응답을 받아야합니다.
![요청&응답](https://joshua1988.github.io/images/posts/web/http/request-response.png)

> 요청과 응답을 이해하기 위해서는 클라이언트(Client)와 서버(Server)를 이해해야 합니다.
클라이언트란 요청을 보내는 쪽으로 일반적으로 브라우저를 의미하고 서버란 요청을 받는 족으로 일반적으로 데이터를 보내주는 컴퓨터를 의미합니다.

### URL
URL(Uniform Resource Locators)은 서버에 자원을 요청하기 위해 입력하는 영문 주소로 해당 구조는 아래와 같습니다.
![url](https://joshua1988.github.io/images/posts/web/http/url-structure.png)

### HTTP 요청 메서드
URL을 이용하면 서버에 특정 데이터를 요청할 수 있는데 여기서 요청하는 데이터에 특정 동작을 수행하려면 HTTP 요청 메서드(HTTP Request Methods)를 이용합니다.

일반적으로 HTTP Verbs라고도 불리우며 아래와 같이 주요 메서드를 갖고 있습니다.

- GET : 존재하는 자원에 대한 요청
- POST : 새로운 자원을 생성
- PUT : 존재하는 자원에 대한 변경
- DELETE : 존재하는 자원에 대한 삭제

참고로 때에 따라서는 POST메서드로 PUT,DELETE의 동작도 수행할 수 있습니다.

### HTTP 상태 코드
 HTTP 상태 코드(HTTP Status Code)는 서버에서 설정해주는 응답(Response) 정보입니다.

 주요 상태 코드는 200번대부터 500번대까지 다양하게 있지만 주요한 상태 코드만 몇 개 살펴보겠습니다.

####  - 2xx - 성공
#### 200번대의 상태 코드는 대부분 성공을 의미합니다.

200 : GET 요청에 대한 성공
204 : No Content. 성공했으나 응답 본문에 데이터가 없음
205 : Reset Content. 성공했으나 클라이언트의 화면을 새로 고침하도록 권고
206 : Partial Conent. 성공했으나 일부 범위의 데이터만 반환

####  - 3xx - 리다이렉션
#### 300번대의 상태 코드는 대부분 클라이언트가 이전 주소로 데이터를 요청하여 서버에서 새 URL로 리다이렉트를 유도하는 경우입니다.

301 : Moved Permanently, 요청한 자원이 새 URL에 존재
303 : See Other, 요청한 자원이 임시 주소에 존재
304 : Not Modified, 요청한 자원이 변경되지 않았으므로 클라이언트에서 캐싱된 자원을 사용하도록 권고. ETag와 같은 정보를 활용하여 변경 여부를 확인

####  - 4xx - 클라이언트 에러
#### 400번대 상태 코드는 대부분 클라이언트의 코드가 잘못된 경우입니다. 유효하지 않은 자원을 요청했거나 요청이나 권한이 잘못된 경우 발생합니다. 가장 익숙한 상태 코드는 404 코드입니다. 요청한 자원이 서버에 없다는 의미죠.

400 : Bad Request, 잘못된 요청
401 : Unauthorized, 권한 없이 요청. Authorization 헤더가 잘못된 경우
403 : Forbidden, 서버에서 해당 자원에 대해 접근 금지
405 : Method Not Allowed, 허용되지 않은 요청 메서드
409 : Conflict, 최신 자원이 아닌데 업데이트하는 경우. ex) 파일 업로드 시 버전 충돌

#### - 5xx - 서버 에러
#### 500번대 상태 코드는 서버 쪽에서 오류가 난 경우입니다.

501 : Not Implemented, 요청한 동작에 대해 서버가 수행할 수 없는 경우
503 : Service Unavailable, 서버가 과부하 또는 유지 보수로 내려간 경우

### 다시 살펴보는 HTTP 요청과 응답

![요청&응답](https://joshua1988.github.io/images/posts/web/http/http-full-structure.png)

참고 : https://joshua1988.github.io/web-development/http-part1/#http-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C-%ED%8A%B9%EC%A7%95

 