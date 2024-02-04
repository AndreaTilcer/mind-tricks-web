export function ButtonPrimary({text, onClick}) {

    return (

        <button
            onClick={onClick}
            type="button"
            className="group flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/10 hover:cursor-pointer"
        >
            {text} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 group-hover:transform group-hover:scale-150">
            <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
        </svg>
        </button>

        // <div className="relative inline-flex  group">
        //     <div
        //         className="absolute transition-all duration-1000 opacity-70 -inset-px bg-sky-300 rounded-xl blur-lg group-hover:opacity-80 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        //     </div>
        //     <button onClick={onClick}
        //             type="button"
        //             className="relative inline-flex items-center justify-center px-3 py-2 text-lg text-sm font-semibold text-white transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        //     >{text}
        //     </button>
        // </div>
    )
}