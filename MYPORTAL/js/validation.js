function validateForm(){
	for(var i=0;i < myform.elements.length;i++){
		if(myform.elements[i].className == "req" && myform.elements[i].value.length == 0){
			alert('please fill in all required fields');
			return false;
			
		}
	
		
	}
	
 
   var emailID = document.myform.email.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID")
       document.myform.email.focus() ;
       return false;
   }
   return( true );
}
