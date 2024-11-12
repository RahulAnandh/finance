import "./Login.scss";
const Login = () => {
  return (
    <div className="login_form">
      <label>
        User Name <input name="user_name" type="text"></input>
      </label>
      <label>
        Password <input name="password" type="password"></input>
      </label>
    </div>
  );
};
export default Login;
