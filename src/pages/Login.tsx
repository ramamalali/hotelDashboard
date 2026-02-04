import bg from "@images/loginpg.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <>
      <div className="login">
        <div className="left-login">
          <div className="left-container">
            <div className="logo">
              <img src="@images/loginpg.jpg" className="inline" />
              <h1>Mountain Breeze Resort</h1>
            </div>
            <p>This section is dedicated to admin</p>
            <form className="login-form">
              <Input type="text" placeholder="User Name" />
              <Input type="password" placeholder="Password" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>

        <div className="right-login">
          <img src={bg} alt="login-bg" />
          {/*        <div className="overlay"></div> */}
        </div>
      </div>
    </>
  );
}
export default Login;
