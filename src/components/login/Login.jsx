import Input from "../input/Input";
import Button from "../button/Button";
import "./Login.css"

export default function Login() {
  return (

    <div className="login-container">
      <div className="titulo">
        <h1>CARTEIRA DIGITAL</h1>
      </div>

      <div className="login-card">
        <form action="" className="login-form">
          <div>
            <h2>LOGIN</h2>
          </div>

          <div className="input-group">
            <div className="text-input">
              <Input id='email' type='email'>Email</Input>
            </div>
            <div className="text-input">
              <Input id='senha' type='password'>Senha</Input>
            </div>
          </div>

          <div className="button" style={{ marginLeft: "35%" }}>
            <Button id='login-button'>Entrar</Button>
          </div>

        </form>
      </div>
    </div>
  )
}