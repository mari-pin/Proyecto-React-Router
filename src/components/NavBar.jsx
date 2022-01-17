import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
           <div className='container'>
             <Link to = '/'className='btn btn-btn-outline-primary'>Inicio</Link>
             <Link to = '/contacto' className='btn btn-btn-outline-primary'>Contacto</Link>
             <Link to = '/blog' className='btn btn-btn-outline-primary'>Blog</Link>
           </div>
        </nav>
    )
}

export default NavBar;
