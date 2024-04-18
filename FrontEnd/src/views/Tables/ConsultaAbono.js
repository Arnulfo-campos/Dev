import TablaConsultaAbono from "../../components/dashboard/TablaConsultaAbono";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaAbono = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaAbono />
      </Col>
      </Row>
  );
};

export default ConsultaAbono;
