
// const getPig=()=> new Promise((resolve, reject) => {
   
//     resolve("pig");
// });

// const getCook=(pig)=> new Promise((resolve, reject) => {
//     resolve(`${pig} => Cook`);
// });

// const getEat = (Cooked) => new Promise((resolve, reject) => {
//     resolve(`${Cooked} => knife`);
// });

// getPig()
// .then( (result) =>{
//     return getCook(result); 
// })
// .then((result) => {
//     return getEat(result);
// })
// .then((result)=>{
//     console.log(result);
// });

// // return 안붙혀서 오류났었음. 
// // then을 계속 이어 가려면 return 꼭 해주자 ..

const getPig = () => new Promise((resolve, reject) => {
    resolve("pig");
});

const getCook = (pig) => {
    return new Promise((resolve, reject) => {
        resolve(`${pig} => Cook`);
    });
};

const getEat = (cooked) => {
    return new Promise((resolve, reject) => {
        resolve(`${cooked} => knife`);
    });
};

getPig()
.then((result) => {
    return getCook(result);
})
.then((result) => {
    return getEat(result);
})
.then((result) => {
    console.log(result);
});
//resolve, reject는 promise 객체 내부에서만 사용이 가능하므로 이어서 타고 가려면 객체 생성 후 넘겨야함.