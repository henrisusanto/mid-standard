export interface TierJSON {
    Id: number
    Name: string
    Level: number
    ActiveYear: number
    MinSpending: number
}

interface CreateDraft {
    Name: string
    Level: number
    ActiveYear: number
    MinSpending: number
}

export class Tier {
    protected Id: number
    protected Name: string
    protected Level: number
    protected ActiveYear: number
    protected MinSpending: number

    createDraft (data: CreateDraft): void {
        this.Name = data.Name
        this.Level = data.Level
        this.ActiveYear = data.ActiveYear
        this.MinSpending = data.MinSpending
    }

    fromJSON(json: TierJSON): void {
        this.Id = json.Id
        this.Name = json.Name
        this.Level = json.Level
        this.ActiveYear = json.ActiveYear
        this.MinSpending = json.MinSpending
    }

    toJSON(): TierJSON {
        return {
            Id: this.Id,
            Name: this.Name,
            Level: this.Level,
            ActiveYear: this.ActiveYear,
            MinSpending: this.MinSpending
        }
    }
}