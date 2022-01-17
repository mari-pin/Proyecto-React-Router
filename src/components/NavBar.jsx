import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
           <div className='container'>
             <Link className='btn btn-outline-primary' to = '/'>Inicio</Link>
             <Link className='btn btn-outline-primary' to = '/contacto' >Contacto</Link>
             <Link className='btn btn-outline-primary' to = '/blog' >Blog</Link>
           </div>
        </nav>
    )

}

export default NavBar;
