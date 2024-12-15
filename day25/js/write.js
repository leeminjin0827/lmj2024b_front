/* day14 중간과제 쓰기 관련 코드 붙여넣기 */
// [2] 등록함수  , 실행조건 : [등록]버튼 클릭시 
function 등록함수( ){  console.log('등록함수 실행');
    let title = document.querySelector('.title').value;    
    let content = document.querySelector('.content').value;   
    let password = document.querySelector('.password').value;  

    let nowDate = new Date()   
    let nowYear = nowDate.getFullYear() 
    let nowMonth = nowDate.getMonth()+1; 
    let nowDay = nowDate.getDate()
    let date = `${nowYear}-${nowMonth}-${nowDay}`; 
    let view = 0; 
    // localStorage 에 배열을 운영 하시오.
    let boardList = getBoardList();     // 1. 게시물 배열 호출
    // 게시물번호(식별자) , 만약에 게시물 배열이 존재하면 마지막게시물 번호+1 , 아니면 1(첫게시물)
        // 배열변수.length-1 : 배열내 마지막요소의 인덱스번호
    let bno = boardList.length != 0 ?
        boardList[ boardList.length-1 ].bno + 1 : 1

    // 객체Object
    let board = { bno : bno , title : title , content : content ,
        password : password , date : date , view : view };
    boardList.push( board );

    setBoardList( boardList );          // 2. 게시물 배열 상태를 localStorage 등록    

    alert('게시물 등록 성공');           // 3. 메시지 안내
    location.href="board.html";        // 4. JS에서 <a> 마크업과 동일한 기능 , JS에서 페이지 전환 함수.

} // f end 
