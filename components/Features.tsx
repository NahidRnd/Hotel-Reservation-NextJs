import { MdOutlineReviews, MdOutlineSavings, MdOutlineTravelExplore, MdSupportAgent } from "react-icons/md";

const Features = () => {
    return (
            <div className="container">
              <div>
                <h2 className="title">Our Features</h2>
                <span></span>
              </div>
              <div className="flex gap-5 text-[15px] justify-center items-center text-center mt-10">
                <div className="feature-item">
                    <div className="feature-icon">
                        <MdOutlineSavings className="text-6xl w-full" />
                    </div>
                    <div className="feature-body">
                        <h3>Best prices</h3>
                        <p>
                            Our prices are under close control as we work with thousands of hotels and dozens of providers directly. 
                        </p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">
                        <MdSupportAgent className="text-6xl w-full" />
                    </div>
                    <div className="feature-body">
                        <h3>Best prices</h3>
                        <p>
                            Our prices are under close control as we work with thousands of hotels and dozens of providers directly. 
                        </p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">
                        <MdOutlineReviews className="text-6xl w-full" />
                    </div>
                    <div className="feature-body">
                        <h3>Best prices</h3>
                        <p>
                            Our prices are under close control as we work with thousands of hotels and dozens of providers directly. 
                        </p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">
                        <MdOutlineTravelExplore className="text-6xl w-full" />
                    </div>
                    <div className="feature-body">
                        <h3>Best prices</h3>
                        <p>
                            Our prices are under close control as we work with thousands of hotels and dozens of providers directly. 
                        </p>
                    </div>
                </div>
              </div>
            </div>
    );
}
 
export default Features;