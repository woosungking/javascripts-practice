
let promise = new Promise((resolve, reject)=>{
    let result = true;
    if(result){
        resolve("good");
    }else{
        reject("bad");
    }
});

//promise 의 value가 result의 값(매개변수의 값)으로 전달
promise.then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
}).finally((result)=>{
    console.log("job finish");
    console.log(result); // undefined라고 출력 됌.
});

//promise, reject 같이 붙혀서 안쓰면 오류가 나온다.
//에러가 발생하면 가장 가까운 catch로 분기가 된다.
//catch가 발생하면 가장 가까운 then으로 간다.
//finally는 실패, 성공의 유무와 관계없이 무조건 실행이 되고, value값을 전달받지 않는다.