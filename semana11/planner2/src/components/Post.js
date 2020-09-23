import React from 'react';
import '../App.css';

function Post () {
    return(
        <div>
 <section className="secao">
        <div className="semana">
            <h3>Domingo</h3>
            <div id="domingo"></div>
        </div>

        <div className="semana">
            <h3>Segunda-feira</h3>
            <div id="segunda"></div>
        </div>

        <div className="semana">
            <h3>Terça-feira</h3>
            <div id="terca"></div>
        </div>
    
        <div className="semana">
            <h3>Quarta-feira</h3>
            <div id="quarta"></div>
        </div>
    
        <div className="semana">
            <h3>Quinta-feira</h3>
            <div id="quinta"></div>
        </div>

        <div className="semana">                    
            <h3>Sexta-feira</h3>               
            <div id="sexta"></div>
        </div>

        <div className="semana">
            <h3>Sábado</h3>
            <div id="sabado"></div>
        </div>
    </section>
    
        </div>
    )
}
export default Post