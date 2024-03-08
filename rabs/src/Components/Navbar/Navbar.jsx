import * as React from "react";
import "./Nav.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../CardContext/CardContext";
import { Badge } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const cart = useCart();
  console.log(cart);

  const [navbarData, setNavbarData] = React.useState([
    { id: 1, name: "Home", link: "" },
    { id: 2, name: "Shop", link: "shop" },
    { id: 3, name: "Categories", link: "categories" },
    { id: 4, name: "Cart", link: "cart" },
  ]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCart = () => {
    setNavbarData((prev) =>
      prev.map((key) => {
        if (key?.link === "cart") {
          return { ...key, values: cart?.cart?.length };
        }
        return { ...key };
      })
    );
  };

  React.useEffect(() => {
    handleCart();
    return () => {
      handleCart();
    };
  }, [cart?.cart]);

  console.log(navbarData);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      className="Navbar"
      style={{ backgroundColor: "#9C555D" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <StorefrontIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navbarData.map((ele) => (
                <>
                  {ele?.values ? (
                    <MenuItem key={ele.id} onClick={handleCloseNavMenu}>
                      <Link
                        to={`/${ele.link}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Badge badgeContent={ele?.values} color="primary">
                          <Typography textAlign="center">{ele.name}</Typography>
                        </Badge>
                      </Link>
                    </MenuItem>
                  ) : (
                    <MenuItem key={ele.id} onClick={handleCloseNavMenu}>
                      <Link
                        to={`/${ele.link}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center">{ele.name}</Typography>
                      </Link>
                    </MenuItem>
                  )}
                </>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            STORE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {navbarData.map((ele) => (
                <>
                  {ele?.values ? (
                    <MenuItem key={ele.id} onClick={handleCloseNavMenu}>
                      <Link
                        to={`/${ele.link}`}
                        style={{ textDecoration: "none", color: "White" }}
                      >
                        <Badge badgeContent={ele?.values} color="primary">
                          <Typography textAlign="center">{ele.name}</Typography>
                        </Badge>
                      </Link>
                    </MenuItem>
                  ) : (
                    <MenuItem key={ele.id} onClick={handleCloseNavMenu}>
                      <Link
                        to={`/${ele.link}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Typography textAlign="center">{ele.name}</Typography>
                      </Link>
                    </MenuItem>
                  )}
                </>
              ))}
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={logo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
