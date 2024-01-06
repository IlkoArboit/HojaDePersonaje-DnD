from app import db

class Weapons(db.Model):
    Weapon_Id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100))
    Type = db.Column(db.String(100))
    Cost = db.Column(db.String(100))
    Damage_Dice_Min = db.Column(db.Integer)  # Asumiendo que quieres almacenar el valor mínimo del dado
    Damage_Dice_Max = db.Column(db.Integer)  # Asumiendo que quieres almacenar el valor máximo del dado
    Damage_Type = db.Column(db.String(100))
    Weight = db.Column(db.Float)  # Ajustado a Float para permitir decimales
    Property_Name = db.Column(db.String(100))
    Property_Description = db.Column(db.Text)  # Ajustado a Text para permitir descripciones más largas
    Range = db.Column(db.String(100))
    Description = db.Column(db.Text)  # Ajustado a Text para permitir descripciones más largas
