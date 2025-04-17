import {createAction} from '@reduxjs/toolkit';
import { AppRoute } from '../components/const';

const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export { redirectToRoute };
