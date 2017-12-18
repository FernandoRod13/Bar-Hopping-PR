import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Transaction } from './../../domainLayer/structures/Transaction';
import { TransactionFactory } from './../../domainLayer/factories/transactionFactory';
@Injectable()

export class TransactionsRepoService {

  private transactionCollection: AngularFirestoreCollection<Transaction>;
  constructor(private db: AngularFirestore, private factory: TransactionFactory) {
    this.transactionCollection = this.db.collection('transactions');
   }
  /**This function will add a new transaction to the database if transaction was successful. */
  addNewTransaction(transactionDetails: Transaction): void {
    this.transactionCollection.add(transactionDetails.exportData());
  }
  /**This fucntion will query for all transactions registered to a specific user int the database. */
  getUserTransactions(userID: string): Observable<Transaction[]> {
    return this.db.collection('transactions', ref => ref.where('customerId', '==', userID)).snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.createTransaction(data.payload.doc);
      });
    });
  }
  /**This function will query for all transactions in the database. */
  getStatement(): Observable<Transaction[]> {
    return this.transactionCollection.snapshotChanges().map( item => {
      return item.map( data => {
        return this.factory.createTransaction(data.payload.doc);
      });
    });
  }
}
