import icone from "../../assets/imagens/notificationicon.svg"
import "./style.css" /* importando o css*/

/* Importando a imagem para ser usada na função de notificação*/ 

function NotificationButton() {
    return(
      <div className="dsmeta-red-btn">
        <img src={icone} alt="Notificar" />
      </div>
    )
  }

  /* para ser usar um src exportado, tem qeu ser entre chaves{nome do arquivo} e não aspas"" como no html*/
  /* react não se ussa class e sim className*/
  
  export default NotificationButton