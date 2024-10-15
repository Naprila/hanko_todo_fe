import { useState, useEffect, useMemo } from "react";
import { Hanko } from "@teamhanko/hanko-elements";
import { hankoApi } from "../constants";


export function useUserData() {
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const [userState, setUserState] = useState({
    id: "",
    email: "",
    loading: true,
    error: null,
  });

  useEffect(() => {
    hanko?.user
      .getCurrent()
      .then(({ id, email }) => {
        setUserState({ id, email, loading: false, error: null });
      })
      .catch((error) => {
        setUserState((prevState) => ({ ...prevState, loading: false, error }));
      });
  }, [hanko]);

  return userState;
}
