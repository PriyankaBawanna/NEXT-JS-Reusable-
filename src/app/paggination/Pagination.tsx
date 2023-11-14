import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./style.module.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(selected) => onPageChange(selected.selected + 1)}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.paginationPage}
        activeClassName={styles.paginationActive}
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
      />
    </div>
  );
};

export default Pagination;
