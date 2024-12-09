const DoubleArrowRight = () => (
    <svg 
        width="25px" 
        height="25px" 
        viewBox="0 0 24 24" 
        fill="none" xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path 
                d="M5.5 5L11.7929 11.2929C12.1834 11.6834 12.1834 12.3166 11.7929 12.7071L5.5 19" 
                stroke="#172554" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            ></path> 
            <path 
                d="M13.5 5L19.7929 11.2929C20.1834 11.6834 20.1834 12.3166 19.7929 12.7071L13.5 19" 
                stroke="#172554" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
);

export default function BtnShadow({action,law,text,color,modal,target,href,setModalHandler}:any)
{
    const defaultColor = 'blue-950';
    return (<a
        className={`relative text-white bg-${color?color:defaultColor} border-${color?color:defaultColor} border-2 p-1 flex hover:text-${color?color:defaultColor} hover:shadow-[inset_12rem_0_0_0] hover:shadow-white duration-[600ms,600ms] transition-[color,box-shadow]`}
        href={`${href?href:`javascript:`}`}
        data-toggle="modal"
        data-target="#JPLaw"
        onClick={()=>setModalHandler(action,law)}
    >
        <span className="w-full text-center">{text}</span>
        <div className="absolute right-0 top-1 h-full">
            <DoubleArrowRight />
        </div>
    </a>)
}