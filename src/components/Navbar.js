import 'materialize-css/dist/css/materialize.min.css';
import Logo from '../logo.png';


const Navbar = () => {
    return ( 
        <div className="navbar-fixed">
        <nav className='nav-wrapper brown lighten-5'>
            <img className='logo black-text left' src={Logo}  />
            <ul id='nav-mobile' className='right hide-on-med-and-down '>
            <form>
                <div className="">
                <input id="search" type="search" required placeholder="search" />
                </div>
            </form>
            </ul>
        </nav>

    </div>
    );
}

export default Navbar;
