import variable from "../../native-base-theme/variables/commonColor";

export const STYLE_NAME = "screen.DashboardScreen";

const generateStyle = (variables = variable) => ({
  "NativeBase.Container": {
    "NativeBase.ViewNB": {
      ".plusbutton": {
        alignItems: "center",
        marginBottom: 20,
        position: "absolute",
        bottom: 15,
        right: 30,
        "NativeBase.Button": {
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "black",
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 8,
          elevation: 5,
          borderRadius: 30,
          backgroundColor: "white",
          width: 60,
          height: 60,
        },
      },
    },
  },
  addIconSize: 50,
  addIconColor: "#40005C",
});

export const styleRule = (variables = variable) => ({
  [STYLE_NAME]: generateStyle(variables),
});
