export const TypeOf = (object: any) => {
  return [null, undefined].includes(object)
    ? object
    : Object.getPrototypeOf(object)?.constructor?.name;
};

interface StyleCreatorTypes {
  data: any;
  excludes?: string[];
}

export function styleCreator({ data, excludes = [] }: StyleCreatorTypes) {
  const innerExcludes = ['children', 'theme', 'variant', ...excludes];
  return Object.keys(data || {})
    .filter((key) => !innerExcludes.includes(key))
    .map((key) => `${key.replace(/([A-Z])/g, '-$1')}: ${data[key]}`)
    .join(';')
    .toLowerCase();
}
