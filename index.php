<?php include 'config/config.php';?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http: //www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php include 'links.php'?>
<title><?php echo $thename?> | Membership Portal</title>
<meta name="keywords" content="<?php echo $thename?>, Church Tithe payment, Church offering"/>
<meta name="description" content="<?php echo $thename?> is made to ease the payement of Church Tithe and offering"/>

<meta property="og:title" content="<?php echo $thename?> | Membership Portal"/>
<meta property="og:image" content="<?php echo $website_url?>/all-images/plugin-pix/sowapp.jpg"/>
<meta property="og:description" content="<?php echo $thename?> is made to ease the payement of Church Tithe and offering"/>

<meta name="twitter:title" content="<?php echo $thename?> | Membership Portal"/> 
<meta name="twitter:card" content="<?php echo $thename?>"/> 
<meta name="twitter:image"  content="<?php echo $website_url?>/all-images/plugin-pix/sowapp.jpg"/> 
<meta name="twitter:description" content="<?php echo $thename?> is made to ease the payement of Church Tithe and offering"/>
</head>
<script src="https://js.paystack.co/v1/inline.js"></script>
<body>

    <?php include 'alert.php'?>


    <div class="body-div">

   
        <div class="left-div">
            <div class="top-div">
                <div class="form-div">
                    <div class="header-div">
                       <a href="<?php echo $website_url?>"> <div class="logo-div"><img src="all-images/images/logo.png" alt="Logo"></div></a>
                        <div class="contact-div"><i class="bi-refresh"></i></div>
                        <div class="contact-div"><i class="bi-phone"></i></div>
                        <div class="contact-div"><i class="bi-whatsapp"></i></div>
                    </div>
           
                    <div class="fill-form-div animated fadeInLeft" id="login_div">
                        <?php $page='phone_number_verification';?>
                        <?php include 'config/page-content.php';?>
                    </div>
                </div>
            </div>

            <div class="footer-div">
                <div class="div-in">Developed By: <a href="https://www.afootechglobal.com" title="AfooTECH Global" target="_blank"><u><strong>AfooTECH Global</strong></u></a></div>
            </div>
        </div>




        <div class="right-div">
            <div class="cover-div animated zoomIn">
                <div class="div-in">
                    <div class="logo-div"><img src="all-images/images/icon.png" alt="Logo"></div>
                    <P>THE REDEEMED CHRISTIAN CHURCH OF GOD</P>
                </div>
            </div>
        </div>
    </div>

<?php include 'bottom-scripts.php'?>
</body>
</html>


