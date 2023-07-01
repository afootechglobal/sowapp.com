<?php include '../config/config.php';?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http: //www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php include 'links.php'?>
<title><?php echo $thename?>  | Administrative Login</title>
<meta name="keywords" content="Admin - <?php echo $thename?>" />
<meta name="description" content="Administrative Login <?php echo $thename?>"/>
</head>
<body>

<?php include 'alert.php'?>



    <div class="body-div">
        <div class="left-div">
            <div class="top-div">
                <div class="form-div">
                    <div class="header-div">
                    <a href="<?php echo $website_url?>/admin"><div class="logo-div"><img src="all-images/images/logo.png" alt="Logo"></div></a>
                        <div class="contact-div"><i class="bi-refresh"></i></div>
                        <div class="contact-div"><i class="bi-phone"></i></div>
                        <div class="contact-div"><i class="bi-whatsapp"></i></div>
                    </div>

                    <div  id="more-info">
                    <?php $page='login';?>
                        <?php include 'config/page-content.php';?>
                       
                    </div>
                </div>
            </div>

            <div class="footer-div">
                <div class="div-in">Developed By: <a href="#" title="AfooTECH Global" target="_blank"><u><strong>AfooTECH Global</strong></u></a></div>
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
    <script>
        superplaceholder({el: email,
            sentences: ['Enter Your Email Address', 'e.g afootechglobal@gmail.com','e.g seunemmanuel107@gmail.com', 'info@sowapp.com'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>

<script>
        superplaceholder({el: reset_pass_email,
            sentences: ['Enter Your Email Address', 'e.g afootechglobal@gmail.com','e.g seunemmanuel107@gmail.com', 'info@sowapp.com'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
<?php include 'bottom-scripts.php'?>
</body>
</html>


