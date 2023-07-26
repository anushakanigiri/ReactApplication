import React from "react";

const Header = () => {
  // Simulate login status
  const isLoggedIn = false;

  const handleLogin = () => {
    // Implement login logic here
    console.log("Logged in!");
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logged out!");
  };

  return (
    <header>
      <div className="logo">Your App Logo</div>
      <nav>
        {isLoggedIn ? (
          <div className="user-profile">
            <button onClick={handleLogout}>Logout</button>
            <button>Profile</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
