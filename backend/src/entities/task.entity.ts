import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'

@Entity('task')
export class Task {

    @PrimaryGeneratedColumn()
    public id: number; 

    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column()
    public done: boolean;
}


