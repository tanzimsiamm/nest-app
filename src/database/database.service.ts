/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected: boolean = false;

    onModuleInit() {
        this.isConnected = true;
        console.log('Database connected');
    }

    onApplicationShutdown(signal: string) {
        this.isConnected = false;
        console.log(`Database disconnected. ${signal} received.`);
    }

    getStatus(): string {
        return this.isConnected ? 'Connected' : 'Disconnected';
    }
}
