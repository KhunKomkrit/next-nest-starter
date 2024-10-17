import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { readdirSync } from 'fs';
import { join } from 'path';

const capitalizeFirstLetter = (module: string) => {
  return module.charAt(0).toUpperCase() + module.slice(1);
};

const versionModules = readdirSync(join(__dirname, './api'))
  .filter((folder) => folder.startsWith('v'))
  .flatMap((folder) => {
    const folderModule = readdirSync(join(__dirname, `./api/${folder}`));
    return folderModule.flatMap((subfolder) => {
      const modulePath = join(
        __dirname,
        `./api/${folder}/${subfolder}/${subfolder}.module`,
      );
      const upperFile = capitalizeFirstLetter(subfolder);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const importedModule = require(modulePath);
      return importedModule.default || importedModule[`${upperFile}Module`];
    });
  });

@Module({
  imports: [AuthModule, ...versionModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
