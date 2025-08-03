import { getCityById } from "@/lib/actions/city.actions";

const CityPage = async (props: {params: Promise<{id: string}>;}) => {
    const {id} = await props.params;
    const city = await getCityById(id);
    return ( 
        <div className="pt-[70px]">
      <div className="city-header">  
        <div className="h-[630px] relative">
            <img src={`/${(city?.images) ? city.images[0]: ""}`} alt="" className="w-full h-full" />
            <div className="container text-white absolute left-0 right-0 bottom-0 text-[26px] bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(255,255,255,0)]">
                <h2>{city?.name}</h2>
            </div>
        </div>
      </div> 
      {/* <div className="container pt-[45px]">
        {
            images.slice().reverse().map((item, index) => {
                console.log(item);
                
            return(
            <div key={index} className="city-body-desc">
                {city.description}
                <div className="text-center p-[45px]">
                    <img src={item} alt="" />
                </div>
            </div>         
            );
        })}
        {city.description}
      </div> */}
      <div className="container pt-[45px]">
        {city?.description}
      </div>
    </div>
     );
}
 
export default CityPage;