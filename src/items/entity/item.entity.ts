import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    test: string;
}