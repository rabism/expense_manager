import variable from "../../native-base-theme/variables/commonColor";
export const STYLE_NAME = "componenet.appform";
const generateStyle = (variables = variable) => ({});

export const styleRule = (variables = variable) => ({
  [STYLE_NAME]: generateStyle(variables),
});
