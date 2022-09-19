import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/models/User.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async createUser(detail: CreateAuthDto) {
    const user = await this.userRepo.findOneBy({ email: detail.email });
    if (user) return user;
    const result = await this.userRepo.save(detail);
    return result;
  }
}
