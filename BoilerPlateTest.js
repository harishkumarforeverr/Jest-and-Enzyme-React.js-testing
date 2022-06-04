// setup file

// offical enzyme website link : https://enzymejs.github.io/enzyme/#reacttestutilsact-wrap

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import { persistor, store } from "../../../../redux/store";
// import { store, persistor } from "../../../redux/store";
import i18n from "../../../../i18n";
const { default: DashboardAccount } = require("./DashboardAccount");

var enzyme = require("enzyme");

const mockHistoryPush = jest.fn();
const mockGoBack = jest.fn();
const initialProps = {
  history: {
    goBack: mockGoBack,
  },
};
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
  useHistory: () => ({
    push: mockHistoryPush,
    goBack: mockGoBack,
  }),
  useParams: () => ({
    pathParam: "haribusine-HOAoFA",
  }),
}));
describe("DashboardAccount", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = enzyme.mount(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <DashboardAccount {...initialProps} />{" "}
          </I18nextProvider>
        </PersistGate>
      </Provider>
    );
  });

  // snapshot test cases Starts From Here

  it("snapshot test cases in DashboardAccount ", (done) => {
    expect(wrapper.debug()).toMatchSnapshot();
    done();
  });
});
