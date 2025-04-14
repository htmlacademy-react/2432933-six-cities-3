import { store } from '../store/store';

type State = ReturnType<typeof store.getState>;

export type { State };
