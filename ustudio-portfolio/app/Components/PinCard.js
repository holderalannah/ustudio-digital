export default function PinCard({ children, small, medium, large }){

{/* <div className={`my-[15px] mx-2.5 p-0 rounded-2xl bg-red-700 relative overflow-hidden ${small === true ? `small row-end-26` : ''} ${medium === true ? `row-end-33 medium` : ''} ${large === true ? `row-end-45 large` : ''}`}></div> */}
    return(
        <button className={`my-[15px] mx-2.5 p-0 rounded-2xl h-[414px] w-[23%] max-w-[225px]`}>
            {children}
        </button>
    )
}