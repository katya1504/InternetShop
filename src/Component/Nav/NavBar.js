import image from'./interior.jpg'
import imageTwo from './interiorTwo.jpg'
import imageThree from './interiorThree.jpg'
import imageFoir from './interiorFoir.jpg'
import Mishael from './Mishael.jpg'
import Animation from './Animation';
import AnimationTwo from './AnimationTwo'
import AnimationThree from './AnimationThree'

function NavBar(){  

    return(  <div>
        <div className='text'>                            
        <h3>Главная</h3>
        <img src={Mishael} width='100%' className="Mishael"  alt='Mishael'></img>
        </div>
        
        <div className='blockOne'>
        <Animation/>
        <div className='interior-block'>
<img src={image} className='interior' alt='interiorDizain'></img>
<img src={imageTwo} className='interior' alt='interiorDizain'></img>
</div>

<AnimationTwo/>
<div className='interior-block'>
<img src={imageThree} className='interior' alt='interiorDizain'></img>
<img src={imageFoir} className='interior' alt='interiorDizain'></img>
        </div>

        <AnimationThree/>
        </div>
        </div>
    )
}

export default NavBar;