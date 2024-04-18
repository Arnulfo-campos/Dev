import TablaConsultaSemilla from "../../components/dashboard/TablaConsultaSemilla";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const ConsultaSemilla = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <TablaConsultaSemilla />
      </Col>
      </Row>
  );
};

export default ConsultaSemilla;
