import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "armor")
public class Armor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Armor_id;
    @Column(name = "Name")
    private String Name;
    @Column(name = "Type")
    private String Type;
    @Column(name = "cost")
    private int cost;
    @Column(name = "armor_class")
    private int armor_class;
    @Column(name = "dexMod")
    private int dexMod;
    @Column(name = "maxDexMod")
    private int maxDexMod;
    @Column(name = "reqStr")
    private int reqStr;
    @Column(name = "stealthDis")
    private boolean stealthDis;
    @Column(name = "weight")
    private int weight;
    @Column(name = "description")
    private String description;

    public Armor(int armor_id, String name, String type, int cost, int armor_class, int dexMod,
            int maxDexMod, int reqStr, boolean stealthDis, int weight, String description) {
        Armor_id = armor_id;
        Name = name;
        Type = type;
        this.cost = cost;
        this.armor_class = armor_class;
        this.dexMod = dexMod;
        this.maxDexMod = maxDexMod;
        this.reqStr = reqStr;
        this.stealthDis = stealthDis;
        this.weight = weight;
        this.description = description;
    }

    @Override
    public String toString() {
        return "Armor [Armor_id=" + Armor_id + ", Name=" + Name + ", Type=" + Type + ", cost=" + cost + ", armor_class="
                + armor_class + ", dexMod=" + dexMod + ", maxDexMod=" + maxDexMod + ", reqStr=" + reqStr
                + ", stealthDis=" + stealthDis + ", weight=" + weight + ", description=" + description + "]";
    }

    public int getArmor_id() {
        return Armor_id;
    }

    public String getName() {
        return Name;
    }

    public String getType() {
        return Type;
    }

    public int getCost() {
        return cost;
    }

    public int getArmor_class() {
        return armor_class;
    }

    public int getDexMod() {
        return dexMod;
    }

    public int getMaxDexMod() {
        return maxDexMod;
    }

    public int getReqStr() {
        return reqStr;
    }

    public boolean isStealthDis() {
        return stealthDis;
    }

    public int getWeight() {
        return weight;
    }

    public String getDescription() {
        return description;
    }

}