import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
    name: 'member',
})
export class MemberEntity {
    @PrimaryGeneratedColumn()
    MemberID: number

    @Column()
    FirstName: string

    @Column()
    LastName: string

    @Column()
    Email: string

    @Column()
    MobilePhone: string

    @Column()
    DateOfBirth: Date

    @Column()
    Password: string

    @Column()
    RegistrationDate: Date

    @Column()
    TierLevel: number

    @Column()
    TierChangeDate: Date

    @Column()
    VerfiedDate: Date

    @Column()
    PointBalance: number

    @Column()
    LifetimePointEarned: number

    @Column()
    LifetimePointExpired: number

    @Column()
    LifetimeSpending: number

    @Column()
    YTDSpending: number
}

export interface MemberEntityJSON {
    MemberID: number
    FirstName: string
    LastName: string
    Email: string
    MobilePhone: string
    DateOfBirth: Date
    Password: string
    RegistrationDate: Date
    TierLevel: number
    TierChangeDate: Date
    VerfiedDate: Date
    PointBalance: number
    LifetimePointEarned: number
    LifetimePointExpired: number
    LifetimeSpending: number
    YTDSpending: number
}