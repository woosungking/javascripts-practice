// const btn = true;
// let promise = new Promise((resolve, reject) => {
//     if (btn) {
//         resolve("good");
//     }
// }).then((result) => {
//     if (btn) {
//         console.log("1번째 then");
//         console.log(result);
//     }
// }).then((result) => {
//     if (!btn) {
//         console.log("2번째 then");
//         console.log(result);
//     }
//     throw new Error("Some error occurred in the second then block");
// }).catch((result) => {
//     console.log("1번째 catch");
//     console.log(result);
// }).then((result)=>{
//     console.log("3번째 then");
//         console.log(result);
// });

// catch가 실행이 되니까 두번째 then은 무시가 됌.
// 하지만 result는 undefined라고 나온다 왜 그럴까?

const btn = true;
let promise = new Promise((resolve, reject) => {
    if (btn) {
        resolve("good");
    }
}).then((result) => {
    if (btn) {
        console.log("1번째 then");
        console.log(result);
        // resolve(1);
        return result;
    }
}).then((result) => {
    if (btn) {
        console.log("2번째 then");
        console.log(result);
        return result;
    }
}).then((result)=>{
    console.log("3번째 then");
        console.log(result);
});

//계속 then으로 이어줘도 return을 안해주면 다음 then에서 매개변수를 못받아오니 꼭 해주도록 하자