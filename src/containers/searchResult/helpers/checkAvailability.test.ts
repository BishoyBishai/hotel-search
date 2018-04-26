import * as moment from "moment";
import { checkAvailability, convertStringToMoment } from "./checkAvailability";
describe("Check Availability", () => {
  const availability = [
    { from: "10-10-2020", to: "15-10-2020" },
    { from: "25-10-2020", to: "15-11-2020" },
    { from: "10-12-2020", to: "15-12-2020" }
  ];
  test("should return true when when period in range", () => {
    let from = convertStringToMoment("26-10-2020"),
      to = convertStringToMoment("13-11-2020");
    expect(checkAvailability(availability, from, to)).toBeTruthy();
  });

  test("should return true when period equal range", () => {
    let from = convertStringToMoment("10-10-2020"),
      to = convertStringToMoment("15-10-2020");
    expect(checkAvailability(availability, from, to)).toBeTruthy();
  });
  test("should return false when period out of range", () => {
    let from = convertStringToMoment("9-10-2020"),
      to = convertStringToMoment("15-10-2020");
    expect(checkAvailability(availability, from, to)).toBeFalsy();
  });
  test("should return false when period out of range", () => {
    let from = convertStringToMoment("10-10-2020"),
      to = convertStringToMoment("17-10-2020");
    expect(checkAvailability(availability, from, to)).toBeFalsy();
  });
});
