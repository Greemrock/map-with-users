import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { api } from "../../shared/api";
import styles from "./main.module.scss";

export interface UsersData {
  id: number;
  image_ref: string;
  midname: string;
  surname: string;
  name: string;
}

export const Main: React.FC = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  const [users, setUsers] = useState<
    Array<{
      id: any;
      name: any;
      surname: any;
      midname: any;
      image_ref: string;
    }>
  >([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const getUsersRes = await api.getUsers(cookie.token, 1);
      const { people } = getUsersRes.data.data;

      setUsers(people);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_USERNAME, process.env.REACT_APP_PASSWORD);

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
  }, []);

  const handleClick = () => {
    getUsers();
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={handleClick}>
        Click
      </button>
      {loading
        ? "Loading..."
        : users.map(({ id, name, surname, midname, image_ref }) => (
            <div key={id}>
              <p>{name}</p>
              <p>{surname}</p>
              <p>{midname}</p>
              <img src={image_ref} alt="image_ref" />
            </div>
          ))}
    </div>
  );
};
