import { amber, deepOrange, grey } from "@mui/material/colors";

const commonColors = {
  primary: {
    main: "#2980b9",
    light: "#3498db",
  },
  highlight: {
    main: "#16a085",
  },
};
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          ...commonColors,
          divider: grey[300],

          background: {
            default: "#F4F6F9",
          },
          text: {
            primary: "#000000",
            secondary: grey[600],
          },
        }
      : {
          ...commonColors,
          divider: grey[500],

          background: {
            default: "#092635",
          },
          text: {
            primary: "#ffffff",
            secondary: grey[400],
          },
        }),
  },
});
export { getDesignTokens };
