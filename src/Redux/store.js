import { createStore } from 'redux';
import Reducer from './reducer/reducer';
const Store = createStore(Reducer);
export default Store;
