import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import auth from './reducers/auth'

const rootReducer = combineReducers({
  auth,
})

const store = createStore(rootReducer);

function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider