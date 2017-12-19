import { Injectable } from '@angular/core';
import { Transaction } from '../structures/Transaction';

@Injectable()
export class TransactionFactory {
    /**This function will contrusct an transaction from a json from the database. */
    createTransaction(json: any): Transaction {
        const data = json.data();
        const date = new Date(data.date);
        const guests: string[] = [];
        return new Transaction(json.id, data.customerId, date, guests, data.tripCost, data.tripId);
    }
}
