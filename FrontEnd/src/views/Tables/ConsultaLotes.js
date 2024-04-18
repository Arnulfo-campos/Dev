import TablaConsultaLotes from "../../components/dashboard/TablaConsultaLotes";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaLotes = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaLotes />
      </Col>
      </Row>
  );
};

export default ConsultaLotes;
