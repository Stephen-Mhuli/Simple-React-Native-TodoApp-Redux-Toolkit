import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './screens/TodoApp';

//redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'

const store = configureStore({
  reducer: rootReducer
})

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

