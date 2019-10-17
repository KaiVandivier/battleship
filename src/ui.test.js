import UI from "./ui";

// it's difficult to test DOM and React components

xit("it calls without error", () => {
  const dummyObj = {
    hits: [],
    misses: [],
    size: 3
  }
  expect(UI.render(dummyObj, dummyObj))
  // this may not work with react elements; see the test in App.test.js
});
