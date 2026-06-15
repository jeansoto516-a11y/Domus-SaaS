import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async create(data: {
    name: string;
    email: string;
    password: string;
    tenantId: string;
    }) {
    const passwordHash = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
        data: {
        name: data.name,
        email: data.email,
        passwordHash,
        tenantId: data.tenantId,
        },
    });
    }

    async findByEmail(email: string) {
    return this.prisma.user.findUnique({
        where: {
        email,
        },
    });
    }
}