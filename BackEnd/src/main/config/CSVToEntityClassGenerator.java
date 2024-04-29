import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;

public class CSVToEntityClassGenerator {
    public static void main(String[] args) {
        String csvFile = "D:/Users/Usuario/Documents/Proyectos/Svelte/DnD - Hoja de personaje/BackEnd/src/main/resources/data/armor.csv";
        String className = "Armor"; // Ruta del paquete donde se guardará la clase entidad
        String outputDirectory = "BackEnd/src/main/entities/"; // Directorio donde se guardará el archivo generado

        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
            String line;
            if ((line = br.readLine()) != null) {
                // Obtener los encabezados del archivo CSV
                String[] headers = line.split(",");

                // Crear el código para la clase entidad con anotaciones de JPA
                StringBuilder classCode = new StringBuilder();
                classCode.append("import jakarta.persistence.Entity;\n\n");
                classCode.append("@Entity\n");
                classCode.append("public class ").append(className).append(" {\n");
                for (String header : headers) {
                    String fieldName = header.trim().replaceAll("\s", "_"); // Reemplazar espacios en blanco con guiones bajos
                    classCode.append("    @Column(name = ").append(header.trim()).append(")\n");
                    classCode.append("    private String ").append(fieldName).append(";\n");
                }
                classCode.append("    // Getters y setters\n}");

                // Escribir la clase entidad en un archivo Java
                try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputDirectory + className + ".java"))) {
                    writer.write(classCode.toString());
                }
                System.out.println("Clase entidad generada exitosamente: " + outputDirectory + className + ".java");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
