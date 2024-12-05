user = [];

let post = [
    { pno : 3 , 등록일자 : '2024-12-05' , 제목 : '첫번째 게시물 제목' , 조회수 : '3' } ,
    { pno : 2 , 등록일자 : '2024-12-04' , 제목 : '두번째 게시물 제목' , 조회수 : '5' } ,
    { pno : 1 , 등록일자 : '2024-12-03' , 제목 : '세번째 게시물 제목' , 조회수 : '7' }
];

function 가입함수(){
    let idInput = document.querySelector('.idInput').value;
    let pwInput = document.querySelector('.pwInput').value;
    // let idpw = { idInput , pwInput };
    // user.push(idpw);
    user.push({ idInput : idInput , pwInput : pwInput});
    console.log(user);
    alert('가입되었습니다.');
} // 가입함수 end

function 로그인함수(){
    let idOutput = document.querySelector('.idOutput').value;
    let pwOutput = document.querySelector('.pwOutput').value;
    let sign = false;
    // console.log(sign);
    for( let index = 0 ; index <= user.length - 1 ; index++ ){
        if( user[index].idInput === idOutput && user[index].pwInput === pwOutput ){
            sign = true;
            console.log(sign)
        }
    }
    if(sign) {
        alert('로그인 성공');
    } else {
        alert('ㅈㅈ');
    }
} // 로그인함수 end

function 게시물등록함수(){
    let postHead = document.querySelector('.postHead').value;
    let postMain = document.querySelector('.postMain').value;
    let 
}

function 게시물출력함수(){

}