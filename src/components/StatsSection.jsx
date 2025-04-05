import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Spinner } from "react-bootstrap";
import StatsCard from "./StatsCard";
import { fetchStats } from "../redux/statsSlice"; 

const StatsSection = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.stats);

  
  useEffect(() => {
    if (!data) {
      dispatch(fetchStats());
    }
  }, [dispatch, data]);

  if (loading || !data) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div className="text-danger text-center mt-4">{error}</div>;
  }

  return (
    <Row className="g-4">
      <Col md={3}>
        <StatsCard
          title="Individuals"
          count={data.current.individuals}
          growth={data.growth.individuals}
          increase={data.increase.individuals}
          color="#e2ffed"
        />
      </Col>
      <Col md={3}>
        <StatsCard
          title="Organizations"
          count={data.current.organizations}
          growth={data.growth.organizations}
          increase={data.increase.organizations}
          color="#fbffe0"
        />
      </Col>
      <Col md={3}>
        <StatsCard
          title="Men"
          count={data.current.men}
          growth={data.growth.men}
          increase={data.increase.men}
          color="#eef6ff"
        />
      </Col>
      <Col md={3}>
        <StatsCard
          title="Women"
          count={data.current.women}
          growth={data.growth.women}
          increase={data.increase.women}
          color="#ffefef"
        />
      </Col>
    </Row>
  );
};

export default StatsSection;
