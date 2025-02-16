import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const HeaderWrap = styled(Box)(({ theme }) => ({
  ".MuiToolbar-root": {
    minHeight: "auto",
    padding: 0,
    position: "relative"
  },
  ".hdr_rgt": {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    button: {
      padding: "11px 42px",
      minWidth: "auto"
    },
    ".MuiBadge-badge": {
      right: "4px",
      top: "5px",
      minWidth: "10px",
      height: "10px"
    },
    ".cart_icon": {
      marginRight: "18px"
    }
  },
  ".headerContainer": {
    backgroundColor: "transparent !important",
    padding: "20px 0",
    transition: "all 0.4s"
  },
  ".headerLogo": {
    width: "120px",
    display: "inline-block",
    transition: "all 0.4s"
  },
  ".navbar": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    a: {
      marginRight: "45px",
      display: "inline-block",
      fontSize: "15px",
      color: theme.palette.common.black,
      "&:last-child": {
        marginRight: 0
      },
      "&:first-child": {
        marginLeft: 0
      }
    }
  }
}));
