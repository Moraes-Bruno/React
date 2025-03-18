// onChange = Handler de eventos usado primariamente
//com elementos de formularios(form)
//EX: input,textarea,select,radio
//Aciona uma função sempre que o valor inserido for alterado

import {useState } from "react";

function OnChange() {
  const [name, setName] = useState("Desconhecido");
  const [qtd, setQtd] = useState(0);
  const [comment,setComment] = useState("");
  const [payment,setPayment] = useState("");
  const [shipping,setShipping] = useState("");

  function handleNamechange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleQtdChange(event: React.ChangeEvent<HTMLInputElement>){
    setQtd(Number(event.target.value));
  }

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event: React.ChangeEvent<HTMLSelectElement>){
    setPayment(event.target.value);
  }

  function handleShippingChange(event: React.ChangeEvent<HTMLInputElement>){
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        <input type="text" value={name} onChange={handleNamechange} />
        <p>Nome: {name}</p>

        <input type="number" value={qtd} onChange={handleQtdChange} />
        <p>Quantidade: {qtd}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Digite um Comentario"></textarea>
        <p>Comentario: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Seleciona uma opção</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
        </select>

        <p>Metdo de Pagamento: {payment}</p>

        <label>
            <input type="radio" value="Buscar no Local" checked={shipping === "Buscar no Local"} onChange={handleShippingChange}/>
            Buscar no local
        </label>

        <label>
            <input type="radio" value="Entrega Padrão" checked={shipping === "Entrega Padrão"} onChange={handleShippingChange}/>
           Entrega Padrão
        </label>

        <p>Metodo de entrega: {shipping}</p>

      </div>
    </>
  );
}

export default OnChange;
