import { AirshipAttributes, Airship } from './../../models/Airship';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'Rxjs';

/*
  Generated class for the AirshipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AirshipProvider {

  public airships: Observable<Airship[]>

  constructor(
    public db: AngularFireDatabase,
    public http: HttpClient) {
    this.initialize()
  }

  create(airship: Airship) {
    return this.db.object<Airship>(`/airship/${airship._id}`)
      .set(airship)
    //fazer um catch pra pegar os erros
  }

  remove(key: any) {
    return this.db.object<Airship>(`/airship/${key}`).remove()
  }

 // getAll(): AngularFireList<Airship> {
    //return this.airships  }

  private initialize() {
    this.airships = this.mapListKeys<Airship>(this.db.list<Airship>(`/airship/`,
      (ref: firebase.database.Reference) => ref.orderByChild('timestamp')))
  }

  private mapListKeys<T>(list: AngularFireList<T>): Observable<T[]> {
    return list
      .snapshotChanges()
      .map(actions => actions.map(action => ({ $key: action.key, ...action.payload.val() })));
  }

}
