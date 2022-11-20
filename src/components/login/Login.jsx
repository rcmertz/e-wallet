import Input from "../input/Input";
import Button from "../button/Button";
import "./Login.css"
import { Link } from 'react-router-dom'
import React, { useState } from "react";
export default function Login() {


  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: "",
    },
    password: {
      hasChanged: false,
      value: "",
    },
  });

  const isEmailValid = (email) => {
    return /\S+@\S+.\S+/.test(email);
  };

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
              <h3>Email</h3>
              <input
                id="email"
                className="email"
                type="email"
                placeholder="Email"
                value={form.email.value}
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: {
                      hasChanged: true,
                      value: event.target.value,
                    },
                  })
                }
                data-testid="email"
              />
              {form.email.hasChanged && !form.email.value && (
                <div data-testid="email-required">Email é obrigatório</div>
              )}
              {form.email.hasChanged && !isEmailValid(form.email.value) && (
                <div data-testid="email-invalid">Email é inválido</div>
              )}
            </div>
            <div className="text-input">
              {/* <Input id='senha' type='password'>Senha</Input> */}
              <h3>Senha</h3>
              <input
                className="input-style"
                type="password"
                placeholder="Senha"
                value={form.password.value}
                onChange={(event) =>
                  setForm({
                    ...form,
                    password: {
                      hasChanged: true,
                      value: event.target.value,
                    },
                  })
                }
                data-testid="password"
              />
              {form.password.hasChanged && !form.password.value && (
                <div data-testid="password-required">Senha é obrigatória</div>
              )}
            </div>
          </div>

          <div className="button" style={{ marginLeft: "35%" }}>
            <Link to="/wallet">
              <button
                id="login-button"
                type="button"
                data-testid="login-button"
                disabled={!isEmailValid(form.email.value) || !form.password.value}
              >
                ENTRAR
              </button>
            </Link>
            {/* <Button id='login-button'>Entrar</Button> */}
          </div>

        </form>
      </div>
    </div>
  )
}