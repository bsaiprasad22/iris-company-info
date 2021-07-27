import React from "react";
import data from "./data.json";
import { Form, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import CompanyTable from "./CompanyTable";
import Paginate from "./Paginate";
import { useEffect } from "react";

function Page() {
  const [branchSelected, setBranchSelected] = useState("");
  const [degreeSelected, setDegreeSelected] = useState("Major");
  const [companies, setCompanies] = useState([]);
  const [currPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(10);

  useEffect(() => {
    setCompanies(
      data.filter(
        (item) =>
          branchSelected === "" ||
          item.branches.some(
            (each) =>
              each.branch === branchSelected &&
              degreeSelected === each.degreeType &&
              each.programmeType === "B Tech"
          )
      )
    );
  }, [branchSelected, degreeSelected]);

  const indexOfLastCompany = currPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currCompanies = companies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  const paginate = (pageNo) => setCurrentPage(pageNo);

  return (
    <Container>
      <Row className="justify-content-md-center my-3">
        <h1>Company Info</h1>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg={8} className="justify-content-md-center my-3">
          <Form>
            <Form.Group>
              <Form.Label>Branch</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setBranchSelected(e.target.value);
                }}
              >
                <option value="">All branches</option>
                <option value="Computer Science and Engineering">
                  Computer Science and Engineering
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Electrical and Electronics Engineering">
                  Electrical and Electronics Engineering
                </option>
                <option value="Electronics and Communication Engineering">
                  Electronics and Communication Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Metallurgical and Materials Engineering">
                  Metallurgical and Materials Engineering
                </option>
                <option value="Mining Engineering">Mining Engineering</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Degree Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setDegreeSelected(e.target.value);
                }}
              >
                <option value="Major">Major</option>
                <option value="Minor">Minor</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center my-3">
        Total Companies: {companies.length}
        <div className="py-2" />
        <CompanyTable
          companies={currCompanies}
          currPage={currPage}
          companiesPerPage={companiesPerPage}
          branchSelected={branchSelected}
          degreeSelected={degreeSelected}
        />
        <Paginate
          companiesPerPage={companiesPerPage}
          totalCompanies={companies.length}
          paginate={paginate}
          currPage={currPage}
        />
      </Row>
    </Container>
  );
}

export default Page;
