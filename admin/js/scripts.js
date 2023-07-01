
 function _next_page(next_id) {
   $('#login_div,#reset_password_info,#confirm_password_info').hide();
    $('#'+next_id).fadeIn(1000);
}
    
    

$(document).ready(function() {
	function trim(s) {
            return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
        }
$(".form-div").keydown(function(e){
	if(e.keyCode==13){
		_log_in();
	}
});
});




    //////////// LOGIN ////////////
    function _log_in(){ 
        var email = $('#email').val();
        var password = $('#password').val();
        $('#email,#password').removeClass('complain');
        if((email!='')&&(password!='')){
        $('#email,#password').addClass('focus');
        user_login(email,password);
        }else{
            $('#email,#password').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>Login Error</h3> <p>Fill This Fields To Continue .</p></div').fadeIn(500).delay(3000).fadeOut(100);
    }
    };

    ///////////////////////////////////// 

    ///////////////////// user login /////////////////////
    function user_login(email,password){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      /////////////// get btn text ////////////////
      var btn_text=$('#login_btn').html();
      $('#login_btn').html('Authenticating <i class="fa fa-spinner fa-spin"></i>');
      document.getElementById('login_btn').disabled=true;
      ////////////////////////////////////////////////	
      var dataString ='email='+email+'&password='+password;
  
      $.ajax({
      type: "POST",
      url: url_login_api,
      dataType: 'json',
      data: dataString,
      cache: false,
      success: function(data){
  
          var result =data.result;
          var message1 =data.message1;
          var message2 =data.message2;
          if(result==true){
           var staff_id =data.staff_id;
           var access_key =data.access_key;
           var role_id =data.role_id;
          $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/admin/all-images/images/success.gif" alt="success" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
           _proceed_to_login(staff_id,access_key,role_id);   
           }else{
              $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/admin/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div').fadeIn(500).delay(3000).fadeOut(100);
          }
          $('#login_btn').html(btn_text);
          document.getElementById('login_btn').disabled=false;
  
  
  
      }
  
      });
      }
  
  
  function  _proceed_to_login(staff_id,access_key,role_id){
     var action='login';
     var dataString ='action='+ action+'&staff_id='+ staff_id+'&access_key='+ access_key+'&role_id='+ role_id;
      $.ajax({
      type: "POST",
      url: login_local_url,
      data: dataString,
      cache: false,
      success: function(html){
        window.parent(location=admin_portal_url);

     }
      });
  }
  



 
 function _proceed_reset_password(){
    var email = $('#reset_pass_email').val();
    //////////////// get btn text ////////////////
    var btn_text=$('#reset_password_btn').html();
    $('#reset_password_btn').html('PROCESSING <i class="fa fa-spinner fa-spin"></i>');
    document.getElementById('reset_password_btn').disabled=true;
    ////////////////////////////////////////////////	
   
  var dataString ='email='+ email;
  $.ajax({
    type: "POST",
    url: staff_reset_password_api,
    data: dataString,
    cache: false,
    dataType: 'json',
    cache: false,
    success: function(info){
      var result = info.result;
      var message1 = info.message1;
      var message2 = info.message2;
     
          if(result==true){
            var staff_id = info.staff_id;
            var fullname = info.fullname;
            var email = info.email;
            $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
             _reset_password(staff_id,fullname,email);   
          }else{
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
            $('#reset_pass_email').addClass('complain');
          }
          $('#reset_password_btn').html(btn_text);
          document.getElementById('reset_password_btn').disabled=false; 
    }
 });
    }
 
 
 
 
 function _reset_password(staff_id,fullname,email){
    var action='reset_password';
    var dataString ='action='+ action+'&staff_id='+ staff_id+'&fullname='+ fullname+'&email='+ email;
    $.ajax({
    type: "POST",
    url: login_local_url,
    data: dataString,
    cache: false,
    success: function(html){
      $('#reset_password_info').html(html);
      $('#username').html(fullname);
      $('#useremail').html(email);
   }
    });
 }
 
 
 
 
 function _resend_otp(ids,staff_id){
   var btn_text=$('#'+ids).html();
   $('#'+ids).html('SENDING <i class="fa fa-spinner fa-spin"></i>');
   var dataString ='staff_id='+ staff_id;
      $.ajax({
      type: "POST",
      url: staff_resend_otp_api,
      data: dataString,
      cache: false,
      success: function(data){
         var message1 = data.message1;
         var message2 = data.message2;
         $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Success" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
         $('#'+ids).html(btn_text);
   }
});
}
 
///// accept number ////
function isNumber_Check(){
   var e = window.event;
   var key = e.keyCode && e.which;

	if(!((key>=48) && (key<=57) || (key==43) || (key==45))){
      if(e.preventDefault){
         e.preventDefault();
         $('#otp_info').fadeIn(300); 
        document.getElementById('reset_password_otp').style.border='#F00 1px solid';
      }else{
        e.returnValue = false;
      }
	}else{
      $('#otp_info').fadeOut(300); 
      document.getElementById('reset_password_otp').style.border='rgba(0, 0, 0, .1) 1px solid';
   }
}

function _check_password1(){
   var password = $('#create_reset_password').val();
   if (password==''){
    $('#pswd_info').hide();
    $('.pswd_info').fadeIn(500);
    document.getElementById('create_reset_password').style.border='rgba(0, 0, 0, .1) 1px solid';
   }else{
    $('.pswd_info').hide();
      if(password.length>=8){
            if (password.match(/^(?=[^A-Z]*[A-Z])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d).{8,}$/)) {
            $('#pswd_info').hide();
            document.getElementById('create_reset_password').style.border='rgba(0, 0, 0, .1) 1px solid';

           } else {
             $('#pswd_info').fadeIn(500);
           }
      }else{
         $('#pswd_info').fadeIn(500);  
         document.getElementById('create_reset_password').style.border='#F00 1px solid';
      }
   }
 }



var _check_password2 = function() {
      if (document.getElementById('create_reset_password').value == document.getElementById('confirmed_reset_password').value) {
      document.getElementById('create_reset_password').style.border='rgba(0, 0, 0, .1) 1px solid';
      document.getElementById('confirmed_reset_password').style.border='rgba(0, 0, 0, .1) 1px solid';
      document.getElementById('message').style.display = 'none';
      _check_password1();
      } else {
         _check_password1();
      document.getElementById('create_reset_password').style.border='#F00 1px solid';
      document.getElementById('confirmed_reset_password').style.border='#F00 1px solid';
      document.getElementById('message').style.display = 'block';
      document.getElementById('message').style.color = 'hsla(0, 100%, 40%, 0.678)';
      document.getElementById('message').style.fontSize = '12px';
      document.getElementById('message').innerHTML = 'password not match!';
      }
   }







   function _comfirmed_reset_password(staff_id){
      var otp = $('#reset_password_otp').val();
      var password = $('#create_reset_password').val();
      var confirmed_reset_password = $('#confirmed_reset_password').val();

      $('#reset_password_otp,#create_reset_password,#confirmed_reset_password').removeClass('complain');
         if((otp=='') && (password=='') && (confirmed_reset_password=='')){
            $('#reset_password_otp,#create_reset_password,#confirmed_reset_password').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ERROR!</h3> <p>Fill all fields to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
         }else if (otp==''){
            $('#reset_password_otp').addClass('complain');
            $('#create_reset_password,#confirmed_reset_password').removeClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>OTP ERROR!</h3> <p>Field cannot be empty.</p></div').fadeIn(500).delay(3000).fadeOut(100);
          }else if (password==''){
            $('#create_reset_password').addClass('complain');
            $('#reset_password_otp,#confirmed_reset_password').removeClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PASSWORD ERROR!</h3> <p>Field cannot be empty.</p></div').fadeIn(500).delay(3000).fadeOut(100);
         }else if (password!=confirmed_reset_password){
            $('#create_reset_password,#confirmed_reset_password').addClass('complain');
            $('reset_password_otp').removeClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PASSWORD ERROR!</h3> <p>Password not match.</p></div').fadeIn(500).delay(3000).fadeOut(100);
         }else{
         if ((password.match(/^(?=[^A-Z]*[A-Z])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d).{8,}$/))&&(password.length>=8)) {
               $('#reset_password_otp,#create_reset_password,#confirmed_reset_password').removeClass('complain');
                  //////////////// get btn text ////////////////
                  var btn_text=$('#comfirmed_reset_btn').html();
                  $('#comfirmed_reset_btn').html('RESETTING <i class="fa fa-spinner fa-spin"></i>');
                  document.getElementById('comfirmed_reset_btn').disabled=true;
            ////////////////////////////////////////////////	
            
               var dataString ='staff_id='+ staff_id+'&otp='+otp+'&password='+ password;
                  $.ajax({
                  type: "POST",
                  url: staff_confirm_otp_api,
                  data: dataString,
                  cache: false,
                  dataType: 'json',
                  cache: false,
                  success: function(data){
                     var result = data.result;
                     var message1 = data.message1;
                     var message2 = data.message2;
                     if(result==true){
                        _get_page('password_reset_successful');
                  }else{
                     $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
                     $('#reset_password_otp').addClass('complain');
                  }
                  $('#comfirmed_reset_btn').html(btn_text);
                  document.getElementById('comfirmed_reset_btn').disabled=false; 
                  }
               });  
       }else{
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PASSWORD ERROR!</h3> <p>Password not accepted!.</p></div').fadeIn(500).delay(3000).fadeOut(100);
       }
              
   }
}
   


function _get_page(page){
   $('.overlay-div').html('<div class="loading-div"><img src="'+website_url+'/all-images/images/ajax_loader.gif"/></div>').fadeIn('fast');
      var action='get_page';
      var dataString = 'action='+action+'&page='+page;
         $.ajax({
         type: "POST",
         url: login_local_url,
         data: dataString,
         cache: false,
         success: function(html){
            $('.overlay-div').html(html).fadeIn('fast');
         }
   });
 }
 
 










