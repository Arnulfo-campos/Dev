import TablaConsultaLavado from "../../components/dashboard/TablaConsultaLavado";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaLavado = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaLavado />
      </Col>
      </Row>
  );
};

export default ConsultaLavado;
