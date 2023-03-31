import { Paginate } from "entities/pagination";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { UserType } from "shared/types";
import { Card } from "shared/ui/card";
import { api } from "../../shared/api";
import styles from "./users.module.scss";

export const Users: React.FC = () => {
  const [cookie] = useCookies(["token"]);
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const getImage = async (url: string) => {
    const picture = await api.getImage(cookie.token, url);
    return URL.createObjectURL(picture.data);
  };

  const getUsers = async (page: number = 1) => {
    setLoading(true);
    try {
      console.log("updatePage", page);

      const getUsersRes = await api.getUsers(cookie.token, page, postsPerPage);
      const { people, num_pages } = getUsersRes.data.data;

      const imagesRes = await Promise.all([
        getImage(people[0].image_ref),
        getImage(people[1].image_ref),
        getImage(people[2].image_ref),
      ]);

      const data = imagesRes.map((item, index) => {
        return {
          id: people[index].id,
          name: people[index].name,
          surname: people[index].surname,
          midname: people[index].midname,
          image_ref: item,
        };
      });

      setUsers(data);
      setTotalPages(num_pages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePages = (updatePage: number) => {
    setCurrentPage(updatePage);
    getUsers(updatePage);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.wrapper_title}>List of users</h3>

        {loading ? (
          "Loading..."
        ) : (
          <div className={styles.container}>
            {users.map(({ id, name, surname, midname, image_ref }) => (
              <Card key={id}>
                <>
                  <img src={image_ref} alt={surname} />
                  <p>
                    <span>{name}</span>&nbsp;<span>{surname}</span>&nbsp;
                    <span>{midname}</span>
                  </p>
                </>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Paginate
        page={currentPage}
        totalPages={totalPages}
        handlePagination={handlePages}
        disabled={loading}
      />
    </div>
  );
};
