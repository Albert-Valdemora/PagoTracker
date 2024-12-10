import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import {NextUIProvider} from "@nextui-org/react";

export const PagoTrackerApp = () => {
  return (
    <Provider store={store}>
      <NextUIProvider>
      <AppRouter />
      </NextUIProvider>
    </Provider>
  );
}


