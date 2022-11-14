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
              <label for ="email">E-mail</label>
              <Input id='email' type='email'></Input>
            </div>
            <div className="text-input">
            <label for ="senha">Senha</label>
              <Input id='senha' type='password'></Input>
            </div>
          </div>
          <div className="button">
            <Button id='login-button'>Entrar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}