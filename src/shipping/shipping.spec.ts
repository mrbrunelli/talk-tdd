import { CalculateShipping } from "./calculate-shipping";
import { Shipping } from "./shipping";

const makeSut = () => {
  const calculateShipping = new CalculateShipping();
  const sut = new Shipping(calculateShipping);

  return {
    calculateShipping,
    sut,
  };
};

describe("ShippingService", () => {
  test("should be defined", () => {
    const { sut } = makeSut();

    expect(sut).toBeDefined();
  });

  test("should return free shipping cost if calculated value is less than R$ 10,00", () => {
    const { sut } = makeSut();
    const result = sut.getCost({ distance: 44, weight: 7, rate: 0.02 });
    expect(result).toBe(0);
  });

  test("should return the shipping cost amount to be paid by the customer", () => {
    const { sut } = makeSut();
    const result = sut.getCost({ distance: 100, weight: 9, rate: 0.02 });
    expect(result).toBe(18);
  });

  test("should calls with correctly params", () => {
    const { sut } = makeSut();
    const spy = jest.spyOn(sut, "getCost");

    sut.getCost({ distance: 100, weight: 9, rate: 0.02 });

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith({ distance: 100, weight: 9, rate: 0.02 });
    expect(spy).toHaveReturnedWith(18);
  });
});
