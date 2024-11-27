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

// 문제 2
let sheet1 = [ '빈좌석' , '예약석' , '빈좌석' ]
let sheet2 = [ '예약석' , '빈좌석' , '예약석' ]
let outHTML = '<div> <span> </span> </div>';
for( let index = 0 ; index <= sheet1.length - 1; index++ ){
    outHTML = `<div> <span> ${ sheet1[index]} ${ sheet2[index]} </span> </div>`
    document.write(outHTML)
}

