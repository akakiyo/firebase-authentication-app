import useFirebaseAuth from "./auth/useFirebaseAuth";

const Top = () => {
  const { logout } = useFirebaseAuth();
  return (
    <>
      <h1>ログイン完了</h1>
      <button onClick={() => logout()}>ログアウト</button>
    </>
  );
};
export default Top;
