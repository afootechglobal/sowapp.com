<?php if($page=='login'){?>
    <div class="fill-form-div animated fadeInLeft" id="login_div">
        <h2>Log-In</h2>    

        <div class="title-div"><i class="bi-envelope"></i> Email Address:<span>*</span></div> 
        <input type="email" class="text-field" placeholder="Enter Your Email Address" id="email" />

        <div class="title-div"><i class="bi-lock"></i> Password:<span>*</span></div> 
        <input type="password" class="text-field" placeholder="Enter Your Password" id="password" /><br/>
            
        <span class="reset-password"  onclick="_next_page('reset_password_info');">Forgot Password? </span>
        <button class="btn" type="button" id="login_btn" onclick="_log_in();"><i class="bi-check"></i> LOG-IN</button> 

    </div>

    <div class="fill-form-div "  id="reset_password_info">
        <h2>Reset Password</h2>
        <div class="notification-div">
            <span>Provide your email address to continue</span>
        </div>
        <div class="title-div"><i class="bi-envelope"></i> Email Address:<span>*</span></div> 
        <input type="email" class="text-field" placeholder="Enter Your Email Address" id="reset_pass_email" />
    
        <button class="btn" type="button" id="reset_password_btn" onclick="_proceed_reset_password();"> PROCEED <i class="bi-arrow-right"></i></button>
        
        <div class="notification-div">
            <span>Have you already have an account?</span> <span class="in"  onclick="_next_page('login_div');">LOG-IN </span>
        </div>
    </div>
<?php }?>




<?php if ($page=='reset_password'){?>
 
        <div class="notification-div"><i class="bi-person"></i> Dear <span id="username"></span>, an <span>OTP</span> has been sent to your email address (<span id="useremail"></span>) to reset your password.</div>
            
        <div class="title-div"><i class="bi-ellipsis-h"></i> Enter OTP:<span>*</span> <div id="otp_info" style="float:right;font-size:12px;display:none;color:#f00"><span>OTP not accepted!</span></div></div>
        <input id="reset_password_otp" type="text" class="text-field" onkeypress="isNumber_Check()" placeholder="Enter OTP" title-div="Enter OTP"/>

        <div class="notification-div alert-otp" style="margin-bottom:0px;"><span>OTP</span> not received? <span id="resend" onclick="_resend_otp('resend','<?php echo $staff_id?>')"><i class="bi-send"></i> RESEND OTP</span></div>

        <div class="title-div"><i class="bi-ellipsis-h"></i> Create Password:<span>*</span>   <div id="pswd_info" style="float:right;font-size:12px;display:none;color:#f00"><span>password not accepted!</span></div></div>
        <input id="create_reset_password" type="password" class="text-field" onkeyup="_check_password1()" placeholder="Create Password" title-div="Create Password" />

        <div class="title-div"><i class="bi-ellipsis-h"></i> Confirm Password:<span>*</span> <div style="float:right;" id='message'></div></div>
        <input id="confirmed_reset_password" type="password" onkeyup="_check_password2()" class="text-field" placeholder="Confirm Password" title-div="Confirm Password"/>
        
      
        <div class="pswd_info">At least 8 charaters required including upper & lower cases and special characters and numbers.</div>
         <button class="btn" type="button"  title-div="Reset" id="comfirmed_reset_btn" onclick="_comfirmed_reset_password('<?php echo $staff_id?>')"><i class="bi-check"></i> Reset Password </button>
  
    
 <?php } ?>



 <?php if($page=='password_reset_successful'){?>
        <div class="reg-successful-div animated bounceInDown">
            <div class="gif">
                <img src="<?php echo $website_url?>/all-images/images/successful.gif" alt="successful gif">
            </div>
            <h3>PASSWORD RESET SUCCESSFUL </h3>
            <button onClick="window.location.reload();" type="button">OKAY, LOGIN</button> 
        </div>
<?php }?>
