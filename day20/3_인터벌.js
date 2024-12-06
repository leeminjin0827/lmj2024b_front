/* 
    interval(간격)
        - 시간적인 간격에 따라 특정 함수 반복 실행/호출
        1. setInterval( 함수 , 주기 );
            함수 : 주기에 따라 실행할 함수
            주기 : 1/1000초( 밀리초 ) , 1000 : 1초 , 10000 : 10초
            -> 주기마다 지정한 함수를 실행한다.
        2. clearInterval( 종료할인터벌변수 ) : interval 종료
*/
// [1] 예제1
let value = 0; // 변수 선언/만들기

function 증가함수(){ // 함수 선언/만들기
    
    value++; // 전역변수값 1 증가
    document.querySelector('.box1').innerHTML = value; // HTML에 value 대입
} // f end
setInterval( 증가함수 , 1000 );

// [2] 예제2
function 시계함수( ){
    // 현재 시스템의 날짜/시간 객체 , new Date()
    let today = new Date()
    let hour = today.getHours();          // 시 반환
    let minute = today.getMinutes();      // 분 반환
    let second = today.getSeconds();      // 초 반환
    document.querySelector('.box2').innerHTML = `${hour} : ${minute} : ${second} `
} // f end
setInterval( 시계함수 , 1000 );

// [3] 예제3
let time = 0; // 현재 타이머의 초
let timrId ; // 변수만 선언 , 초기화값이 없다.
function 타이머( ){
    time++
    document.querySelector('.box3').innerHTML = time;
} // f end

function 타이머시작함수( ){
    timrId = setInterval( 타이머 , 1000 );
} // f end

function 타이머종료함수( ){
    clearInterval( timrId )
} // f end
