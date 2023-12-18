import { expect, test } from "vitest";

import { iclinic } from "../dist/ts/iClinic/theme";

test("iclinic theme tokens should match snapshot", () => {
  try {
    expect(iclinic).toMatchSnapshot();
  } catch (err) {
    console.error(
      '❌ Ops! You are changing final iClinic theme tokens, if you\'re really sure about your changes please update snapshot through command "npm run test:update" and after review commit your changes'
    );
    throw err;
  }
});
