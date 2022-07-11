import NotificationButton from "./componentes/notificationButton"
import Header from "./componentes/header"
import SalesCard from "./componentes/salesCard"

function App() {
  return(
    <>
    <Header/>
    
    <main>
      <section id="sales">
        <div className="dsmeta-container">
           <SalesCard/>
        </div>  
      </section>
    </main>
    </>
  )
}

export default App

/*
no react ao usar mais de uma tag no mesmo return, ou função, temos que inserilos dentro de uma tag <></>
*/
