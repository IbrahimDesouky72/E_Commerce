/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import controlles.Products;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author M.Gebaly
 */
public class ProductTableOperations {
    
    public boolean addProduct(Products product) {
        boolean retValue = true;

        String insertQuery = "insert into "
                + DatabaseTables.ProductsTable.tableName
                + " (" + DatabaseTables.ProductsTable.nameColumn + " , "
                + DatabaseTables.ProductsTable.descriptionColumn + " , "
                + DatabaseTables.ProductsTable.quantitiyColumn + " , "
                + DatabaseTables.ProductsTable.imageColumn + " , "
                + DatabaseTables.ProductsTable.salaryColumn + " , "
                + DatabaseTables.ProductsTable.categoryColumn + " )"
                + " values ( '" + product.getName() + "' , "
                + "'" + product.getDescription() + "' ,"
                + product.getQuantity() + " ,"
                + "'" + product.getImage() + "' ,"
                + product.getSalary() + " ,"
                + product.getCategory() + " )";

        DatabaseHandler.getInstance().insert(insertQuery);

        return retValue;
    }
    
    public ArrayList<Products> getAllProducts() {
        ArrayList<Products> products = new ArrayList<Products>();
        String query = "select * "
                + " from " + DatabaseTables.ProductsTable.tableName;

        ResultSet resultSet = DatabaseHandler.getInstance().select(query);
        try {
            while (resultSet.next()) {
                Products product = new Products();
                product.setId(resultSet.getInt(1));
                product.setName(resultSet.getString(2));
                product.setDescription(resultSet.getString(3));
                product.setQuantity(resultSet.getInt(4));
                product.setImage(resultSet.getString(5));
                product.setSalary(resultSet.getInt(6));
                product.setCategory(resultSet.getInt(7));
                products.add(product);
            }
            resultSet.close();
        } catch (SQLException ex) {
            Logger.getLogger(UserTableOperations.class.getName()).log(Level.SEVERE, null, ex);
        }
        return products;
    }
}
