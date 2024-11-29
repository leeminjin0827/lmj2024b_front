// let 주차장 = ["223나2991,A-1,17:20:03" , "111가1111,A-3,17:21:05" , "222가2222,A-7,18:00:00"]

// //등록함수 실행조건 : 입차 버튼 클릭시
// function carParking(){ console.log('ssibal')
//     let in_carNumber = document.querySelector('.in_carNumber').value;
//     let in_carArea = document.querySelector('.in_carArea').value;
//     let nowDate = new Date();
//     let nowYear = nowDate.getFullYear()
//     let nowMonth = nowDate.getMonth()+1
//     let nowDay = nowDate.getDate()
//     let date = `${nowYear}-${nowMonth}-${nowDay}`;
//     let parking = `${in_carNumber},${in_carArea},${nowDate}`;
//     주차장.push(parking);
//     출력함수();
// }

// //출력 함수 , 실행조건 : js 파일 열렸을 때 최초 1번 실행 , 입차,출차 처리 성공시 실행
// function 출력함수(){
//     let body = document.querySelector('div > textarea')//textarea에
//     let html = ''
//     for(let index=0; index<=주차장.length-1; index++){
//         let parking = 주차장[index]
//         let info = parking.split(',')
//         html += `<div><textarea>${info(0)}${info(1)}${info(2)}</textarea></div>`;
//     }
//     body.innerHTML = html;
// }

