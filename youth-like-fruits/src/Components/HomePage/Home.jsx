import reactLogo from '../.././assets/react.svg'
import homePic from '../.././assets/HomePagePic.jpeg'
import ElevateAppBar from '.././ElevateAppBar/ElevateAppBar.jsx'
import Footer from '.././Footer/Footer.jsx'
import TextLayout from '.././HomePage/Layout/Layout.jsx'
import DonationList from '.././HomePage/DonationList/DonationList.jsx'

function Home() {
  // const [count, setCount] = useState(0)
  const donationCardList = [
      {icon: reactLogo , title: "React" , description: "This is React!"}, 
      {icon: reactLogo , title: "React" , description: "This is React!"},
      {icon: reactLogo , title: "React" , description: "This is Not React!"},
      {icon: reactLogo , title: "React" , description: "This is React!"}
    ]
  return (
    <div className='container'>
      <ElevateAppBar></ElevateAppBar>
      <div className='imageAndText'>
          <img className='homeImage' src = {homePic} alt="home image"></img>
          <TextLayout></TextLayout>
      </div>
      <DonationList list = {donationCardList}/>
      <Footer></Footer>
    </div>
  )
}

export default Home
