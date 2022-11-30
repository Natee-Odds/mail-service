import { main } from "./app";

function start() {
  try {
    const app = main();
    app.listen("8080", () => {
      console.info(
        `Server start at http://localhost:8080\nEnvironment: local\nTime: ${new Date().toISOString()}`
      );
    });
  } catch (error) {
    console.error(error);
  }
}

start();
