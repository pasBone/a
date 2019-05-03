/**
 * Created by xu.long on 2018/4/21.
 */

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routerReducer: routerReducer,
    ...asyncReducers,
  });
}
