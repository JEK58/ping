import { schedule } from "node-cron";

const URL = Bun.env.MONITOR_URL;
if (!URL) throw new Error("No URL defined");

schedule("*/10 * * * *", async () => {
  try {
    await fetch(URL);
    console.log(`Ping sent at ${new Date().toISOString()}`);
  } catch (error) {
    console.log(error);
  }
});
