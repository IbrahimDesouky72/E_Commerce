/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import com.google.gson.Gson;
import controlles.Products;
import database.ProductTableOperations;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author toshiba
 */
public class EditProduct extends HttpServlet {

    
   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        HttpSession httpSession = request.getSession();
        Products product = (Products) httpSession.getAttribute("product");
        
        ProductTableOperations pto = new ProductTableOperations();
        pto.updateProduct(product);
        out.print("success");
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
