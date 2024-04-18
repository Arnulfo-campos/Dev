import TablaConsultaGerminacion from "../../components/dashboard/TablaConsultaGerminacion";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaGerminacion = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaGerminacion />
      </Col>
      </Row>
  );
};

export default ConsultaGerminacion;
