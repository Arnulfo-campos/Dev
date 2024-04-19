import TablaConsultaControlHierbas from "../../components/dashboard/TablaConsultaControlHierbas";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaControlHierbas = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaControlHierbas/>
      </Col>
      </Row>
  );
};

export default ConsultaControlHierbas;
