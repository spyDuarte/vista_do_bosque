import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies.accessToken;
    if (!token) throw new UnauthorizedException('Autenticação necessária');
    try {
      (request as any).user = this.jwt.verify(token, { secret: process.env.JWT_ACCESS_SECRET });
      return true;
    } catch { throw new UnauthorizedException('Token inválido ou expirado'); }
  }
}
