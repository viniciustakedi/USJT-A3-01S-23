import { AppService } from './services/app.service';
import { User } from '@prisma/client';
import { CreateUserDTO } from './dtos/CreateUserDTO';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(body: CreateUserDTO): Promise<User>;
}
