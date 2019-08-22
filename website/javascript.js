function validateTextbox(){
	
	var box1=document.getElementById("name");
	var box2=document.getElementById("address");
	var box3=document.getElementById("phone");
	var box4=document.getElementById("email");
	
	if(box1.value.length<4 || box2.value.length<10 ||  box3.value==""|| box4.value=="")
	{
		alert("the field marked in red cannot be blank");
		box1.focus();
		box1.style.border="solid 4px red";
		return false;
	}
}