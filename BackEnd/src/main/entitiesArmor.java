package entities;

import jakarta.persistence.Entity;

@Entity
public class Armor {
    @Column(name = ""Armor_id"")
    private String "Armor_id";
    @Column(name = ""Name"")
    private String "Name";
    @Column(name = ""Type"")
    private String "Type";
    @Column(name = ""cost"")
    private String "cost";
    @Column(name = ""armor_class"")
    private String "armor_class";
    @Column(name = ""dexMod"")
    private String "dexMod";
    @Column(name = ""maxDexMod"")
    private String "maxDexMod";
    @Column(name = ""reqStr"")
    private String "reqStr";
    @Column(name = ""stealthDis"")
    private String "stealthDis";
    @Column(name = ""weight"")
    private String "weight";
    @Column(name = ""description"")
    private String "description";
    // Getters y setters
}