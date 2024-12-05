let 할일목록 = [
    { 코드 : 1 , 내용 : '공부하기' , 상태 : false },
    { 코드 : 2 , 내용 : '잠자기' , 상태 : false }
]

let 식별코드 = 3;

// 등록함수
function 등록함수(){
    let conInput = document.querySelector('.contentInput').value;
    let 할일 = {
        코드 : 식별코드 ,
        내용 : conInput ,
        상태 : false
    };
    할일목록.push(할일);
    식별코드++;
    출력함수();
    alert('[등록되었습니다.]');
    document.querySelector('.contentInput').value = '';
    return;
}

// 출력함수
출력함수();
function 출력함수(){
    let todoBottom = document.querySelector('#todoBottom');
    let html = ``;
        for( let index = 0 ; index <= 할일목록.length - 1 ; index++ ){
            let info = 할일목록[index];
            html += `<div class="contentBox ${ info.상태 == true ? 'success' : '' }">
                        <div class="content"> ${ info.내용 } </div>
                        <div class="contentBtns">
                            <button onclick="수정함수( ${ info.코드 })" class="updateBtn"> 수정 </button>
                            <button onclick="삭제함수( ${ info.코드 })" class="deleteBtn"> 삭제 </button>
                        </div>
                    </div>`
        }
    todoBottom.innerHTML = html;
    return;
}

// 삭제함수
function 삭제함수( 삭제코드 ){
    for( let index = 0 ; index <= 할일목록.length - 1 ; index++ ){
        if( 할일목록[index].코드 == 삭제코드 ){
            할일목록.splice( index , 1 );
            break;
        }
    }
    출력함수();
    return;
}

// 수정함수
function 수정함수( 수정코드 ){
    for( let index = 0 ; index <= 할일목록.length - 1 ; index++ ){
        if( 할일목록[index].코드 == 수정코드 ){
            할일목록[index].상태 = !할일목록[index].상태
            break;
        }
    }
    출력함수();
    return;
}