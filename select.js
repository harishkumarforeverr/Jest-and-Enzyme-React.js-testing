      
/// js file
  const onChangeGender = (e) => {
    setformdata({
      ...formdata,
      gender: e,
    });
  };





<Select
                      className="ant-select-gender-input signUp2Select"
                      getPopupContainer={(triggerNode) =>
                        triggerNode.parentNode
                      }
                      name="gender"
                      placeholder={t("gender")}
                      optionFilterProp="children"
                      value={gender}
                      onChange={onChangeGender}
                      onBlur={(event) => {
                        setBlurCheck({ ...BlurCheck, gender: true });
                        validate();
                      }}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value={"MALE"}>{t("male")}</Option>
                      <Option value={"FEMALE"}>{t("female")}</Option>
                    </Select>
                                                
                                                
                                                
                                                
                                                
                                                
                                                
 test file
                                                
                                                
const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

/// ZIP CODE
let now = moment();
describe("FormPage1111111", () => {
  let count = 2;
  let wrapper;
  let formdata = {};
  let module = [];

  let addressdata = {
    location: {
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      },
      geocode: {
        coordinates: [],
      },
    },
  };
  const title = `We need to ask some questions to ensure`;
  const subTitle = `we provide you the best care`;
  const profileText = `We need few more details toComplete your profileGender`;
  beforeEach(() => {
    wrapper = enzyme.mount(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <FormPageContainer
              module={module}
              setModule={(e) => {
                module = [...module, e];
              }}
              formdata={formdata}
              setformdata={(e) => {
                formdata = {
                  ...formdata,
                  ...e,
                };
                console.log("FormPageContainer formdata", e);
              }}
              addressdata={addressdata}
              setaddressdata={(e) => {
                addressdata = {
                  ...addressdata,
                  ...e,
                };
                console.log("addressdata", e);
              }}
              count={count}
              setcount={(e) => {
                count = e;
              }}
            />
          </I18nextProvider>
        </PersistGate>
      </Provider>
    );
  });
                                                
                                                
                                                
                                                

  it("Check whether the DOM ELEMENT PRESENT OR NOT test cases and check the image url of the signupPage  in SingUpPage", (done) => {
    const mEvent = {
      preventDefault: jest.fn(),
      _d: now,
    };
    // SELECT
    wrapper.find(".signUp2Select").first().prop("onChange")("MALE");
    expect(formdata.gender).toBe("MALE");

    done();
  });                         
})
                                                
                                                
                                                
