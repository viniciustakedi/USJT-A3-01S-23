import { KafkaSendMessage } from '../cluster/kafka/producer';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
export declare class AppService {
    private readonly kafkaSendMessage;
    private readonly prisma;
    constructor(kafkaSendMessage: KafkaSendMessage, prisma: PrismaService);
    createUser(params: CreateUserDTO): Promise<any>;
}
