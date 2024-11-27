/* 
    - 학생들의 점수 출력하는 구현
        1. 학생이름배열
            let nameArray = [ '유재석' , '강호동' , '신동엽' ]
        2. 학생점수배열
            let scores = [ 92 , 86 , 72 ]
        3. 아래와 출력 , 100점 만점 이라고 했을때 점수를 ● 표기 나머지 점수 ○
            이름        점수 시각화
            유재석  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○○
            강호동  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○○○○○○○○○○
            신동엽  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○○○○○○○○○○○○○○○○○○
*/
// - 입력x / 저장o
// (1) 지문에서 주어진 자료 준비
let nameArray = [ '유재석' , '강호동' , '신동엽' ]
let scores = [ 92 , 86, 72 ]
// (2) 처리
    // 배열내 이름/요소 들을 순차적으로 출력 --> 배열 순회
// * 출력할 HTML(문자열) 구성
let outHTML = '<div> <span> 이름 </span> </div>'; // '이름' 은 배열내 존재하지 않으므로 미리 구성

    // 1. nameArray 배열 순회 , 배열내 인덱스 항상 0부터 시작한다.
for( let index = 0 ; index <= nameArray.length - 1 ; index++ ){ // index는 0부터 마지막 인덱스 까지 1씩 증가
    // 2. 이름출력 , index 번째의 요소를 호출 // console.log( nameArray[index]) ; // 확인
    
    // 4. 점수 출력 , 현재 index 번째의 점수 출력 // console.log( scores[index] ); // 확인

    // 3. index 번째의 요소를 HTML(문자열) 구성
    outHTML += `<div> <span> ${ nameArray[index] } </span> ` // 변수 += 값 , 누적합계 , 변수에 기존값에 새로값과 연산 결과를

    // 5. 점수는 1부터 최대 점수 100 까지 반복
    let pointHTML = '' // 정수를 도형으로 구성한 문자열을 저장하는 변수
    for( let point = 1 ; point <= 100 ; point++ ){
        // console.log( point)
        if( point <= scores[index] ) {pointHTML += '●'} // 만약에 점수가 index번째 점수 이하이면 검은색 ●
        else{pointHTML += '○'} // 내 점수보다 커지면 흰색 ○
        // console.log( pointHTML)
    } // for end
    //6.  구성한 점수 html를 이름과 연결하기
    outHTML += `<span> ${ pointHTML } </span> </div>` ;
    // console.log(outHTML);

} // for end
// (3) 출력 , console[탭] 출력시 console.log() , HTML 출력시 document.write()
document.write( outHTML )



let sheet1 = [ '빈좌석' , '예약석' , '빈좌석' ]
let sheet2 = [ '예약석' , '빈좌석' , '예약석' ]

for( let index = 0 ; index <= sheet1.length - 1; index++ ){

    let color1 = '';
    let color2 = '';

    if(sheet1[index]==='빈좌석'){
        color1 = 'blue';
    }
    else {
        color1 = 'red';
    }
    if(sheet2[index]==='빈좌석'){
        color2 = 'blue';
    }
    else {
        color2 = 'red';
    }

    let outHTML = `<div> <span style="color:${color1}"> ${ sheet1[index]}</span> <span style="color:${color2}"> ${ sheet2[index]} </span> </div>`
    
    console.log(outHTML)
}