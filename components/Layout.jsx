import Header from "./Header"
import Nav from "./Nav"
import Shows from "./Shows"


const Layout = ({children}) => {
  return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
            }}>
                <Header />
                <Nav />

                <div style={{width:'100%',height:550,marginTop:49,display:'flex'}}>
                <main style={{
                 background: 'green',
                    width: 900,
                    overFlowY: 'auto',
                    height:'100%'
                }}>
                    {children}
                </main>
                    <Shows />
                </div>
        </div>
  )
}

export default Layout