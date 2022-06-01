
  it("SearchLocationsImages 2", () => {
    expect(wrapper.exists(".SearchLocations-Places-Overview-Card")).toEqual(
      true
    );
    wrapper.find(".SearchLocations-Places-Overview-Card").simulate("mouseOver");
    expect(onhover_selectPlace).toBeCalledTimes(1);
  });
