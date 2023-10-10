import { extendTheme, theme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

extendTheme({ config: config });

export default theme;
