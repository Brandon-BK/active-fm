import Header from "./Header"
import Nav from "./Nav"
import Shows from "./Shows"


const Layout = ({ children }) => {
  return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
            }}>
                <Header />
                <Nav />

                <div style={{width:'100%',height:587,marginTop:49,display:'flex'}}>
                <main style={{
                    width: 900,
                    height:552,
                   marginTop:35,
                   overflowY:'scroll',
                   padding:5,
                   background:'#222',
                   color:"white",
                    overflowX:'hidden'
                }}>
                    {children}
                </main>
                    <Shows />
                </div>
        </div>
  )
}

export default Layout;