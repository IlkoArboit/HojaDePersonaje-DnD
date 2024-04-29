import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DDBB_Connection {

    @Value("${spring.datasource.name}")
    private String dataSourceName;

    @Value("${spring.datasource.url}")
    private String dataSourceUrl;

    @Value("${spring.datasource.username}")
    private String dataSourceUsername;

    @Value("${spring.datasource.password}")
    private String dataSourcePassword;

    @Value("${spring.datasource.driver-class-name}")
    private String dataSourceDriverclassname;

    @Value("${spring.datasource.database-platform}")
    private String dataSourceDatabaseplatform;

    public String getDataSourceName() {
        return dataSourceName;
    }

    public String getDataSourceUrl() {
        return dataSourceUrl;
    }

    public String getDataSourceUsername() {
        return dataSourceUsername;
    }

    public String getDataSourcePassword() {
        return dataSourcePassword;
    }

    public String getDataSourceDriverclassname() {
        return dataSourceDriverclassname;
    }

    public String getDataSourceDatabaseplatform() {
        return dataSourceDatabaseplatform;
    }

    
}
