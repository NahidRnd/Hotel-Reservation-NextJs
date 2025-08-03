// import { Product } from '@/types';
import { Pool, PoolConfig, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '../lib/generated/prisma';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const poolConfig: PoolConfig = {
    connectionString: process.env.DATABASE_URL!,
    max: 10, // Adjust as needed
  };

const adapter = new PrismaNeon(poolConfig);

export const prisma = new PrismaClient({ adapter });

// export const prisma = new PrismaClient();