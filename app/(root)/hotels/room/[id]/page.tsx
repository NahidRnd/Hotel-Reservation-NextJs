const HotelRoomDetailsPage = () => {
    return ( 
        <div className="pt-[100px]">
              <div className="py-[50px] bg-cream text-ash min-h-[400px]">
                <div className="container flex justify-center items-center">
                  <div className="flex-[2_1_0%] text-[20px]">
                    <h2>{data?.name}</h2>
                    <ul className="flex text-[14px] leading-[25px]">
                      <li>
                        <Link className="breadcrumb" href="/">Home</Link>
                      </li>
                      <li>
                        <Link className="breadcrumb" href="/hotels">Hotels</Link>
                      </li>
                      <li>
                        {data?.name}
                      </li>
                    </ul>
                  </div>
                  <div className="text-[22px] font-semibold text-right">€ price <span className="block text-[14px] font-normal">per night</span></div>
                </div>
              </div>
              <div className="container flex pt-[100px] gap-[30px]">
                <div className="w-[70%]">
                  <div className="single-hotel__images">
                    <div className="single-hotel__images_big">
                      <img className="w-full" src='/1.jpg' alt="hotel image" />              
                    </div>
                    <div className="flex w-[24%] gap-[5.5%] pt-[15px]">
                      <img src='/5.jpg' alt="hotel image" />
                      <img src='/2.jpg' alt="hotel image" />
                      <img src='/3.jpg' alt="hotel image" />
                      <img src='/4.jpg' alt="hotel image" />
                    </div>
                  </div>
                  <div className="pt-[25px]">
                    {data?.description}
                  </div>
                  <div className="pt-[50px] pb-5 text-ash">
                      <h3>Hotel Facilities</h3>
                    </div>
                  <div className="grid grid-cols-4">
                    {/* grid-template-columns: repeat(4, 1fr); */}
                  {
                    data?.amenities.map((item, index) => {
                        const service = serviceList.find((el)=> {
                          return el.name === item.name
                        })
                        if(!service) return <div key={index} className="flex justify-center items-center w-[35px] h-[35px]">
                          {/* .icon-item{
  display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border: 1px dashed #dedede;
    border-radius: 2px;
    cursor: pointer;
    vertical-align: middle;
} */}
                        <Icon>hotel</Icon>  
                      </div>      
                      return (
                        <div key={index} className="flex gap-[10px] items-center">
                          <span className="text-primary w-[20px] pt-[10px]">
                            <Icon>{service.icon}</Icon>  
                          </span>
                          <span className="service-text">
                            {item.name}  
                          </span>
                          </div>
                      );
                  })} 
                  </div>
                  <div className="similar-hotels">
                    <h3>Similar Hotels</h3>
                    {/* <SimilarHotels id={data?.id} location={data?.host_location} /> */}
                  </div>
                </div>
                {/* <div className="single-hotel__sidebar">
                  <Book />
                  <div className="sidebar-review">
                    <div className="review-header">
                      <span className="review-num">8.6</span>
                      <StarIcon className="review-icon" />
                      <StarIcon className="review-icon" />
                      <StarIcon className="review-icon" />
                      <StarIcon className="review-icon" />
                      <StarIcon className="review-icon" />
                      <span className="review-views">(2,400 reviews)</span>
                    </div>
                    <div className="review-body">
                      <div className="review-body-top">
                        <img src={user1} alt="review" />
                        <span className="review-name">
                        Aybars furkan
                        <p className="review-date">jun 24</p>
                        </span>
                      </div>
                      <div className="review-comment">
                      Otelin Temizliği gayet iyiydi. personel güler yüzlüydü herşey için teşekkür ederiz
                      </div>
                    </div>
                    <div className="review-body">
                      <div className="review-body-top">
                        <img src={user2} alt="review" />
                        <span className="review-name">
                        Ersen Emir
                        <p className="review-date">jul 2022</p>
                        </span>
                      </div>
                      <div className="review-comment">
                      İlgili güleryüzlü resepsiyonla başlayan konaklama üzerine tanımam. Teşekkurler
                      </div>
                    </div>
                    <div className="review-body">
                      <div className="review-body-top">
                        <img src={user3} alt="review" />
                        <span className="review-name">
                        Abdülbaki
                        <p className="review-date">feb 2024</p>
                        </span>
                      </div>
                      <div className="review-comment">
                      Güleryüzlü personel, isteklerin ananda karşılanması.
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
     );
}
 
export default HotelRoomDetailsPage;