<%-- 
    Document   : newjsp
    Created on : Feb 28, 2018, 8:27:30 PM
    Author     : Esraa
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page session="false" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <title>Colo Shop</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Colo Shop Template">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="styles/bootstrap4/bootstrap.min.css">
<link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="plugins/OwlCarousel2-2.2.1/owl.carousel.css">
<link rel="stylesheet" type="text/css" href="plugins/OwlCarousel2-2.2.1/owl.theme.default.css">
<link rel="stylesheet" type="text/css" href="plugins/OwlCarousel2-2.2.1/animate.css">
<link rel="stylesheet" type="text/css" href="styles/main_styles.css">
<link rel="stylesheet" type="text/css" href="styles/responsive.css">
    </head>
    <body>
       
        
  <header class="header trans_300">

    <!-- Top Navigation -->

    <div class="top_nav">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="top_nav_left">free shipping on all u.s orders over $50</div>
          </div>
          <div class="col-md-6 text-right">
            <div class="top_nav_right">
              <ul class="top_nav_menu">

                <!--  My Account -->

              
                <li class="account">
                  <a href="#">
                    My Account
                    <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="account_selection">
                    <li><a href="login.html"><i class="fa fa-sign-out" aria-hidden="true"></i>Log out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->

    <div class="main_nav_container">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-right">
            <div class="logo_container">
              <a href=".html">colo<span>shop</span></a>
            </div>
            <nav class="navbar">
            
              <ul class="navbar_user">
                <li><a href="index.html"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                <li class="checkout">
                  <a href="#">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span id="checkout_items" class="checkout_items">2</span>
                  </a>
                </li>
              </ul>
              <div class="hamburger_container">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

  </header>
  <br>
  <br>
<div class="container">
  <h1>Edit Profile</h1>
    <hr>
      <!-- edit form column -->
      <div class="col-md-9 personal-info">
        <div   style="background-color:white;" >
          
          <a href="profile2.html"><i class="fa fa-edit"></i><strong>Edit</strong></a>
           
        </div>
        <h3>Personal info</h3>
        
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">Name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=${session.fname}>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="${session.email}">
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Job:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="${session.job}">
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Address:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="${sessionScope.address}">
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">BirthDate</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="janeuser">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Username:</label>
            <div class="col-md-8">
              <input class="form-control" type="text" value="janeuser">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Old Password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">New Password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
              <input type="button" class="btn btn-default" style="background-color: #fe4c50; color:white; " value="Save Changes">
              <span></span>
              <input type="reset" class="btn btn-default" style="background-color: #fe4c50; color:white;" value="Cancel">
            </div>
          </div>
        </form>
            
            ${sessionScope.fname};
      </div>
</div>
<hr>
    </body>
</html>
