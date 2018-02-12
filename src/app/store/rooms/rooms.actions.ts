import { Action } from '@ngrx/store';

export const enum ActionType {
  BOOK = '[ROOMS] BOOK'
}

export class BookRoom implements Action {
  readonly type = ActionType.BOOK;

  constructor(public payload: any) {}
}

export type Actions = BookRoom;
