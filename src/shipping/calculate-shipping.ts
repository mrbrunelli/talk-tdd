export class CalculateShipping {
  calculate(distance: number, weight: number, rate: number) {
    return parseFloat((weight * rate * distance).toFixed(2));
  }
}
