import { roomsReducer } from './rooms';

export interface State {
  rooms: any;
}

export const reducers = {
  rooms: roomsReducer
};

export const RoomsStore = (state: State) => state.rooms;
