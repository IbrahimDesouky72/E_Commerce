/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import controlles.Products;

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
}
