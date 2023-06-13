import { Fade } from "react-awesome-reveal";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
    <div className="relative pb-5">
      <AwesomeSlider>
        <div className="flex flex-col items-center justify-center h-64">
          <Fade>
            <img src="src/assets/download.jpeg" className="w-full h-full object-cover" alt="Slider Image 1" />
            <h2 className="text-white">Slider 1 Title</h2>
            <p className="text-white">Slider 1 Description</p>
          </Fade>
        </div>
        <div className="flex flex-col items-center justify-center h-64">
          <Fade>
            <img src="src/assets/download (2).jpeg" className="w-full h-full object-cover" alt="Slider Image 2" />
            <h2 className="text-white">Slider 2 Title</h2>
            <p className="text-white">Slider 2 Description</p>
          </Fade>
        </div>
        <div className="flex flex-col items-center justify-center h-64">
          <Fade>
            <img src="src/assets/download (1).jpeg" className="w-full h-full object-cover" alt="Slider Image 3" />
            <h2 className="text-white">Slider 3 Title</h2>
            <p className="text-white">Slider 3 Description</p>
          </Fade>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
