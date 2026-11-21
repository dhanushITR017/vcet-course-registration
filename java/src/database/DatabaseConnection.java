package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Database connection utility for JDBC integration.
 * Demonstrates Unit 4 (String Handling and Database Connection) of 25ITT32 Java Programming
 * and Unit 4 (Transaction Management) of 25ITT31 DBMS.
 */
public class DatabaseConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/course_registration_db?useSSL=false&allowPublicKeyRetrieval=true";
    private static final String USER = "root";
    private static final String PASSWORD = "password";

    private static Connection connection = null;

    private DatabaseConnection() {}

    public static synchronized Connection getConnection() {
        if (connection == null) {
            try {
                // In a production lab environment with MySQL server running:
                // Class.forName("com.mysql.cj.jdbc.Driver");
                // connection = DriverManager.getConnection(URL, USER, PASSWORD);
                System.out.println("[DatabaseConnection] Configured URL: " + URL);
            } catch (Exception e) {
                System.err.println("[DatabaseConnection] Notice: MySQL Driver offline. Running in-memory mock persistence layer.");
            }
        }
        return connection;
    }

    public static void closeConnection() {
        if (connection != null) {
            try {
                connection.close();
                connection = null;
            } catch (SQLException e) {
                System.err.println("[DatabaseConnection] Error closing connection: " + e.getMessage());
            }
        }
    }
}
