import { AiFillHome, AiFillGithub } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import './Mobile.css'

const Mobile = () => {
 return (
    <div className="ContainerMobile">
        <nav className="NavbarContainer">
           <h1 className='Title'>Welcome</h1>
           <div>
            <a href=""><AiFillHome className='Icon'/></a>
            <a href=""><BiLibrary className='Icon'/></a>
            <a href=""><AiFillGithub className='Icon'/></a>
           </div>
        </nav>

    </div>
 )
}

export default Mobile