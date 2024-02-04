import {H1} from "../components/headings/H1.jsx";
import {PageLayout} from "../components/PageLayout.jsx";
import {H2} from "../components/headings/H2.jsx";
import linkedin from "../assets/linkedin.svg";
import obiwan from "/src/assets/obiwan.jpg"

const posts = [
    {
        id: 1,
        title: 'How Long Do Clones Live?',
        href: '#',
        description:
            'Why aren\'t there any clones left in the Original Trilogy, which is set only two decades after the Clone Wars? We explain how the Republic\'s clone troopers became the first generation of Imperial stormtroopers and beyond.',
        imageUrl:
            'https://images.unsplash.com/photo-1627962479504-8da0e64b2565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        //category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Obi-Wan Kenobi',
            href: '/o-nas',
            imageUrl: obiwan
        },
    },
    {
        id: 2,
        title: 'How Long Do Clones Live?',
        href: '#',
        description:
            'Why aren\'t there any clones left in the Original Trilogy, which is set only two decades after the Clone Wars? We explain how the Republic\'s clone troopers became the first generation of Imperial stormtroopers and beyond.',
        imageUrl:
            'https://images.unsplash.com/photo-1627962479504-8da0e64b2565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        //category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Obi-Wan Kenobi',
            href: '#',
            imageUrl: obiwan
        },
    },
    {
        id: 3,
        title: 'How Long Do Clones Live?',
        href: '#',
        description:
            'Why aren\'t there any clones left in the Original Trilogy, which is set only two decades after the Clone Wars? We explain how the Republic\'s clone troopers became the first generation of Imperial stormtroopers and beyond.',
        imageUrl:
            'https://images.unsplash.com/photo-1627962479504-8da0e64b2565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        //category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Obi-Wan Kenobi',
            href: '#',
            imageUrl: obiwan
        },
    },
    {
        id: 4,
        title: 'How Long Do Clones Live?',
        href: '#',
        description:
            'Why aren\'t there any clones left in the Original Trilogy, which is set only two decades after the Clone Wars? We explain how the Republic\'s clone troopers became the first generation of Imperial stormtroopers and beyond.',
        imageUrl:
            'https://images.unsplash.com/photo-1627962479504-8da0e64b2565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        //category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Obi-Wan Kenobi',
            href: '#',
            imageUrl: obiwan
        },
    },
    {
        id: 5,
        title: 'How Long Do Clones Live?',
        href: '#',
        description:
            'Why aren\'t there any clones left in the Original Trilogy, which is set only two decades after the Clone Wars? We explain how the Republic\'s clone troopers became the first generation of Imperial stormtroopers and beyond.',
        imageUrl:
            'https://images.unsplash.com/photo-1627962479504-8da0e64b2565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        //category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Obi-Wan Kenobi',
            href: '#',
            imageUrl: obiwan
        },
    },
    // More posts...
]

//TODO: vytvorit detail clanku
//TODO: premistit clanky do json souboru
//TODO: zalomeni date responsivita

export function Blog() {

    return (
        <PageLayout>
            <H1 text="MIND TRICKS BLOG"/>
            <p className="mt-2 text-lg leading-8">
                Learn how to grow your business with our expert advice.
            </p>
            <div
                className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                {posts.map((post) => (
                    <a key={post.id} href={post.href} className="group flex flex-col">
                        <article
                            className="rounded-2xl overflow-hidden bg-slate-800 hover:bg-slate-600 pb-5 flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    src={post.imageUrl}
                                    alt=""
                                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 "/>
                            </div>
                            <div className="max-w-xl px-8">
                                <div className="mt-8 grid grid-cols-3 items-center gap-x-4 text-xs">
                                    <h4 className="col-span-2 font-michroma font-semibold text-white">{post.title}</h4>
                                    <time dateTime={post.datetime}
                                          className="col-span-1 relative z-10 rounded-full bg-gray-700 px-3 py-1.5 font-medium">
                                        {post.date}
                                    </time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-300"></h3>
                                    <p className="mt-5 line-clamp-3 text-sm text-blue-100 leading-6 ">{post.description}</p>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="relative flex items-center gap-x-4">
                                        <img src={post.author.imageUrl} alt=""
                                             className="object-cover h-10 w-10 rounded-full bg-gray-100"/>
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold">
                                                <span className="absolute inset-0"/>
                                                {post.author.name}
                                            </p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="w-5 h-5 group-hover:transform group-hover:scale-150">
                                        <path fillRule="evenodd"
                                              d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </article>
                    </a>
                ))}
            </div>
        </PageLayout>
    )
}
