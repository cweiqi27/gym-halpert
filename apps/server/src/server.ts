import { connect } from "./utils/db";
import { env } from "./schema/env.schema";
import logger from "./utils/logger";
import { createServer } from "./utils/server.utils";

const port = env.PORT ?? 3000;
const app = createServer();

app.listen(port, async () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
  await connect();
});
