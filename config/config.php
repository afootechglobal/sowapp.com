<?php
session_start();
session_regenerate_id(); 
error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_WARNING);
header("Access-Control-Allow-Origin: *");
$thename='SowApp'; 
$website_address =(isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

//// for local and IP connect ///
//$website_url="https://sowapp.fumlasproperties.com";
$website_url="http://localhost/sowapp.com";
//$website_url="http://192.168.43.204/sowapp.com";



//$website_url="https://www.sowapp.com";
////////////////////////////////////////////
?>


<?php
	///// to keep php variable and session
	$login_staff_id=$_SESSION['staff_id'];
	$access_key=$_SESSION['access_key'];
	$staff_id=$_SESSION['staff_id'];
	$role_id=$_SESSION['role_id'];
?>


<script>
	////// for javascript /////


//// For all API's /////////


	//// connect to local Website or local IP  ///
	//var website_url="http://sowapp.fumlasproperties.com";
	var website_url="http://localhost/sowapp.com";
	//var website_url="http://192.168.43.204/sowapp.com";


	//// connect to local api or IP ///
	//var api="http://sowapp.fumlasproperties.com/sowapp_api/";
	var api="http://localhost/sowapp_api/";
	//var api="http://192.168.43.204/sowapp_api"; 


	var index_local_url=website_url+"/config/code"	/// For index local_url ///


	///// START ADMIN API's LINK /////

	////// FOR LOGIN API //////

	var login_local_url=website_url+"/admin/config/code"/// For admin login local_url ///

	var admin_portal_url=website_url+"/admin/a" /// admin portal url /////

	var admin_local_url=website_url+"/admin/a/config/code" /// admin local url  /////



	/////////////////////////////////////////////////////////////////////////
		
	var staff_reset_password_api=api+"?action=reset_password_api"; //// reset password api

	var staff_resend_otp_api=api+"?action=resend_otp_api"; //// reset otp api

	var staff_confirm_otp_api=api+"?action=confirm_otp_api"; //// confirm otp api


	var url_login_api=api+"?action=login_api"; ////  login api
   
	var fetch_staff_api=api+"?action=fetch_staff_api&access_key=<?php echo $access_key?>&role=<?php echo $role_id?>"; //// fetch staff api
	
	var fetch_postion_api=api+"?action=postion_api&access_key=<?php echo $access_key?>"; //// fetch position api

	var fetch_role_api=api+"?action=role_api&access_key=<?php echo $access_key?>"; //// fetch role api
	    
	var fetch_status_api=api+"?action=status_api&access_key=<?php echo $access_key?>"; //// fetch status api


	var staff_reg_api=api+"?action=add_or_update_staff_api&access_key=<?php echo $access_key?>"; //// staff registration api
	
	var update_staff_profile_api=api+"?action=add_or_update_staff_api&access_key=<?php echo $access_key?>"; //// update staff profile api

	var fetch_member_api=api+"?action=fetch_membership_api&access_key=<?php echo $access_key?>"; //// fetch staff api
	
	var fetch_membership_type_api=api+"?action=membership_type_api&access_key=<?php echo $access_key?>"; //// fetch staff api
	
	var fetch_staff_registered_by=api+"?action=staff_registered_by_api&access_key=<?php echo $access_key?>"; //// fetch staff api
	
	var update_member_profile_api=api+"?action=add_or_update_membership_api&access_key=<?php echo $access_key?>"; // update member api
	
	var member_reg_api=api+"?action=add_or_update_membership_api&access_key=<?php echo $access_key?>"; //// register member api
	
	var count_api=api+"?action=count_api&access_key=<?php echo $access_key?>"; //// count number api
	
	var verify_mobile_api=api+"?action=verify_mobile_api"; //// verify mobile number api

	var membership_type_name_api=api+"?action=membership_type_name_api"; //// get membership type name api
	
	var position_name_api=api+"?action=position_name_api"; //// get membership type name api
	
	var fetch_country_api=api+"?action=country_api&access_key=<?php echo $access_key?>"; //// get country api

	var fetch_payment_purpose_api=api+"?action=payment_purpose_api"; //// get payment purpose api


	var fetch_currency_api=api+"?action=currency_api"; //// get currency api
	
	var membership_payment_api=api+"?action=membership_payment_api"; //// get payment purpose api
	
	var fetch_payment_detail_api=api+"?action=payment_record_api&access_key=<?php echo $access_key?>"; //// get some member info
	
	var change_password_api=api+"?action=change_password_api&access_key=<?php echo $access_key?>"; //// get total amount info
	
	
	var trendbarchart_api=api+"?action=trendbarchart_api&access_key=<?php echo $access_key?>"; //// get total amount info
	
	
	var payment_success_api=api+"?action=payment_success_api"; //// get payment success appi 
	
	var payment_history_api=api+"?action=payment_history_api"; //// get payment success appi 
	
	var cancel_payment_api=api+"?action=cancel_payment_api"; //// get cancel payment appi 

	var payment_details_api=api+"?action=payment_details_api"; //// get payment details appi 
	
	var time_period_payment_api=api+"?action=time_period_payment_api"; //// get time period payment search appi 
	
	var unlink_passport_api =api+"?action=unlink_passport_api"; /// to upload passport
	
	var upload_passport_api =api+"?action=upload_passport_api"; /// to upload passport
	

	///// END ADMIN API's LINK /////






















	//// End API's //////////////
</script>



<?php

?>









<script>
    
</script>