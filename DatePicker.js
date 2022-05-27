JS file


 <DatePicker
                      className="signupStage2Calender"
                      placeholder={t("dob")}
                      defaultValue={dob && moment(dob)}
                      onChange={handleDobChange}
                      onBlur={(event) => {
                        setBlurCheck({ ...BlurCheck, dob: true });
                        validate();
                      }}
                      disabledDate={funturedisabledDate}
                    />
                        
                        
 const handleDobChange = (e) => {
    setformdata({
      ...formdata,
      dob: e._d.toString(),
    });
  };





test file
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


  // Formpage_img_bannerImage
  it("Check whether the DOM ELEMENT PRESENT OR NOT test cases and check the image url of the signupPage  in SingUpPage", (done) => {
    const mEvent = {
      preventDefault: jest.fn(),
      _d: now,
    };

    /// DATE of BIRTH
    wrapper.find(".signupStage2Calender").first().prop("onChange")(mEvent);
    expect(formdata.dob).toBe(now.toString()); 
    done();
  });
 });
