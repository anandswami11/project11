// import Image3 from '../images/Image3.png'
import Image32 from './Images/image32.png'
const Home = () => {
    return(
        <>
        <div className='main-row'></div>
        <div className="box">
        <img src={Image32} className="img3" alt="girl images"/>
    <h1>Anand</h1>
    <h2>Developer</h2>
<div className="card-bio">
    <p>
    It takes monumental improvement
     for us to change how we live our lives.

     Design is the way we access that improvement.

    </p>
    </div>
    {/* some social links to show off */}
    <div className="social-links">
    <i class="fa fa-facebook"></i>
    <i class="fa fa-twitter"></i>
    <i class="fa fa-github"></i>
    <i class="fa fa-behance"></i>
    </div>
        </div>
        </>
    )
}
export default Home