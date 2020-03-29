const packBits = require("./packBits");
const encode = packBits.encode;
const decode = packBits.decode;

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

describe("packBits decode test", () => {
  it("argument is not string type", () => {
    let message = "";
    try {
      decode(4444);
    } catch (e) {
      message = e.message;
    }
    expect(message).toBe("文字列を引数に渡して下さい。");
  });

  it("4A => AAAA", () => {
    expect(decode("4A")).toBe("AAAA");
  });

  it("4z => zzzz", () => {
    expect(decode("4z")).toBe("zzzz");
  });

  it("-4AaAa4A => AaAaAAAA", () => {
    expect(decode("-4AaAa4A")).toBe("AaAaAAAA");
  });

  it("5B-3bBb => BBBBBbBb", () => {
    expect(decode("5B-3bBb")).toBe("BBBBBbBb");
  });

  it("7A-5BCBCA5C => AAAAAAABCBCACCCCC", () => {
    expect(decode("7A-5BCBCA5C")).toBe("AAAAAAABCBCACCCCC");
  });

  it("-1a3b4c-2de => abbbccccde", () => {
    expect(decode("-1a3b4c-2de")).toBe("abbbccccde");
  });

  it("-3ABC2D-2AB => ABCDDAB", () => {
    expect(decode("-3ABC2D-2AB")).toBe("ABCDDAB");
  });
});
