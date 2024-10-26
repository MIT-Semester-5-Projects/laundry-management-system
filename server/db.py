import mariadb
import mysql
import os
import dotenv


dotenv.load_dotenv()

DB_USER = os.environ.get("DB_USER")
DB_PASS = os.environ.get("DB_PASS")
# Database connection parameters
db_config = {
    "host": "127.0.0.1",
    "port": 3353,
    "user": DB_USER,
    "password": DB_PASS,
    "database": "laundry_management",
}

try:
    # Establish connection
    if os.name == "posix":
        conn = mariadb.connect(**db_config)
        print("Connection to the database established successfully!")
    else:
        conn = mysql.connector.connect(**db_config)
        print("Connection to the database established successfully!")


    # Example operation
    cursor = conn.cursor()
    cursor.execute("SHOW TABLES;")
    for table in cursor:
        print(table)

except mariadb.Error as e:
    print(f"Error connecting to MariaDB: {e}")

finally:
    # Close the connection
    if conn:
        conn.close()
