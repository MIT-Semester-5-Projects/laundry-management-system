from .api import api
from db_linux import db_config
from sanic import Sanic
from sanic_cors import CORS
import dotenv
import mariadb
import os

dotenv.load_dotenv()


app = Sanic("LaundryManagementSystem")
app.blueprint(api)
CORS(app)

app.config.SECRET = os.environ.get("JWT_SECRET")

conn = None


@app.before_server_start
async def load_db(app):
    try:
        conn = mariadb.connect(**db_config)
        app.ctx.connection = conn
        print("Connection to the database established successfully!")
        app.ctx.cursor = conn.cursor()
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB: {e}")


@app.after_server_stop
async def close_db(app):
    if conn:
        app.ctx.cursor = None
        conn.close()


# app.config.CORS_ORIGINS = "http://192.168.1.4:8081"
# Extend(app)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3504)
