import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { State, RoomsStore } from '../store';
import { BookRoom } from '../store/rooms';

@Component({
  selector: 'app-room-overview',
  templateUrl: './room-overview.component.html',
  styleUrls: ['./room-overview.component.scss']
})
export class RoomOverviewComponent {
  rooms: Observable<any>;

  constructor(private store: Store<State>) {
    this.rooms = store.pipe(select(RoomsStore)).pipe(map(roomsMap => {
        return Object.keys(roomsMap).map(roomId => roomsMap[roomId]);
    }));
  }

  addBooking() {
    const booking = {
      roomId: '1',
      name: 'John',
      checkin: '10/01/2018 12:00 PM',
      checkout: '12/10/2018 10:00 AM'
    };
    this.store.dispatch(new BookRoom(booking));
  }
}
