
import {NavLink} from "react-router-dom";
import {navigation} from "./index.jsx";

export default function Sections() {

    return (
        <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" className="sr-only">
                Sekce
            </h2>
            <div className="relative z-10 bg-gray-100 rounded-t-md border-b border-gray-200">
                <div
                    className="h-20 w-6/7 mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
                    <div className="flex justify-start gap-4">
                        <div
                            className="ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <NavLink key={link.name} to={link.href}
                                         className={({isActive}) => (isActive ? "px-3 py-2 rounded-md text-base font-medium text-green-500 bg-gray-200" : "px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-green-500 hover:bg-gray-50")}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};