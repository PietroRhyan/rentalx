import { container } from 'tsyringe';

import { LocalStorageProvider } from './implementatios/LocalStorageProvider';
import { S3StorageProvider } from './implementatios/S3StorageProvider';
import { IStorageProvider } from './IStorageProvider';

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  diskStorage[process.env.disk],
);
