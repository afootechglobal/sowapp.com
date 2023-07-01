
function _next_page(next_id) {
    $('.form-div').hide();
    $('#'+next_id).fadeIn(1000);
}


 function _next_page(next_id) {
   $('#login_div,#reset_password_info,#confirm_password_info').hide();
    $('#'+next_id).fadeIn(1000);
}

function numberwithcomma(amount){
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 
function _alert_close(){
  $('.overlay-div').fadeOut(300);
}



 function _verify_mobile(){
    var mobile = $('#verify_mobile').val();
    //////////////// get btn text ////////////////
    var btn_text=$('#verify_mobile_btn').html();
    $('#verify_mobile_btn').html('VERIFYING <i class="fa fa-spinner fa-spin"></i>');
    document.getElementById('verify_mobile_btn').disabled=true;
    ////////////////////////////////////////////////	
   
  var dataString ='mobile='+ mobile;
  $.ajax({
    type: "POST",
    url: verify_mobile_api,
    data: dataString,
    cache: false,
    dataType: 'json',
    cache: false,
    success: function(info){
      var result = info.result;
      var message1 = info.message1;
      var message2 = info.message2;
          if(result==true){
            var mem_id = info.mem_id;
            var fullname = info.fullname;
            var mobile = info.mobile;
            var address = info.address;
            var mem_type_id = info.mem_type_id;
            var position_id = info.position_id;
            
            $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
		    	_user_verification(mem_id,fullname,mobile,address,mem_type_id,position_id);   
          }else{
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
            $('#verify_mobile').addClass('complain');
          }
          $('#verify_mobile_btn').html(btn_text);
          document.getElementById('verify_mobile_btn').disabled=false; 
    }
 });
    }
 
 
 
 
 function _user_verification(mem_id,fullname,mobile,address,mem_type_id,position_id) {
    var action='user_verification';
    var dataString ='action='+ action+'&mem_id='+ mem_id+'&fullname='+ fullname+'&mobile='+ mobile+'&address='+ address+'&mem_type_id='+ mem_type_id+'&position_id='+ position_id;
    $.ajax({
    type: "POST",
    url: index_local_url,
    data: dataString,
    cache: false,
    success: function(html){
      $('#login_div').html(html);
     
      $('#username').html(fullname);
      $('#verify_fullname').val(fullname.toUpperCase());
      $('#verify_mobile').val(mobile);
      $('#verify_address').val(address);
      _get_membership_name_api(mem_type_id);
      _get_position_name_api(position_id);
     
   }
    });
 }
 


 function _proceed_verification(){
  // var check =  document.getElementById('check_info');
        var mobile = $('#verify_mobile').val();
        if(document.getElementById('check_info').checked){
        //////////////// get btn text ////////////////
        var btn_text=$('#proceed_btn').html();
        $('#proceed_btn').html('PROCCESSING <i class="fa fa-spinner fa-spin"></i>');
        document.getElementById('proceed_btn').disabled=true;
        ////////////////////////////////////////////////	
      
      var dataString ='mobile='+ mobile;
      $.ajax({
        type: "POST",
        url: verify_mobile_api,
        data: dataString,
        cache: false,
        dataType: 'json',
        cache: false,
        success: function(info){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;
              if(result==true){
                var mem_id = info.mem_id;
                var fullname = info.fullname;
                var mobile = info.mobile;

            _user_proceed_to_payment(mem_id,fullname,mobile);   
              }else{
                $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
                $('#verify_mobile').addClass('complain');
              }
              $('#proceed_btn').html(btn_text);
              document.getElementById('proceed_btn').disabled=false; 
        }
      });
    }else{
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>Comfirmation Error!</h3> <p>Check to comfirm your info</p></div>').fadeIn(500).delay(3000).fadeOut(100);
    }

 }




 function _user_proceed_to_payment(mem_id,fullname,mobile) {
      var action='user_proceed_to_payment';
      var dataString ='action='+ action+'&mem_id='+ mem_id+'&fullname='+ fullname+'&mobile='+ mobile;
      $.ajax({
      type: "POST",
      url: index_local_url,
      data: dataString,
      cache: false,
      success: function(html){
        $('#login_div').html(html);
        $('#welcome_username').html(fullname);
        $('#payment_username').html(fullname);
        $('#payment_usermobile').html(mobile);
        _get_payment_purpose();
        _get_currency();
    }
  });

}

 


 
 function _get_membership_name_api(mem_type_id){  
        var dataString ='mem_type_id='+ mem_type_id;
        $.ajax({
        type: "POST",
        url: membership_type_name_api,
        dataType: 'json',
        data: dataString,
        cache: false,
        success: function(info){
            var membership_type_name =info.membership_type_name;
            $('#verify_mem_type').val(membership_type_name);  
          
          }
    });
 }
 
   
function _get_position_name_api(position_id){  
      var dataString ='position_id='+ position_id;
      $.ajax({
      type: "POST",
      url: position_name_api,
      dataType: 'json',
      data: dataString,
      cache: false,
      success: function(info){
          var position_name =info.position_name;
          $('#verify_position').val(position_name);  
        }
  });
 }
 


 function _get_payment_purpose(){  
  text='<option value="selected" selected="selected">LOADING... </option>';
  $('#payment_purpose').html(text);
      $.ajax({
      type: "POST",
      url: fetch_payment_purpose_api,
      dataType: 'json',
      cache: false,
      success: function(info){
        var fetch= info.data;
        var text = '<option value="" selected="selected">SELECT PAYMENT PURPOSE</option>';
              for (var i = 0; i < fetch.length; i++) {
                var payment_purpose_id =fetch[i].payment_purpose_id;
                var payment_purpose_name =fetch[i].payment_purpose_name;
              
                text += '<option value="'+payment_purpose_id+'" >'+payment_purpose_name.toUpperCase()+'</option>';
              }
          $('#payment_purpose').html(text); 
        
          }
    });
}




function _get_currency(){  
  text='<option value="selected" selected="selected">LOADING... </option>';
  $('#currency').html(text);
  $.ajax({
  type: "POST",
  url: fetch_currency_api,
  dataType: 'json',
  cache: false,
  success: function(info){
    var fetch= info.data;
    var text = '<option value="" selected="selected">SELECT CURRENCY</option>';
          for (var i = 0; i < fetch.length; i++) {
            var currency_id =fetch[i].currency_id;
            var currency_name =fetch[i].currency_name;
            text += '<option value="'+currency_id+'" >'+currency_name.toUpperCase()+'</option>';
          }
      $('#currency').html(text); 
    
      }
});
}


///// accept number ////
function isNumner_Check(){
  var e = window.event;
  var key = e.keyCode && e.which;

//// noit accpet zero(0) as first input ////
  $("#amount").on("input", function() {
      var val = $(this).val()
      var reg = /^0/gi;
      if (val.match(reg)) {
          $(this).val(val.replace(reg, ''));
          $('#amount_text').fadeIn(300);
        document.getElementById('amount').style.border='#F00 1px solid';
      }
  });
//// accept number only
 if(!((key>=48) && (key<=57) || (key==43) || (key==45))){
     if(e.preventDefault){
        e.preventDefault();
        $('#amount_info,#verify_mobile_info').fadeIn(300); 
       document.getElementById('amount').style.border='#F00 1px solid';
     }else{ 
       e.returnValue = false;
     }
 }else{ 
  //// amount with comma
      $('#amount').on("input",function(event) {
        // skip for arrow keys
        if(event.which >= 37 && event.which <= 40) return;  
        // format number
        $(this).val(function(index, value) {
          return value
          .replace(/\D/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
        });
         $('#amount_info,#amount_text,#verify_mobile_info').fadeOut(300);
         document.getElementById('amount').style.border='rgba(0, 0, 0, .1) 1px solid';
  }
}

function _make_payment(mem_id){
  var payment_purpose_id = $('#payment_purpose').val();
  var currency_id = $('#currency').val();
  var amount_paid = $('#amount').val();
  $('#payment_purpose, #amount, #currency').removeClass('complain');

 if(payment_purpose_id==''){
    $('#payment_purpose').addClass('complain');
    $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PAYMENT PURPOSE ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
  }else if(currency_id==''){
    $('#currency').addClass('complain');
    $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>CURRENCY ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
  }else if(amount_paid==''){
    $('#amount').addClass('complain');
    $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>AMOUNT ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
  }else{
  // amount_paid = $('#amount').val();

  $('#payment_purpose, #amount, #currency').removeClass('complain');
  /////////////////////////////////////////
  var btn_text=$('#submit_btn').html();
  $('#submit_btn').html('PROCESSING <i class="fa fa-spinner fa-spin"></i>');
  document.getElementById('submit_btn').disabled=true;
  ////////////////////////////////////////////////	
 
var dataString ='mem_id='+ mem_id+'&payment_purpose_id='+ payment_purpose_id+'&amount_paid='+ amount_paid+'&currency_id='+ currency_id;
$.ajax({
  type: "POST",
  url: membership_payment_api,
  data: dataString,
  cache: false,
  dataType: 'json',
  cache: false,
  success: function(info){
    var result = info.result;
    var message1 = info.message1;
    var message2 = info.message2;

    var mem_id =info.mem_id;
    var fullname =info.fullname;
    var email =info.email;
    var mobile =info.mobile;
    var amount_paid =info.amount_paid;
    var currency_id =info.currency_id;
    var transaction_id =info.transaction_id;
    var payment_key =info.payment_key;
        if(result==true){  
        
        //  _get_page('payment_successful');
        //   $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
        _PayWithPaystack(mem_id,fullname,transaction_id,payment_key,email,mobile,amount_paid,currency_id);
      }else{
          $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
          $('#verify_mobile').addClass('complain');
        }
        $('#submit_btn').html(btn_text);
        document.getElementById('submit_btn').disabled=false;
  }
});
  }
}


   
////// CALL PAYSTACK /////////////////////////////////////

function _PayWithPaystack(mem_id,fullname,transaction_id,payment_key,email,mobile,amount_paid,currency_id){
  var handler = PaystackPop.setup({
    key:  payment_key,
    email: email,
    amount: amount_paid*100, //amt in kobo
    ref: transaction_id,
  currency: currency_id, // Use GHS for Ghana Cedis or USD for US Dollars
    metadata: {
       custom_fields: [
          {
              display_name: fullname,
              variable_name: "mobile_number",
              value: mobile
          }
       ]
    },
    callback: function(response){ //success
              var stack_pay_ref=$.trim(response.reference);
              _call_payment_success(transaction_id,stack_pay_ref,amount_paid);
    },
    onClose: function(){ //update to cancelled.
      _call_payment_cancelled(transaction_id);
   return false;		
    }
  });
  handler.openIframe();
}


function  _call_payment_success(transaction_id,stack_pay_ref,amount_paid){
  ///var action='payment_successful';
//  $('.overlay-back-div').html('<div class="loading-div  animated zoomIn"><img src="images/ajax_loader.gif"/></div>').fadeIn(1000);
  var dataString ='transaction_id='+ transaction_id+'&stack_pay_ref='+ stack_pay_ref+'&amount_paid='+ amount_paid;
      $.ajax({
      type: "POST",
      url: payment_success_api,
      data: dataString,
      cache: false,
      success: function(info){
        _view_payment_success_page(transaction_id);
         }
      });
}




function _get_page(page,transaction_id){
  $('.overlay-div').html('<div class="loading-div"><img src="'+website_url+'/all-images/images/ajax_loader.gif"/></div>').fadeIn('fast');
     var action='get_page';
     var dataString = 'action='+action+'&page='+page+'&transaction_id='+transaction_id;
        $.ajax({
        type: "POST",
        url: index_local_url,
        data: dataString,
        cache: false,
        success: function(html){
           $('.overlay-div').html(html);
            _get_payment_details(transaction_id);
        }
  });
}

function  _view_payment_success_page(transaction_id){
  $('.overlay-div').html('<div class="loading-div"><img src="'+website_url+'/all-images/images/ajax_loader.gif"/></div>').fadeIn('fast');
  var action='payment_successful';
  var dataString = 'action='+action+'&transaction_id='+ transaction_id;
      $.ajax({
      type: "POST",
      url: index_local_url,
      data: dataString,
      cache: false,
      success: function(html){
        $('.overlay-div').html(html);
         }
      });
}



function  _get_payment_details(transaction_id){
  var dataString ='transaction_id='+ transaction_id;
    $.ajax({
    type: "POST",
    url: payment_details_api,
    data: dataString,
    cache: false,
    success: function(info){
      var fetch= info.data;
    
      var sender_transaction_id =fetch.transaction_id;
      var recipient_name =fetch.sender_name;
      var recipient_email =fetch.support_email;
      var recipient_phonenumber =fetch.support_phonenumber;
      var recipient_address =fetch.support_address;
      var sender_fullname =fetch.fullname;
      var sender_status_name =fetch.status_name;
      var sender_mobile =fetch.mobile;
      var sender_amount =fetch.amount_paid;
      var sender_date =fetch.date;

      $('#sender_transaction_id').html(sender_transaction_id);
      $('#recipient_name').html(recipient_name);
      $('#recipient_email').html(recipient_email);
      $('#recipient_mobile').html(recipient_phonenumber);
      $('#recipient_address').html(recipient_address);
      $('#sender_fullname').html(sender_fullname);
      $('#sender_status_name').html(sender_status_name);
      $('#sender_mobile').html(sender_mobile);
      $('#sender_amount_paid').html(numberwithcomma(sender_amount));
      $('#sender_date').html(sender_date);        
  }
});
}


function _call_payment_cancelled(transaction_id){ 
  var dataString ='transaction_id='+ transaction_id;
      $.ajax({
      type: "POST",
      url: cancel_payment_api,
      data: dataString,
      cache: false,
      success: function(html){
     $('#submit_btn').html('<i class="bi-card"></i> MAKE PAYMENT');
        document.getElementById('submit_btn').disabled=false;
         }
      });
}



