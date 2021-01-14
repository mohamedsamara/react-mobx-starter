import { wrap } from "comlink";

const worker = new Worker("./worker", {
  name: "myWorker",
  type: "module",
});

const workerApi = wrap(worker);

export default workerApi;
