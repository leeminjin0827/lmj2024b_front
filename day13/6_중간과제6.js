/* 
    [생각1] 시각적으로 보이는 목표의 데이터 구성을 어떻게 해야하는지 생각
        변수 = 하나의 자료를 저장하는 메모리 공간 ,
        배열 = 여러개의 자료를 저장하는 하나의 타입 ,
        1. 날짜 데이터 여러개 저장 ,
            let 날짜배열 = [ '2024-11-26' , '2024-11-27' ]
        2. 항목 데이터 여러개 저장 ,
            let 항목배열 = [ '콜라' , '커피' ]
        3. 금액 데이터 여러개 저장 ,
            let 금액배열 = [ '1000' , '1200' ]
        4. 배열 선언 위치 : 
            전역변수 : JS 실행될때 1번선언
                    vs
            지역변수 : 지역()이 실행될때마다 선언 / ()종료될때마다 사라짐
        5. 서로 다른 배열간의 인덱스가 동일하면 하나의 가계부 정보
            날짜배열(0) = '2024-11-26'
            항목배열(0) = '콜라'
            금액배열(0) = 1000

    [생각2] 기능/함수 몇개 필요한지 구성 / 처리할 로직
        1. [등록]버튼 클릭시 input으로 입력받은 3개의 값을 각 배열에 저장하는 함수
        2. 등록[배열push]시 현재 배열의 요소(값)들을 출력하는 함수
    
    [생각3] 등록함수에서 실행할 로직???
        1. 입력 / 저장                              prompt vs *document.querySelector*
        2. 처리 : 입력된 정보를 배열에 추가(push)     
        3. 출력 : 출력함수 호출
    [생각4] 출력함수에서 실행할 로직???
    1. 어디에                                   document.write() vs *document.querySelector*
    2. 무엇을                                   
*/

// [1] 전역함수
let 날짜배열 = [ '2024-11-26' , '2024-11-27' ]
let 항목배열 = [ '콜라' , '커피' ]
let 금액배열 = [ 1000 , 1200 ]

// [2] 등록함수 정의 , 실행조건 : [등록]버튼을 클릭했을떄
function 등록함수(){
    console.log(`등록함수 실행`)
    // 1. 입력/저장
        // (날짜)
    let dateInput = document.querySelector('.dateInput');          console.log(dateInput)
    // html에 'dateInput' 이라는 class명을 가진 마크업을 JS DOm객체 호출/반환
    let date = dateInput.value; // DOM객체는 마크업의 value 속성 값을 호출/ 반환 
                                                                    console.log(date)
        // (항목)                                                   
    let contentInput = document.querySelector('.contentInput');     console.log(contentInput)
    let content = contentInput.value;                               console.log(content)
        // (금액)
    let moneyInput = document.querySelector('.moneyInput');         console.log(moneyInput)
    let money = moneyInput.value;                                   console.log(money)
    // 2. 처리
    날짜배열.push( date );                         console.log(날짜배열)
    항목배열.push( content );                      console.log(항목배열)
    금액배열.push( money );                        console.log(금액배열)

    // 3. 출력
    출력함수(); // 등록 이후 출력함수 호출
}
// [3] 출력함수 정의 , 실행조건 : 배열에(push) 했을때
function 출력함수(){ console.log(`출력함수 실행`);
    
    // 1. 어디에 , 테이블에 < table >
    document.querySelector('table')
    // 2. 무엇을
    let html = '' // 출력할 HTML 구성 변수
        // 2-1 배열 순회
    for( let index = 0 ; index <= 날짜배열.length - 1 ; index++ ){
        // index는 0부터 마지막 인덱스까지 1씩증가 반복
        html += `<tr>
                    <td> ${날짜배열[index]} </td>
                    <td> ${항목배열[index]} </td>
                    <td> ${금액배열[index]} </td>
                </tr>` // += 누적합계(기존데이터에 문자열 연결) ,
                // 각 index 번째의 날짜/항목/금액을 각 <td>에 문자열로 구성
    } // for end
    // 3. 출력 , DOM객체의 innerHTML 속성/필드를 이용한 구성한 html 대입해서 출력한다.
    table.innerHTML = html;

} // f end
