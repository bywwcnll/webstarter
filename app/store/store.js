import { createStore } from 'redux'
import { reducer } from './reducer';

export const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

