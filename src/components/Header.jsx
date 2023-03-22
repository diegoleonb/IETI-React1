import { textAlign } from "@mui/system";

export const Header = (props) => {
    const { title } = props;
    const header_style = {
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
    }

  return (
    <header className="header" style={header_style}>
      <h1>{title}</h1>
    </header>
  )
};