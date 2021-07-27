import React from "react";
import { Table } from "react-bootstrap";

export default function CompanyTable({
  companies,
  currPage,
  companiesPerPage,
  branchSelected,
  degreeSelected,
}) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>CGPA Min</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, idx) => (
            <tr>
              <td>{(currPage - 1) * companiesPerPage + idx + 1}</td>
              <td>{item.name}</td>
              <td>
                {branchSelected !== ""
                  ? item.branches.find(
                      (br) =>
                        br.branch === branchSelected &&
                        br.degreeType === degreeSelected &&
                        br.programmeType === "B Tech"
                    )?.cgpaMin
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
