import { useCallback, useEffect, useMemo } from "react";
import { Hanko, register } from "@teamhanko/hanko-elements";
import { useNavigate } from "react-router-dom";
import { hankoApi } from "./constants";



function Login() {

    const hanko = useMemo(() => new Hanko(hankoApi), []);
    const navigate = useNavigate();
    const defaultOptions = {
      cookieDomain: undefined,
      cookieSameSite: "none", // Specify whether/when cookies are sent with cross-site requests.
    };

    const redirectAfterLogin = useCallback(() => {
        navigate("/todos");
      }, [navigate]);

    useEffect(
        () =>
          hanko.onSessionCreated(() => {
            redirectAfterLogin();
          }),
        [hanko, redirectAfterLogin]
      );

    useEffect(() => {
      const registerHanko = async () => {
        try {
          await register(hankoApi, defaultOptions);
        } catch (error) {
          // handle error
          console.error("Error: ", error);
        }
      };
    
      registerHanko();
      }, []);

    return (
        <div  className=" flex justify-center">
            <hanko-auth />
        </div>
    )
}

export default Login