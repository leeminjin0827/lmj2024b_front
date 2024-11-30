let login = ["id,password"];
console.log(login);
function 등록함수() { 
    console.log('등록함수 실행');
    let userid = document.querySelector('.idInput').value;    console.log(userid);
    let userpw = document.querySelector('.qwInput').value;    console.log(userpw);
    let user1 = `${userid},${userpw}`;
    login.push( user1 );    console.log(login);
}

function 출력함수() {
    console.log('출력함수 실행');
    let loginid = document.querySelector('.idOutput').value;   console.log(loginid);
    let loginpw = document.querySelector('.pwOutput').value;   console.log(loginpw);

    for( i = 0 ; i <= login.length - 1 ; i++ ){
        if( i == login[i]){console.log('로그인성공')}
        else{console.log('로그인실패')};
    }
}