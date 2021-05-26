import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    type: string;
  
    @Column()
    color: string;
  
    @Column()
    habitat: string;

    @Column()
    weight: number;

    @Column({
        nullable: true
    })
    image: string;
}
 