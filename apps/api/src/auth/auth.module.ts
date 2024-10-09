import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '@/api/v1/users/users.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [],
  providers: [AuthService, LocalStrategy, UsersService],
  imports: [PassportModule],
})
export class AuthModule {}
