export function ButtonSubmit({text, onSubmit}) {

    return (

        <div className="relative inline-flex group">
            <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-sky-300 rounded-xl blur-lg group-hover:opacity-80 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <button onSubmit={onSubmit}
                    type="submit"
                    className="relative inline-flex items-center justify-center px-3 py-2 text-lg text-sm font-semibold text-white transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >{text}
            </button>
        </div>
    )
}