import app from "./src/app";

app.on("appStarted", () => {
  app.listen(3031, () => {
    console.log("Server is listening on port 3031");
    console.log("Clicked here to see the app: http://localhost:3031");
  });
});
