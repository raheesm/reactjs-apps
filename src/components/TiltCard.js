import Tilt from "react-parallax-tilt";


function TiltCard({cardTitle,img,customClass}) {
  return (
    <Tilt
    className={`parallax-effect-glare-scale pro-box-${customClass}`}
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
    gyroscope={true}
  >
    <div className="inner-element">
      <img src={img} alt="Kayaks" />
    </div>
    <h3>{cardTitle}</h3>
  </Tilt>
  )
}

export default TiltCard