import { serviceData } from "../data/services-data"
import { h2Styles } from "../lib/styles"

export default function Services({}){
    return(
        <div className="services_container text-[#122C59]">
            <h2 className={`${h2Styles} text-white`}>What We Provide</h2>

            <div className="service_container mx-auto mt-6 flex flex-col md:flex-row md:justify-between md:max-w-[700px] lg:max-w-[1000px]">
                {serviceData.map((item) => {
                return <div key={`item-${item.service}`} className="services">
                    <h3 className="font-semibold text-xl pb-3 md:pb-5 md:text-4xl">{item.service}</h3>
                    <ul className="flex flex-col gap-2">{item.subServices.map((serv) => <li key={serv}>{serv}</li>)}</ul>
                </div>
                })}
            </div>

            
        </div>
    )
}