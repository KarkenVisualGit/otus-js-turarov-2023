const sumof3digitNumber = require('../src/sumof3digits');

describe("sum of digits in 3-digit number", () => {
  it("returns 18 for 567", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "567");
    expect(sumof3digitNumber()).toBe(18);
  });
  it("returns 6 for 123", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "123");
    expect(sumof3digitNumber()).toBe(6);
  });
  it("returns 14 for 257", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "257");
    expect(sumof3digitNumber()).toBe(14);
  });
});
