<h1>현제 디렉터리 요약</h1>

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