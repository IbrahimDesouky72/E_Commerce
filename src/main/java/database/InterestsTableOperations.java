/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

/**
 *
 * @author M.Gebaly
 */
public class InterestsTableOperations {
    public boolean addInterests(int userId, int ProductId){
        boolean retValue = true;
        String query = "insert into " + DatabaseTables.IntersticesTable.tableName
                + " values( " + userId + "," + ProductId + ")";
        DatabaseHandler.getInstance().insert(query);
        return retValue;
    }
}
