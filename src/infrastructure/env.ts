import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  PORT: z.string().default('4000'),
});

export const env = envSchema.parse(process.env);
