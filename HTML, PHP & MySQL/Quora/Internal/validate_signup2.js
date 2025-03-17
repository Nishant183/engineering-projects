function validate_signup2()
{ 
   var ind=1;
	
   if( document.contactform_2.bill_bname.value == "" )
   {
	 document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="Building information missing!";
     document.contactform_2.bill_bname.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message1').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.bill_slname.value == "" )
   {
     document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="Street / Lane information missing!" ;
     document.contactform_2.bill_slname.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message1').style.visibility="hidden";
   } 
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.bill_land.value != "" && !isNaN(document.contactform_2.bill_land.value == "" ))
   {
     //alert( "Please provide your First name!" );
	 document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="Landmark information incorrect!";
     document.contactform_2.bill_land.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message1').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.bill_city.value == "" )
   {
     document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="City information missing!" ;
     document.contactform_2.bill_city.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message1').style.visibility="hidden";
   } 
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.bill_post.value == "" )
   {
     //alert( "Please provide your First name!" );
	 document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="Postal information missing!";
     document.contactform_2.bill_post.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message1').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( isNaN( document.contactform_2.bill_post.value) ||
           document.contactform_2.bill_post.value.length != 6 )
   {
    document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML= "Postal information incorrect!" ;
     document.contactform_2.bill_post.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message1').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.bill_state.value == "" )
   {
     document.getElementById('message1').style.visibility="visible";
     document.getElementById('message1').innerHTML="State information missing!" ;
     document.contactform_2.bill_state.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message1').style.visibility="hidden";
   } 
   if (ind==0){
	   return false;
   }
   ////////////////////////////////////////////////////////////
   if( document.contactform_2.ship_bname.value == "" )
   {
	 document.getElementById('message2').style.visibility="visible";
     document.getElementById('message2').innerHTML="Building information missing!";
     document.contactform_2.ship_bname.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message2').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.ship_slname.value == "" )
   {
     document.getElementById('message2').style.visibility="visible";
     document.getElementById('message2').innerHTML="Street / Lane information missing!" ;
     document.contactform_2.ship_slname.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message2').style.visibility="hidden";
   } 
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.ship_land.value != "" && !isNaN(document.contactform_2.ship_land.value == "" ))
   {
     //alert( "Please provide your First name!" );
	 document.getElementById('message2').style.visibility="visible";
     document.getElementById('message2').innerHTML="Landmark information incorrect!";
     document.contactform_2.ship_land.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message2').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.ship_city.value == "" )
   {
     document.getElementById('message2').style.visibility="visible";
     document.getElementById('message2').innerHTML="City information missing!" ;
     document.contactform_2.ship_city.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message2').style.visibility="hidden";
   } 
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.ship_post.value == "" )
   {
     //alert( "Please provide your First name!" );
	 document.getElementById('message2').style.visibility="visible";
     document.getElementById('message2').innerHTML="Postal information missing!";
     document.contactform_2.ship_post.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message2').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( isNaN( document.contactform_2.ship_post.value) ||
           document.contactform_2.ship_post.value.length != 6 )
   {
    document.getElementById('message2').style.visibility="visible";
     document.getElementById('message2').innerHTML= "Postal information incorrect!" ;
     document.contactform_2.ship_post.focus() ;
	 ind=0;
   } else{
	 document.getElementById('message2').style.visibility="hidden";
   }
   if (ind==0){
	   return false;
   }
   if( document.contactform_2.ship_state.value == "" )
   {
     document.getElementById('message2').style.visibility="visible";
     document.getElementById('message2').innerHTML="State information missing!" ;
     document.contactform_2.ship_state.focus() ;
	 ind=0;
   }else{
	 document.getElementById('message2').style.visibility="hidden";
   } 
   if (ind==0){
	   return false;
   }
   
  
  
   if (ind==1){
	   return true ;
   }
}