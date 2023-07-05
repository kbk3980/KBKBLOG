let id = document.getElementById("user-id")
let pw_check = document.getElementById("user-pw")
let id_pattern = new RegExp("^[a-z0-9][a-z0-9!-]{5,14}$")

let pw_compare = document.getElementById("user-pwcheck")

id.onchange = checkid;

pw_compare.onchange = compw;




let idinput = document.getElementById("user-id");
id.addEventListener('focusout',function(){
	if (idinput.value === "") {
		let id_error = document.getElementById('id_error');
		id_error.innerHTML = '필수 정보입니다앙.';
		id_error.style.display = 'inline-block';
		id_error.style.color="red";
	  }
	  else {
		error.innerHTML = "";
	  }
})
function checkid() 
{
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

let pw = document.getElementById("user-pw")
let pw_pattern = new RegExp("^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{7,14}$")
/*       ("^(?=.*[0-9]+)[a-z][a-z0-9]{5,14}$") /*정규식 찾아봐도 안보여서 참고하면서 제작중  */
pw.onchange = checkpw;
function checkpw() 
{
  if (!pw_pattern.test(pw.value)) {
	pw_error.style.display ="inline-block";
	pw_error.style.color = "red";
	pw_error.innerHTML = "8~15자리 영문 대,소문자 숫자를 사용하여 다시 입력해주세요.";
  } 
  else {
	pw_error.style.display = 'none';  /* id_error.inneHtml = ""; 쓰면 칸이 띄어짐  별로 보기 싫어서 안보이게 변경
	/*alert('6~15자리의 영문 소문자 , 숫자와 특수기호 (!),(-)만 사용가능합니다.') */
   }
}

let pwinput = document.getElementById("user-pw");
pwinput.addEventListener('focusout',function(){
	if (pwinput.value === "") {
		let error = document.getElementById('pw_error');
		pw_error.innerHTML = '필수 정보입니다앙.';
		pw_error.style.display = 'inline-block';
		pw_error.style.color="red";
	  }
	  else {
		  error.innerHTML = "";
	  }
})
let pwchinput = document.getElementById("user-pwcheck");
pwchinput.addEventListener('focusout',function(){
	if(pwchinput.value === "") {
		let error = document.getElementById('pwch_error');
		pwch_error.innerHTML = '필수 정보입니다앙.';
		pwch_error.style.display = 'inline-block';
		pwch_error.style.color="red";
	  }
	  else {
		  error.innerHTML = "";
	  }
})
function compw() {						
	if(pw.value != pw_compare.value) {
		pwch_error.innerHTML = "암호가 다릅니다. 다시 입력하세요.";
		pwch_error.style.display = 'inline-block';
		pwch_error.style.color="red";
		pw_compare.focus();   // 비밀번호를 다시 입력할 수 있게 포커싱
		}
	else {
		pwch_error.style.display = 'none';
	}
	}

let nickname = document.getElementById("user-name")
let nickname_pattern= new RegExp("^[가-힣]{1,9}$")
nickname.onchange= checkname;

function checkname(){
	 if (!nickname_pattern.test(nickname.value)) {
			name_error.innerHTML = "2~10자리의 한글로 입력해주세요.";
			name_error.style.display = 'inline-block';
			name_error.style.color="red";
			nickname.focus();   // 비밀번호를 다시 입력할 수 있게 포커싱
			}
	else {
		name_error.style.display = 'none';
	}
} 


nickname.addEventListener('focusout',function(){
	if(nickname.value === "") {
		let error = document.getElementById('name_error');
		name_error.innerHTML = '필수 정보입니다앙.';
		name_error.style.display = 'inline-block';
		name_error.style.color="red";
	  }
	  else {
		  error.innerHTML = "";
	  }
})