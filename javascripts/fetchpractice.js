fetch('http://numbersapi.com/154') // url이 언제 올지 모르므로 비동기, promise객체 사용
  .then(response => { // 헤더에 상태코드확인
    // 즉 여기서 알 수 있는건 헤더정보도 검증을 해줌.
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => { 
    console.log(data); // 여기서 데이터를 처리합니다.
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

fetch('https://xkcd.com/210/info.0.json')
.then(response => {
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.text();
})
.then(data =>{
    console.log(data);
    return data;
})
.then(data=>{
    console.log("------------------------");
    const result = JSON.parse(data);
    console.log(result);
});