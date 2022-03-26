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

    const result = sut.getCost({ distance: 44, weight: 7 });
    expect(result).toBe(0);
  });
});
