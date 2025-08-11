function check_product(event) {
  event.preventDefault();
  console.log("주문하기 단추 눌림")

  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let address = document.querySelector("#address");
  let memo = document.querySelector("#memo");
  let sales1 = document.querySelector("#sales1");
  let sales2 = document.querySelector("#sales2");
  let sales3 = document.querySelector("#sales3");
  let sales4 = document.querySelector("#sales4");
  let deliveryDate = document.querySelector("#deliveryDate");
  let checkbox = document.querySelector("#checkbox");
  let number = document.querySelector("#number");
  

  //만약input type="checkbox"가 ok이면 input type="number"가 null이면 다시입력하게해야함


  //상품선택
  if (sales1.checked) {
    sales1.value = "ok"
  } else {
    sales1.value = 'no'
  }

  if (checkbox.checked) {

    if (checkbox != null && number == 0) {
      alert('선물용 3kg 수량을 1개 이상 입력해주세요.');
      sales1.focus();
      return;
    }

    if(checkbox != null){
      number == 1
    }

    if (parseInt(value) > 5) {
      alert('최대 수량은 5개입니다.');
      sales1.value = '';
      sales1.focus();
      return;
    }
  }

  




  if(deliveryDate == null){
    alert("날짜를 선택 해 주세요");
    deliveryDate.focus();
    return;
  }



  //선물포장여부
  let sealingOK = '';
  sealing.forEach((x) => {
    if (x.checked) {
      if (x.value == 'yes') {
        sealingOK = '선물 포장';
      } else {
        sealingOK = '선물 포장 안함';
      }
    }
  })

  //이름길이
  let nameLength = name.value.length;
  if (nameLength < 1 || nameLength > 10) {
    alert("10자리 이하로 입력해주세요");
    name.value = '';
    name.focus();
    return;
  }

  //연락처
  let numberLength = phoneNumber.value.length;
  if (numberLength != 13) {
    alert("전화번호 13자리를 입력해주세요");
    phoneNumber.value = '';
    phoneNumber.focus();
    return;
  }




  //결과 출력하기
  let result = '';
  result = result + '선물용 : ' + sales1.value + '\n';
  result = result + '이름 : ' + userId.value + '\n';
  result = result + '배송주소 : ' + address.value + '\n';
  result = result + '메일 : ' + email.value + '\n';
  result = result + '메모 : ' + memo.value + '\n';
  result = result + '선물 포장  : ' + sealingOK.value + '\n';
  console.log(result);
}
