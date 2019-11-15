import React from "react";
import { logout } from "../services/user";
import { Link } from "@reach/router";

function Navbar() {
  return (
    <>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
      <button>
        <Link to="/cart">Cart</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button>
      <hr />
    </>
  );
}
export default Navbar;
