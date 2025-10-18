import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION',
        Inject: [ConfigService],
       useFactory: async (config: ConfigService) => {
    const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('localhost'),
        port: +config.get('5433'),
        username: config.get('postgres'),
        password: config.get('123456'),
        database: config.get('backend_mx') 
    });
    
            return dataSource.initialize();
        }
}]