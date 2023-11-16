import express from "express";
import "../database/db.js";
import RedisClient from "../redis/redis.js";
import config from "config";
import cors from "cors";

const app = express();
app.use(cors())
const redis = new RedisClient(config.get("redis.url"));
const client = await redis.get();

// init page views
client.set("page-views", 0);

app.get("/views", async (req, res) => {
  const view = +await client.get("page-views");
  res.status(200).json({ view });
});

app.put("/increase", async (req, res) => {
    await client.incr("page-views", 1);
    res.status(200).json({ message: "Increasing page"})
})

app.put("/decrease", async (req, res) => {
    await client.decr("page-views", 1);
    res.status(200).json({ message: "Decreasing page"})
})

app.listen(config.get('service.port'), () => {
  console.log("App listening on port 4000");
});
