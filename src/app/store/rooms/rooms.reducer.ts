import { Actions, ActionType } from './rooms.actions';

const initialState = {
  '1': {
    id: '1',
    label: 'Room 1',
    isAvailable: true,
    booking: {}
  },
  '2': {
    id: '2',
    label: 'Room 2',
    isAvailable: true,
    booking: {}
  }
};

export function roomsReducer(state: any = initialState, action: Actions): any {
  switch (action.type) {
    case ActionType.BOOK:
      let room = state[action.payload.roomId];
      room = Object.assign(
        {},
        room,
        {
          booking: action.payload,
          isAvailable: false
        });

      return Object.assign(
        {},
        state,
        {
          [action.payload.roomId]: room
        }
      );

    default:
      return state;
  }
}
