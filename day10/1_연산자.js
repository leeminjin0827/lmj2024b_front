// - 개발자도구(F12) [console]탭 출력 함수 , console.log()
// - HTML에서 알람창으로 input[입력] 함수 , prompt() , Number( prompt() ) 
//      - HTML 알람창에서 입력받은 (문자-String)값 반환 함수
//      - 숫자 입력받기 : Number( prompt() ) 

/*
    연산자 : 연산 할 때 사용되는 기호
        1. 산술연산자 : 결과 --> 하나의 연산결과를 (숫자) 값으로 반환
            + 더하기 , - 빼기 , * 곱하기 , / 나누기 , % 나머지 , parseInt( ) 정수변환 함수 

        2. 연결연산자
            + 연결
        
        3. 비교연산자 : 결과 --> 하나의 연산결과를 (논리-참true/거짓false) 값으로 반환 
            > 초과/크다
            >= 이상/크거나같다
            < 미만/작다
            <= 이하/작거나같다
            == (값)같다     ===(값과타입)같다.      10 == "10" true , 10 === "10" false 
            != 같지않다     !==(값과타입)같지않다.

        4. 관계연산자 : 결과 --> 하나의 연산결과를 (논리-참true/거짓false) 값으로 반환 , 
            && 이면서 면서 이고 그리고 모두 and조건 , 초등학생이 사탕 이면서 초콜릿 먹겠다.
            || 이거나 거나 하나라도 또는 or조건 , 초등학생이 사탕 이거나 초콜릿 먹겠다.  * | : shift+엔터 위에 원화기호 
            ! 부정 반대 not조건 , !true --> false , !false --> true 
            
        5. (복합)대입연산자
            = 대입 , 오른쪽 데이터를 왼쪽에 대입/넣는다.
            [복합대입연산자] , 
            += , 오른쪽 데이터를 왼쪽 변수 데이터 와 연산 결과를 왼쪽변수에 대입 
                일반 예] let 정수 = 10 , 정수 = 정수 + 3 , 정수(13)
                복합 연산 예 ] let 정수 = 10 , 정수 += 3 , 정수(13)
            -= , *= , /= , %= 등등
        6. 증(가)감(소)연산자 , 변수와 같이 사용 , 1씩증가/1씩감소 = [배열]인덱스
            ++ 1증가 , -- 1감소 
            변수++ : 후위증가  , ++변수 : 선위증가 
            변수-- : 후위감소  , --변수 : 선위감소
                일반 예] let 정수 = 10 , 정수 = 정수 + 1 , 정수(11)
                복합 연산 예] let 정수 = 10 , 정수 += 1 , 정수(11)
                증감 연산 예] let 정수 = 10 , 정수++ , 정수(11)
            주의할점 : 선/후 위 증가/감소 기준이 명령어 하나의 단위 ;(세미콜론)
                console.log( 정수++ ); 후위증가 라서 출력후 증가 
                console.log( ++정수 ); 선위증가 라서 출력전 증가 후 출력 
                정수++;

        7. 삼항연산자 , 간단한 조건문을 표현할때 사용 , 복잡한 조건문은 IF조건문(가독성) 
            1. 조건문 ? 참(true) : 거짓(false)      , 
                let 점수=50 , 점수 > 90 ? '합격' : '불합격'

            2. 조건문1 ? 참1 : 조건문2 ? 참2 : 거짓  , 
                let 점수=50 , 점수 > 90 ? '합격' : 점수 > 70 ? '재시험' : '탈락' 
            
    문자열 타입 ---> 숫자 타입 변환하는 방법  , 문자"10" -> 숫자10 으로 변환  
        1. 곱셈연산 이용한 방법 
            "10"*1  ==> 10 
        2. 숫자로 변환 함수 Number( )
            Number( "10" )  ==> 10
    숫자 타입 ---> 문자열 변환 방법
        1. 연결연산 이용한 방법 , 숫자 10 -> 문자 "10" 으로 변환 
            10 + '' ==> '10'
        2. 문자로 변환 함수 String( )
            String( 10 ) ==> "10"

    * 타입 변환이 필요한 이유?? 프론트엔드(HTML/CSS/JS) <--- 통신(HTTP) ---> 백엔드(JAVA/DB)
    * 다형성 : 다양한 형태를 가지는 성질 , 데이터가 타입이 변환이 된다.

*/
// [1] 산술연산자
console.log( 10 + 3 ); // 더하기 13
console.log( 10 - 3 ); // 빼기 7
console.log( 10 * 3 ); // 곱하기 30
console.log( 10 / 3 ); // 나누기 3.3333333333333335
console.log( 10 % 3 ); // 나머지 1
console.log( parseInt( 10 / 3 ) );   // 소수점을 버리고 정수 부분만 반환 , 3
console.log( `점수 : ` + 10 );       // 연결 --> '점수 : ' 문자와 10 숫자가 연결되면 문자가 된다.

// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.
/*
// (1) 입력/저장 : prompt함수로 데이터(숫자변환) 를 입력받아 변수에 저장 
let 국어점수 = Number( prompt('국어 점수:') ) 
let 영어점수 = Number( prompt('영어 점수:') )
let 수학점수 = Number( prompt('수학 점수:') )
// (2) 연산 : 총점(더하기) , 평균(더하기/나누기)
let 총점 = 국어점수 + 영어점수 + 수학점수 
let 평균 = 총점 / 3 
// (3) 출력 : 
console.log( `[1] 총점 : ${ 총점 } , 평균 : ${ 평균 }  `) // `백틱 템플릿 : `문자${ 변수호출 }문자`
*/

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
/*
// - 컴퓨터 기본 프로세스 : 1.입력 2.처리 3.결과
let 반지름 = Number( prompt('반지름 : ') ) // (1) 입력/저장 
let 원넓이 = 반지름 * 반지름 * 3.14         // (2) 연산처리
console.log( `원넓이 : ${ 원넓이 } ` )      // (3) 출력 
*/

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
/*
let 실수1 = Number( prompt('실수1 : ') )    // (1) 입력/저장 
let 실수2 = Number( prompt('실수2 : ') )
let 비율 = ( 실수1 / 실수2 ) * 100          // (2) 연산처리 % , 1:100% / 0.1:10% / 0.01:1% / 0.5:50% 
console.log( `비율 : ${ 비율 } % ` )// (3) 출력 
*/

// [2] 비교연산자 
console.log( 10 > 3 )   // 10이 3보다 초과 , true
console.log( 10 >= 3 )  // 10이 3보다 이상 , true 
console.log( 10 < 3 )   // 10이 3보다 미만 , false 
console.log( 10 <= 3 )  // 10이 3보다 이하 , false 
console.log( 10 == 3 )  // 10이 3 과 같다 , false 
console.log( 10 != 3 )  // 10이 3 과 다르다 , true 
console.log( 10 === "10" ) // 10과 "10"이 값과 타입 까지 같다. false 
console.log( 10 !== "10" ) // 10과 "10"이 값과 타입 까지 다르다. true 

// [3] 관계연산자 
console.log( 10 > 3 && 20 > 10 ) // 10 이 3보다 크다 이면서 20 이 10보다 크다 , true and true => true
console.log( 10 > 3 && 20 > 30 ) // 10 이 3보다 크다 이면서 20 이 30보다 크다 , true and false => false 
console.log( 10 > 3 || 20 > 10 ) // 10 이 3보다 크다 이거나 20 이 10보다 크다 , true or true => true 
console.log( 10 > 3 || 20 > 30 ) // 10 이 3보다 크다 이거나 20 이 30보다 크다 , true or true => true 
console.log( !(10 > 3) ) // 10 이 3보다 크다 가 아니면 , !true -> false 

// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
    // 홀수판단 : 값이 나누기 2를 했을때 나머지가 1 이면 그 값은 홀수 , 값 % 2 == 1 
    // 짝수판단 : 값이 나누기 2를 했을때 나머지가 0 이면 그 값은 짝수 , 값 % 2 == 0
/*
let 정수 = Number( prompt('정수 : ') ) ;    // (1) 입력/저장 
let 비교결과 = 정수 % 2 == 1                // (2) 연산처리 , 입력받은 값이 나누기 2 했을때 나머지가 1 과 같다.
console.log( `[3]결과 : ${ 비교결과 } `)    // (3) 출력 
*/

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
    // 배수판단 : 값이 나누기 수 를 했을때 나머지가 0 이면 해당 값은 그 수의 배수값 , 값 % 배수 == 0 
/*
let 정수2 = Number( prompt('정수2 : ') ) 
let 비교결과2 = 정수2 % 7 == 0 
console.log( `[4]결과 : ${ 비교결과2 } `)
*/

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
/*
let 아이디 = prompt('아이디 : ')        //(1)입력/저장
let 비밀번호 = prompt('비밀번호: ')     //(1)입력/저장
let 로그인결과 = 아이디 == 'admin' && 비밀번호 == '1234'   //(2) 연산처리 // 로그인이란? 입력한 정보와 기존의 정보와 일치 여부 판단 
// 입력받은 아이디가 'admin' 이면서 입력받은 비밀번호가 '1234' 이면 true / 아니면 false 
console.log(`[6]로그인결과 : ${ 로그인결과 } `);// (3) 출력 
*/
// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
/*
let 정수 = prompt( '정수 : ')
let 비교결과 = 정수 % 2 == 1 && 정수 % 7 == 0
console.log( `[7]비교결과 : ${ 비교결과 } `)
*/

// [지문8] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 금액의 지폐수를 console탭에 출력하시오.
    // -> 입력 예] 356789 입력시 , 출력 예] 십만원:3장 만원:5장 천원6장 
/*
let 금액 = Number( prompt( '금액 : ') ) // (1)입력/저장 
// (2) 연산
    // 1. 십만원권 단위 구하기  , 몫구하기 :  parseInt( 나누기결과 )  
let 십만원권 = 금액 / 100000  // 예] 356789 / 100000 -> 3.56789 -> parseInt( 3.56789 ) -> 3
    // 2. 만원권 단위 구하기 
금액 = 금액 - ( 십만원권 * 100000 )        // - 금액 에서 십만원단위 제외
    // 1. 금액 - ( 십만원권 * 100000 )
    // 2. 356789 - ( 십만원권 * 100000 )
    // 3. 356789 - ( 3 * 100000 )
    // 4. 356789 - ( 300000 )
    // 5. 56789
    // 6. 금액(356789) = 56789 , * 변수 수정
let 만원권 = 금액 / 10000 // 예] 56789 / 10000 -> 5.6789 -> parseInt( 5.6789 ) -> 5
    // 3. 천단원 단위 구하기 
금액 = 금액 - ( 만원권 * 10000 ) // - 금액에서 만원단위 제외 
let 천원권 = 금액 / 1000
// (3) 출력 
console.log( `[8] 십만원:${십만원권} , 만원:${만원권} , 천원:${천원권} ` )

// - 
let 변수상자 = 3 
let 결과상자 = 변수상자 + 2  // 3 + 2 => 5
console.log( 변수상자 ) // 3
console.log( 결과상자 ) // 5
// 변수깂 호출 과 변수값 수정 다르다.
*/

// [4] (복합대입) 연산자
// 10; // 리터럴 10
// = 10; // 리터럴 10 대입
let 변수 = 10; // 리터럴 10 를 '변수'에 대입(넣는) 한다.
변수 += 3; console.log( 변수 );  // 변수 = 변수 + 3  vs 변수 += 3 // 13
변수 -= 3; console.log( 변수 );  // 변수 = 변수 - 3  vs 변수 -= 3 // 10
변수 *= 2; console.log( 변수 );  // 변수 = 변수 * 2  vs 변수 *= 2 // 20
// [5] (1)증(가)감(소)연산자
let age = 40; 
console.log( age++ ); // 후위증가 , 1.출력 2.증가 => 출력후 증가 // 40
console.log( age ); // 41
console.log( ++age ); // 선위증가 , 1.출력 2.증가 => 증가후 출력 // 42
console.log( age-- ); // 후위감소 , 1.출력 2.감소 => 출력후 감소 // 42
console.log( age );  // 41
console.log( --age ); // 선위감소 , 1.출력 2.감소 => 감소후 출력 // 40
age++; // 연산자 우선순위는 여러개 연산 또는 코드(함수) 가 존재했을때 필요.
// [6] 삼항연산자 , 조건 ? 참 : 거짓 / [중첩] 조건1 ? 참1 : 조건2 : 참2 : 거짓  
let 점수 = 80 ; 
// 만약에 점수가 80점 이상이면  '합격' 아니면 '불합격' 문자로 표현한다.
let 결과1 = 점수 >= 80 ? '합격' : '불합격' ; 
console.log( `[6] 결과1 : ${ 결과1 } `)
let 결과2 = 점수 >= 80 ? '합격' : 점수 >= 60 ? '재시험' : '불합격' ;
console.log( `[6] 결과2 : ${ 결과2 } `)




// [지문9] 1차점수와 2차점수 prompt함수로 각 입력받아서 
//         총점이 150점 이상이면'합격' 아니면 '불합격' 
//         HTML의 <h3> 에 표시하시오.
// (1) 입력/저장
// let point1 = Number( prompt('1차점수: ') )
// let point2 = Number( prompt('2차점수: ') )
// // (2) 연산처리
// let total = point1 + point2;
// let result = total >= 150 ? '합격' : '불합격'
// // (3) 출력
// let outHTML = `<h3> [결과] : ${ result } </h3>`
// document.write( outHTML )   

// [지문10] 두 사암의 이름을 prompt함수로 각 입력받아서
//          만일 이름이 '유재석' 이면 뒤에 (방장) 이라고
//          이름위 붙이고 아니면 생략한다.
//          ex] 유재석(방장) , 강호동
//          HTML의 <ol> 에 표시하시오.
// (1) 입력/저장
let name1 = prompt('이름1 : ')
let name2 = prompt('이름2 : ')
// (2) 연산
    // 만약에 name1변수값이 '유재석' 이면 name1 값 뒤에(방장)붙이고 아니면 그대로 name1변수 값을 수정한다.
name1 = name1 == '유재석' ? `${name1}(방장)` : name1
name2 = name2 == '유재석' ? `${name2}(방장)` : name2
// (3) 출력
let outHTML = `<ol> <li> ${ name1 } </li> <li> ${ name2 } </li> </ol>`
document.write( outHTML )