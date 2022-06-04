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

  afterEach(jest.clearAllMocks);
  // snapshot test cases Starts From Here

  it("snapshot test cases in DashboardAccount ", (done) => {
    expect(wrapper.debug()).toMatchSnapshot();
    done();
  });
  it("DashboardAccount 1", () => {
    expect(wrapper.text().includes("Account")).toEqual(true);
    expect(wrapper.text().includes("Take care of that now")).toEqual(true);
    expect(wrapper.text().includes("Need to deactivate your account?")).toEqual(
      true
    );
    expect(wrapper.text().includes("Global Preferences")).toEqual(true);
    expect(wrapper.text().includes("Privacy & Sharing")).toEqual(true);
    expect(wrapper.text().includes("Notifications")).toEqual(true);
    expect(
      wrapper
        .text()
        .includes(
          "Choose notification preferences and How you want to be contacted"
        )
    ).toEqual(true);
    expect(wrapper.text().includes("Back to Dashboard")).toEqual(true);
    expect(wrapper.text().includes("Personal info")).toEqual(true);
    expect(
      wrapper
        .text()
        .includes("Provide personal details and how Can we reach you")
    ).toEqual(true);
    expect(wrapper.text().includes("Login & Security")).toEqual(true);
    expect(wrapper.text().includes("Payments & Payouts")).toEqual(true);
    expect(
      wrapper
        .text()
        .includes("Review payments, payouts, coupons, Gift cards and taxes")
    ).toEqual(true);
  });

  it("DayCareBookingdetails 2", () => {
    // expect(wrapper.find(".DashboardAccount-Card-img img").debug()).toBe(true);
    wrapper.find(".DashboardAccount-Card-img img").forEach((node) => {
      expect(node.props().src.default).not.toBe("");
    });

    expect(wrapper.exists(".DashboardAccount-Card")).toEqual(true);
    expect(wrapper.exists(".DashboardAccount-Card-img")).toEqual(true);
    expect(wrapper.exists(".DashboardAccount-Card-info")).toEqual(true);
    expect(wrapper.exists(".DashboardAccount-Headings")).toEqual(true);
    expect(wrapper.exists(".DashboardAccount-body")).toEqual(true);
    expect(wrapper.exists(".DashboardAccount-Cards-Body")).toEqual(true);
    expect(wrapper.exists(".DashboardAccount-active")).toEqual(true);
  });

  it("DayCareBookingdetails 2", () => {
    // expect(wrapper.find(".DashboardAccount-Card-img img").debug()).toBe(true);
    wrapper.find(".DashboardAccount-Card-img img").forEach((node) => {
      expect(node.props().src.default).not.toBe("");
    });
  });
  it("DayCareBookingdetails 2", () => {
    expect(wrapper.exists(".DashboardAccountCards_personalInfoClick")).toEqual(
      true
    );
    wrapper
      .find(".DashboardAccountCards_personalInfoClick")
      .first()
      .simulate("click");
    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard-personalinfo");
  });
  it("DayCareBookingdetails 2", () => {
    expect(wrapper.exists(".DashboardAccountCards_LoginSecurityClick")).toEqual(
      true
    );
    wrapper
      .find(".DashboardAccountCards_LoginSecurityClick")
      .first()
      .simulate("click");
    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard-security");
  });
  it("DayCareBookingdetails 2", () => {
    expect(
      wrapper.exists(".DashboardAccountCards_paymentsPayoutsClick")
    ).toEqual(true);
    wrapper
      .find(".DashboardAccountCards_paymentsPayoutsClick")
      .first()
      .simulate("click");
    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard-payment");
  });
  it("DayCareBookingdetails 2", () => {
    expect(wrapper.exists(".DashboardAccountCards_notificationsClick")).toEqual(
      true
    );
    wrapper
      .find(".DashboardAccountCards_notificationsClick")
      .first()
      .simulate("click");
    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith("/notifications");
  });
  it("DayCareBookingdetails 2", () => {
    expect(wrapper.exists(".DashboardAccountCards_privacyClick")).toEqual(true);
    wrapper
      .find(".DashboardAccountCards_privacyClick")
      .first()
      .simulate("click");
    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard-privacy");
  });
  it("DayCareBookingdetails 2", () => {
    expect(
      wrapper.exists(".DashboardAccountCards_globalPreferencesClick")
    ).toEqual(true);
    wrapper
      .find(".DashboardAccountCards_personalInfoClick")
      .first()
      .simulate("click");
    expect(mockHistoryPush).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard-personalinfo");
  });
});
