import TablaConsultaTostado from "../../components/dashboard/TablaConsultaTostado";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaTostado = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaTostado />
      </Col>
      </Row>
  );
};

export default ConsultaTostado;
