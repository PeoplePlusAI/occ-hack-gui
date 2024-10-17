import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = {
  styles: {
    global: {
      "html, body": {
        fontFamily: "Inter, sans-serif",
        bg: "base.d400",
        color: "gray.200",
        h: "full"
      },
      "#root": {
        alignItems: "center",
        display: "flex",
        h: "full"
      }
    }
  },
  breakpoints: createBreakpoints({
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '80em',
    xl: '90em',
    xxl: '100em',
  }),
  colors: {
    base: {
      50: "#000000",
      100: "#000000",
      200: "#000000",
      300: "#90a4ae",
      400: "#78909c",
      500: "#000000",
      600: "#000000",
      700: "#000000",
      800: "#000000",
      900: "#000000",
      d100: "#000000",
      d200: "#000000",
      d400: "#000000",
      d700: "#000000",
      button1: '#3CCF91',
    }
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "inherit",
        fontWeight: "normal",
        color: "inherit"
      }
    },
    Text: {
      baseStyle: {
        fontFamily: "inherit",
        fontWeight: "normal",
        lineHeight: "tall",
        color: "inherit"
      }
    },
    Button: {
      baseStyle: {
        textTransform: "uppercase",
        letterSpacing: "widest",
        fontWeight: "normal",
        userSelect: "none"
      }
    }
  }
};

export default theme;
