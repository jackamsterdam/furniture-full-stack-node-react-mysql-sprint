class Config {

}

class DevelopmentConfig extends Config {
    typesUrl = "http://localhost:3001/api/types/";
    furnituresUrl = "http://localhost:3001/api/furnitures/";
    
}

class ProductionConfig extends Config {
    typesUrl = "http://localhost:3001/api/types/";
    furnituresUrl = "http://localhost:3001/api/furnitures/";
}

const config = process.env.NODE_ENV === 'production' ? new ProductionConfig() : new DevelopmentConfig()

export default config