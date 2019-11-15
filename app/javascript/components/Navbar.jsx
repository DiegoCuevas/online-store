import React from "react";
import { logout } from "../services/user";
import { Link, navigate } from "@reach/router";

function Navbar() {
  return (
    <>
      <button>
        <Link to="/order">Orders</Link>
      </button>
      <button>
        <Link to="/cart">Cart</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
      <hr />
    </>
  );
}
export default Navbar;
