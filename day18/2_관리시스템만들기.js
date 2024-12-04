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

    console.log( subjects );
    Print();
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
        sub : sub ,
        sDate : sDate
    }
    students.push( info );
    sCode++;

    console.log( students );
    Print();
} // f end


// 출력함수
Print();
function Print(){
    // console.log( '출력함수 실행 ')
    let tbody = document.querySelector('.sTbody');
    let html = ``;
    for( let index = 0 ; index <= subjects.length - 1 ; index++ ){
        let info1 = subjects[index];
        let info2 = students[index];
        html += `<tr>
                    <td>${info2.sno}</td>
                    <td>${info2.sName}</td>
                    <td>${info2.Tel}</td>
                    <td>${info2.bir}</td>
                    <td>${info1.subName}</td>
                    <td>${info1.subPro}</td>
                    <td>${info1.subDate}</td>
                    <td>${info1.cno}</td>
                    <td class="btn">
                        <input onclick="byeBtn( ${ info1.cno }" type="button" value="삭제" />
                        <input type="button" value="수정" />
                    </td>
                </tr>`
    } // for end
    tbody.innerHTML = html;
} // f end

// 삭제함수
function byeBtn( cutCode ){
    console.log( cutCode)
    for( let index = 0 ; index <= subjects.length - 1 ; index ++){
        if( subjects[index].cno == cutCode) {
            subjects.splice( index , 1 );
            break;
        }else{ continue }; // if end
    } // for end
    for( let index = 0 ; index <= subjects.length - 1 ; index ++){
        if( students[index].sno == cutCode) {
            students.splice( index , 1 );
            break;
        } // if end
    } // for end
    전체출력함수();
    return;
} // f end

// 수정함수
function whatBtn(){

} // f end
