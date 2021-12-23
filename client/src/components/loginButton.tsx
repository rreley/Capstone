import { h } from "preact";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <button class="button is-link" onClick={() => loginWithPopup()}>
      Log In
    </button>
  );
};

export { LoginButton };
