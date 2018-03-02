/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import database.*;
import controlles.*;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Esraa
 */
public class LogIn extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");
         PrintWriter out = response.getWriter();

            String email = request.getParameter("email");
            String password = request.getParameter("Password");

            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet LogIn</title>");
            out.println("</head>");
            out.println("<body>");
            //out.println(request.getParameter("email"));
            out.println(email);
            out.println(password);
            out.println("</body>");
            out.println("</html>");

            // get user data from db
            User user=new User();
           UserTableOperations userTableOp=new UserTableOperations();
           user= userTableOp.loginHandler(email, password);
           
            //create session 
           if(user ==null){ 
                 response.sendRedirect("login.html"); 
                 // not a user 
           }
    
                   
           
           else{
           
           HttpSession session=request.getSession(true);
           session.setAttribute("email",email);
           session.setAttribute("password",password);
           session.setAttribute("name",user.getName());
           session.setAttribute("address",user.getAddress());
           session.setAttribute("birthDate",user.getDate());
           session.setAttribute("job",user.getJob());
           session.setAttribute("name",user.getName());
           session.setAttribute("cridet",user.getCridet());
           session.setAttribute("isAdmin",user.getAdmin());
           
              if(user.getAdmin()==1){
           
               response.sendRedirect("admin.html");
                } 
               else {
  
              response.sendRedirect("index.html");
           
           
               }
            
           
           }
           
           
        
        }
        
        

    }


