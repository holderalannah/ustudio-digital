import Innerpage from "../Components/Layout/Innerpage"
import { h2Styles } from "../lib/styles"
import Heading1 from "../Components/Layout/Heading1"

export default function Contact() {

    const btnStyles = `capitalize bg-unilever text-white py-2 px-6 rounded-3xl hover:underline hover:bg-darkUnilever`
    return (
        <div className="pt-10">
            <Innerpage title="Get in Touch">

                {/* <Heading1 addedStyles="text-darkPurple">Get in Touch</Heading1> */}

                <div className="mt-12 lg:mt-18"><p className="text-center text-2xl tracking-wide">Turn your brief into something brilliant.</p></div>

                <div className="mx-auto max-w-[400px] mt-14 lg:mt-20">

                    <div className="flex gap-5 justify-between items-center ">
                        <a href="https://unilever.sharepoint.com/sites/U-Studio/Shared%20Documents/I%20Know%20What%20I%20Want%20Brief.pdf" className={btnStyles} target="_blank">Submit a brief</a>

                        <a href="mailto:ustudiotoronto@ustudio.global" className={btnStyles} target="_blank">E-mail Us</a>
                    </div>

                </div>
            </Innerpage>
        </div>
    )
}