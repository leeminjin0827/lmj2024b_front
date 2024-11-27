// 문제 1

let movieName = [ '히든페이스' , '워키드' , '글래디에이터2' , '청설' ]
let movieRating = [ 8 , 4 , 7 , 6 ]
for( let i = 0 ; i < movieName.length ; i++ ){
    let name = movieName[i] ;
    let rating = movieRating[i] ;
    let star = '';
    for( let j = 0 ; j < 10 ; j++ ){
        if( j < rating ){
            star += '★'
        }else{
            star += '☆'
        }
    }
    document.write(name+star+'<br>')
}

let ovieName = [ '히든페이스' , '워키드' , '글래디에이터2' , '청설' ]
let ovieRating = [ 8 , 4 , 7 , 6 ]
let utHTML = ``;
for( index = 0 ; index <= ovieName.length - 1 ; index++ ){
    utHTML += `<div> <span> ${ ovieName[index] } </span>`
    // console.log(utHTML)
    let pointHTML = '';
    for( point = 1 ; point <= 10 ; point++ ){
        // console.log(point)
        if( point <= ovieRating[index]){ pointHTML += '★' }
        else{ pointHTML += '☆'}
        // console.log(pointHTML)
    } // for end
    utHTML += `<span> ${ pointHTML } </span> </div>`
    // console.log(utHTML)
} // for end
document.write(utHTML)


// 문제 2
let sheet1 = [ '빈좌석' , '예약석' , '빈좌석' ]
let sheet2 = [ '예약석' , '빈좌석' , '예약석' ]
let outHTML = ''
for( let index = 0 ; index <= sheet1.length - 1; index++ ){ 
    outHTML == `<span> ${ sheet1[index]} ${ sheet2[index]} </span>`
    console.log(outHTML)
    let color1='';
    let color2='';
    if( sheet1[index] === '빈좌석'){ color1 = 'blue'}
    else{ color1 = 'red'}
    console.log(color1)
    if( sheet2[index] === '빈좌석'){ color2 = 'blue'}
    else{ color2 = 'red'}
    console.log(color2)
    outHTML += `<div>
                <span style="color:${color1}">${ sheet1[index]} </span>
                <span style="color:${color2}">${ sheet2[index]} </span>
                </div>`
}
document.write(outHTML)


