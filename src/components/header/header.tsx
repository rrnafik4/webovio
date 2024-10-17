import { Button } from "@mui/material";
import "./index.scss";
import MenuIcon from "@mui/icons-material/Menu";
import image from "../png/image.png";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container _container">
          <div className="header-logo">
            <img src={image} alt="logo" />
          </div>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              minWidth: 40,
              height: 40,
              borderRadius: 60,
            }}
          >
            <MenuIcon />
          </Button>
        </div>
      </header>
    </div>
  );
};
