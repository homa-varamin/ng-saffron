export function saffronDeepClone<T>(obj: T) {
  const stringObj = JSON.stringify(obj);
  const clonedObject = JSON.parse(stringObj) as T;
  return clonedObject;
}

export function saffronGetRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function saffronAddDays(date: Date, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
