
export class Transaction {
    cId: string;
    date: Date;
    guests: string[];
    tripCost: number;
    tId: string;
    id: string;

    constructor(id: string, cId: string, date: Date, guests: string[], cost: number, tId: string) {
        this.id = id;
        this.tId = tId;
        this.tripCost = cost;
        this.guests = guests;
        this.date = date;
        this.cId = cId;

    }

    
    parseToJSON(): any {
        var transaction = {
            cId: this.cId,
            date: this.date,
            guests: this.guests,
            tripCost: this.tripCost,
            tId: this.tId,
           
        };
        return transaction;
    }
}
