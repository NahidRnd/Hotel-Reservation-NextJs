import { MdOutlineReviews, MdOutlineSavings, MdOutlineTravelExplore, MdSupportAgent } from "react-icons/md";

const data = [
    {id:1, icon:MdOutlineSavings, title:'Best prices', description:'Our prices are under close control as we work with thousands of hotels and dozens of providers directly.'},
    {id:2, icon:MdSupportAgent, title:'Best Support', description:'Our prices are under close control as we work with thousands of hotels and dozens of providers directly.'},
    {id:3, icon:MdOutlineReviews, title:'Our Customers', description:'Our prices are under close control as we work with thousands of hotels and dozens of providers directly.'},
    {id:4, icon:MdOutlineTravelExplore, title:'All world', description:'Our prices are under close control as we work with thousands of hotels and dozens of providers directly.'},
]
const Features = () => {
    return (
            <div className="container">
              <div>
                <h2 className="title">Our Features</h2>
                <span></span>
              </div>
              <div className="md:flex hidden gap-5 text-[15px] justify-center items-center text-center mt-10">
                {data.map(item =>{
                    const Icon = item.icon;
                    return(
                    <div key={item.id} className="feature-item">
                        <div className="feature-icon">
                            <Icon className="text-6xl w-full" />
                        </div>
                        <div className="feature-body">
                            <h3>{item.title}</h3>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                )})}
              </div>
              <div className="md:hidden flex-col">
                {data.map(item =>{
                    const Icon = item.icon;
                    return(
                    <div key={item.id} className="feature-item flex p-2! mt-4 items-center">
                        <div className="feature-icon w-[30%]">
                            <Icon className="text-6xl w-full" />
                        </div>
                        <div className="feature-body w-[70%]">
                            <h3>{item.title}</h3>
                            <p className="leading-5">
                                {item.description.length > 60 ? item.description.slice(0, 60) + ' ...' : item.description}
                            </p>
                        </div>
                    </div>
                )})}
              </div>
            </div>
    );
}
 
export default Features;