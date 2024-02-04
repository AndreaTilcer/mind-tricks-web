import obiwan from '/src/assets/obiwan.jpg'
import ashoka from '/src/assets/ashoka.jpg'
import padme from '/src/assets/padme.jpg'
import {PageLayout} from "../components/PageLayout.jsx";
import {H1} from "../components/headings/H1.jsx";
import {H2} from "../components/headings/H2.jsx";

import linkedin from '/src/assets/linkedin.svg'

const people = [
    {
        name: 'Obi-Wan Kenobi',
        role: 'Senior Designer',
        imageUrl: obiwan,
        linkedinUrl: '#',
    }, {
        name: 'Ashoka Tano',
        role: 'Senior Designer',
        imageUrl: ashoka,
        linkedinUrl: '#',
    }, {
        name: 'Padme Amidala',
        role: 'Senior Designer',
        imageUrl: padme,
        linkedinUrl: '#',
    }
    // More people...
]

//TODO: je treba vytvorit podstranky clenu tymu?
//TODO: hover shadow link
export function About() {
    return (
        <PageLayout>
            <H1 text="O nás"/>
            <p className="mt-6 text-lg leading-8 text-blue-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque deleniti eveniet harum nobis porro. Cumque distinctio maiores maxime molestias repudiandae tenetur vitae voluptatum. Amet aperiam earum, exercitationem laboriosam minima omnis perferendis porro qui sit vel velit veritatis voluptate, voluptatem?
            </p>
            <div className="py-14 sm:py-20 text-blue-100">
                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <H2 text="Náš tým" />
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                    >
                        {people.map((person) => (
                            <li key={person.name} className="rounded-2xl bg-slate-800 bg-opacity-90 px-8 py-10">
                                <img className="mx-auto object-cover h-48 w-48 rounded-full md:h-56 md:w-56"
                                     src={person.imageUrl}
                                     alt=""/>
                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                                <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                                <p className="pt-6 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur culpa dicta dolore illum laborum maiores nisi quisquam similique totam!</p>
                                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                                    <li>
                                        <a href={person.linkedinUrl}
                                           className={`transition-all duration-300 rounded-xl text-sm font-semibold fill-white hover:shadow hover:shadow-sky-300 hover:-translate-y-1 hover:scale-110 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}>
                                            <img className="h-8 w-8" alt="Odkaz na LinkedIn" src={linkedin} />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </PageLayout>
    )
}
