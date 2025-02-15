import { extendTheme } from "@chakra-ui/react";
const theme =extendTheme({
  styles: {
    global: {
      html: {
        bg: "#000000",
      },
      body: {
        bg: "#000000",
      },
    },
  },
  components: {
    Menu: {
        baseStyle: {
          list: {
            bg: "black",
            boxShadow: '0px 0px 10px 2px rgba(225,225,225,0.3);',
          },
          item: {
            bg: "black",
            _hover: {
              bg: "gray.900"
            }
          }
        }
      }
  }
});

export default theme