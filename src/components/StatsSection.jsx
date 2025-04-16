import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";//useSelector to access state from the Redux store.
//useDispatch to dispatch actions (like fetchStats()).
import { Row, Col, Spinner } from "react-bootstrap";
import StatsCard from "./StatsCard";
import { fetchStats } from "../redux/statsSlice"; 
//Imports the fetchStats Redux async thunk/action from your statsSlice, which fetches statistics data from an API.

const StatsSection = () => {//Defines the functional component StatsSection.
  const dispatch = useDispatch();//Initializes dispatch function to trigger Redux actions.
  const { data, loading, error } = useSelector((state) => state.stats);//Grabs data, loading, and error from the stats slice of the Redux store using useSelector.



  
  useEffect(() => {//Runs once after the component mounts (and when data changes).
    if (!data) {
      dispatch(fetchStats());//If data is not already loaded, it dispatches fetchStats() to load it.
    }
  }, [dispatch, data]);

  if (loading || !data) {//If loading is in progress or data hasn't arrived yet, it shows a centered spinner.
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {//If an error occurred during the fetch, display the error in red, centered.
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
