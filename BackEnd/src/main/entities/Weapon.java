import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "weapons")
public class Weapon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "type")
    private String type;

    @Column(name = "name")
    private String Name;

    @Column(name = "cost")
    private int cost;

    @Column(name = "damage_dice_min")
    private int damage_dice_min;

    @Column(name = "damage_dice_max")
    private int damage_dice_max;

    @Column(name = "damage_type")
    private String damage_type;

    @Column(name = "weight")
    private int weight;

    @Column(name = "property_name")
    private String property_name;

    @Column(name = "property_description")
    private String property_description;

    @Column(name = "attack_range")
    private String attack_range;

    @Column(name = "description")
    private String dascription;

    public Weapon(int id, String type, String name, int cost, int damage_dice_min, int damage_dice_max,
            String damage_type, int weight, String property_name, String property_description, String attack_range,
            String dascription) {
        this.id = id;
        this.type = type;
        Name = name;
        this.cost = cost;
        this.damage_dice_min = damage_dice_min;
        this.damage_dice_max = damage_dice_max;
        this.damage_type = damage_type;
        this.weight = weight;
        this.property_name = property_name;
        this.property_description = property_description;
        this.attack_range = attack_range;
        this.dascription = dascription;
    }

    public int getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getName() {
        return Name;
    }

    public int getCost() {
        return cost;
    }

    public int getDamage_dice_min() {
        return damage_dice_min;
    }

    public int getDamage_dice_max() {
        return damage_dice_max;
    }

    public String getDamage_type() {
        return damage_type;
    }

    public int getWeight() {
        return weight;
    }

    public String getProperty_name() {
        return property_name;
    }

    public String getProperty_description() {
        return property_description;
    }

    public String getAttack_range() {
        return attack_range;
    }

    public String getDascription() {
        return dascription;
    }

    @Override
    public String toString() {
        return "Weapon [id=" + id + ", type=" + type + ", Name=" + Name + ", cost=" + cost + ", damage_dice_min="
                + damage_dice_min + ", damage_dice_max=" + damage_dice_max + ", damage_type=" + damage_type
                + ", weight=" + weight + ", property_name=" + property_name + ", property_description="
                + property_description + ", attack_range=" + attack_range + ", dascription=" + dascription + "]";
    }

}
