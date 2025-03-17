function validate_signup()
{ 
   var email = document.contactform.email.value;
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
	ind=1;
	
   if( document.contactform.fname.value == "" )
   {
     //alert( "Please provide your First name!" );
	 document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="Please provide your First name!";
     document.contactform.fname.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message1').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform.lname.value == "" )
   {
     document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="Please provide your Last Name!" ;
     document.contactform.lname.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message1').style.visibility="hidden";
   } 
   if (ind==0){
	   return false;
   }
   if( !isNaN(document.contactform.fname.value) )
   {
     document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="Please enter a valid name!" ;
	 ind=0;
   } else{
	 document.getElementById('message1').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform.mname.value != "" && !isNaN(document.contactform.mname.value) )
   {
     document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML= "Please enter a valid name!" ;
     document.contactform.mname.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message1').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( !isNaN(document.contactform.lname.value ))
   {
     document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML= "Please enter a valid name!" ;
     document.contactform.lname.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message1').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   
    if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
  {
     document.getElementById('message5').style.visibility="visible";
     document.getElementById('message5').innerHTML="Please enter correct email ID";
     document.contactform.email.focus() ;
	 ind=0;
  }else{
	 document.getElementById('message5').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
 
  if( document.contactform.mphone.value == "" ||
           isNaN( document.contactform.mphone.value) ||
           document.contactform.mphone.value.length != 10 )
   {
    document.getElementById('message7').style.visibility="visible";
     document.getElementById('message7').innerHTML= "Please provide a Mobile No in the format 123." ;
     document.contactform.mphone.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message7').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   
   if( document.contactform.username.value == "" )
   {
     document.getElementById('message2').style.visibility="visible";
     document.getElementById('message2').innerHTML= "Please enter a User Name!" ;
     document.contactform.username.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message2').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform.password.value == "" )
   {
     document.getElementById('message3').style.visibility="visible";
     document.getElementById('message3').innerHTML= "Please enter your password!" ;
     document.contactform.password.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message3').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform.repassword.value == "" )
   {
     document.getElementById('message3').style.visibility="visible";
     document.getElementById('message3').innerHTML= "Please confirm your password!" ;
     document.contactform.repassword.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message3').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform.repassword.value != document.contactform.password.value )
   {
     document.getElementById('message3').style.visibility="visible";
     document.getElementById('message3').innerHTML="Password does not match! Kindly enter same password to proceed." ;
	 document.contactform.password.focus() ;
     document.contactform.repassword.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message3').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
  if ( ( contactform.gender[0].checked == false ) && ( contactform.gender[1].checked == false ) )
   {
   document.getElementById('message4').style.visibility="visible";
     document.getElementById('message4').innerHTML="Please choose your Gender: Male or Female" ;
	 ind=0;
   }   else{
	 document.getElementById('message4').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
    if( document.contactform.bday.value == "" )
   {
     document.getElementById('message6').style.visibility="visible";
     document.getElementById('message6').innerHTML= "Please provide your DOB!" ;
     document.contactform.bday.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message6').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if (ind==1){
	   return true ;
   }
   //else {
	 //redirectPage = "/signup_complete.html" ;
     //window.location = redirectPage;
     //return false;
	   //window.open('signup_complete.html','_self');
   
   //}
}