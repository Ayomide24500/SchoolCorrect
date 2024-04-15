import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./global/store";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import LoadingScreen from "./components/static/LoadingScreen";
import RouterScreen from "./router/RouterScreen";
import PrivateRouter from "./router/PrivateRouter";

let persistor = persistStore(store);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary fallback={<LoadingScreen />}>
            <RouterScreen />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
