<?php include 'session_validation.php';?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http: //www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php include 'links.php'?>
<title><?php echo $thename?>  | Administrative Portal</title>
<meta name="keywords" content="Admin - <?php echo $thename?>" />
<meta name="description" content="Administrative Portal <?php echo $thename?>"/>
</head>
<body>
    
    <div class="body-div">
        <!-- <div class="overlay-div"></div> -->
        <?php include 'alert.php';?>
        <?php include 'header.php';?>
        <?php include 'side-bar.php';?>
           
        <div class="right-page-div">               
        <?php $callclass->_admin_title_info();?>
            <div  id="content">
          
                <?php 
                
                $page='dashboard';
                include 'content/page-content.php';
                ?>
             </div> 
        </div> 
    </div>
    <script>_get_staff_login('<?php echo $login_staff_id ?> ')</script>
          <?php include 'bottom-scripts.php';?>
</body>
</html>


