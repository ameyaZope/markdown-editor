import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import axios from "axios";

export default function HamburgerTopList() {
  const texts = ["Login", "Markdown Syntax"];
  const handleClickListItem = () => {
    alert("Congrats! You have logged In");
    console.log("You have logged in");
    axios.get(`https://reqres.in/api/users/2`).then((response) => {
      return response.data.data;
    });
  };
  return (
    <List>
      <ListItem button key={texts[0]} onClick={handleClickListItem}>
        <ListItemIcon>
          <PowerSettingsNewIcon style={{ color: "green" }} />
        </ListItemIcon>
        <ListItemText primary={texts[0]} />
      </ListItem>

      <ListItem button key={texts[1]}>
        <ListItemIcon>
          <PowerSettingsNewIcon style={{ color: "blue" }} />
        </ListItemIcon>
        <ListItemText primary={texts[1]} />
      </ListItem>
    </List>
  );
}
