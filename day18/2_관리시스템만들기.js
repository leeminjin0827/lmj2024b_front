let subjects = [
    { cno : 1 , subName : 'html' , subPro : '홍길동' , subDate : '2024-12-04' } ,
    { cno : 2 , subName : 'css' , subPro : '길홍동' , subDate : '2024-12-05' } ,
    { cno : 3 , subName : 'js' , subPro : '동길홍' , subDate : '2024-12-06' }
];
let students = [
    { sno : 1 , sName : '강아지' , Tel : '12345678888' , bir :'1998-12-10' , sDate : '2024-01-01' } ,
    { sno : 2 , sName : '아강지' , Tel : '12345679999' , bir :'1998-10-11' , sDate : '2024-01-02' } ,
    { sno : 3 , sName : '지아강' , Tel : '12345674444' , bir :'1998-11-30' , sDate : '2024-01-03' }
];

// 클래스 등록함수
let cCode = 4;
function goBtn1(){
    console.log( '클래스등록함수')
    let subName = document.querySelector('.subName').value; console.log(subName);
    let subPro = document.querySelector('.subPro').value; console.log(subPro);
    let subDate = document.querySelector('.subDate').value; console.log(subDate);
    
    let info = {
        cno : cCode ,
        subName : subName ,
        subPro : subPro ,
        subDate : subDate
    }
    subjects.push( info );
    cCode++;

    alert('등록완료')
    Print1();
    Print2();
} // f end

// 수강생 등록함수
let sCode = 4;
function goBtn2(){
    let sName = document.querySelector('.sName').value; console.log(sName);
    let Tel = document.querySelector('.Tel').value; console.log(Tel);
    let bir = document.querySelector('.bir').value; console.log(bir);
    let sub = document.querySelector('.sub').value; console.log(sub);
    let sDate = document.querySelector('.sDate').value; console.log(sDate);

    let info = {
        sno : sCode ,
        sName : sName ,
        Tel : Tel ,
        bir : bir ,
        sDate : sDate
    }
    students.push( info );
    sCode++;


    alert('등록완료')
    Print1();
    Print2();
} // f end


// 클래스 출력함수
Print1();
function Print1(){
    // console.log( '출력함수 실행 ')
    let tbody = document.querySelector('.sTbody1');
    let html = ``;
    for( let index = 0 ; index <= subjects.length - 1 ; index++ ){
        let info = subjects[index];
        html += `<tr>
                    <td>${info.cno}</td>
                    <td>${info.subName}</td>
                    <td>${info.subPro}</td>
                    <td>${info.subDate}</td>
                    <td class="btn">
                        <input onclick="byeBtn1( ${ info.cno } )" type="button" value="삭제" />
                        <input onclick="whatBtn1( ${ info.cno } )" type="button" value="수정" />
                    </td>
                </tr>`
    } // for end 
    tbody.innerHTML = html;
} // f end


// 수강생 출력함수
Print2();
function Print2(){
    // console.log( '출력함수 실행 ')
    let tbody = document.querySelector('.sTbody2');
    let html = ``;
    for( let index = 0 ; index <= students.length - 1 ; index++ ){
        let info = students[index];
        html += `<tr>
                    <td>${info.sno}</td>
                    <td>${info.sName}</td>
                    <td>${info.Tel}</td>
                    <td>${info.bir}</td>
                    <td>${info.sDate}</td>
                    <td class="btn">
                        <input onclick="byeBtn2( ${ info.sno } )" type="button" value="삭제" />
                        <input onclick="whatBtn2( ${ info.sno } )" type="button" value="수정" />
                    </td>
                </tr>`
    } // for end
    tbody.innerHTML = html;
} // f end

// 클래스 삭제함수
function byeBtn1( cutCode ){
    for( let index = 0 ; index <= subjects.length - 1 ; index ++){
        if( subjects[index].cno == cutCode) {
            subjects.splice( index , 1 );
            alert('삭제완료')
            break;
        }
    } // for end
    Print1();
    return;
} // f end

// 수강생 삭제함수
function byeBtn2( cutCode ){
    for( let index = 0 ; index <= students.length - 1 ; index ++){
        if( students[index].sno == cutCode) {
            students.splice( index , 1 );
            alert('삭제완료')
            break;
        }
    } // for end
    Print2();
    return;
} // f end

//  클래스 수정함수
function whatBtn1( wowCode ){
    let subName = document.querySelector('.subName').value;
    let subPro = document.querySelector('.subPro').value;
    let subDate = document.querySelector('.subDate').value;
    let subCode = document.querySelector('.subCode').value;

    let info = {
        subName : subName ,
        subPro : subPro ,
        subDate : subDate
    }
    for( let index = 0 ; index <= subjects.length - 1 ; index++ ){
        if( subjects[index].cno == subCode && subCode == wowCode ){ 
            subjects[index].subName = info.subName ,
            subjects[index].subPro = info.subPro ,
            subjects[index].subDate = info.subDate ,
            alert('수정완료')
            break;
        }
    }
    Print1();
    return;
} // f end

//  수강생 수정함수
function whatBtn2( wowCode ){
    let sName = document.querySelector('.sName').value; console.log(sName);
    let Tel = document.querySelector('.Tel').value; console.log(Tel);
    let bir = document.querySelector('.bir').value; console.log(bir);
    let sub = document.querySelector('.sub').value; console.log(sub);
    let sDate = document.querySelector('.sDate').value; console.log(sDate);
    let stuCode = document.querySelector('.stuCode').value; console.log(stuCode);

    let info = {
        sName : sName ,
        Tel : Tel ,
        bir : bir ,
        sDate : sDate
    }
    for( let index = 0 ; index <= students.length - 1 ; index++ ){
        if( students[index].sno == stuCode && stuCode == wowCode ){ 
            students[index].sName = info.sName ,
            students[index].Tel = info.Tel ,
            students[index].bir = info.bir ,
            students[index].sDate = info.sDate ,
            alert('수정완료')
            break;
        }

    }
    Print2();
    return;
} // f end