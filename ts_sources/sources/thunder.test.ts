declare var describe;
declare var test;
declare var expect;

import {Thunder} from "./thunder";

describe("Dummy Test Suite", () => {

    test("Testing Thunder", () => {
        const instance = new Thunder("test");
        expect(instance.getValue()).toBe("test");
    });

});
