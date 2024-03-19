<h1>배운점들 기록하기</h1>


<h2>~#3 까지</h2>

    1,2까지는 너무 기초적인걸 압축해서 설명해줘서 영양가가 1도 없긴했음.

    #3

        O

            1.getElementByname(), getElementByClassName() 같은 경우는 해당 이름을 가진 모든것들을 배열에 담아서 가지고 옴.

            2. querySelector(".class-name 태그이름") 이렇게 하면 해당 이름을 가진 클레스에서 해당태그를 가지고 온다는 말(CSS Selector 라고 함.)
            !!여러개가 있다면 맨 처음 태그만 나옴!!

            3. querySelectorAll() 2번과 동일한데 배열에 담아서 전부 가지고옴.
            
            ex) document.querySelector(.title div);

            EX)
                const title = document.getElementById(#title div)
                //문서 내부에 title이라는 아이디를 가진 div 태그가 변수에 들어옴,
                title.style.color="blue"
                //가지고온 태그의 색을 바꾸는건데

                여기서 핵심적으로 말 하는건, div 태그 안을 개발자 도구로 열어보면 자바스크립트의 "Object"형식으로 무엇인가 여러가지 있는걸 볼 수 있는데.
                style.coloe, style.font등 태그 자체도 object라는 것을 기록하고싶었다.
        
        Event
            console.dir(객체)
            -> 이렇게 하면 사용가능한 이벤트들이랑 속성을 보여줌, on으로 시작하는건 이벤트임

            title.onClick=clickTitle;
            title.addEventListener("mouseenter",enterMouse);

            두가지 버전으로 이벤트를 발생 가능

            Window

                window 객체는 브라우저 창에 대한 다양한 속성과 메서드를 제공하여 웹 애플리케이션을 제어할 수 있습니다

                이건 내 생각인데 코드 자체의 이벤트가 아니라 그 외적, 예를 들면 와이파이 연결 상태, 복붙, 사이즈 조정 등..?
            
                window.addEventListener("resize", windowResize);
                window.addEventListener("copy", windowCopy);
                window.addEventListener("offline", windowOffline);
                window.addEventListener("onLine", windowOnline);
            
            Contain

                더미에서 해당하는 클레스가 있으면

                     if (this.classList.contains("active")) {
                         this.classList.remove("active");
                     } else {
                         this.classList.add("active");
                     }


            Togle
                JavaScript의 toggle() 메서드는 요소의 클래스를 토글하는 데 사용됩니다. 즉, 요소에 클래스가 이미 존재하는 경우에는 제거하고, 존재하지 않는 경우에는 추가합니다.


        메모

            1. Raw String 최대한 사용하지 않기

            
        오 류

            1. html파일에 자바 스크립트 연동을 하려면 <Script> 이 부분을 가장 아래에 내려야 함.

            2. tag.addEventListener("click", handleMouseEnter(tag));
                -> 인자를 따로 안넘겨줘도 자바스크립트 자체로 this로 해석한다고 함.

<h2>~#4 까지</h2>

    #4

        Local Storage
            Session,Cookies 는 너무 익숙하지만 Local Storage는 처음 들어봤다.
            Session, Cookies 처럼 저장소의 역할을 하고, 클라이언트 컴퓨터 브라우저에 저장이 된다.
            쿠키랑 유사하다고 생각했는데

            Cookies와 Local Storage 공통점
                클라이언트의 컴퓨터에 저장된다.
            
            Cookies와 Local Storage 차이점
                1. 서버에 영향을 주지 않으며 웹브라우저에서 사용되는 데이터 이다.
                2. 쿠키는 만료기간을 따로 안정해주면 세션과 동일한 생명주기를 가지지만 Storage는 반영구적이다.
                3. 보안측면에서 더 좋다고 한다.

        메모

            div가 아닌 form으로 감싸면 app.js에서 선언한 console.log가 나오다가 바로 사라져 버리는데, 이유는 form 속성이 행위가 완료되면 새로고침을 해서 그렇다고 한다.

            const value = loginInput.value;
            if(value.length>5){}
            이런식으로 하는거 보다 input 태그에 required maxlength 로 해주는게 더 좋다고 함. 


            함수의 첫번째 변수로 들어가는 event는(다른 이름도 가능) 해당 행위가 일어났을때 발생하는 event객체를 무조건 받는다. preventDefault를 해준 이유는 "form" 태그는 이벤트가 발생하면 브라우저가 새로고침이 되도록 하는 속성이 있는데 이 부분을 무시하고 싶어서 preventDefault() 를 사용했다.
            즉 preventDefault는 event를 무시할때 사용한다.

                예시
                    function loginBtn(event){
                        event.preventDefault();
                        "그 외 코드"
                    }

        오류
                <div  id="login-form">
                    <input type="text" placeholder="what/' your name ">
                    <button>Log In</button>
                </div>

                div가 아닌 form으로 감싸면 app.js에서 선언한 console.log가 나오다가 바로 사라져 버리는데, 이유는 form 속성이 행위가 완료되면 새로고침을 해서 그렇다고 한다.




                function onLoginBtnClick(loginInput){
                    const value = loginInput.value;
                    if(value===""){
                        alert("Write Your Name");
                    }else{
                        alert("OK");
                    }
                }
                
                loginButton.addEventListener("click", onLoginBtnClick(loginInput));

                위 로직에서 버튼이 눌리면 input값을 함수의 인자로 넘겨 값이 있는지 없는지 확인 하려고 한다.

                    문제점
                        
                        저런식으로 넘기면 인식을 못하므로
                    
                    해결

                        loginButton.addEventListener("click", function() {
                            onLoginBtnClick(loginInput);
                        });

                        혹은

                        loginButton.addEventListener("click", () => {
                            onLoginBtnClick(loginInput);
                        });

                

