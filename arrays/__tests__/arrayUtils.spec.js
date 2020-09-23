import { getArrayObjByAttrib, getIndexByAttrib } from "../arrayUtils";

let array = [
  { name: "john", instrument: "rhythm", other: "none" },
  { name: "paul", instrument: "bass", other: "vocal" },
  { name: "george", instrument: "lead", other: "vocal" },
  { name: "ringo", instrument: "drums", other: "none" }
];

describe("getArrayObjByAttrib", () => {
  it("should find object by object attribe", () => {
    let result = getArrayObjByAttrib(array, "name", "john");
    expect(result[0].name).toBe("john");
    expect(result[0].instrument).toBe("rhythm");
  });
});

describe("getIndexByAttrib", () => {
  it("should ", () => {
    let result = getIndexByAttrib(array, 'name', 'ringo')
    expect(result).toBe(3);
  });
});


