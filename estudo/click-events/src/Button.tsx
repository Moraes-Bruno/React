import { SyntheticEvent } from "react";

function Button() {

 const handleClick = (e:SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    target.textContent = "OUCH!!!!!"
 }

  return <button onClick={(e) => handleClick(e)}>Clique Aqui</button>;
}

export default Button;
