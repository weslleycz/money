export const DBConfig = {
  name: "Dtmoney",
  version: 1,
  objectStoresMeta: [
    {
      store: "transactions",
      storeConfig: { keyPath: "id",autoIncrement: false},
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
        { name: "price", keypath: "price", options: { unique: false } },
        { name: "category", keypath: "category", options: { unique: false } },
        { name: "date", keypath: "date", options: { unique: false } },
      ],
    },
  ],
};
