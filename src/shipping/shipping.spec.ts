import { CalculateShipping } from "./calculate-shipping";
import { Shipping } from "./shipping";

describe("ShippingService", () => {
  let calculateShipping: CalculateShipping;
  let sut: Shipping;

  beforeEach(() => {
    calculateShipping = new CalculateShipping();
    sut = new Shipping(calculateShipping);
  });

  test("should be defined", () => {
    expect(sut).toBeDefined();
  });

  test("should return free shipping cost if calculated value is less than R$ 10,00", () => {
    const result = sut.getCost({ distance: 44, weight: 7, rate: 0.02 });
    expect(result).toBe(0);
  });

  test("should return the shipping cost amount to be paid by the customer", () => {
    const result = sut.getCost({ distance: 100, weight: 9, rate: 0.02 });
    expect(result).toBe(18);
  });

  test("should calls with correctly params", () => {
    const spy = jest.spyOn(sut, "getCost");

    sut.getCost({ distance: 100, weight: 9, rate: 0.02 });

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith({ distance: 100, weight: 9, rate: 0.02 });
    expect(spy).toHaveReturnedWith(18);
  });

  test("should calls calculate shipping with correclty params", () => {
    const spy = jest.spyOn(calculateShipping, "calculate");

    sut.getCost({ distance: 100, weight: 9, rate: 0.02 });

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(100, 9, 0.02);
    expect(spy).toHaveReturnedWith(18);
  });
});
