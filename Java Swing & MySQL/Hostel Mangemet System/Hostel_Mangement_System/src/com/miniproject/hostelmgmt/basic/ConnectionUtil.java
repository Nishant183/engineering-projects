/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miniproject.hostelmgmt.basic;

import java.sql.*;
import javax.swing.*;

public class ConnectionUtil {
Connection conn = null;
public static Connection connectdb()
{
try
{
Class.forName("com.mysql.jdbc.Driver");
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/login","root","root");
System.out.println("Connection Successfully Created");
return conn;
}
catch(Exception e)
{
JOptionPane.showMessageDialog(null, e);
return null;
}
}
}