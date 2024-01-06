from flask import jsonify, request
from app import app, db
from app.models import Weapons

@app.route('/armas', methods=['GET'])
def obtener_armas():
    armas = Weapons.query.all()
    armas_json = [{'id': arma.Weapon_Id, 'nombre': arma.Name} for arma in armas]
    return jsonify({'armas': armas_json})

# Ruta para agregar armas
@app.route('/armas', methods=['POST'])
def agregar_armas():
    data = request.get_json()

    for weapon_data in data['weapons']:
        
        nueva_arma = Weapons(
            Name=weapon_data['name'],
            Type=weapon_data['type'],
            Cost=weapon_data['cost'],
            DmgDice=str(weapon_data['damage']['dice']),
            DmgType=weapon_data['damage']['dmgType'],
            Weight=weapon_data['weight'],
            Range=weapon_data['range'],
            Description=weapon_data['description']
        )
        db.session.add(nueva_arma)

    db.session.commit()

    return jsonify({'mensaje': 'Armas agregadas correctamente'}), 201
