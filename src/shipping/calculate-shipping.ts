export class CalculateShipping {
  calculate(distance: number, weight: number) {
    return weight * 0.2 * distance;
  }
}
