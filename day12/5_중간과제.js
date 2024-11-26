let movieName = [ '히든페이스' , '워키드' , '글래디에이터2' , '청설' ]
let movieRating = [ 8 , 4 , 7 , 6 ]
let out = ''
for( let index = 0 ; index <= movieName.length - 1 ; index++ ){
    document.write( movieName[ index ] )
    for( let i = 0 ; i <= movieRating.length - 1 ; i++){
        document.write( movieRating[ i ])
    }
}

