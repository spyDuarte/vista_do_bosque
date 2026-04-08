import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginInput, UserPayload } from '@vista/shared';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) {}

  async login(dto: LoginInput) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user || !user.isActive) throw new UnauthorizedException('Credenciais inválidas');
    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Credenciais inválidas');
    const payload: UserPayload = { id: user.id, email: user.email, role: user.role, fullName: user.fullName };
    return this.generateTokens(payload);
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwt.verify(refreshToken, { secret: process.env.JWT_REFRESH_SECRET }) as UserPayload;
      return this.generateTokens(payload);
    } catch { throw new UnauthorizedException('Token inválido ou expirado'); }
  }

  private generateTokens(payload: UserPayload) {
    return {
      accessToken: this.jwt.sign(payload, { secret: process.env.JWT_ACCESS_SECRET, expiresIn: process.env.JWT_ACCESS_EXPIRES_IN }),
      refreshToken: this.jwt.sign(payload, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: process.env.JWT_REFRESH_EXPIRES_IN }),
      user: { id: payload.id, email: payload.email, fullName: payload.fullName, role: payload.role }
    };
  }
}
