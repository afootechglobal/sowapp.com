<?php require_once '../../config/config.php';?>

<?php if(empty($login_staff_id)){
    session_destroy();
    ?>
<script>
window.parent(location="../../admin/");
</script>
<?php } ?>

<?php
class allClass{
	function _admin_title_info(){?>
<div class="profile-div"  data-aos="fade-down" data-aos-duration="1200">
    <div class="staff-profile">
        <div class="img-div">
            <div class="mini_pix" id="mini_pix">
                 <img src="all-images/images/friends.png" alt="Profile image" id="passport-three"/>
            </div>
        </div>

        <div class="text-div">
            <span id="page-title"><i class="bi-speedometer2"></i> Dashboard</span>
            <h3 id="login_user_fullname">XXXXXX</h3>
              <p>Last Login Date: <span id="login_user_login_time"></span></p>
        </div> 
    </div>     
</div> 

<div class="profile-div right-profile-div" data-aos="fade-down" data-aos-duration="1200">
    <div class="div-in">
        <span>Current Time</span>
        <h3 id="digitalclock"></h3>
        <span> 
            <?php $date = date("l, dS F, Y");
            echo $date 
            ?> 
        </span>
    </div>    
</div> 
<?php }


}//end of class
$callclass=new allClass();
?>