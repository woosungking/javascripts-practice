<h1> 폴더 코드 요약</h1>

    페이지에 이름을 입력하는 칸이랑, Log In 버튼이 있다. class="hidden" 으로 정리해놓은 h1 태그는 보이지 않는다.(localStorage.getItem("username") 이 없기 때문)

    if(localStorage.getItem("username"); 을 해서 로컬스토리지에 유저 아이디가 존재하면.){

        class="hidden" 으로 정리해놓은 h1 태그가 toggle로 인해 class=""; 로 바뀌면서 동시에 innerText가 실행되면서 `환영합니다 ${username}` 이 나오도록 하였다.

        그리고 localstorage에 username 있기때문에 form 태그는 toggle로 인해 class="hidden" 으로 변하고 화면에 보이지 않을것이다.
    }
    else(localStorage.getItem("username") 가 존재하지 않는다면){

        class="hidden" 으로 정리해놓은 h1 태그는 여전히 .hidden{display: none;} 으로 인해 보이지 않을 것 이고.

        조건문에 의해
            localStorage.setItem("username"); 으로 인해 로컬스토리지에 키:값이 저장이 될 것이고, 추가적인 로직으로인해 Form 태그가 toggle에 의해 hidden으로 바뀌면서 화면에 보이지 않을 것 이다.
        
    }
    

    

    1. HTML에 기본적은 form 태그 안에 이름을 입력 할 수 있는 부분을 넣어놓았고, <h1 class="hidden"> 으로 기본적으로 안보이게 설정했다.
    2. CSS 는 .hidden{display: none;} 으로 넣어 놓았다.
    3. 
    