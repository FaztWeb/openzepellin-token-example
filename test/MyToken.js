const MyToken = artifacts.require("MyToken");

contract("MyToken", () => {
  const _name = "My Token";
  const _symbol = "MTK";
  const _decimals = 18;

  beforeEach(async () => {
    this.token = await MyToken.new(_name, _symbol);
  });

  describe("token attributes", () => {
    it("has the correct name", async () => {
      const name = await this.token.name();
      assert.equal(name, _name);
    });

    it("has the correct symbol", async () => {
      const symbol = await this.token.symbol();
      assert.equal(symbol, _symbol);
    });

    it("has the correct decimals", async () => {
      const decimals = await this.token.decimals();
      assert.equal(decimals, _decimals);
    });
  });
});
