
<?php if($page=='phone_number_verification'){?>
        <div class="church-div">WELCOME TO RCCG BREAKTHROUGH PARISH, OKE OLA, ODE REMO, OGUN STATE.<br/> <span>FUNDING APP</span></div>
        <div class="notification-div">Please Enter your <span>Phone Number</span> to confirm your membership.</div>
        <div class="title-div">PHONE NUMBER:<span>*</span> </div>
        <input type="tel" id="verify_mobile" onkeypress="isNumner_Check()" class="text-field" placeholder="PHONE NUMBER" />
        <div id="verify_mobile_info" style="float:right;font-size:12px;display:none;color:#f00"><span>Phone number not accepted!</span></div>
        <button class="btn full-btn" id="verify_mobile_btn" title="VERIFY" onclick="_verify_mobile()">VERIFY <i class="bi-check"></i></button>
        <!-- <button class="btn" id="verify_mobile_btn" title="VERIFY" onclick="_get_page('payment_successful')">VERIFY <i class="bi-check"></i></button> -->

      
 <?php }?>


<?php if($page=='user_verification'){?>

        <div class="notification-div"><span>Welcome!, <span id="username" style="font-size:15px"><i class="fa fa-spinner fa-spin"></i></span></span><br/> Kindly confirm other details to continue</div>
        <div class="title-div">FULLNAME:<span>*</span></div>
        <input type="text" id="verify_fullname" class="text-field" placeholder="FULL NAME" require="" readonly="" />

        <div class="title-div">PHONE NUMBER:<span>*</span></div>
        <input type="tel" id="verify_mobile" class="text-field" placeholder="PHONE NUMBER"  require="" readonly=""/>

        <div class="title-div">ADDRESS:<span>*</span></div>
        <input type="text" id="verify_address" class="text-field" placeholder="HOME ADDRESS"  require="" readonly=""/>

        <div class="title-div">MEMBERSHIP TYPE:<span>*</span></div>
        <input type="text" id="verify_mem_type" class="text-field" placeholder="MEMBERSHIP TYPE"  require="" readonly=""/>

        <div class="title-div">POSITION IN CHURCH:<span>*</span></div>
        <input type="text" id="verify_position" class="text-field" placeholder="POSITION IN CHURCH"  require="" readonly=""/>

        <div class="notification-div"><input type="checkbox" id="check_info"/> All these infomations are correct.</div>
        <button class="btn back-btn" title="RE-LOAD"  onClick="window.location.reload();"><i class="bi-arrow-clockwise"></i></button>
        <button class="btn proceed-btn" title="PROCEED" id="proceed_btn" onclick="_proceed_verification();">PROCEED <i class="bi-arrow-right"></i></button>

<?php }?>


<?php if($page=='user_proceed_to_payment'){?>
    <div class="notification-div"><span>Hi, <span id="welcome_username" style="font-size:15px"><i class="fa fa-spinner fa-spin"></i></span> </span><br/> Kindly confirm other details below and make payment</div>
    <div class="notification-div">
        FULLNAME: <span id="payment_username" style="font-size:15px"><i class="fa fa-spinner fa-spin"></i></span><br>
        PHONE NUMBER: <span id="payment_usermobile" style="font-size:15px"><i class="fa fa-spinner fa-spin"></i></span>
    </div>
    <div class="title-div">PAYMENT PURPOSE:<span>*</span></div>
    <select id="payment_purpose" class="text-field select_field" title="SELECT PAYMENT PURPOSE" >
        
    </select>

    <div class="title-div">SELECT CURRENCY:<span>*</span></div>
    <select id="currency" class="text-field select_field" title="SELECT CURRENCY" require="" readonly="">
       
    </select>

    <div class="title-div">AMOUNT:<span>*</span> <div id="amount_info" style="float:right;font-size:12px;display:none;color:#f00"><span>Amount not accepted!</span></div></div>
    <input type="tel" id="amount" onkeypress="isNumner_Check()" maxlength="9" class="text-field " placeholder="ENTER AMOUNT"/>
<div class="" id="amount_text" style="display:none;color:#666"><span>Amount must be between ₦1.00 and ₦5,000,000.00 </span></div>
    
<button class="btn back-btn" title="RE-LOAD"  onClick="window.location.reload();"><i class="bi-arrow-clockwise"></i></button>
<button class="btn proceed-btn" id="submit_btn" title="MAKE PAYMENT" onclick="_make_payment('<?php echo $mem_id?>')"> MAKE PAYMENT <i class="bi-credit-card-2-front"></i></button>


    <?php }?>

<?php if($page=='payment_successful'){?>
    <div class="reg-successful-div animated bounceInDown">
            <div class="gif">
                <img src="<?php echo $website_url?>/all-images/images/successful.gif" alt="successful gif">
            </div>
            <h3 >PAYMENT SUCCESSFUL </h3>
            <button onClick="window.location.reload();" type="button">OKAY, THANKS</button> <br>
            <div class="receipt-div" onclick="_get_page('view_payment_details','<?php echo $transaction_id?>')"> View Receipt <i class="bi-upload"></i> </div>
            <!-- <div class="receipt-div" onclick="_get_payment_details()"> View Receipt <i class="bi-upload"></i> </div> -->
        </div>
   
    <?php }?>



    <?php if($page=='view_payment_details'){?>
        <div class="view-reciept animated fadeIn">
        <div class="title-div">
            <span><i class="bi-credit-card"></i> PAYMENT DETAILS</span>
        </div>
        <div class="close-div" onClick="_alert_close();">X</div>
            <div class="inner-div">    
                <div class="div-in">
                    <div class="in">
                        <div class="header-div">
                            <div class="logo-div"><img src="all-images/images/logo.png" alt="Logo"></div>
                            <div class="text">Transaction Receipt</div>
                        </div><br clear="all"/>
                          
                 <div class="header-bottom-div">
                            <h3>₦<span id="sender_amount_paid">0.00</span></h3>
                            <h4 id="sender_status_name"></h4>
                            <span id="sender_date"></span>
                        </div>

                        <div class="record-div">
                            <div class="text-div">
                                <div class="text">Recipient Name:</div>
                                <div class="text right"><span class="name" id="recipient_name"></span></div>
                            </div>

                            <div class="text-div">
                                <div class="text">Sender Details:</div>
                                <div class="text right"><span class="name" id="sender_fullname"></span> <br> <span id="sender_mobile"></span></div>
                            </div>

                            <div class="text-div">
                                    <span>Transaction Details:</span><br><br>
                                <div class="text">Transaction Type:</div>
                                <div class="text right" id="debit_card"> Debit Card</div>

                                <div class="text ">Transaction ID:</div>
                                <div class="text right" id="sender_transaction_id"></div> <br clear="all"/>
                            </div>
                        
                            <div class="contact-div">
                            <span  class="name">For more info:</span> <br>
                            <div class="info">
                                    <i class="bi-map"></i>  <span id="recipient_address"></span><br>
                                    <i class="bi-phone"></i>  <span id="recipient_mobile"></span><br>
                                    <i class="bi-envelope"></i>  <span id="recipient_email"></span>
                            </div>
                            </div>


                            </div>
                       
                            
                        </div>
                    </div>
                </div>
        <br clear="all">
    </div>
   
    <?php }?>


