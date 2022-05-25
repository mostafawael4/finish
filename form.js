var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var small=/[a-z]/;
var capital=/^[A-Z]/;
var num=/[0-9]/;

function important(){
	var tefapswd=document.getElementById("Pswd").value;	
	if(tefapswd.length!=8)
	{
		alert("Password must contain 8 character.");
		return false;
	}
	else if (tefapswd.search(small) < 0) 
	{
		alert("Your password needs a lower case letter");
		return false;
	} 
	else if (tefapswd.search(capital) < 0) 
	{
		alert("Your password must start with an uppear case letter");
		return false;
	} 
	else if (tefapswd.search(num) < 0) 
	{
		alert("password must contain a number.");
		return false;
	} 
	else if(/\s/g.test(tefapswd)){
		alert("password must not contain whitespace.");
		return false;
	}
	else if(tefapswd.search(format) < 0)
	{
		alert("password must contain one special character.");
		return false;
	}

	else
	{
		return true;
	}
}
function tefaphone () {
	var x = document.getElementById("mobile").value;
	if (ph(x))
	 {
		return true;
	}
	else 
	{
		alert("your number is not correct.");
		return false;
	}
}

function ph(input_str) {
	var phone=/^\d{11}$/;
	var re = phone;
	return re.test(input_str);
}

function aaa()
{
	var x=document.getElementById("email").value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");  
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
	{  
	  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
	  return false;  
	}
	else
	{
		return true;
	}  
}

function tftf()
{
	var kkk=true;
	kkk&=important();
	kkk&=aaa();
	kkk&=tefaphone();
	return kkk?true:false;
}


