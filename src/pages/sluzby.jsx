import {LifebuoyIcon, NewspaperIcon, PhoneIcon, UserIcon, UserGroupIcon} from '@heroicons/react/20/solid'
import {H1} from "../components/headings/H1.jsx";
import {H2} from "../components/headings/H2.jsx";
import linkedin from "../assets/linkedin.svg";
import {PageLayout} from "../components/PageLayout.jsx";

const cards = [
    {
        name: 'Týmové poradenství',
        description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                  clipRule="evenodd"/>
            <path
                d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"/>
        </svg>,
    },
    {
        name: 'Individuální poradenství',
        description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"/>
        </svg>,
    },
    {
        name: 'Osobně i online',
        description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>,
    },
]

//TODO: pridat pole s texty pro spoluprace

export function Sluzby() {
    return (
        <PageLayout>
            <H1 text="Naše služby"/>
            <p className="mt-6 text-lg leading-8 text-blue-100">
                We built our business on great customer service. At the beginning at least, but then we realized we
                could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch
                of things that look really good in the headlines, then clarify in the small print but hope people don't
                actually read it.</p>
            <div className="flex flex-col items-center gap-24 py-14 sm:py-20 text-blue-100">
                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <H2 text="Poradenství pro hráče sportu a e-sportu"/>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                    >
                        {cards.map((card) => (
                            <li key={card.name} className="flex flex-col gap-4 justify-start rounded-2xl bg-slate-800 bg-opacity-90 px-8 py-10">
                                <div className="flex items-center justify-start gap-3 text-white">
                                    {card.icon}
                                    <h3 className="text-base font-semibold leading-7 tracking-tight">{card.name}</h3>
                                </div>
                                <p className="text-left ">{card.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <H2 text="Dosavadní spolupráce a projekty"/>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                    >
                        {cards.map((card) => (
                            <li key={card.name} className="flex flex-col gap-4 justify-start rounded-2xl bg-slate-800 px-8 py-10">
                                <div className="flex items-center justify-start gap-3">
                                    {card.icon}
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{card.name}</h3>
                                </div>
                                <p className="text-left ">{card.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </PageLayout>
    )
}
