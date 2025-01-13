import { expect, test } from "vitest";
import { isStringRecord } from "../record";

test("flags records with anything but a string", () => {
    //GIVEN
    const BAD_RECORD = {
        file: new File(["testBlob"], "testFile"),
        text: "Lorem Ipsum",
    };
    //THEN
    expect(isStringRecord(BAD_RECORD)).toBeFalsy();
});

test("signs off records with string values only", () => {
    //GIVEN
    const OK_RECORD = { one: "1", two: "2" };
    //THEN
    expect(isStringRecord(OK_RECORD)).toBeTruthy();
});
