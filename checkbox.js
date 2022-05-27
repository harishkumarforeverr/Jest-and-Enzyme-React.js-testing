
  const onChangeActivechecked = (checkedValues, key, defaultValue) => {
    console.log(checkedValues, key, defaultValue);
    if (defaultValue) {
      if (key === "medicalIssues") setradioChecked(true);
      if (key === "allergies") {
        setradioChecked1(true);
      }
      setformdata((prev) => ({
        ...prev,
        [key]: ["none"],
      }));
    } else {
      if (key === "medicalIssues") setradioChecked(false);
      if (key === "allergies") setradioChecked1(false);
      setformdata({
        ...formdata,
        [key]: checkedValues,
      });
    }
  };
  <>
          <h1>{t("Form.MedicalCondition")}</h1>
          <Checkbox
            className="Checkbox-Wrapper"
            checked={radioChecked}
            name="checkBoxSignupNone"
            // checked={active.medicalIssues}
            onChange={(e) => {
              e.preventDefault();
              onChangeActivechecked(e, "medicalIssues", true);
            }}
          >
            {t("None")}
          </Checkbox>
          <Checkbox.Group
            name="checkBoxSignupValues"
            value={medicalIssues}
            onChange={(e) => onChangeActivechecked(e, "medicalIssues", false)}
            options={MedicalConditionData}
          />
        </>












/// test file

  describe("HealthProfile count 4", () => {
    beforeEach(() => {
      wrapper = enzyme.mount(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18n}>
              <HealthProfile
                setoptions={(e) => {
                  options = {
                    ...options,
                    ...e,
                  };
                }}
                options={options}
                formdata={formdata}
                setformdata={(e) => {
                  formdata = {
                    ...formdata,
                    ...e,
                  };
                  console.log("HealthProfile formdata", e);
                }}
                count={4}
              />
            </I18nextProvider>
          </PersistGate>
        </Provider>
      );
    });
    it("snapshot test cases in FormPage11111111 ", (done) => {
      expect(wrapper.debug()).toMatchSnapshot();
      done();
    });

    it("Check whether the DOM ELEMENT PRESENT OR NOT , test cases in SingUpPage", (done) => {
      expect(wrapper.text().includes(title_4)).toBe(true);
      done();
    });

    it("check whether the checkbox is invoked or not  in SingUpPage", () => {
      const mEvent = {
        preventDefault: jest.fn(),
      };
      wrapper
        .find("input[name='checkBoxSignupNone']")
        .simulate("change", mEvent);
      wrapper.update();
      expect(mEvent.preventDefault).toBeCalledTimes(1);
      expect(
        wrapper.find("input[name='checkBoxSignupNone']").first().props().value
      ).toBe(undefined);
      expect(formdata.medicalIssues).toEqual(undefined);
      // //Diabetes
      wrapper
        .find("input[name='checkBoxSignupValues']")
        .first()
        .simulate("change", mEvent);
      wrapper.update();
      expect(mEvent.preventDefault).toBeCalledTimes(1);
      expect(
        wrapper.find("input[name='checkBoxSignupValues']").first().props().value
      ).toBe("Diabetes");
      expect(formdata.medicalIssues.includes("Diabetes")).toEqual(true);
      // //Diabetes
      wrapper
        .find("input[name='checkBoxSignupValues']")
        .last()
        .simulate("change", mEvent);
      wrapper.update();
      expect(mEvent.preventDefault).toBeCalledTimes(1);
      expect(
        wrapper.find("input[name='checkBoxSignupValues']").last().props().value
      ).toBe("Cholesterol");
      expect(formdata.medicalIssues.includes("Cholesterol")).toEqual(true);
    });

});
