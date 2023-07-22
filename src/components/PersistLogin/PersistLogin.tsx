import { useState, useEffect, useRef, PropsWithChildren } from "react";
import usePersist from "hooks/usePersist";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRefreshMutation } from "redux/auth/authApi";
import { selectAuthState } from "redux/auth/authSlice";

function PersistLogin({ children }: PropsWithChildren) {
  const { token } = useSelector(selectAuthState);
  const [successTrue, setSuccessTrue] = useState(false);
  const effectRan = useRef(false);

  const [persist] = usePersist();

  const [refresh, { isLoading, isSuccess, isError, isUninitialized }] = useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        try {
          await refresh().unwrap();
          setSuccessTrue(true);
        } catch (err) {
          console.log(err);
        }
      };
      if (!token && persist) verifyRefreshToken();
    }

    return () => {
      effectRan.current = true;
    };
    // eslint-disable-next-line
  }, []);

  let content;
  if (!persist) {
    content = children;
  } else if (isLoading) {
    content = <></>;
  } else if (isError) {
    content = (
      <p className="errmsg">
        <Link href="/login">Please login again</Link>.
      </p>
    );
  } else if (isSuccess && successTrue) {
    content = children;
  } else if (token && isUninitialized) {
    content = children;
  }

  return content;
}

export default PersistLogin;
