interface Props {
  name?: String;
  isLoggedIn?: boolean;
}

function UserGreeting({ name = "Convidado", isLoggedIn = false }: Props) {
  const welcomeMsg = <h2 className="welcome-msg">Bem vindo {name}</h2>;

  const loginMsg = <h2 className="login-prompt">Faça Login para continuar</h2>;

  return isLoggedIn ? welcomeMsg : loginMsg;
}

export default UserGreeting

