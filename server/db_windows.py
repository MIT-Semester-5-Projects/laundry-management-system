import pymysql
import os
import dotenv

dotenv.load_dotenv()

DB_USER = os.environ.get("DB_USER")
DB_PASS = os.environ.get("DB_PASS")

db_config = {
    "host": "127.0.0.1",
    "port": 3354,
    "user": DB_USER,
    "password": DB_PASS,
    "database": "laundry_management",
}

conn = None #Initialize variable

try:
    conn = pymysql.connect(**db_config)
    print("Connection to the database established successfully!")

    cursor = conn.cursor()
    cursor.execute("SHOW TABLES;")
    for table in cursor:
        print(table)

except pymysql.MySQLError as e:
    print(f"Error connecting to MySQL: {e}")

finally:
    if conn:
        conn.close()

