let eyeicon =document.getElementById("eyeicon");
let password = document.getElementById("user-pw");

eyeicon.onclick = function(){
    if(password.type=="password"){
        password.type="text";
        eyeicon.src="/image/eye-open.png";
    }
    else {
        password.type="password";
        eyeicon.src="/image/eye-close.png";
    }
}
/*
window.onload=function(){

    const pw_show_hide = document.querySelector('.pw_show_hide')
    const input_id=document.querySelector('input[type=text]')
    const input_pw=document.querySelector('input[type=password]')
    const id_error= document.querySelector('.id_error')
    const pw_error= document.querySelector('.pw_error')
    console.log(pw_show_hide, input_id, input_pw, id_error, pw_error)
    
    input_id.addEventListener('click',function(){
        id_error.style.display= 'block'
    })
    input_pw.addEventListener('click',function(){
        pw_error.style.display= 'block'
    })
    
    let i=true
   
    pw_show_hide.addEventListener('click',function()
    {
        if(i==true){
            pw_show_hide.style.backgroundPosition='0'
            i=false
        }else{
            pw_show_hide.style.backgroundPosition='0'
            i=true
        }

    })
}
*/

let id = document.getElementById("user-id")
let id_pattern = new RegExp("^[a-z0-9][a-z0-9!-]{5,14}$")




let pw_compare = document.getElementById("user-pwcheck")

id.onchange = checkid;
/*
function error(){
    let id_error = document.getElementById("id_error");
    var user = document.getElementById("user-id").value;

    if (user === "" || inputText == null) {
        id_error.style.display ="inline-block";
        id_error.style.color = "red";
        id_error.innerHTML = "아이디를 입력해주세요.";
     } else {
        id_error.innerHTML = "";
     }
}   
*/


let idinput = document.getElementById("user-id");

idinput.addEventListener('focusout', function() {
    if (idinput.value === "") {
      let error = document.getElementById('id_error');
      error.innerHTML = '필수 정보입니다앙.';
      error.style.display = 'inline-block';
      error.style.color="red";
    }
    else {
        error.innerHTML = "";
    }
  });
/*
  idinput.addEventListener('input', function() {
     const error = document.getElementById('username-error');
     error.style.display = 'none';
     });
  */
function checkid() 
{
    let id_error = document.getElementById("id_error")
    var user = document.getElementById("user-id").value;
    if (!id_pattern.test(id.value)) {
        id_error.style.display ="inline-block";
        id_error.style.color = "red";
        id_error.innerHTML = "6~15자리의 영문 소문자 , 숫자와 특수기호 (!),(-)만 사용가능합니다.";
     }
    else {
    id_error.style.display = 'none';  /* id_error.inneHtml = ""; 쓰면 칸이 띄어짐  별로 보기 싫어서 안보이게 변경
   /*alert('6~15자리의 영문 소문자 , 숫자와 특수기호 (!),(-)만 사용가능합니다.') */
    }
}
var pw = document.getElementById("user-pw")
var pw_pattern = new RegExp("^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{7,14}$")
/*       ("^(?=.*[0-9]+)[a-z][a-z0-9]{5,14}$") /*정규식 찾아봐도 안보여서 참고하면서 제작중  */
pw.onchange = checkpw;

let pwinput = document.getElementById("user-pw");

pwinput.addEventListener('focusout', function() {
    if (pwinput.value === "") {
      let error = document.getElementById('pw_error');
      error.innerHTML = '필수 정보입니다앙.';
      error.style.display = 'inline-block';
      error.style.color="red";
    }
    else {
        error.innerHTML = "";
    }
  });


function checkpw() 
{
    let pw_error = document.getElementById("pw_error")
    var user_pw = document.getElementById("user-pw").value;
  if (!pw_pattern.test(pw.value)) {
    pw_error.style.display ="inline-block";
    pw_error.style.color = "red";
    pw_error.innerHTML= '8~15자리 영문 대,소문자 숫자를 사용하여 다시 입력해주세요.';
  } 
  else{
    pw_error.innerHTML= "";
  }
}


