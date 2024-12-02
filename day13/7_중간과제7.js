/*
    중간과제7 : 회원가입 과 로그인 구현 페이지 구현하기
        [요구사항] 
        1. (회원가입 구역 에서 ) 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
        2. (로그인 구역 에서 ) 아이디 와 비밀번호가 회원가입에 등록된 데이터정보와 일치하면 '로그인 성공' 아니면 '로그인실패' 출력해주세요.
        [제출]
        강의 카카오톡방에 ip 링크 제출
*/

let user = []
function 등록함수() { 
    console.log('등록함수 실행');
    let userid = document.querySelector('.idInput').value;    console.log(userid);
    let userpw = document.querySelector('.pwInput').value;    console.log(userpw);
    user.push({ userid: userid, userpw: userpw });
    console.log(user);
}

function 출력함수() {
    let loginId = document.querySelector('.idOutput').value;   console.log(loginId);
    let loginPw = document.querySelector('.pwOutput').value;   console.log(loginPw);
    let sign = false;
    console.log(sign);
    for( i = 0 ; i <= user.length - 1 ; i++ ){
        if( user[i].userid === loginId && user[i].userpw === loginPw ){
            sign = true;
            console.log(sign);
        }
    }
    if (sign) {
        console.log('로그인 성공');
    } else {
        console.log('로그인 실패');
    }
    
}