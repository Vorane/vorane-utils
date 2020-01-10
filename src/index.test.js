const { objectToCamelCase } = require("./index");

test("add 1 + 2 to equal 3", () => {
  expect(objectToCamelCase({ snake_case: "snake_case" })).toEqual({
    snakeCase: "snake_case"
  });
});
