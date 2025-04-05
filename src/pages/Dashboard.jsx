import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStats } from "../redux/statsSlice";
import StatsSection from "../components/StatsSection";
import { Container, Row, Col, Button } from "react-bootstrap";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  return (
    <Container fluid className="py-4 px-xl-4 px-2 dashboard">
      <StatsSection />

      <Row className="mt-5">
        <Col md={6}>
          <div
            className="p-4 text-white rounded shadow register-box mb-3"
            style={{ backgroundColor: "#2446e4" }}
          >
            <div className="row align-items-center">
            <div className="col-md-6">
            <h4>Register Now</h4>
            <p className="mb-3">Lorem Ipsum is simply dummy text of the printing.</p>
            <Button variant="light" className="me-2">Individual</Button>
            <Button className="btn-org" variant="outline-light">Organisation</Button>
            </div>

            <div className="col-md-6">
              <img src="/img/img1.png" className="img-fluid mt-3 mt-xl-0"/>
            </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div
            className="p-4 text-white rounded shadow register-box mb-3"
            style={{ backgroundColor: "#5271ff" }}
          >
              <div className="row align-items-center">
              <div className="col-md-6">
            <h4>Event Materials</h4>
            <p className="mb-3">Lorem Ipsum is simply dummy text of the printing.</p>
            <Button variant="light">View More</Button>
</div>
            <div className="col-md-6">
              <img src="/img/img2.png" className="img-fluid mt-3 mt-xl-0"/>
            </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
