interface ServerConfig {
    port: number;
    env: string;
  }
  
  const serverConfig: ServerConfig = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    env: process.env.NODE_ENV || 'development',
  };
  
  export default serverConfig;
  