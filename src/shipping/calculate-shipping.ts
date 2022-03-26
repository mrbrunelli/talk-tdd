export class CalculateShipping {
  calculate(distance: number, weight: number, rate: number) {
    const result = parseFloat((weight * rate * distance).toFixed(2));
    return result > 10 ? result : 0;
  }
}
