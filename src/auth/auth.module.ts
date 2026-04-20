import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PassportModule } from '@nestjs/passport';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
