import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

@Configuration
public class DatabaseConfig {

    @Autowired
    private DDBB_Connection dbConnection;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostConstruct
    public void init() {
        jdbcTemplate.setDataSource(createDataSource());
    }

    private DataSource createDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(dbConnection.getDataSourceDriverclassname());
        dataSource.setUrl(dbConnection.getDataSourceUrl());
        dataSource.setUsername(dbConnection.getDataSourceUsername());
        dataSource.setPassword(dbConnection.getDataSourcePassword());
        return dataSource;
    }

    // Aquí puedes crear métodos para ejecutar consultas usando jdbcTemplate
    // Por ejemplo:
    // public List<Map<String, Object>> executeQuery(String sql) {
    //     return jdbcTemplate.queryForList(sql);
    // }
}
