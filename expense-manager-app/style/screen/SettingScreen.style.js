import variable from "../../native-base-theme/variables/commonColor";

export const STYLE_NAME = "screen.SettingScreen";

const generateStyle = (variables = variable) => ({
  "NativeBase.Container": {
    "NativeBase.Button": {
      ".customStyleProp": {
        height: 120,
        borderRadius: 35,
        backgroundColor: "red",
        width: 100,
      },
    },
    "NativeBase.Text": {
      ".boldtext": {
        color: "red",
        fontSize: 36,
      },
    },
    "NativeBase.ViewNB": {
      ".topp": {
        backgroundColor: "red",
      },
      height: 100,
      marginTop: 15,
    },
  },
});

export const styleRule = (variables = variable) => ({
  [STYLE_NAME]: generateStyle(variables),
});
