/**
 * Created by Gaven on 2016/9/12.
 */
import {HelloWorld} from './components/HelloWorld/HelloWorld';
import {store} from './store/store';
import {setstate} from './actions/actions';
console.log(store.getState());
store.dispatch(setstate('hehe'));
console.log(store.getState());