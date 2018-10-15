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

  public airships: AngularFireList<Airship>

  constructor(
    public db: AngularFireDatabase,
    public http: HttpClient) {
    this.initialize()
  }

  create(airship: Airship) {
    return this.db.object<Airship>(`/airship/`)
      .set(airship)
    //fazer um catch pra pegar os erros
  }

  getAll(): AngularFireList<Airship> {
    return this.airships
  }

  //metodo generico trouxe das classes genericas do neura
  mapListKeys<T>(list: AngularFireList<T>): Observable<T[]> {
    return list
      .snapshotChanges()
      .map(actions => actions.map(action => ({ $key: action.key, ...action.payload.val() })));
  }

  private initialize() {
    this.airships = this.db.list<Airship>(`/airship/`,
      (ref: firebase.database.Reference) => ref.orderByChild('timestamp'))
  }
}
