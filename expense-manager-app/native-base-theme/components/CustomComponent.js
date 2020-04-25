import variable from "../variables/commonColor";
import { styleRule as settingScreen } from "../../style/screen/SettingScreen.style";
import { styleRule as dashboardScreen } from "../../style/screen/DashboardScreen.style";
export const customComponent = (variables = variable) => ({
  ...settingScreen(variables),
  ...dashboardScreen(variables),
  //...myButton(variables),
  //...HorizontalMenu(variables),
  //...VerticalMenu(variables),
});
