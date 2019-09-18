export enum Category {
  Primitives = "primitives",
  Objects = "objects",
  Arrays = "arrays",
  Booleans = "booleans",
  Falsy = "falsy",
  Truthy = "truthy",
  False = "false",
  True = "true",
  Null = "null",
  Undefined = "undefined",
  Number = "number",
  NaN = "NaN",
  String = "string",
  Symbol = "symbol",
  ObjectEmpty = "object-empty",
  ObjectMixed = "object-mixed",
  ArrayEmpty = "array-empty",
  ArrayBooleans = "array-booleans",
  ArrayNulls = "array-nulls",
  ArrayNumbers = "array-numbers",
  ArrayStrings = "array-strings",
  ArraySymbols = "array-symbols",
  ArrayObjects = "array-objects",
  ArrayMixed = "array-mixed",
  Function = "function"
}

interface Sample {
  categories: Category[];
  value: unknown;
}

export default (exclude: string[] = []): unknown[] => {
  const samples: Sample[] = [
    {
      categories: [
        Category.Primitives,
        Category.Booleans,
        Category.Falsy,
        Category.False
      ],
      value: false
    },
    {
      categories: [
        Category.Primitives,
        Category.Booleans,
        Category.Truthy,
        Category.True
      ],
      value: true
    },
    {
      categories: [Category.Objects, Category.Falsy, Category.Null],
      value: null
    },
    {
      categories: [Category.Primitives, Category.Falsy, Category.Undefined],
      value: undefined
    },
    {
      categories: [Category.Primitives, Category.Truthy, Category.Number],
      value: 1
    },
    {
      categories: [Category.Primitives, Category.Falsy, Category.Number],
      value: 0
    },
    {
      categories: [
        Category.Primitives,
        Category.Falsy,
        Category.Number,
        Category.NaN
      ],
      value: NaN
    },
    {
      categories: [Category.Primitives, Category.Truthy, Category.String],
      value: "string-value"
    },
    {
      categories: [Category.Primitives, Category.Falsy, Category.String],
      value: ""
    },
    {
      categories: [Category.Primitives, Category.Truthy, Category.Symbol],
      value: Symbol("sample-symbol")
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Falsy,
        Category.ArrayEmpty
      ],
      value: []
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Truthy,
        Category.ArrayBooleans
      ],
      value: [true, false]
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Truthy,
        Category.ArrayNulls
      ],
      value: [null]
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Truthy,
        Category.ArrayNumbers
      ],
      value: [1]
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Truthy,
        Category.ArrayStrings
      ],
      value: ["string-value", ""]
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Truthy,
        Category.ArraySymbols
      ],
      value: [Symbol("ArraySymbols-sample")]
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Truthy,
        Category.ArrayObjects
      ],
      value: [{}, { sample: "value" }]
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Truthy,
        Category.ArrayMixed
      ],
      value: [
        true,
        false,
        null,
        undefined,
        1,
        "string",
        Symbol("ArrayMixed-sample"),
        {},
        [],
        (): void => {}
      ]
    },
    {
      categories: [
        Category.Objects,
        Category.Arrays,
        Category.Truthy,
        Category.ArrayBooleans
      ],
      value: [true, false]
    },
    {
      categories: [Category.Objects, Category.Truthy, Category.ObjectEmpty],
      value: {}
    },
    {
      categories: [Category.Objects, Category.Truthy, Category.ObjectMixed],
      value: {
        1: true,
        two: false,
        three: null,
        four: undefined,
        five: 1,
        six: "string",
        seven: Symbol("ObjectMixed-sample"),
        eight: {},
        nine: [],
        ten: (): void => {}
      }
    },
    {
      categories: [Category.Objects, Category.Truthy, Category.Function],
      value: (): void => {}
    }
  ];

  return samples
    .filter(
      sample =>
        !sample.categories.filter(category => exclude.includes(category)).length
    )
    .map(sample => sample.value);
};
