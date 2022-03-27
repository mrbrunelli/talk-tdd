import { CalculateShipping } from "./calculate-shipping";

type ShippingInfoType = {
  address?: string;
  distance: number;
  weight: number;
  rate: number;
};

export class Shipping {
  constructor(private readonly calculateShipping: CalculateShipping) {}

  getCost(shippingInfo: ShippingInfoType) {
    const result = this.calculateShipping.calculate(
      shippingInfo.distance,
      shippingInfo.weight,
      shippingInfo.rate
    );

    return result > 10 ? result : 0;
  }
}
