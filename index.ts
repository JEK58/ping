import { schedule } from "node-cron";

console.log("Server started");

const URL = Bun.env.MONITOR_URL;

schedule("*/1 * * * *", async () => {
  try {
    if (!URL) throw new Error("No URL defined");
    await fetch(URL);
    console.log(`Ping sent at ${new Date().toISOString()}`);
  } catch (error) {
    console.log(error);
  }
});
