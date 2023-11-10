let imgBox = document.querySelector(".imgBox");
let qrImg = document.querySelector("#qr-img");
let inputBox = document.querySelector("#qr-code-input");

let generateQrCode = () => {
  if (inputBox.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputBox.value;
    imgBox.classList.add("show-qrcode");
  }else{
    inputBox.classList.add('error');
    setTimeout(()=>{
        inputBox.classList.remove('error')
    },1000)
  }
};
