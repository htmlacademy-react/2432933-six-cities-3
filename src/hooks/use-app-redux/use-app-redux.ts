import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '../../store/store';
import { State } from '../../types/state';

type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export type {AppDispatch, State};
export {useAppDispatch, useAppSelector,};

