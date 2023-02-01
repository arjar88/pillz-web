import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MedicationIcon from "@mui/icons-material/Medication";
import PeopleIcon from "@mui/icons-material/People";
import logo from "../images/pillz.png";

function Menu() {
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img
        style={{ paddingLeft: "4em", marginTop: "2em", marginBottom: "2em" }}
        src={logo}
        width="70"
        height="80"
      ></img>

      <Divider />
      <List>
        {[
          { text: "My Pills", icon: <MedicationIcon /> },
          { text: "Friends", icon: <PeopleIcon /> },
          { text: "Random", icon: <PeopleIcon /> },
        ].map((obj) => (
          <ListItem key={obj.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
export default Menu;
