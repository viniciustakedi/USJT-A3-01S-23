import { PrismaClient } from '@prisma/client';
import { KafkaSendMessage } from '../../cluster/kafka/producer';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
export declare function createUser(params: CreateUserDTO, prisma: PrismaClient, kafkaSendMessage: KafkaSendMessage): Promise<any>;
