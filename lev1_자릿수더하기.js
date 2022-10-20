//내가 제출한 코드
function solution(n) {
    let answer = 0;
    const str = `${n}`

    for(let i=0; i<str.length; i++) {
        answer+= parseInt(str[i]);
    }

    console.log(answer);

    return answer;
}

solution(51)

//n + "" 이라는 표현식은 문자열 + 정수 = 문자열로 변환된다. 
//split 은 배열을 반환한다.
//숫자를 문자열로 바꾸는 방법  `${n}` , String(n), n+"" 

function test(n) {
    let t = (n + "").split("");
    console.log(t);
    console.log(typeof String(n))
    //[ '5', '1' ]
}

test(51);
