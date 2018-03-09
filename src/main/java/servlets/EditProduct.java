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
        
        response.setContentType("text/html;charset=UTF-8");
        
        PrintWriter out = response.getWriter();
        String productid = (String)request.getParameter("productid");
        String productname = (String)request.getParameter("productname");
        String productdessctextArea = (String) request.getParameter("productdessctextArea");
        String productquan = request.getParameter("productquan");
        String productprice = request.getParameter("productprice");
        String productimage = request.getParameter("productimage");
        String productcategory = request.getParameter("productcategory");
        out.print(productid+",name: "+productname+",desc: "+productdessctextArea+",quan: "+productquan+",price: "+productprice+",image: "+productimage+",cat: "+productcategory);
        
        /*Products product = new Products();
        product.setId(Integer.parseInt(productid));
        product.setName(productname);
        product.setDescription(productdessctextArea);
        product.setQuantity(Integer.parseInt(productquan));
        product.setSalary(Integer.parseInt(productprice));
        product.setImage(productimage);
        if(productcategory.equalsIgnoreCase("Men"))
            product.setCategory(1);
        else if(productcategory.equalsIgnoreCase("Women"))
            product.setCategory(2);
        else if(productcategory.equalsIgnoreCase("Accessories"))
            product.setCategory(3);
        else 
            product.setCategory(0);
        
        ProductTableOperations pto = new ProductTableOperations();
        pto.updateProduct(product);*/
        out.print("success");
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
