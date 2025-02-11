import { configureStore } from '@reduxjs/toolkit'
import { createStore } from '@reduxjs/toolkit';
import {indexReducer} from './components/index';
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import middleware from './middleware'

export default createStore(indexReducer(), applyMiddleware(middleware));