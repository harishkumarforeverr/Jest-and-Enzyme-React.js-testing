  const mEvent = {
      preventDefault: jest.fn(),
    };
    expect(wrapper.exists(".FormLogo")).toEqual(true);

    wrapper.find(".FormLogo").at(1).simulate("click", mEvent);
    expect(mEvent.preventDefault).toBeCalledTimes(1);
