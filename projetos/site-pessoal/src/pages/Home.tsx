import fvThumb from '../assets/fatec_vagas/fv3.png'
import emThumb from '../assets/estacionaMais/Screenshot_1.png'
import notasThumb from '../assets/notas/n2.png'
import { NavLink } from 'react-router-dom'

function Home(){
    return(
        <main>
            <div className="paralax"></div>

            <section className="mt-4">
                <h2 className="text-center fw-normal">Projetos Recentes</h2>

                <div className="d-flex gap-5 flex-wrap justify-content-center mt-5 mb-5">
                    <div className="card">
                        <img className="card-img-top" src={fvThumb} alt="imagem do card" />
                        <div className='card-body'>
                            <h5 className='card-title'>Fatec Vagas</h5>
                            <p className='card-text'>Projeto desenvolvido no Primeiro e segundo semestre da Faculdade</p>
                            <NavLink to="#" className="btn btn-primary">Ver Mais</NavLink>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={emThumb} alt="imagem do card" />
                        <div className='card-body'>
                            <h5 className='card-title'>EstacionaMais</h5>
                            <p className='card-text'>Projeto desenvolvido no terceiro e quarto semestre da faculdade</p>
                            <NavLink to="#" className="btn btn-primary">Ver Mais</NavLink>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={notasThumb} alt="imagem do card" />
                        <div className='card-body'>
                            <h5 className='card-title'>Notas</h5>
                            <p className='card-text'>Projeto desenvolvido para estudo da linguagem JavaScript</p>
                            <NavLink to="#" className="btn btn-primary">Ver Mais</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid text-center mb-5'>
                <h2>Commits</h2>
                <img src="https://ghchart.rshah.org/Moraes-Bruno" alt="grafico de commits do github" className="grafico"></img>
                
            </section>
        </main>
    )
}

export default Home