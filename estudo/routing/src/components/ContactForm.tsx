function ContactForm() {
    return(
        <div>
            <form>
                <input type="text" placeholder="Nome" />
                <br />
                <input type="email" placeholder="Email"/>
                <br />
                <textarea placeholder="Mensagem"></textarea>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactForm;
