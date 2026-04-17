export default function Container({children, ...props}){
    return(
        <div className="px-2.5 mx-auto max-w-7xl xl:px-3.5" {...props}>
            {children}
        </div>
    )
}