import workerCode from './worker.js';

export const onRequest = async (context) => {
  return await workerCode.fetch(context.request);
};
