<?php include '../../../config/config.php';?>



<?php
$action=$_POST['action'];

switch ($action){

	case 'logout':
		session_destroy();
        ?>
      <script>
            window.parent(location="../../../admin/");
      </script>
      <?php
  break; 

	case 'get_page':
		$page=$_POST['page'];
		require_once('../content/page-content.php');
	break;

	case 'get_form_page':
		$page=$_POST['page'];
		$id=$_POST['id'];
		require_once('../content/page-content.php');
	break;

	case 'fetch_details':
		$page=$_POST['page'];
		$staff_id=$_POST['staff_id'];
		$mem_id=$_POST['mem_id'];
		require_once('../content/page-content.php');
	break;


	case 'view_search_staff':
		$status_id=$_POST['status_id'];
		$search_txt=$_POST['search_txt'];
		$view_search='view_search_staff';
		require_once '../content/sub-code.php';
	break;


	 case 'view_search_member':
		$search_txt=$_POST['search_txt'];
		$status_id=$_POST['status_id'];
		$view_search='view_search_member';
		require_once '../content/sub-code.php';
	break;	




	case 'view_search_payment':
		$status_id=$_POST['status_id'];
		$search_txt=$_POST['search_txt'];
		$view_search='view_search_payment';
		require_once '../content/sub-code.php';
	break;



	case 'trendbarchart':
			$dataset=$_POST['dataset'];
			$trend='trendbarchart';
			require_once('../content/sub-code.php');
	break;


	case 'unlink_passport':
		$db_passport=$_POST['db_passport'];

		if($db_passport=='friends.png'){
			/// do nothing
		}else{
		 unlink("../../../uploaded_files/staff_pix/".$db_passport);
		}
		
	break;

	case 'upload_pix_file':
		$passport=$_POST['passport'];
		move_uploaded_file($_FILES["passport"]["tmp_name"], "../../../uploaded_files/staff_pix/".$passport);
	break;



}
?>