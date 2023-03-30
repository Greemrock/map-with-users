import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { api } from "shared/api";
import { Main } from "../pages/main";
import "./styles/index.scss";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  console.log(",.,.,");

  useEffect(() => {
    const login = async () => {
      try {
        const res = await api.login(
          process.env.REACT_APP_USERNAME,
          process.env.REACT_APP_PASSWORD
        );
        setCookie("token", `Bearer ${res.data.access_token}`);
      } catch (error) {
        console.log(error);
      }
    };

    login();
  }, [setCookie]);

  return <Main />;
}

export default App;
