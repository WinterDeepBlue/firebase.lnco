import { Module } from '@nestjs/common';
import { OpsController } from './firebase/ops.controller';
import { FirestoreService } from './firebase/firestore/firestore.service';
import { AuthorizationModule } from 'src/authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from 'src/app.service';
import { StorageService } from './firebase/storage/storage.service';

@Module({
  imports: [AuthorizationModule, ConfigModule.forRoot()],
  controllers: [OpsController],
  providers: [FirestoreService, StorageService, AppService],
})
export class OpsModule { }
