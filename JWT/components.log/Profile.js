import React from "react";
import AuthService from "../services.log/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div>
      <header>
        <h3>
          <strong>{currentUser.username}'s</strong> Profile
        </h3>
      </header>

      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>

      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
