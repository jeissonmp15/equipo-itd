import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';


const Profile = () => {

  const { user, isAuthenticated  } = useAuth0();


  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2 className="form-text">{user.name}</h2>
        <p className="form-correo">{user.email}</p>

        <JSONPretty  date={user} />
    </div>
    )

  );
  
};

export default Profile;

// en la variable user se almacenan los datos del usuario
