<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname ="cab";
// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if(isset($_POST['continue']))
{
$fname=$_POST['fname'];
$mname=$_POST['mname'];
$lname=$_POST['lname'];
$email=$_POST['email'];
$mphone=$_POST['mphone'];
$lphone=$_POST['lphone'];
$username=$_POST['username'];
$password=$_POST['password'];
$gender=$_POST['gender'];
$sql = "INSERT INTO signup (fname,mname,lname,email,mphone,lphone,username, password,gender)
VALUES ('$fname', '$mname','$lname', '$email','$mphone', '$lphone','$username', '$password','$gender')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    header("location:taxi.php");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Signup</title>

    <link rel="stylesheet" type="text/css" href="style1.css" media="all" />
    <link rel="stylesheet" type="text/css" href="demo1.css" media="all" />
	<link type="text/css" rel="stylesheet" href="layout.css"  >
<link type="text/css" rel="stylesheet" href="exp.css"  >
<script type="text/javascript" src="validate_signup.js"></script>
</head>
<body>
<body background = "su.jpg">
<header>
<div class="container">
<div id="branding">
<h1> <span class="highlight">TAKUSHI</span> cab booking</h1>
</div>
<nav>
				<ul>
				<li><a href="taxi.php">   HOME   </a></li>
				<li><a href="booknow.php"> LOGIN </a></li>
				</ul>
			</nav>



</header>
<div class="container">
			<!-- freshdesignweb top bar -->
            <div class="freshdesignweb-top">
                <div class="clr"></div>
            </div><!--/ freshdesignweb top bar -->      
      <div  class="form">
    		<form id="contactform" name="contactform" method="POST" action="signup.php"> 
    			<!--
                        <p class="contact"><label for="name">Name</label></p> 
    			<input id="fname" name="fname" placeholder="First name" required="" tabindex="1" type="text"> 
				<label for="name"></label></p>
				<input id="mname" name="mname" placeholder="Middle name(optional)"  tabindex="1" type="text">
				<label for="name"></label></p>
    			<input id="lname" name="lname" placeholder="Last name" required="" tabindex="1" type="text">
				
				<div id="message1"></div>
				-->
				
				<p class="contact"><label for="name">Name*</label> <span id="message1" style="color:red"></span></p>
				<table style='table-layout: fixed; width: 415px;' >
				  <tr>
					<th><input id="fname" name="fname" placeholder="First name*" required="" tabindex="1" type="texttype" style="width:120px";> </th>
					<th><input id="mname" name="mname" placeholder="Middle name"  tabindex="1" type="texttype" style="width:120px";></th> 
					<th><input id="lname" name="lname" placeholder="Last name*" required="" tabindex="1" type="texttype" style="width:120px";></th>
				  </tr>
				</table>
				
				
    			<p class="contact"><label for="email">Email*</label>&nbsp; &nbsp; <span id="message5" style="color:red"></span></p> 
    			<input id="email" name="email" placeholder="example@domain.com" required="" type="email"> 
				
				<p class="contact"><label for="name">Contact Details</label>&nbsp; &nbsp; <span id="message7" style="color:red"></span></p>
				<table style='table-layout: fixed; width: 415px;' >
				  <tr>
					<th><input id="mphone" name="mphone" placeholder="Mobile Number*" required="" type="texttype" style="width:190px";></th>
					<th><input id="lphone" name="lphone" placeholder="Landline" type="texttype" style="width:190px";></th>
				  </tr>
				</table>				 
                <!--<br>-->
				
                <p class="contact"><label for="username">Create a username</label>&nbsp; &nbsp; <span id="message2" style="color:red"></span></p> 
    			<input id="username" name="username" placeholder="username" required="" tabindex="2" type="text"> 
                
				<!--<p class="contact"><label for="password">Create a password</label></p> 
    			<input type="password" id="password" name="password" required=""> 
                <p class="contact"><label for="repassword">Confirm your password</label></p> 
    			<input type="password" id="repassword" name="repassword" required=""> -->
        
				<p class="contact"><label for="password">Create a password</label>&nbsp; &nbsp; <span id="message3" style="color:red"></span></p>
				<table style='table-layout: fixed; width: 415px;' >
				  <tr>
					<th><input type="password" id="password" name="password" placeholder="Password*" required="" type="texttype" style="width:190px";> </th>
					<th><input type="password" id="repassword" name="repassword" placeholder="Confirm password*" required="" type="texttype" style="width:190px";> </th>
					</tr>
				</table>
				
             		  <fieldset>
				 <span id="message4" style="color:red"></span>
                 <label>Gender*	</label>&nbsp;&nbsp;&nbsp;
					  <input type="radio" name="gender" value="male" checked> Male&nbsp;&nbsp;&nbsp;&nbsp;
					  <input type="radio" name="gender" value="female"> Female
			</fieldset>
			<!--
            <select class="select-style gender" name="gender">
            <option value="select">i am..</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="others">Other</option>
            </select><br><br>
          
			
            <input class="buttom" name="submit" id="submit" tabindex="5" value="Sign me up!" type="submit">
			<input class="buttom" value="Continue..." " type="submit">	
			-->

			<input class="buttom" name="reset" id="reset" tabindex="5" value="Clear" type="reset">		
            <input class="buttom" name="continue" value="Submit" type="submit" onclick="return (validate_signup())">			
			
   </form> 
</div>      
</div>
<footer>
<p> TAKUSHI,Copyright &copy; 2017</p>
</footer>

</body>
</html>
