//jsc file
       

  const inputChange = (e) => {
    const { name, value } = e.target;
    let UpdatedVal = value.trimStart();
    setformdata({
      ...formdata,
      [name]: UpdatedVal,
    });
  };




                 <Input
                  name="fullName"
                  placeholder={t("Full Name")}
                  value={fullName}
                  onChange={inputChange}
                  ErrorClass="Error"
                  errorText={BlurCheck["fullName"] && errors.fullName}
                  onBlur={(event) => {
                    setBlurCheck({ ...BlurCheck, [event.target.name]: true });
                    validate();
                  }}
                />






/// test code

describe("App", () => {
  let app;
  let formdata = {};
  const name = "dummy Name";
  const email = "myEmail@gmail.com";
  const phone = "9063488446";
  const password = "Qwerty@1234";
  beforeEach(() => {
    app = enzyme.mount(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <SignupPage
              formdata={formdata}
              setformdata={(e) => {
                formdata = {
                  ...formdata,
                  ...e,
                };
              }}
              count={1}
              setcount={() => {}}
            />{" "}
          </I18nextProvider>
        </PersistGate>
      </Provider>
    );
  });

    // input changes fullName
    app
      .find('input[name="fullName"]')
      .simulate("change", { target: { name: "fullName", value: name } });
    expect(formdata.fullName).toBe(name);


})
