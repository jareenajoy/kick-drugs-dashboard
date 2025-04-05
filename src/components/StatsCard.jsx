import { Card } from 'react-bootstrap';

const StatsCard = ({ title, count, growth, increase, color }) => (
  <Card className="text-center shadow-sm border-0" style={{ backgroundColor: color }}>
    <Card.Body>
      <Card.Title className="fw-bold text-primary">{title}</Card.Title>
      <h2 className="fw-bold">{count.toLocaleString()}</h2>
      <div className='d-flex justify-content-between align-items-center w-100'>
      <p className="text-success mb-1 fw-bold">+{growth}%</p>
      <small className="text-muted">+{increase} this week</small>
      </div>
    </Card.Body>
  </Card>
);

export default StatsCard;
