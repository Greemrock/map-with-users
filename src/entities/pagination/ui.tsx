import React from "react";
import styles from "./pagination.module.scss";

export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
  disabled?: boolean;
}

export const Paginate: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
  disabled = false,
}) => {
  return (
    <div className={styles.paginationWrapper}>
      <button
        onClick={() => handlePagination(page - 1)}
        type="button"
        disabled={page === 1 || disabled}
        className={[
          styles.pageItem,
          page === 1 || disabled ? styles.disabled : "",
        ].join(" ")}
      >
        {"<"}
      </button>

      <p className={styles.info}>
        {page} of {totalPages}
      </p>

      <button
        onClick={() => handlePagination(page + 1)}
        type="button"
        disabled={page === totalPages || disabled}
        className={[
          styles.pageItem,
          page === totalPages || disabled ? styles.disabled : "",
        ].join(" ")}
      >
        {">"}
      </button>
    </div>
  );
};
