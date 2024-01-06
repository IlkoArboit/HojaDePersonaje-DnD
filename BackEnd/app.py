from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import mysql.connector

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@127.0.2.1:3306/dnd5e'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configuración específica de MySQL para mejorar compatibilidad con el modo estricto de MySQL.
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
    'pool_size': 10,
    'pool_recycle': 3600,
    'pool_pre_ping': True,
    'pool_use_lifo': True,
}

db = SQLAlchemy(app)

if __name__ == '__main__':
    app.run(debug=True)
