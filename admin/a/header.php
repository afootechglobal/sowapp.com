            
<header>
    <div class="header-div" > 
        <div class="header-div-in" >
            <div class="logo-div">
                <img src="all-images/images/logo.png" alt="logo image">
            </div>

            <div class="nav-bar" >
                <ul data-aos="fade-right" data-aos-duration="1000">
                  <li  class="active-li" id="dashboard" onClick="_get_page('dashboard', 'dashboard');" ><span><i class="bi-speedometer2"></i>Dashboard</span></li>        
                  <li id="admin" onclick="_get_page('view_all_staff','admin');"  title="Administrators"><span><i class="bi-people-fill"></i>Administrators</span></li>        
                    <li id="profile" onclick="_get_page_with_id('staff_login_profile','profile','<?php echo $staff_id?>','','','<?php echo $status_id?>')" title="My Profile"><i class="bi-person-circle"></i> My Profile</li>    
                </ul> 
                <form method="post" action="config/code" name="logoutform">
                 <input type="hidden" name="action" value="logout"/> 
                <button class="logout-btn"  title="Log Out">Log-Out</button>
                </form>
                <div class="profile-div">
                    <div class="header_pix" id="header_pix">
                         <img src="all-images/images/friends.png" title="My Profile" alt="Profile image" id="passport-two"/>
                    </div>
                </div>
            </div>
        </div>     
    </div>   
</header>