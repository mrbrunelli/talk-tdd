import { CalculateShipping } from "./calculate-shipping";

interface IShippingInfo {
  address?: string;
  distance: number;
  weight: number;
}

export class Shipping {
  constructor(private readonly calculateShipping: CalculateShipping) {}

  getCost(shippingInfo: IShippingInfo) {
    return this.calculateShipping.calculate(
      shippingInfo.distance,
      shippingInfo.weight
    );
  }
}
