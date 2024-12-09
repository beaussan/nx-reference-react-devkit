import { PromiseExecutor } from '@nx/devkit';
import { HelloExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<HelloExecutorSchema> = async (options) => {
  console.log('Executor ran for Hello', options);
  return {
    success: true,
  };
};

export default runExecutor;
