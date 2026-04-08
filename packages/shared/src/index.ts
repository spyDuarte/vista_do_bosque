import { z } from 'zod';

export type Role = 'MORADOR' | 'SINDICO' | 'ADMIN' | 'PORTARIA';

export interface UserPayload {
  id: string;
  email: string;
  role: Role;
  fullName: string;
}

export const LoginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export type LoginInput = z.infer<typeof LoginSchema>;
