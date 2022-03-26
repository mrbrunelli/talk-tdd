import { CalculateShipping } from "./calculate-shipping";
import { ShippingService } from "./shipping";

describe("ShippingService", () => {
  test("should be defined", () => {
    const calculateShipping = new CalculateShipping();
    const shippingService = new ShippingService(calculateShipping);

    expect(shippingService).toBeDefined();
  });
});
