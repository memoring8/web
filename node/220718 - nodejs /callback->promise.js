// promise
// https://defineall.tistory.com/720
// promise 성공 시, resolve 호출
// promise 실패 시, reject 호출
// 새로운 promise 생성
    // (return) new Promise (resolve, reject)
    // resolve는 then으로 연결
    // reject는 catch으로 연결



function login (id,pw) {
    return new Promise ( function(resolve, reject) {

        resolve();
    });
}


function getVideo (id) {
    return new Promise ( function(resolve, reject) {
        setTimeout(function( ) {
            resolve(['아이언맨1', '아이언맨2']);
        }, 2000);
    });
}

function getDetail (video) {
    return new Promise ( function(resolve, reject) {
        setTimeout(function( ) {
            resolve('비디오 제목은 : ' + video);
        });
    });
}

login( 'kim', '1234' )
    .then( function(user){
        console.log( 'user님 환영' );
        return getVideo(user);
    })
    .then( function(videos){
        console.log( videos );
        return getDetail( videos[0] );
    })
    .then( function(title) {
        console.log( title );
    })
