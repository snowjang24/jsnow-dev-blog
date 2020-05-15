---
title: Javascript TDD를 위한 Mocha와 Chai
date: 2019-05-24 18:38:59
tags: ['javascript', 'tdd', 'mocha']
---

# Javascript TDD를 위한 Mocha와 Chai

## Unit Test Tool

Javascript로 TDD를 공부하기 위해서는 테스트 코드를 작성하고, 테스트를 실행할 라이브러리가 필요하다.

**"테스트 주도 개발"**이라는 책에서는 언어로 java를 사용하며, JUnit을 이용하여 테스트를 진행한다.

하지만, Javascript에는 내장된 유닛 테스트 툴이 없으므로, 외부 라이브러리를 이용해야 한다.

<br>

### Unit Test? TDD?

TDD에서 테스트를 위한 툴(라이브러리)을 찾아보면 Unit test라는 단어가 눈에 띈다.

먼저 **Unit test**는 프로그램 코드를 행위 기준으로 단위를 나누어 테스트 하는 것을 의미한다. 계산기를 만든다고 가정해보면, '더하는 행위'를 한 단위로 테스트 하는 것을 Unit test라고 한다.

다음으로 **TDD**는 테스트 주도 개발의 약자로 테스트를 코드보다 먼저 작성하는, 짧은 주기의 프로세스로 개발하는 방법이다. 이러한 TDD는 3가지 방법으로 테스트 한다.

* Unit test
* Functional test
* acceptance test

종합해보면, Unit test는 TDD에서 테스트하는 방법 중에 하나다. 물론 TDD에서만 쓰는 것이 아닌, 일반적인 개발 프로세스에도 사용된다.

이러한 유닛 테스트를 위한 라이브러리로 Mocha, Jasmine, Jest 등 다양한 것이 있지만, 이번에 TDD를 공부할 때는 Mocha를 이용하여 테스트하려 한다.

<br>

## Mocha

### Mocha란?

**Mocha**는 Node.js와 브라우저에서 돌아가는 javascript 테스트 프레임 워크다.

<img src="58480ffbcef1014c0b5e4947.png" width="25%">

<br>

### 사용법

Mocha를 사용하기 위해서는 npm을 통해 설치해야 한다. 여기에 추가로 `test`라는 폴더를 만들어 안에 테스트 코드를 생성한다.

테스트 코드는 모두 `test` 폴더에 넣어 둔다.

```bash
npm install mocha -g
mkdir test
touch test/test.js
```

이제 에디터에서 `test.js`에 다음과 같이 코드를 작성 한다.

```javascript
var assert = require('assert');
describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 4);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});
```

- `assert`
    - 테스트의 상태를 결정하는 데 도움을 주며 테스트 실패를 결정
    - 다양한 라이브러리가 존재(ex.chai) → assertion은 한 라이브러리만 사용 가능한 것이 아니라 다양하게 사용 가능

    ```javascript
    var assert = require('assert');
    var assert = require('chai').assert;
    var expect = require('chai').expect;
    var should = require('chai').should();
    ```
    
- `describe`
    - 테스트 컬렉션을 보유하는 함수, 두 개의 매개 변수가 필요
        1. 첫 번째 매개 변수는 테스트 중인 기능의 의미있는 이름
        2. 하나 또는 여러 개의 테스트가 포함 된 함수, nested describe도 가능
- `it`
    - 실제 테스트 그 자체이며 두 개의 매개 변수를 취하는 함수
        1. 테스트의 이름
        2. 테스트 바디를 유지하는 함수

<br>

### 예제

#### 함수 테스트

- 파일 구성
    1. `login.controller.js`
    2. `/test/login.controller.spec.js`
    3. `package.json`
    - 1,3은 동일한 폴더에 생성, 2는 1,3해당 폴더에 test 디렉토리 만들어서 1,3이 있는 폴더에서 `mocha`실행
    - `mocha` 만 실행해도 자동으로 `/test` 디렉토리의 테스트 파일 실행
- 코드
    1. `login.controller.js`

        ```javascript
        function LoginController() {
            function isValidUserId(userList, user) {
               return userList.indexOf(user) >= 0;
            }
            return {
                isValidUserId
              }
            }
        module.exports = LoginController();
        ```

    2. `/test/login.controller.spec.js`
    
       ```javascript
        var assert = require('assert');
        var loginController =  require('../login.controller');
        
        describe('LoginController', function () {
        
          describe('isValidUserId', function(){
        
            it('should return true if valid user id', function(){
              var isValid = loginController.isValidUserId(['abc123','xyz321'], 'abc123')
              assert.equal(isValid, true);
            });
        
            it('should return false if invalid user id', function(){
              var isValid = loginController.isValidUserId(['abc123','xyz321'],'abc1234')
              assert.equal(isValid, false);
            });
        }};
       ```

    3. `package.json`

        ```json
        {
          "scripts": {
            "test": "mocha './test/*.spec.js'"    
          }
        }
        ```
        - `package.json`에 명시해줘 `npm test`명령어를 통해 쉽게 테스트 가능

#### 비동기 테스트

    ```javascript
    /* Code */
    function isValidUserIdAsync(userList, user, callback) {
        setTimeout(function(){
          callback(userList.indexOf(user) >= 0)
        }, 1);
    }   
    Note: setTimeout has been used to simulate the async behavior.
    /* Test */
    it('should return true if valid user id', function(done){
      loginController.isValidUserIdAsync(['abc123','xyz321'], 'abc123',
         function(isValid){
          assert.equal(isValid, true);
          done();
      });
    });
    ```

<br>

---

> **Reference**
> 
> * [Difference between unit test and tdd](https://softwareengineering.stackexchange.com/questions/59928/difference-between-unit-testing-and-test-driven-development)
> * [Node.js Assert](https://nodejs.org/api/assert.html)
> * [Node.js 테스트 프레임워크 Mocha](https://heropy.blog/2018/03/16/mocha/)
> * [Mocha.js](https://mochajs.org/)
> * [Chai.js](https://www.chaijs.com/)