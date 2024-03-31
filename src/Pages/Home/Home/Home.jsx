
import BigInfos from "../../BigInfos/BigInfos";
import Products from "../../Products/Products";
import Banner from "../Banner/Banner"
// import BigInfo from "../BigInfo/BigInfo";
// import FooterImage from "../FooterImage/FooterImage";
import History from "../History/History";
import Notice from "../Notice/Notice";
// import VideoShare from "../VideoShare/VideoShare";


const Home = () => {
  return (
    <div className="container">
      <Notice></Notice>
      <Banner></Banner>
      <History></History>
      <Products></Products>
      <BigInfos></BigInfos>
      {/* <VideoShare></VideoShare> */}
      {/* <FooterImage></FooterImage> */}
    </div>
  )
}

export default Home