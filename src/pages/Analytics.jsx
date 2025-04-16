// src/pages/Analytics.jsx

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Form, Container } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import StatsSection from "../components/StatsSection";

const COLORS = ["#ff3131", "#4c69ec", "#4c69ec"];

const districtStatsByYear = {
  "This year": [
    { name: "Kasargod", count: 23029 },
    { name: "Kannur", count: 29845 },
    { name: "Wayanad", count: 27956 },
    { name: "Kozhikode", count: 31078 },
    { name: "Malappuram", count: 30098 },
    { name: "Palakkad", count: 28120 },
    { name: "Thrissur", count: 26134 },
    { name: "Ernakulam", count: 22145 },
    { name: "Idukki", count: 29156 },
    { name: "Kottayam", count: 27210 },
    { name: "Alappuzha", count: 23480 },
    { name: "Pathanamthitta", count: 24690 },
    { name: "Kollam", count: 29067 },
    { name: "Thiruvananthapuram", count: 23891 },
  ],
  "Last year": [
    { name: "Kasargod", count: 20000 },
    { name: "Kannur", count: 28000 },
    { name: "Wayanad", count: 26000 },
    { name: "Kozhikode", count: 29000 },
    { name: "Malappuram", count: 28500 },
    { name: "Palakkad", count: 26000 },
    { name: "Thrissur", count: 25000 },
    { name: "Ernakulam", count: 20000 },
    { name: "Idukki", count: 27000 },
    { name: "Kottayam", count: 25000 },
    { name: "Alappuzha", count: 22000 },
    { name: "Pathanamthitta", count: 23000 },
    { name: "Kollam", count: 27000 },
    { name: "Thiruvananthapuram", count: 21000 },
  ],
};

const pieChartDataByDistrict = {
  Kottayam: [
    { name: "Men", value: 19512 },
    { name: "Women", value: 10452 },
  ],
  Kozhikode: [
    { name: "Men", value: 21000 },
    { name: "Women", value: 10078 },
  ],
  Ernakulam: [
    { name: "Men", value: 17000 },
    { name: "Women", value: 5145 },
  ],
  Kannur: [
    { name: "Men", value: 20000 },
    { name: "Women", value: 9845 },
  ],
  Thrissur: [
    { name: "Men", value: 17000 },
    { name: "Women", value: 9134 },
  ],
  Palakkad: [
    { name: "Men", value: 15000 },
    { name: "Women", value: 13120 },
  ],
};

const Analytics = () => {
  const [selectedYear, setSelectedYear] = useState("This year");
  const [selectedDistrict, setSelectedDistrict] = useState("Kottayam");

  const { user } = useSelector((state) => state.auth);

  const barChartData = districtStatsByYear[selectedYear] || [];
  const pieData = pieChartDataByDistrict[selectedDistrict] || [];

  return (
    <Container fluid className="py-4 px-xl-4 px-2 dashboard">
      {/* 👇 Hide status section for restricted user */}
      {user?.username !== "regional2" && <StatsSection />}

      <Row className="mt-5">
        <Col md={8} className="graph px-2 px-xl-5">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-semibold">District wise Statistics</h5>
            <Form.Select
              className="w-auto"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option>This year</option>
              <option>Last year</option>
            </Form.Select>
          </div>

          <BarChart
            width={700}
            height={400}
            data={barChartData}
            margin={{ top: 30, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-40} textAnchor="end" height={80} />
            <YAxis className="font" />
            <Tooltip />
            <Bar dataKey="count" fill="#33a5e7" />
          </BarChart>
        </Col>

        <Col md={4}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-semibold">Gender Distribution</h5>
            <Form.Select
              className="w-auto"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              {Object.keys(pieChartDataByDistrict).map((district) => (
                <option key={district}>{district}</option>
              ))}
            </Form.Select>
          </div>

          {pieData.length > 0 && (
            <PieChart width={300} height={300}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                label={({ name, value }) => `${name} ${value}`}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}

          <ul
            className="flex-wrap flex-xl-nowrap"
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <span
                style={{
                  background: "#ff4d4f",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                }}
              ></span>
              Men
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <span
                style={{
                  background: "#3b82f6",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                }}
              ></span>
              Women
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <span
                style={{
                  background: "#fbbf24",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                }}
              ></span>
              Individual
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <span
                style={{
                  background: "#0f766e",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                }}
              ></span>
              Organisation
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Analytics;
