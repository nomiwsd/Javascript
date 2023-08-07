document.getElementById("phonenum");
addEventListener("input", (Event) => {
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-.  ]?(\d{4})$/g;
  const input = document.getElementById("phonenum");
  const format = document.querySelector(".phoneformat");
  const phone = input.value;
  const found = regex.test(phone);
  if (!found && phone.lenght) {
    input.classList.add("invalid");
    format.classList.add("block");
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});
document.getElementById("phoneForm").addEventListener("submit",(event)=>{
    event.preventDefault();
    const input=document.getElementById("phoneNum");
    const regex=/[()-/. ]/g;
    const savedPhoneNum=input.value.replaceAll(regex, "");
    console.log(savedPhoneNum);

})