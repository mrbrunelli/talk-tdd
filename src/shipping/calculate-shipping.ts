export class CalculateShipping {
  calculate(distance: number, weight: number) {
    const result = parseFloat((weight * 0.02 * distance).toFixed(2));
    return result > 10 ? result : 0;
  }
}
