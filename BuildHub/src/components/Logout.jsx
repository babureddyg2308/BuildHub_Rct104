import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Logout() {
  // const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Assuming you stored the token in localStorage

    fetch("http://localhost:3000/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: Bearer ${token},
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data), localStorage.removeItem("token"))
      .catch((err) => console.log(err));
    navigate("/login");
  };
  return (
    <Box as={"form"} onSubmit={handleLogout}>
      <Button type="submit">Logout</Button>
    </Box>
  );
}

export default Logout;