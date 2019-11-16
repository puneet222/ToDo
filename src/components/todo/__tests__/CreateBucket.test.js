import React from "react";
import { shallow } from "enzyme";
import { CreateBucket } from "../CreateBucket";
import { Typography, Fab } from "@material-ui/core";

describe("CreateBucket Link Test", () => {
  it("should display No Task text if there are no buckets", () => {
    const component = shallow(<CreateBucket noBuckets={true} />);
    expect(component.find(Typography).length).toEqual(1);
    expect(component.find(Fab).length).toEqual(1);
  });

  it("should not display text if atleast 1 bucket is present", () => {
    const component = shallow(<CreateBucket noBuckets={false} />);
    expect(component.find(Typography).length).toEqual(0);
    expect(component.find(Fab).length).toEqual(1);
  });
});
