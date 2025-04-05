import { Navbar, Container } from "react-bootstrap";
import { FaUserCircle, FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LuChevronDown } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";


const Header = ({ }) => {
  return (
    <Navbar
      className="bg-white px-xl-4 px-2"
      style={{
        transition: "margin-left 0.3s ease",
      }}
    >
      <Container fluid className="d-flex justify-content-between align-items-center px-0 header-sec">
        <div>
          <h4 className="mb-1 fw-bold">Hi Manu Mathew!</h4>
          <p className="text-muted small mb-0">
          Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="d-flex align-items-center header-icons">
          <div>
        <IoIosSearch size={25} />
          <FaRegBell  className="mx-3" size={20} />
          <RxAvatar size={20}/>
          </div>
          <div>
          <span className="ms-2 fw-medium">Manu Mathew <LuChevronDown size={20}/>
          </span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
