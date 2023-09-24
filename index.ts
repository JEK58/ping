import { schedule } from "node-cron";

const URL = Bun.env.MONITOR_URL;

schedule("*/10 * * * *", async () => {
  if (URL) await fetch(URL);
});
