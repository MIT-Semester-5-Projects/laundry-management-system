import mariadb
import os
import dotenv

dotenv.load_dotenv()

DB_USER = os.environ.get("DB_USER")
DB_PASS = os.environ.get("DB_PASS")

db_config = {
    "host": "127.0.0.1",
    "port": 3353,  # For Linux
    "user": DB_USER,
    "password": DB_PASS,
    "database": "laundry_management",
}
