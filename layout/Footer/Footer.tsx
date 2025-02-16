import { List, ListItem, styled } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

const FooterWrap = styled(Box)(({ theme }) => ({
  padding: "45px 0",
  background: theme.palette.customColors?.bannerBg,
  ".ftr-list": {
    display: "flex",
    alignItems: "center",
    padding: 0,
    "@media (max-width: 1199px)": {
      justifyContent: "center",
      margin: "8px 0",
      flexWrap: "wrap"
    },
    li: {
      width: "auto",
      marginRight: "35px",
      "@media (max-width: 899px)": {
        margin: "0 17px"
      },
      "&:last-child": {
        marginRight: 0,
        "@media (max-width: 899px)": {
          marginRight: "17px"
        }
      },
      a: {
        fontWeight: 400,
        fontSize: "15px",
        textTransform: "capitalize"
      }
    }
  },
  ".ftr-logo": {
    marginRight: "28px",
    lineHeight: 0,
    "@media (max-width: 1199px)": {
      maxWidth: "180px",
      margin: "0 auto"
    }
  },
  ".social-list": {
    display: "flex",
    alignItems: "center",
    padding: 0,
    marginLeft: "50px",
    "@media (max-width: 1199px)": {
      justifyContent: "center",
      marginLeft: 0,
      marginBottom: "15px"
    },
    li: {
      width: "auto",
      marginRight: "20px",
      "&:last-child": {
        marginRight: 0
      },
      img: {
        "&:hover": {
          filter: "brightness(0)"
        },
        "@media (max-width: 991px)": {
          width: "20px",
          height: "20px"
        }
      }
    }
  },
  ".copy": {
    marginLeft: "auto",
    fontSize: "14px",
    color: theme.palette.action.active
  },
  ".ftr-wrapper": {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1199px)": {
      display: "block",
      textAlign: "center"
    }
  }
}));

const Footer = () => {
  const navItems = [
    {
      name: "home",
      route: "/"
    },
    {
      name: "About",
      route: "/about"
    },
    {
      name: "Products",
      route: "/products"
    },
    {
      name: "Package",
      route: "/package"
    },
    {
      name: "Contact",
      route: "/contact"
    }
  ];
  const router = useRouter();

  return (
    <>
      <FooterWrap>
        <Container fixed>
          <Box className="ftr-wrapper">
            <Link href="/" className="ftr-logo">
              LOGO
            </Link>

            <List className="ftr-list">
              {navItems.map((item: any, index: number) => (
                <ListItem disablePadding key={index}>
                  <Link
                    href={item?.route}
                    key={item.name}
                    className={router.pathname === item.route ? "active" : ""}
                  >
                    {item?.name}
                  </Link>
                </ListItem>
              ))}
            </List>

            <Box className="copy">
              © 2023 <Link href="/">Career Utility.</Link> All Rights Reserved.
            </Box>
          </Box>
        </Container>
      </FooterWrap>
    </>
  );
};

export default Footer;
