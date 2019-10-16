import Sandbox from "./sandbox";

jest.mock("./sandbox");

xit("functions in sandbox are mocked", () => {
  Sandbox.testFunction.mockReturnValue("42");
  expect(Sandbox.testFunction()).toBe("42");
})

test.todo("");
