import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className='container'>
                <h1>Recipe App</h1>
                <nav>
                    <Link to="/">Recipes</Link>
                    <Link to="/search">Search</Link>
                    {/* User is Logged In */}
                    {user && (
                    <div>
                        <span>
                            <Link to="/create">Create Recipe</Link>
                            <Link to="/saved">Saved Recipes</Link>
                            {/*<Link to="/user">{user.user.username}</Link>*/}
                        </span>
                        <button onClick={handleClick}>Log Out</button>
                    </div>
                    )}

                    {/*User is not Logged in */}
                    {!user && (
                        <Link to="/login">Log In</Link>
                    )}
                </nav>
            </div>
        </header>
    )
}
export default Navbar;