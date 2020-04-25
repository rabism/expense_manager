import variable from "../../native-base-theme/variables/commonColor";
export const STYLE_NAME = "screen.TransactionEntryScreen";
const generateStyle = (variables = variable) => ({
  "NativeBase.Container": {
    "NativeBase.Content": {
      "NativeBase.ViewNB": {
        ".EntryForm": {
          "NativeBase.Form": {
            "NativeBase.Item": {
              // height: 100,
              "NativeBase.Label": {
                //fontSize: 40,
              },
            },
          },
        },
      },
    },
  },
});

export const styleRule = (variables = variable) => ({
  [STYLE_NAME]: generateStyle(variables),
});
