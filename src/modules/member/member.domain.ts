export class Member {
    protected firstname: string
    protected lastname: string

    setFirstName (firstname: string): void {
        this.firstname = firstname
    }

    getFullName (): string {
        return this.firstname + ' Susanto'
    }
}