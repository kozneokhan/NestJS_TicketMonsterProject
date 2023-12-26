import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Role } from '../types/userRole.type';

@Index('email', ['email'], { unique: true })
@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', select: false, nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  nickname: string;

  @Column({ type: 'varchar', nullable: false })
  gender: string;

  @Column({ type: 'tinyint', nullable: false })
  age: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  phone: string;

  @CreateDateColumn({ name: 'createAt', comment: '생성일시' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updateAt', comment: '수정일시' })
  updateAt: Date;

  @DeleteDateColumn({ name: 'deleteAt', comment: '삭제일시' })
  deletedAt?: Date | null;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;
}
