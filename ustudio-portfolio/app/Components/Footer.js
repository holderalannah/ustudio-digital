import Nav from './Nav';

export default function Footer(){
    const thisyear = new Date();
    const year = thisyear.getFullYear();
    console.log()
    return(
        <footer id="footer" className='bg-white border-t-2 border-solid border-darkPink py-5 flex justify-center items-center'>
            <p className="text-center">&copy; {year} U-Studio Digital. All rights reserved.</p>
        </footer>
    )
}