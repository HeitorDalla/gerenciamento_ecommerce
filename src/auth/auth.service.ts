import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({
      where: { username },
    });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const { password, ...result } = user.get();
        return result;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.generateToken(payload),
      user: user,
    };
  }

  async register(username: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      username,
      email,
      password: hashedPassword,
    } as any);

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      message: 'User registered successfully',
    };
  }

  private generateToken(payload: any): string {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64');
    const body = Buffer.from(JSON.stringify(payload)).toString('base64');
    const signature = Buffer.from(
      require('crypto')
        .createHmac('sha256', process.env.JWT_SECRET)
        .update(`${header}.${body}`)
        .digest('hex'),
    ).toString('base64');

    return `${header}.${body}.${signature}`;
  }
}
