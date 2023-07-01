
function _upload_pix_(staff_id){
 $(function(){
   staff_login_profile_pix = {
   UpdatePreview: function(obj){
       // if IE < 10 doesn't support FileReader
       if(!window.FileReader){
           // don't know how to proceed to assign src to image tag
       } else {
           _upload_profile_pix(staff_id);
           var reader = new FileReader();
           var target = null;

           reader.onload = function(e) {
           target =  e.target || e.srcElement;
               $('#passport-one, #passport-two, #passport-three').prop("src", target.result);
           };
           reader.readAsDataURL(obj.files[0]);
       }
   }
   };
});
   }


function _upload_staff_pix_(staff_id){
      $(function(){
         staff_profile_pix = {
         UpdatePreview: function(obj){
         // if IE < 10 doesn't support FileReader
         if(!window.FileReader){
               // don't know how to proceed to assign src to image tag
         } else {
               _upload_profile_pix(staff_id);
               var reader = new FileReader();
               var target = null;

               reader.onload = function(e) {
               target =  e.target || e.srcElement;
                  $("#passport-four").prop("src", target.result);
               };
               reader.readAsDataURL(obj.files[0]);
         }
         }
         };
      });
        }


   function updateTextView(_obj){
  var num = getNumber(_obj.val());
  if(num==0){
    _obj.val('');
  }else{
    _obj.val(num.toLocaleString());
  }
}
function getNumber(_str){
  var arr = _str.split('');
  var out = new Array();
  for(var cnt=0;cnt<arr.length;cnt++){
    if(isNaN(arr[cnt])==false){
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(''));
}
$(document).ready(function(){
  $('input[type=text]').on('keyup',function(){
    updateTextView($(this));
  });
});



 function _expand_link(ids){
   //  $('#'+divid).toggle(500);
     $('#'+ids+'-li').toggle('slow');
    }

   function numberwithcomma(amount){
       return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }

   function _expand_div(ids){
   //  $('#'+divid).toggle(500);
   $('#'+ids+'-li').toggle('slow');
   }

   function _alert_close(){
      $('.overlay-div').fadeOut(300);
   }
            
   function _get_active_link(divid){
		 $('#dashboard, #admin, #member, #profile, #payment').removeClass('active-li');
		 $('#sdashboard, #sadmin').removeClass('active-li');
		 $('#'+divid).addClass('active-li');
		 $('#s'+divid).addClass('active-li');
		 $('#page-title').html($('#'+ divid).html());
		 $('#page-title').html($('#s'+ divid).html());
}







function _upload_profile_pix(staff_id){
   if (staff_id==''){
      // do nothing
   }else{
      var file_data = $('#passport').prop('files')[0];
    if (file_data==''){}else{ 
      var form_data = new FormData();                  
      form_data.append('passport', file_data);
      form_data.append('staff_id', staff_id);

      $.ajax({
          url: unlink_passport_api,
          type: "POST",
          data: form_data,
          contentType: false,
          cache: false,
          processData:false,
          success: function(data){
             var db_passport = data.db_passport;
             _unlink_pix_file(staff_id,db_passport);
           //  move_file(db_passport);
       }
      });
    }
   }
  
}




function _unlink_pix_file(staff_id,db_passport){
   var action = 'unlink_passport';
   var passport_pix= $('#passport').prop('files')[0];

   var form_data = new FormData();   
   form_data.append('action', action);
   form_data.append('db_passport', db_passport);
   form_data.append('db_passport', passport_pix);

   $.ajax({
       url: admin_local_url,
       type: "POST",
       data: form_data,
       contentType: false,
       cache: false,
       processData:false,
       success: function(html){             
         _upload_pix_file(staff_id);
       }
   });
  
}



function  _upload_pix_file(staff_id){
 
   var passport_pix= $('#passport').prop('files')[0];

   var form_data = new FormData();   
   form_data.append('staff_id', staff_id);
   form_data.append('passport', passport);
   form_data.append('passport', passport_pix);

   
   $.ajax({
       url: upload_passport_api,
       type: "POST",
       data: form_data,
       contentType: false,
       cache: false,
       processData:false,
       success: function(data){
         var message1 = data.message1;
         var message2 = data.message2;
         var passport = data.passport;
         _get_pix(message1,message2,passport);
       }
   });
  
}


function _get_pix(message1,message2,passport){
   var action = 'upload_pix_file';

   var passport_pix= $('#passport').prop('files')[0];
   var form_data = new FormData();   
   form_data.append('action', action);
   form_data.append('passport', passport);
   form_data.append('passport', passport_pix);

   $.ajax({
      url: admin_local_url,
      type: "POST",
      data: form_data,
      contentType: false,
      cache: false,
      processData:false,
      success: function(html){             
         $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
      }
   });

}




















   ///////////////////// get staff login /////////////////////
   function _get_staff_login(staff_id){  
      $('#login_user_fullname,#login_user_login_time').html('XXXXX');
      var dataString ='staff_id='+staff_id;  
      $.ajax({
         type: "POST",
         url: fetch_staff_api,
         data: dataString,
         dataType: 'json',
         cache: false,
         success: function(info){
            var fetch=info.data;
            var fullname =fetch.fullname;
            var updated_time =fetch.updated_time;
            var passport =fetch.passport;
            $('#login_user_fullname').html(fullname);
            $('#login_user_login_time').html(updated_time);
           _get_fetch_pix(passport);
          //  $('#profile_login_pix,#header_pix,#mini_pix').html(passport);
         }
      });
   }


   function _get_fetch_pix(passport){  
      var profile_login_pix='';
         if(passport==''){
            profile_login_pix ='<img id="passport-one" src="'+website_url+'/uploaded_files/staff_pix/friends.png" alt="Profile pix"/>'+
            '<img id="passport-two" src="'+website_url+'/uploaded_files/staff_pix/friends.png" alt="Profile pix"/>'+
            '<img id="passport-three" src="'+website_url+'/uploaded_files/staff_pix/friends.png" alt="Profile pix"/>'
         }else{
            profile_login_pix ='<img id="passport-one" src="'+website_url+'/uploaded_files/staff_pix/'+passport+' " alt="Profile pix"/>'
            profile_login_pix ='<img id="passport-two" src="'+website_url+'/uploaded_files/staff_pix/'+passport+'" alt="Profile pix" />'
            profile_login_pix ='<img id="passport-three" src="'+website_url+'/uploaded_files/staff_pix/'+passport+'" alt="Profile pix" />'
         }
     
      $('#profile_login_pix,#header_pix,#mini_pix').html(profile_login_pix);
   
   }

   function _get_page(page,divid){
      _get_active_link(divid);
         $('.main-dashboard-div').html('<div class="ajax-loader"><img src="'+website_url+'/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
         var action='get_page';
         var dataString = 'action='+action+'&page='+page;
            $.ajax({
            type: "POST",
            url: admin_local_url,
            data: dataString,
            cache: false,
            success: function(html){
               $('#content').html(html);   
            }
      });
   }


function _get_form_page(page,id){
      $('.overlay-div').html('<div class="loading-div"><img src="'+website_url+'/all-images/images/ajax_loader.gif"/></div>').fadeIn('fast');
      var action='get_form_page';
      var dataString = 'action='+action+'&page='+page+'&id='+id;
         $.ajax({
         type: "POST",
         url: admin_local_url,
         data: dataString,
         cache: false,
         success: function(html){
         $('.overlay-div').html(html);          
         }
   });
}



function _get_select_position(){  
   text='<option value="selected" selected="selected">LOADING... </option>';
   $('#reg_position_id,#updt_position_id').html(text);
   $.ajax({
   type: "POST",
   url: fetch_postion_api,
   dataType: 'json',
   cache: false,
   success: function(info){
      var result= info.result;
     var message= info.message;
     var fetch= info.data;
     var text='';

     text=' <option value="" >SELECT POSITION </option>';
     if(result==true){
           for (var i = 0; i < fetch.length; i++) {
              var position_id =fetch[i].position_id;
              var position_name =fetch[i].position_name;
              /// for position registration or update loop option ////
              text += '<option value="'+position_id+'">'+position_name+'</option>';     
           }
         }else{
            text='<option>'+message+' </option>';
         }
           $('#reg_position_id,#updt_position_id').html(text);  //// for position registration option output /////
        }
});
}




function _get_select_country(){  
   text='<option value="selected" selected="selected">LOADING... </option>';
   $('#reg_country_id,#updt_country_id').html(text);
   $.ajax({
   type: "POST",
   url: fetch_country_api,
   dataType: 'json',
   cache: false,
   success: function(info){
      var result= info.result;
     var message= info.message;
     var fetch= info.data;
     var text = '';
      text=' <option value="">SELECT COUNTRY </option>';
     if(result==true){
           for (var i = 0; i < fetch.length; i++) {
              var country_id =fetch[i].country_id;
              var country_name =fetch[i].country_name;
              /// for country registration or update loop option ////
              text += '<option value="'+country_id+'">'+country_name.toUpperCase()+'</option>';
           }
         }else{
            text='<option  >'+message+' </option>';
         }
           $('#reg_country_id,#updt_country_id').html(text);  //// for country registration option output /////
        }
});
}




function _get_select_role(role_id){  
   text='<option value="selected" selected="selected">LOADING... </option>';
    $('#reg_role_id,#updt_role_id').html(text);
   var dataString ='role_id='+ role_id;
   $.ajax({
   type: "POST",
   url: fetch_role_api,
   dataType: 'json',
   data: dataString,
   cache: false,
   success: function(info){
      var result= info.result;
      var message= info.message;
      var fetch= info.data;
      var text ='';

    text='<option value="" >SELECT ROLE </option>';
  
     if(result==true){
           for (var i = 0; i < fetch.length; i++) {
              var role_id =fetch[i].role_id;
              var role_name =fetch[i].role_name;
             /// for role update profile loop option ////
             text += '<option value="'+role_id+'">'+role_name.toUpperCase()+'</option>';
           }
         }else{
            text='<option value="" >'+message+' </option>';
         }
          $('#reg_role_id,#updt_role_id').html(text);  //// for role registration option output /////
         // document.getElementById("updt_role_id").innerHTML = text;
   }
});
}





function _get_select_status(status_id){  
   text='<option value="selected" selected="selected">LOADING... </option>';
   $('#reg_status_id,#updt_status_id,#status_id').html(text);
   var dataString ='status_id='+ status_id;
   $.ajax({
   type: "POST",
   url: fetch_status_api,
   data: dataString,
   dataType: 'json',
   cache: false,
   success: function(info){
   var result= info.result;
   var message= info.message;
   var fetch= info.data;
   var text='';

      var text=' <option value="">SELECT STATUS </option>';
     
         if(result==true){
               for (var i = 0; i < fetch.length; i++) {
                  var status_id =fetch[i].status_id;
                  var status_name =fetch[i].status_name;
                  /// for status update profile loop option ////
                  text += '<option value="'+status_id+'">'+status_name.toUpperCase()+'</option>';    
               }
         }else{
            text='<option>'+message+'</option>';
         }      
        $('#reg_status_id,#updt_status_id,#status_id').html(text);  //// for status registration option output /////   
      }
});
}



function _get_select_membership_type(){  
   text='<option value="selected" selected="selected">LOADING... </option>';
   $('#reg_mem_type_id,#updt_mem_type_id').html(text);
   $.ajax({
   type: "POST",
   url: fetch_membership_type_api,
   dataType: 'json',
   cache: false,
   success: function(info){
      var result= info.result;
      var message= info.message;
     var fetch= info.data;
     var text = '';
    
     text=' <option value="">SELECT MEMBERSHIP TYPE </option>';
     if(result==true){
         for (var i = 0; i < fetch.length; i++) {
            var mem_type_id =fetch[i].mem_type_id;
            var membership_type_name =fetch[i].membership_type_name;
            /// for position registration or update loop option ////
            text += '<option value="'+mem_type_id+'">'+membership_type_name.toUpperCase()+'</option>';
         }
      }else{
         text='<option >'+message+' </option>';
      }
      $('#reg_mem_type_id,#updt_mem_type_id').html(text);  //// for position registration option output /////
      }
});
}







function _get_status(search_page){
   var status_id = $('#status_id').val();
   var action=search_page;
   $('#fetch').html('<div class="ajax-loader loader"><img src="'+website_url+'/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
   var dataString ='action='+ action+'&status_id='+status_id;
    
    $.ajax({
      type: "POST",
      url: admin_local_url,
      data: dataString,
      cache: false,
      success: function(html){
         $('#fetch').html(html);
      }
      });
   }

   
function _get_search(search_page){
   var search_txt = $('#search_txt').val();
   if ((search_txt.length>=3) || (search_txt=='')){
      _get_search_list(search_page);
   }
   }
  

function _get_search_list(search_page){
   var search_txt = $('#search_txt').val();
      var action=search_page;
      $('#fetch').html('<div class="ajax-loader loader"><img src="'+website_url+'/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
      var dataString ='action='+ action+'&search_txt='+search_txt;
       
       $.ajax({
         type: "POST",
         url: admin_local_url,
         data: dataString,
         cache: false,
         success: function(html){
            $('#fetch').html(html);
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
          $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PHONE NUMBER ERROR!</h3> <p>Fill correct phone number</p></div').fadeIn(500).delay(2000).fadeOut(100); 
          document.getElementById('reg_mobile').style.border='#F00 1px solid';
          document.getElementById('updt_mobile').style.border='#F00 1px solid';
      }else{
        e.returnValue = false;
      }
	}else{
      $('#warning-div').fadeOut(300); 
      document.getElementById('reg_mobile').style.border='#EFEFEF 1px solid';
      document.getElementById('updt_mobile').style.border='#EFEFEF 1px solid';
   }
}






   function _get_fetch_all_staff(staff_id,status_id,search_txt){
         var dataString ='staff_id='+staff_id+'&status_id='+status_id+'&search_txt='+search_txt; 
            $.ajax({
               type: "POST",
               url: fetch_staff_api,
               data: dataString,
               dataType: 'json',
               cache: false,
               success: function(info){
                  var fetch= info.data;
                  var result=info.result;
                  var message=info.message;

                  var text = '';
                  if (result==true ){
                     for (var i = 0; i < fetch.length; i++) {
                        var staff_id =fetch[i].staff_id;
                        var fullname =fetch[i].fullname;
                        var mobile =fetch[i].mobile;
                        var status_id =fetch[i].status_id;
                        var status_name =fetch[i].status_name;
                        var passport =fetch[i].passport;
         
                        text +=
								   '<div class="sub-profile-div" title="View Profile" onClick="_get_page_with_id('+"'staff_profile'"+','+"'admin'"+','+"'"+staff_id+"'"+','+"' '"+','+"' '"+','+"'"+status_id+"'"+')">'+
										'<div class="'+status_name+'"></div>'+
										   '<div class="img-div">'+
                                 '<img src="'+website_url+'/uploaded_files/staff_pix/'+passport+'" />'+
										   '</div><br>'+
										' <span class="txt">'+staff_id+'</span>'+
										'<div class="name"><span class="txt">'+fullname.toUpperCase()+'</span></div>'+
										'<span class="txt">'+mobile+'</span><br>'+
								  '</div>';
                          
                           $('#fetch').html(text); 
                        }
                        }else{
                        text = 
                           '<div class="no-record-div">'+
                           '<span id="message">'+message+'</span><br clear="all">'+
                           '<button class="btn"  onclick="_get_form_page('+"'staff_registration'"+');"><i class="bi-person-plus"></i> ADD NEW ADMIN/STAFF</button>'+
                           '</div>';
                           $('#fetch').html(text); 
                       }
                           
               }
            });    
   }



   function _get_fetch_all_member(mem_id,status_id,search_txt){  
      var dataString ='mem_id='+mem_id+'&status_id='+status_id+'&search_txt='+search_txt; 
         $.ajax({
            type: "POST",
            url: fetch_member_api,
            data: dataString,
            dataType: 'json',
            cache: false,
            success: function(info){
               var fetch= info.data;
               var result=info.result;
               var message=info.message;

               var text = '';
                     if (result==true ){
                        for (var i = 0; i < fetch.length; i++) {
                           var mem_id =fetch[i].mem_id;
                           var fullname =fetch[i].fullname;
                           var mobile =fetch[i].mobile;
                           var status_id =fetch[i].status_id;
               
                           text +=
                               '<div class="sub-profile-div" title="View Profile" onClick="_get_page_with_id('+"'member_profile'"+','+"'member'"+','+"' '"+','+"'"+mem_id+" '"+','+"' '"+','+"'"+status_id+"'"+')">'+
                                    '<div class="active"></div>'+
                                       '<div class="img-div">'+
                                          '<img src="all-images/images/friends.png" />'+
                                       '</div><br>'+
                                    ' <span class="txt">'+mem_id+'</span>'+
                                    '<div class="name"><span class="txt">'+fullname.toUpperCase()+'</span></div>'+
                                    '<span class="txt">'+mobile+'</span><br>'+
                              '</div>';
                          


                           $('#fetch').html(text); 
                        }

                  }else{
                     text = 
                     '<div class="no-record-div">'+
                     '<span id="message">'+message+'</span><br clear="all">'+
                     '<button class="btn"  onclick="_get_form_page('+"'member_registration'"+');"><i class="bi-person-plus"></i> ADD NEW MEMBER</button>'+
                     '</div>';
                     $('#fetch').html(text);    
                  }
                 
            }
         });    
}


   function _get_page_with_id(page,divid,staff_id,mem_id,transaction_id,status_id) {
      $('.main-dashboard-div').html('<div class="ajax-loader"><img src="'+website_url+'/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
      var action='fetch_details';
      var dataString = 'action='+action+'&page='+page+'&staff_id='+staff_id+'&mem_id='+mem_id+'&transaction_id='+transaction_id+'&status_id='+status_id;
      $.ajax({
         type: "POST",
         url: admin_local_url,
         data: dataString,
         cache: false,
         success: function(html){
            $('#content').html(html);
            _get_each_detail(page,divid,staff_id,mem_id,status_id);  
         
         }
      });
   }




   
function _get_each_detail(page,divid,staff_id,mem_id,status_id){
   if  ((page=='staff_profile')||(page=='staff_login_profile')){
      _get_active_link(divid);  
     
      var dataString ='staff_id='+staff_id+'&status_id='+status_id;  
    
      $.ajax({
         type: "POST",
         url: fetch_staff_api,
         data: dataString,
         dataType: 'json',
         cache: false,
         success: function(info){
            var fetch= info.data;

            var staff_id=fetch.staff_id
            var fullname =fetch.fullname;
            var country_id =fetch.counter_id;
            var email =fetch.email;
            var mobile =fetch.mobile;
            var address =fetch.address;
            var country_id =fetch.country_id;
            var position_id =fetch.position_id;
            var role_id =fetch.role_id;
            var passport =fetch.passport;
            var status_id =fetch.status_id;
         
            $('#updt_staff_id').val(staff_id.toUpperCase());
            $('#updt_fullname').val(fullname.toUpperCase());
            $('#updt_country_id').val(country_id);
            $('#updt_email').val(email);
            $('#updt_mobile').val(mobile);
            $('#updt_address').val(address.toUpperCase());
            $('#updt_position_id').val(position_id);
            $('#updt_role_id').val(role_id);
            $('#updt_status_id').val(status_id);
            if(passport==''){
               profile_login_pix ='<img id="passport-one" src="'+website_url+'/uploaded_files/staff_pix/friends.png" alt="Profile pix"/>'
            }else{
               profile_login_pix ='<img id="passport-one" src="'+website_url+'/uploaded_files/staff_pix/'+passport+'" />'
            }
           profile_pix ='<img id="passport-four" src="'+website_url+'/uploaded_files/staff_pix/'+passport+'" />'
            $('#profile_login_pix').html(profile_login_pix);
            $('#profile_pix').html(profile_pix);
           
         }
      });
  

   }else if(page=='member_profile'){
        _get_active_link(divid);  
      var dataString ='mem_id='+mem_id+'&status_id='+status_id;
       $.ajax({
       type: "POST",
       url: fetch_member_api,
       data: dataString,
       dataType: 'json',
       cache: false,
       success: function(info){
          var fetch= info.data;
          var mem_id =fetch.mem_id;
          var fullname =fetch.fullname;
          var country_id =fetch.country_id;
          var mobile =fetch.mobile;
          var address =fetch.address;
          var position_id =fetch.position_id;
          var mem_type_id =fetch.mem_type_id;
          var status_id =fetch.status_id;
        
          $('#updt_membership_id').val(mem_id.toUpperCase());
          $('#updt_fullname').val(fullname.toUpperCase());
          $('#updt_country_id').val(country_id);
          $('#updt_mobile').val(mobile);
          $('#updt_address').val(address.toUpperCase());
        
          $('#updt_position_id').val(position_id);
          $('#updt_mem_type_id').val(mem_type_id);
          $('#updt_status_id').val(status_id);
        // $('#updt_registered_by').val(staff_id);
        _get_fetch_staff_registered_by(mem_id);
   
       }
    });
 }else{
   /// do nothing
 }
}







function _get_fetch_staff_registered_by(mem_id){  
   var dataString ='mem_id='+ mem_id;
   $.ajax({
   type: "POST",
   url: fetch_staff_registered_by,
   dataType: 'json',
   data: dataString,
   cache: false,
   success: function(info){
     var fetch= info.data;
      var fullname =fetch.fullname;
        $('#updt_registered_by').val(fullname);     
      }
});
}



function _get_users_count(counter_id){  
   $('#count_users').html('<div class="div" style="font-size:30px"><i class="fa fa-spinner fa-spin"></i></div>').fadeIn('fast');
   var dataString ='counter_id='+ counter_id;
   $.ajax({
   type: "POST",
   url: count_api,
   dataType: 'json',
   data: dataString,
   cache: false,
   success: function(info){
         var fetch= info.data;
         var counter_value =fetch.counter_value;
         $('#count_users').html(counter_value);
      }
});
}
    
function _get_staff_count(counter_id){  
   $('#count_staff').html('<div class="div" style="font-size:30px"><i class="fa fa-spinner fa-spin"></i></div>').fadeIn('fast');
   var dataString ='counter_id='+ counter_id;
   $.ajax({
   type: "POST",
   url: count_api,
   dataType: 'json',
   data: dataString,
   cache: false,
   success: function(info){
         var fetch= info.data;
         var counter_value =fetch.counter_value;
         $('#count_staff').html(counter_value);  
      }
});
}


function _get_member_count(counter_id){  
   $('#count_member').html('<div class="div" style="font-size:30px"><i class="fa fa-spinner fa-spin"></i></div>').fadeIn('fast');
   var dataString ='counter_id='+ counter_id;
   $.ajax({
   type: "POST",
   url: count_api,
   dataType: 'json',
   data: dataString,
   cache: false,
   success: function(info){
      var fetch= info.data;
      var counter_value =fetch.counter_value;
      $('#count_member').html(counter_value);
      }
});
}





function _reg_and_updt_staff(page,staff_id){
if (page=='staff_registration'){
   var fullname=$('#reg_fullname').val();
   var email=$('#reg_email').val();
   var mobile=$('#reg_mobile').val();
   var country_id=$('#reg_country_id').val();
   var address=$('#reg_address').val();
   var position_id=$('#reg_position_id').val();
   var role_id=$('#reg_role_id').val();
   var status_id=$('#reg_status_id').val();

   $('#reg_fullname, #reg_email, #reg_mobile, #reg_address, #reg_position_id, #reg_role_id, #reg_status_id').removeClass('complain');
 
   if(fullname==''){
      $('#reg_fullname').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>FULL NAME ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

   } else if ((email=='')||($('#reg_email').val().indexOf('@')<=0)){
      $('#reg_email').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>EMAIL ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

   }else if(mobile==''){
      $('#reg_mobile').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PHONE NUMBER ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

   }else if(country_id==''){
      $('#reg_country_id').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ADDRESS ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
   
   }else if(address==''){
      $('#reg_address').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ADDRESS ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

   }else if(position_id==''){
      $('#reg_position_id').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>POSITION ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

   }else if(role_id==''){
      $('#reg_role_id').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ROLE ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

   }else if(status_id==''){
      $('#reg_status_id').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>STATUS ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
      
   }else{

      $('#reg_fullname, #reg_email, #reg_mobile, #reg_address, #reg_position_id, #reg_role_id, #reg_status_id').removeClass('complain');

      var btn_text=$('#submit_btn').html();
      $('#submit_btn').html('<i class="fa fa-spinner fa-spin"></i> SUBMITTING');
      document.getElementById('submit_btn').disabled=true;

  
   var dataString ='staff_id='+staff_id+'&fullname='+fullname+'&email='+email+'&mobile='+mobile+'&country_id='+country_id+'&address='+address+'&position_id='+position_id+'&role_id='+role_id+'&status_id='+status_id;
   $.ajax({
      type: "POST",
      url: staff_reg_api,
      dataType: 'json',
      data: dataString,
      cache: false,
      success: function(info){
         var result = info.result;
         var message1 = info.message1;
         var message2 = info.message2;
         if (result==true){
               $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
               _alert_close();
               _get_page('view_all_staff','admin');
            
         }else{
            $('#reg_email').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
         }
         $('#submit_btn').html(btn_text);
         document.getElementById('submit_btn').disabled=false;
      }
   });
}

}else if( (page=='staff_profile')||(page=='staff_login_profile')){
      var fullname=$('#updt_fullname').val();
      var email=$('#updt_email').val();
      var mobile=$('#updt_mobile').val();
      var country_id=$('#updt_country_id').val()
      var address=$('#updt_address').val();
      var position_id=$('#updt_position_id').val();
      var role_id=$('#updt_role_id').val();
      var status_id=$('#updt_status_id').val();

      $('#updt_fullname, #updt_email, #updt_mobile, #updt_country_id, #updt_address, #updt_position_id, #updt_role_id, #updt_status_id').removeClass('complain');
   
      if(fullname==''){
         $('#updt_fullname').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>FULL NAME ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

      } else if ((email=='')||($('#updt_email').val().indexOf('@')<=0)){
         $('#updt_email').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>EMAIL ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
   
      }else if (mobile==''){
         $('#updt_mobile').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PHONE NUMBER ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

      }else if(country_id==''){
         $('#updt_country_id').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>COUNTRY ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
     
      }else if(address==''){
         $('#updt_address').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ADDRESS ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

      }else if(position_id==''){
         $('#updt_position_id').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>POSITION ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

      }else if(role_id==''){
         $('#updt_role_id').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ROLE ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

      }else if(status_id==''){
         $('#updt_status_id').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>STATUS ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
         
      }else{

         $('#updt_fullname, #updt_email, #updt_mobile, #updt_address, #updt_country_id, #updt_position_id, #updt_role_id, #updt_status_id').removeClass('complain');

         var btn_text=$('#update_btn').html();
         $('#update_btn').html('<i class="fa fa-spinner fa-spin"></i> UPATING');
         document.getElementById('update_btn').disabled=true;

   
      var dataString ='staff_id='+staff_id+'&fullname='+fullname+'&email='+email+'&mobile='+mobile+'&country_id='+country_id+'&address='+address+'&position_id='+position_id+'&role_id='+role_id+'&status_id='+status_id;
      $.ajax({
         type: "POST",
         url: update_staff_profile_api,
         dataType: 'json',
         data: dataString,
         cache: false,
         success: function(info){
            var result = info.result;
            var message1 = info.message1;
            var message2 = info.message2;
            if (result==true){
               $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
            }else{
               $('#updt_email').addClass('complain');
               $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
            }
            $('#update_btn').html(btn_text);
            document.getElementById('update_btn').disabled=false;
         }
      });
   }
}


}





function _reg_and_updt_mem(page,mem_id){
  if(page=='member_registration'){
         var fullname=$('#reg_fullname').val();
         var mobile=$('#reg_mobile').val();
         var country_id=$('#reg_country_id').val();
         var address=$('#reg_address').val();
         var position_id=$('#reg_position_id').val();
         var mem_type_id=$('#reg_mem_type_id').val();
         var status_id=$('#reg_status_id').val();

         $('#reg_fullname, #reg_mobile, #reg_address, #reg_position_id, #reg_mem_type_id, #reg_status_id').removeClass('complain');
      
         if(fullname==''){
            $('#reg_fullname').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>FULL NAME ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

         }else if(mobile==''){
            $('#reg_mobile').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PHONE NUMBER ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
         
         }else if(country_id==''){
            $('#reg_country_id').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>COUNTRY ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

         }else if(address==''){
            $('#reg_address').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ADDRESS ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

         }else if(position_id==''){
            $('#reg_position_id').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>POSITION ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

         }else if(mem_type_id==''){
            $('#reg_mem_type_id').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>MEMBERSHIP ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);

         }else if(status_id==''){
            $('#reg_status_id').addClass('complain');
            $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>STATUS ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
            
         }else{

            $('#reg_fullname,#reg_mobile,#reg_country_id, #reg_address, #reg_position_id, #reg_mem_type_id, #reg_status_id').removeClass('complain');

            var btn_text=$('#submit_btn').html();
            $('#submit_btn').html('<i class="fa fa-spinner fa-spin"></i> SUBMITTING');
            document.getElementById('submit_btn').disabled=true;

      
         var dataString ='mem_id='+mem_id+'&fullname='+fullname+'&mobile='+mobile+'&country_id='+country_id+'&address='+address+'&position_id='+position_id+'&mem_type_id='+mem_type_id+'&status_id='+status_id;
         $.ajax({
            type: "POST",
            url: member_reg_api,
            dataType: 'json',
            data: dataString,
            cache: false,
            success: function(info){
               var result = info.result;
               var message1 = info.message1;
               var message2 = info.message2;
               if (result==true){
               
                     $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
                     _alert_close();
                     _get_page('view_all_member','member');
                  
               }else{
                  $('#reg_mobile').addClass('complain');
                  $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
               }
               $('#submit_btn').html(btn_text);
               document.getElementById('submit_btn').disabled=false;
            }
         });
      }

   }else if(page='member_profile'){
      var fullname=$('#updt_fullname').val();
      var mobile=$('#updt_mobile').val();
      var address=$('#updt_address').val();
      var country_id=$('#updt_country_id').val();
      var position_id=$('#updt_position_id').val();
      var mem_type_id=$('#updt_mem_type_id').val();
      var status_id=$('#updt_status_id').val()
   
      $('#updt_fullname, #updt_mobile,#updt_country_id, #updt_address, #updt_position_id, #updt_mem_type_id,#updt_status_id').removeClass('complain');
    
      if(fullname==''){
         $('#updt_fullname').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>FULL NAME ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
   
      }else if (mobile==''){
         $('#updt_mobile').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>PHONE NUMBER ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
   
      }else if(address==''){
         $('#updt_address').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ADDRESS ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
     
      }else if(country_id==''){
         $('#updt_country_id').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>COUNTRY ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
   
      }else if(position_id==''){
         $('#updt_position_id').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>POSITION ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
   
      }else if(mem_type_id==''){
         $('#updt_mem_type_id').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ROLE ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
   
      }else if(status_id==''){
         $('#updt_status_id').addClass('complain');
         $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>ROLE ERROR!</h3> <p>Fill this field to continue.</p></div').fadeIn(500).delay(3000).fadeOut(100);
   
      }else{
   
         $('#updt_fullname, #updt_mobile, #updt_country_id, #updt_address, #updt_position_id, #mem_type_id, #updt_status_id').removeClass('complain');
   
         var btn_text=$('#update_btn').html();
         $('#update_btn').html('<i class="fa fa-spinner fa-spin"></i> UPATING');
         document.getElementById('update_btn').disabled=true;
   
     
      var dataString ='mem_id='+mem_id+'&fullname='+fullname+'&mobile='+mobile+'&address='+address+'&country_id='+country_id+'&position_id='+position_id+'&mem_type_id='+mem_type_id+'&status_id='+status_id;
      $.ajax({
         type: "POST",
         url: update_member_profile_api,
         dataType: 'json',
         data: dataString,
         cache: false,
         success: function(info){
            var result = info.result;
            var mobile = info.mobile;
            var message1 = info.message1;
            var message2 = info.message2;
            if (result==true){
               $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
            }else if(mobile==false){
               $('#updt_mobile').addClass('complain');
               $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
            }else{
               $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(3000).fadeOut(100);
            }
            $('#update_btn').html(btn_text);
            document.getElementById('update_btn').disabled=false;
         }
      });
   }
      
   }
}









function _get_fetch_all_payment(transaction_id,status_id,search_txt){  
   var dataString ='transaction_id='+transaction_id+'&status_id='+status_id+'&search_txt='+search_txt; 
      $.ajax({
         type: "POST",
         url: fetch_payment_detail_api,
         data: dataString,
         dataType: 'json',
         cache: false,
         success: function(info){
            var fetch= info.data;
            var result=info.result;
            var message=info.message;
            var no=0;
            var text='';
          
             text =  
                        '<tr class="tuple">'+
                           '<th>S/N</th>'+
                           '<th class="hidden">TRANSACTION ID</th>'+
                           '<th class="hidden">MEMBER NAME</th>'+
                           '<th >MOBILE NO</th>'+
                           '<th>PAYMENT PURPOSE</th>'+
                           '<th>AMOUNT</th>'+
                           '<th>STATUS</th>'+
                           '<th>PAYMENT DATE</th>'+
                           '<th>ACTION</th>'+
                       '</tr>';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                        

                if (result==true ){
                
                     for (var i = 0; i < fetch.length; i++) {
                        no++;
                        var transaction_id =fetch[i].transaction_id;
                        var fullname =fetch[i].fullname;
                        var mobile =fetch[i].mobile;
                        var payment_purpose_name =fetch[i].payment_purpose_name;
                        var amount_paid =fetch[i].amount_paid;
                        var status_name =fetch[i].status_name;
                        var date =fetch[i].date;
                    
                        text +=
                         '<tr>'+
                                 '<td>'+no+'</td>'+
                                 '<td class="hidden">'+transaction_id+'</td>'+
                                 '<td class="hidden">'+fullname+'</td>'+
                                 '<td>'+mobile+'</td>'+
                                 '<td>'+payment_purpose_name+'</td>'+
                                 '<td>'+numberwithcomma(amount_paid)+'</td>'+
                                 '<td class="'+status_name+'">'+status_name+'</td>'+
                                 '<td>'+date+'</td>'+
                                 '<td><button type="button" onclick="_get_form_page('+"'view_paymwent'"+','+"'"+transaction_id+"'"+')" title="VIEW VIEW PAYMENT" ><i class="fa fa-eye"></i> View Payment</button></td>'+           
                        '</tr>';
                        $('#fetch').html(text); 
                     }

               }else{
                  
                     text = 
                     '<div class="no-record-div pay-message">'+
                     '<span >'+message+'</span>'+
                     '</div>';
                     $('#fetch').html(text);
               }    
         }
      });    
}


function _get_payment_detail(id,status_id){
   var transaction_id=id;
      var dataString ='transaction_id='+transaction_id+'&status_id='+status_id;
      $.ajax({
      type: "POST",
      url: fetch_payment_detail_api,
      data: dataString,
      dataType: 'json',
      cache: false,
      success: function(info){
         var fetch= info.data;
         var transaction_id =fetch.transaction_id;
         var fullname =fetch.fullname;
         var mobile =fetch.mobile;
         var payment_purpose_name =fetch.payment_purpose_name;
         var amount_paid =fetch.amount_paid;
         var status_name =fetch.status_name;
         var date =fetch.date;
      
         $('#pay_id').val(transaction_id.toUpperCase());
         $('#pay_name').val(fullname.toUpperCase());
         $('#pay_mobile').val(mobile);
         $('#pay_purpose').val(payment_purpose_name.toUpperCase());
      
         $('#amount_paid').val(numberwithcomma(amount_paid));
         $('#pay_status').val(status_name);
         $('#pay_date').val(date);
    

      }
      });

}










 function _check_password2(){
   var password = $('#new_password').val();
   if (password==''){
    $('#pswd_info').hide();
    $('.pswd_info').fadeIn(500);
    document.getElementById('new_password').style.border='rgba(0, 0, 0, .1) 1px solid';
   }else{
    $('.pswd_info').hide();
      if(password.length>=8){
            if (password.match(/^(?=[^A-Z]*[A-Z])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d).{8,}$/)) {
            $('.pswd_info').hide();
            document.getElementById('new_password').style.border='rgba(0, 0, 0, .1) 1px solid';

           } else {
             $('.pswd_info').fadeIn(500);
           }
      }else{
         $('.pswd_info').fadeIn(500);  
         document.getElementById('new_password').style.border='#F00 1px solid';
      }
   }
 }






var _check_password3 = function() {
      if (document.getElementById('new_password').value == document.getElementById('comfirmed_password').value) {
      document.getElementById('new_password').style.border='rgba(0, 0, 0, .1) 1px solid';
      document.getElementById('comfirmed_password').style.border='rgba(0, 0, 0, .1) 1px solid';
      document.getElementById('message').style.display = 'none';
      _check_password2();
      } else {
         _check_password2();
      document.getElementById('new_password').style.border='#F00 1px solid';
      document.getElementById('comfirmed_password').style.border='#F00 1px solid';
      document.getElementById('message').style.display = 'block';
      document.getElementById('message').style.color = 'hsla(0, 100%, 40%, 0.678)';
      document.getElementById('message').style.fontSize = '12px';
      document.getElementById('message').innerHTML = 'password not match!';
      }
   }




function _update_password(staff_id) {
   var old_password=$('#old_password').val();
   var new_password=$('#new_password').val();
   var comfirmed_password=$('#comfirmed_password').val();
   $('#old_password, #new_password, #comfirmed_password').removeClass('complain');

   if(old_password==''){
   $('#old_password').addClass('complain');
   $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3> OLD PASSWORD ERROR </h3><p>Fill This Fields To Continue</p></div').fadeIn(500).delay(3000).fadeOut(100);

   } else if(new_password==''){
      $('#new_password').addClass('complain');
   $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3> NEW PASSWORD ERROR </h3><p>Fill This Fields To Continue</p></div').fadeIn(500).delay(3000).fadeOut(100);

   }else if(comfirmed_password==''){
      $('#comfirmed_password').addClass('complain');
   $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3> CONFIRM PASSWORD ERROR </h3><p>Fill This Fields To Continue</p></div').fadeIn(500).delay(3000).fadeOut(100);

   }else if(new_password !=comfirmed_password){
      $('#new_password, #comfirmed_password').addClass('complain');
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3> PASSWORD ERROR </h3><p>Check, Password Not Match</p></div').fadeIn(500).delay(3000).fadeOut(100);

   }else{

      var btn_text=$('#update_btn').html();
      $('#update_btn').html('<i class="fa fa-spinner fa-spin"></i> UPATING');
      document.getElementById('update_btn').disabled=true;

   var dataString ='staf_id='+staff_id+'&old_password='+old_password+'&new_password='+new_password;
   $.ajax({
   type: "POST",
   url: change_password_api,
   data: dataString,
   dataType: 'json',
   cache: false,
   success: function(data){
      var result= data.result;
      var message1= data.message1;
      var message2= data.message2;
      if (result==true){
         $('#success-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/success.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div>').fadeIn(500).delay(5000).fadeOut(100);
         _alert_close();
       $('#login_user_fullname').html('XXXXX');
       _get_form_page('access_key_validation_info');
      }else{
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>'+message1+'</h3> <p>'+message2+'</p></div').fadeIn(500).delay(3000).fadeOut(100);
      $('#old_password').addClass('complain');
      }
      $('#update_btn').html(btn_text);
      document.getElementById('update_btn').disabled=false;
   }
});
}
}






function _chart_for_trend1(){
		$.ajax({
		type: "POST",
      url: trendbarchart_api,
		cache: false,
		success: function(data){
   
         var day30 = data.day30;
         var today = data.today;
         var dataset = data.dataset;
         var totalamount = data.totalamount;
            $('#day30').html(day30);
            $('#today').html(today);
            $('#revenue').html(numberwithcomma(totalamount.toFixed(2)));
        
         _chart_for_trend2(dataset);
		}
		});
}


function   _chart_for_trend2(dataset){
	var action='trendbarchart';
	var dataString ='action='+ action+'&dataset='+ dataset;
		$.ajax({
		type: "POST",
      url: admin_local_url,
		data: dataString,
		cache: false,
		success: function(html){
			$('#chart-report-div').html(html); 
		}
		});
}
function select_search(){
		$('.srch-select').toggle('fast');
};

function srch_custom(text){
		$('#srch-text').html(text);
		$('.custom-srch-div').fadeIn(500);
};


function get_dashboard_report(id,view_report){
   $('#srch-text').html($('#'+id).html());
   $('.custom-srch-div').fadeOut(500);
   $('#chart-report-div').html('<div class="ajax-loader dashboard-ajax-loader"><img src="'+website_url+'/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');

      var dataString ='view_report='+ view_report;
      $.ajax({
      type: "POST",
      url: trendbarchart_api,
      data: dataString,
      cache: false,
      success: function(data){
         var day30 = data.day30;
         var today = data.today;
         var dataset = data.dataset;
         var totalamount = data.totalamount;

            $('#day30').html(day30);
            $('#today').html(today);
            $('#revenue').html(numberwithcomma(totalamount.toFixed(2)));
         _chart_for_trend2(dataset);
         }
   });
}
 





function _fetch_custom_dashboard_report(view_report){
   var datefrom=$('#datepicker-from').val();
   var dateto=$('#datepicker-to').val();
   if((datefrom=='')||(dateto=='')){
      $('#warning-div').html('<div class="alert-logo"><img src="'+website_url+'/all-images/images/warning.gif" alt="Warning" /></div><h3>DATE ERROR</h3> <p>Please select date to continue</p></div>').fadeIn(500).delay(3000).fadeOut(100);
   }else{

      $('#chart-report-div').html('<div class="ajax-loader dashboard-ajax-loader"><img src="'+website_url+'/all-images/images/ajax-loader.gif"/></div>').fadeOut('fast');
      var dataString ='view_report='+ view_report+'&datefrom='+datefrom+'&dateto='+dateto;
      $.ajax({
      type: "POST",
      url: trendbarchart_api,
      data: dataString,
      cache: false,
      success: function(data){
         var day30 = data.day30;
         var today = data.today;
         var dataset = data.dataset;
         var totalamount = data.totalamount;
    
            $('#day30').html(day30);
            $('#today').html(today);
            $('#revenue').html(numberwithcomma(totalamount.toFixed(2)));

         _chart_for_trend2(dataset);
        // $('#chart-report-div').html(html);
         }
   });
      }
};



