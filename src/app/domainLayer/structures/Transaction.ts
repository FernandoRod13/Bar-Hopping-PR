
export class Transaction {
    id: string;
    cId: string;
    date: Date;
    guests: string[];
    tripCost: number;
    tId: string;
    

    constructor(id: string, cId: string, date: Date, guests: string[], cost: number, tId: string) {
        this.id = id;
        this.tId = tId;
        this.tripCost = cost;
        this.guests = guests;
        this.date = date;
        this.cId = cId;

    }
}
