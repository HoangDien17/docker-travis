import { createClient } from "redis";

class RedisClient {
  constructor(url) {
    this.url = url;
    this.connect();
  }

  async connect() {
    const client = await createClient({ url: this.url })
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
    return client;
  }

  get() {
    return this.connect();
  }
}

export default RedisClient;
