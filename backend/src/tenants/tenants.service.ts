import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTenantDto } from './dto/create-tenant.dto';

@Injectable()
export class TenantsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTenantDto) {
    return this.prisma.tenant.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.tenant.findMany();
  }
}