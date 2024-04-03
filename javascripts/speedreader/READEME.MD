<h1> fieldset, div차이</h1>

둘다 블록테그이나, fieldset은 입력태그 들을 묶기 위해 사용한다.

<h1> 입력 받은 문자열을 내가 원하는 규칙에 따라 쪼개서 배열에 집어넣자 </h1>
let words = textArea.value.split(/[ \t\n]+/);

<h1> 문자열에 하나의 문자가 포함되어 있는 경우 검증 </h1>

const myString = "Hello, world!";
const searchChar = ",";

myString.includes(searchChar)

includes 함수를 사용하여 검증이 가능하다

<h1> 문자열에 하나이상의 문자가 포함되어 있는 경우 검증 </h1>

<h1>같은 재귀 호출이지만 익명의 함수를 쓰는 이유</h1>
        
        1. setTimeout(showWords(words,j), 1000);

        2.  setTimeout(function() {
            showWords(words, j);
            }, 1000);
        