import{Link}from'react-router-dom'

const Header =()=>{
return (
    <header style={{position:'fixed',top:"0px", zIndex:"100", padding: '1rem', backgroundColor: '#333', color: '#fff',width:'100%' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/Course" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/categories" style={{ color: '#fff', textDecoration: 'none'}}>Categories</Link>
        
      </nav>
    </header>
  );
}


    


export default Header