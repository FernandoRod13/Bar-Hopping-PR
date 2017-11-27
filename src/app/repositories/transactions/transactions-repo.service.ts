import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class TransactionsRepoService {

  constructor(db: AngularFirestore) { }
  /**This function will add a new transaction to the database if transaction was successful. */
  addNewTransaction(transactionDetails: any): void {

  }
  /**This fucntion will query for all transactions registered to a specific user int the database. */
  getUserTransactions(userID: string): Observable<any> {
    return null;
  }
  /**This function will query for all transactions in the database. */
  getStatement(): Observable<any> {
    return null;
  }
}
