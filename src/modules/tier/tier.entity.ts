import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
    name: 'tier',
})
export class TierEntity {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    Name: string

    @Column()
    Level: number

    @Column()
    ActiveYear: number

    @Column()
    MinSpending: number
}