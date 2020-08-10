import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MemberEntity, MemberEntityJSON } from './member.entity'
import { Member, MemberJSON } from './member.domain'

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(MemberEntity)
        private readonly repo: Repository<MemberEntity>,
    ) { }

    async save(member: Member): Promise<number> {
        let data = this.toEntity(member)
        let entity = this.repo.create(data)
        let record = await this.repo.save(entity)
        return record.MemberID
    }

    toEntity(domain: Member): MemberEntityJSON {
        let json = domain.toJSON()
        return {
            MemberID: json.MemberID,
            FirstName: json.FirstName,
            LastName: json.LastName,
            Email: json.Email,
            MobilePhone: json.MobilePhone,
            DateOfBirth: json.DateOfBirth,
            Password: json.Password,
            RegistrationDate: json.RegistrationDate,
            TierLevel: json.TierLevel,
            TierChangeDate: json.TierChangeDate,
            VerfiedDate: json.VerfiedDate,
            PointBalance: json.PointBalance,
            LifetimePointEarned: json.LifetimePointEarned,
            LifetimePointExpired: json.LifetimePointExpired,
            LifetimeSpending: json.LifetimeSpending,
            YTDSpending: json.YTDSpending
        }
    }

    toDomain(json: MemberEntityJSON): Member {
        let member = new Member()
        member.fromJSON({
            MemberID: json.MemberID,
            FirstName: json.FirstName,
            LastName: json.LastName,
            Email: json.Email,
            MobilePhone: json.MobilePhone,
            DateOfBirth: json.DateOfBirth,
            Password: json.Password,
            RegistrationDate: json.RegistrationDate,
            TierLevel: json.TierLevel,
            TierChangeDate: json.TierChangeDate,
            VerfiedDate: json.VerfiedDate,
            PointBalance: json.PointBalance,
            LifetimePointEarned: json.LifetimePointEarned,
            LifetimePointExpired: json.LifetimePointExpired,
            LifetimeSpending: json.LifetimeSpending,
            YTDSpending: json.YTDSpending
        })
        return member
    }
}