/**
 * 
 */
import { getMonth } from ".";


describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function returns janvier for 2022-01-01 as date", () => {
      const date = new Date("2022-01-01");
      expect(getMonth(date)).toEqual("janvier");
    });
    it("the function returns juillet for 2022-07-08 as date", () => {
      const date = new Date("2022-07-08");
      expect(getMonth(date)).toEqual("juillet");
    });
      it("the function returns décembre for 2022-12-12 as date", () => {
        const date = new Date("2022-12-12");
        expect(getMonth(date)).toEqual("décembre");
      });
  });
});

