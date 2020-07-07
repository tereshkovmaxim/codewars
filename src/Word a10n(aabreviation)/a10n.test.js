// import { abbreviate } from "./a10n";
const abbreviate = require('./a10n');

describe('Word a10n (abbreviation)', () => {

  test(`"internationalization" => "i18n"`, () => expect(abbreviate("internationalization")).toBe("i18n"));

  test(`"accessibility" => "a11y"`, () => expect(abbreviate("accessibility")).toBe("a11y"));

  test(`"Accessibility" => "A11y"`, () => expect(abbreviate("Accessibility")).toBe("A11y"));

  test(`"elephant-ride" => "e6t-r2e"`, () => expect(abbreviate("elephant-ride")).toBe("e6t-r2e"));

  test(`"elephant-rides are really fun!" => "e6t-r3s are r4y fun!"`, () => expect(abbreviate("elephant-rides are really fun!")).toBe("e6t-r3s are r4y fun!"));

});

