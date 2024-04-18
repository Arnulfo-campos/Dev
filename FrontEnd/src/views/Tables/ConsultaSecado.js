import TablaConsultaSecado from "../../components/dashboard/TablaConsultaSecado";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaSecado = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaSecado />
      </Col>
      </Row>
  );
};

export default ConsultaSecado;
