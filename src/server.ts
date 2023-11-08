import { AppDataSource } from "./data-source";
import app from "./app";
AppDataSource.initialize()
  .then((): void => {
    console.log("DB is running");

    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => console.log("server is running"));
  })
  .catch((err) => console.error(err));
