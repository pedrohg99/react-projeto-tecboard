import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Lista } from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="listaSuspensa">Tema do Evento</Label>
          <Lista type="select" id="listaSuspensa" name="listaSuspensa" placeholder="Selecione uma opção" />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>
          Criar evento
        </Botao>

      </div>
    </form>
  );
}
