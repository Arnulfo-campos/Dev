import TablaConsultaFungicida from "../../components/dashboard/TablaConsultaFungicida";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaSecado = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaFungicida />
      </Col>
      </Row>
  );
};

export default ConsultaSecado;
