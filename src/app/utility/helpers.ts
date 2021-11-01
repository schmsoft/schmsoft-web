export interface SelectOption {
  optionDescription: string;
  optionValue: string;
}

export class Helpers {
  public static optionsFromEnum(enumeration: any): Array<SelectOption> {
    return Object.keys(enumeration).map((key) => ({
      optionDescription: enumeration[key].split('_').join(' ').toLowerCase(),
      optionValue: enumeration[key],
    }));
  }
}
