/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import controlles.User;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author M.Gebaly
 */
public class UserTableOperations {

    public boolean signUpHandler(User user) {
        boolean retValue = true;
        String query = "select * from "
                + DatabaseTables.UserTable.tableName
                + " where " + DatabaseTables.UserTable.emailColumn + " = '" + user.getEmail() + "'";

        try {
            if (DatabaseHandler.getInstance().select(query).next()) {
                retValue = false;
            } else {
                String insertQuery = "insert into "
                        + DatabaseTables.UserTable.tableName
                        + " (" + DatabaseTables.UserTable.nameColumn + " , "
                        + DatabaseTables.UserTable.birthdateColumn + " , "
                        + DatabaseTables.UserTable.emailColumn + " , "
                        + DatabaseTables.UserTable.passwordColumn + " , "
                        + DatabaseTables.UserTable.jobColumn + " , "
                        + DatabaseTables.UserTable.crediteColumn + " , "
                        + DatabaseTables.UserTable.addressColumn + " , "
                        + DatabaseTables.UserTable.adminColumn + " )"
                        + " values ( '" + user.getName() + "' , "
                        + "TO_DATE('" + user.getDate() + "', 'dd/mm/yyyy'),"
                        + "'" + user.getEmail() + "' ,"
                        + "'" + user.getPassword() + "' ,"
                        + "'" + user.getJob() + "' ,"
                        + user.getCridet() + " , "
                        + "'" + user.getAddress() + "' , "
                        + user.getAdmin() + ")";

                DatabaseHandler.getInstance().insert(insertQuery);
            }
        } catch (SQLException ex) {
            Logger.getLogger(UserTableOperations.class.getName()).log(Level.SEVERE, null, ex);
        }
        return retValue;
    }

    public User loginHandler(String email, String password) {
        User user = null;
        String query = "select * from "
                + DatabaseTables.UserTable.tableName + " where lower("
                + DatabaseTables.UserTable.emailColumn + ") = lower('" + email
                + "') and lower(" + DatabaseTables.UserTable.passwordColumn + ") = lower('" + password + "')";
        boolean unique = false;
        ResultSet resultSet = DatabaseHandler.getInstance().select(query);
        try {
            while (resultSet.next()) {
                if (resultSet.getString(DatabaseTables.UserTable.emailColumn).equalsIgnoreCase(email)) {
                    unique = true;
                    break;
                }
            }
            if (unique) {
                user = new User();
                user.setId(resultSet.getInt(DatabaseTables.UserTable.idColumn));
                user.setName(resultSet.getString(DatabaseTables.UserTable.nameColumn));
                user.setDate(resultSet.getString(DatabaseTables.UserTable.birthdateColumn));
                user.setEmail(resultSet.getString(DatabaseTables.UserTable.emailColumn));
                user.setPassword(resultSet.getString(DatabaseTables.UserTable.passwordColumn));
                user.setJob(resultSet.getString(DatabaseTables.UserTable.jobColumn));
                user.setCridet(resultSet.getInt(DatabaseTables.UserTable.crediteColumn));
                user.setAddress(resultSet.getString(DatabaseTables.UserTable.addressColumn));
                user.setAdmin(resultSet.getInt(DatabaseTables.UserTable.adminColumn));
            }
            resultSet.close();
        } catch (SQLException ex) {
            Logger.getLogger(UserTableOperations.class.getName()).log(Level.SEVERE, null, ex);
        }
        return user;
    }
}
