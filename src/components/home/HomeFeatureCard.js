import {images} from '../../contents';
import Card from '../Card';

function HomeFeatureCard() {
  return (
    <section id="home-feature-sec">
    <div className="container">
      <div className="sec-head">
        <h5>features</h5>
        <h1>We have the best Products in Market is</h1>
      </div>
      <div className="home-feature-div">
       
        <Card cardTitle="Quality" cardImg={images.featureIcon1} />
        <Card cardTitle="Reliable" cardImg={images.featureIcon2} />
        <Card cardTitle="Durable" cardImg={images.featureIcon3} />
        
      </div>
    </div>
  </section>
  )
}

export default HomeFeatureCard