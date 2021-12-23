import { h, Fragment } from "preact";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "preact/hooks";
import axios from "axios";

const Profile = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0<{
    given_name: string;
    name: string;
    email: string;
    picture: string;
    sub: string;
  }>();

  const [userMetadata, setUserMetadata] = useState(null);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const getUserMetadata = async () => {
    console.log("1");
    const domain = "brogrammers.us.auth0.com";
    console.log("2. Authenticated? " + isAuthenticated);
    try {
      console.log("2.1 Authenticated? " + isAuthenticated);
      const accessToken = await getAccessTokenSilently({
        // audience: `https://${domain}/api/v2/`,
        audience: "https://brogrammers.us.auth0.com/api/v2/",
        scope: "read:current_user",
      });

      console.log("3");
      const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;
      console.log("4");
      const metadataResponse = await axios.get(userDetailsByIdUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log("5");

      const { user_metadata } = await metadataResponse.data;
      console.log(user_metadata);
      console.log("6");
      // console.log("user metadata is: " + user_metadata);

      setUserMetadata(user_metadata);
      console.log("7");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <Fragment>
      <div class="box">
        {isAuthenticated && user && (
          <div>
            <figure class="image is-128x128">
              <img src={user!.picture} alt={user!.name} class="is-rounded" />
            </figure>
            <div class="box">
              <div class="content ">
                <h2>{user!.name}</h2>
                <p>{user!.email}</p>
                <h3> User Metadata</h3>
                {userMetadata ? (
                  <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                  "No user metadata defined"
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export { Profile };
