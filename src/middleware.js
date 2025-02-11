import { thunk } from 'redux-thunk';

const middleware = store => next => action => {
  console.log('Middleware is working');
  setTimeout(() => {
    console.log('1 sec timeout called by middleware');
  }, 1000);
  return next(action);
}

export default middleware;