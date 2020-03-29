const packBits = require("./packBits");
const encode = packBits.encode;

describe("packBits encode test", () => {
  it("argument is not string type", () => {
    let message = "";
    try {
      encode(4444);
    } catch (e) {
      message = e.message;
    }
    expect(message).toBe("文字列を引数に渡して下さい。");
  });

  it("AAAA =>  4A", () => {
    expect(encode("AAAA")).toBe("4A");
  });

  it("zzzz =>  4z", () => {
    expect(encode("zzzz")).toBe("4z");
  });

  it("AaAaAAAA =>  -4AaAa4A", () => {
    expect(encode("AaAaAAAA")).toBe("-4AaAa4A");
  });

  it("BBBBBbBb =>  5B-3bBb", () => {
    expect(encode("BBBBBbBb")).toBe("5B-3bBb");
  });

  it("AAAAAAABCBCACCCCC =>  7A-5BCBCA5C", () => {
    expect(encode("AAAAAAABCBCACCCCC")).toBe("7A-5BCBCA5C");
  });

  it("abbbccccde =>  -1a3b4c-2de", () => {
    expect(encode("abbbccccde")).toBe("-1a3b4c-2de");
  });

  it("ABCDDAB =>  -3ABC2D-2AB", () => {
    expect(encode("ABCDDAB")).toBe("-3ABC2D-2AB");
  });
});
