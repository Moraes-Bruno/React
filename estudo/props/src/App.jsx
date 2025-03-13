// props: Propriedades de apenas leitura que podem ser compartilhadas entre componentes
// um  componente pai pode enviar dados para um componente filho
// EX: <Component chave=valor />

import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Jane Doe" age={28} isStudent={false}/>
      <Student name="Belle" age={22} isStudent={true}/>
      <Student/>
    </>
  );
}

export default App;
