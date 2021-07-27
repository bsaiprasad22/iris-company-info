import React from "react";
import { Pagination } from "react-bootstrap";
export default function Paginate({
  companiesPerPage,
  totalCompanies,
  paginate,
  currPage,
}) {
  return (
    <Pagination>
      <Pagination.First onClick={() => paginate(1)} href="#" />

      {currPage - 1 >= 1 && (
        <Pagination.Prev onClick={() => paginate(currPage - 1)} href="#" />
      )}

      <Pagination.Item
        key={currPage}
        onClick={() => paginate(currPage)}
        href="#"
        active
      >
        {currPage}
      </Pagination.Item>
      {currPage + 1 <= Math.ceil(totalCompanies / companiesPerPage) && (
        <Pagination.Next onClick={() => paginate(currPage + 1)} href="#" />
      )}

      <Pagination.Last
        onClick={() => paginate(Math.ceil(totalCompanies / companiesPerPage))}
        href="#"
      />
    </Pagination>
  );
}
