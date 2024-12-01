/* 
    주제 : 인사 관리 시스템
        [요구사항]
        1. 인사 정보 등록
            - '이름' , '생년월일' 등등 그외 임의 추가
            - 각 정보들을 HTML로 입력받아서 JS에서 등록 처리 하기.

        2. 전체 인사 정보 출력 내역
            - 현재 등록된 모든 인사 정보를 출력

        3. 인사의 점수 등록 : 각 인사별 '상반기,하반기' 등등 그외 임의 추가
            - 각 상반기,하반기 점수를 HTML로 입력받아서 JS에서 등록 처리 하기.

        4. 인사별 전체 점수 정보 출력 내역
            - 각 인사별 점수를 출력하시오.

    1. 위 요구사항에 따른 화면 설계/구성
    2. 위 요구사항에 따른 메모리(변수/배열/CSV) 설계/구성

*/
let lee = ["1,가가,1998"]
let laa = ["1,87,96,2000"]

function 출력함수() {
    let tbody = document.querySelector(' table > tbody ');
    let html = '';
    for( let index = 0 ; index <= laa.length - 1 ; index++){
        let nameY = lee[index];
        let infu = nameY.split(',');
        let yscore = laa[input];
        let info = yscore.split(',');
        if( infu[0] != index ){
            html += `<tr>
                        <td> ${ infu[1] } </td> 
                        <td> ${ infu[2] } </td>
                        <td> ${ info[1] } </td>
                        <td> ${ info[2] } </td>
                        <td> ${ info[3] } </td>
                    </tr>`} // se end
        else{ html +=`<tr> 
                        <td> </td>
                        <td> </td>
                        <td> ${ info[1] } </td>
                        <td> ${ info[2] } </td>
                        <td> ${ info[3] } </td>
                    </tr>`} // se end
    } // for end
    tbody.innerHTML = html;
} // f end