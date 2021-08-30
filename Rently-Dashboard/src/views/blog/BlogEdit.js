import React, { useEffect, useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
  Spinner
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import BlogForm from '../../components/forms/BlogForm'
import { get } from "functions/request";



export default (props) => {
  const [item, setItem] = useState(null);
  const id = props.match.params.id

  useEffect(() => {
    get(`/blog/${id}`)
      .then(response => {
        let res = response.data
        setItem(res)
        console.log({ blog: response.data });

      })
  }, [])


  return item && (<>
    <Header />
    {/* Page content */}
    <Container className="mt--7" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="bg-transparent">
              <h3 className="mb-0">Edit Blog</h3>
            </CardHeader>
            <CardBody>
              <BlogForm type="edit" data={item} />
            </CardBody>
          </Card>
        </div>
      </Row>
    </Container>
  </>
  );
};

