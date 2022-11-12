import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useQuery, useQueryClient } from "react-query";
import { checkRole } from "../services/user";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavbarLog = () => {
  const { data: isAdmin } = useQuery("isAdmin", checkRole);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isSuccess } = useMutation(() =>
    localStorage.removeItem("token")
  );

  const remove = async () => {
    await mutateAsync();
    //console.log(queryClient.invalidateQueries("isAdmin"));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate, queryClient]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to={"/"}>
          <Navbar.Brand className="text-no-decoration">Home</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {isAdmin && (
              <NavLink to={"/createPost"}>
                <Button className="mx-2" variant="outline-success">
                  Ctreate new post
                </Button>
              </NavLink>
            )}
            <Button
              disabled={isLoading}
              onClick={() => remove()}
              className="mx-2"
              variant="outline-danger"
            >
              Log out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLog;
