interface MemberRegistration {
    FirstName: string
    LastName: string
    Email: string
    MobilePhone: string
    DateOfBirth: Date
    Password: string
}

interface MemberJSON {
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

export class Member {
    protected MemberID: number
    protected FirstName: string
    protected LastName: string
    protected Email: string
    protected MobilePhone: string
    protected DateOfBirth: Date
    protected Password: string
    protected RegistrationDate: Date
    protected TierLevel: number
    protected TierChangeDate: Date
    protected VerfiedDate: Date
    protected PointBalance: number
    protected LifetimePointEarned: number
    protected LifetimePointExpired: number
    protected LifetimeSpending: number
    protected YTDSpending: number

    register(data: MemberRegistration): void {
        this.FirstName = data.FirstName
        this.LastName = data.LastName
        this.Email = data.Email
        this.MobilePhone = data.MobilePhone
        this.DateOfBirth = data.DateOfBirth
        this.Password = data.Password
    }

    fromJSON(data: MemberJSON): void {
        this.MemberID = data.MemberID
        this.FirstName = data.FirstName
        this.LastName = data.LastName
        this.Email = data.Email
        this.MobilePhone = data.MobilePhone
        this.DateOfBirth = data.DateOfBirth
        this.Password = data.Password
        this.RegistrationDate = data.RegistrationDate
        this.TierLevel = data.TierLevel
        this.TierChangeDate = data.TierChangeDate
        this.VerfiedDate = data.VerfiedDate
        this.PointBalance = data.PointBalance
        this.LifetimePointEarned = data.LifetimePointEarned
        this.LifetimePointExpired = data.LifetimePointExpired
        this.LifetimeSpending = data.LifetimeSpending
        this.YTDSpending = data.YTDSpending
    }

    toJSON(): MemberJSON {
        return {
            MemberID: this.MemberID,
            FirstName: this.FirstName,
            LastName: this.LastName,
            Email: this.Email,
            MobilePhone: this.MobilePhone,
            DateOfBirth: this.DateOfBirth,
            Password: this.Password,
            RegistrationDate: this.RegistrationDate,
            TierLevel: this.TierLevel,
            TierChangeDate: this.TierChangeDate,
            VerfiedDate: this.VerfiedDate,
            PointBalance: this.PointBalance,
            LifetimePointEarned: this.LifetimePointEarned,
            LifetimePointExpired: this.LifetimePointExpired,
            LifetimeSpending: this.LifetimeSpending,
            YTDSpending: this.YTDSpending
        }
    }
}