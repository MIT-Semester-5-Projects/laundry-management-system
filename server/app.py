from sanic import Sanic
from db_linux import db_config
import mariadb
from sanic_cors import CORS

# from sanic_ext import Extend
from .api import api

app = Sanic("LaundryManagementSystem")
app.blueprint(api)
CORS(app)


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
