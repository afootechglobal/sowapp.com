<?php include 'config.php';?>

<?php
$action=$_POST['action'];

switch ($action){


	case 'get_page':
		$page=$_POST['page'];
		$mem_id=$_POST['mem_id'];
		$transaction_id=$_POST['transaction_id'];
		include 'page-content.php';
	break;

	case 'user_verification':
		$mem_id=$_POST['mem_id'];
		$page=$action;
		require_once('page-content.php');
	break;

	case 'user_proceed_to_payment':
		$mem_id=$_POST['mem_id'];
		$page=$action;
		require_once('page-content.php');
	break;

	case 'payment_successful':
		$transaction_id=$_POST['transaction_id'];
		$page=$action;
		require_once('page-content.php');
	break;


}
?>