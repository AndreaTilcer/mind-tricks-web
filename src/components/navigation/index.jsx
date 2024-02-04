import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import '../../index.css'
import {useState} from 'react'
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import mindtrickslayout from '/src/assets/mindtrickslayout.png'
import discord from '/src/assets/discord.svg'
import linkedin from '/src/assets/linkedin-outline.svg'
import instagram from '/src/assets/instagram.svg'
import youtube from '/src/assets/youtube.svg'

export const navigation = [
    {name: 'Naše služby', href: "/sluzby"},
    {name: 'O nás', href: "/o-nas"},
    {name: 'Blog', href: "/blog"},
    {name: 'Kontakty', href: "/kontakty"},
]

export const socials = [
    {name: 'youtube', href: "http://www.youtube.com", src: youtube, alt: 'Odkaz na Youtube', size: 8},
    {name: 'instagram', href: "http://www.instagram.com", src: instagram, alt: 'Odkaz na Instagram', size: 8},
    {name: 'linkedin', href: "http://www.linkedin.com", src: linkedin, alt: 'Odkaz na Linkedin', size: 7},
    {name: 'discord', href: "http://www.discord.com", src: discord, alt: 'Odkaz na Discord', size: 7}
]


export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <div className="bg-slate-900">
                <div className="pt-20 border-b border-slate-700 drop-shadow-slate-300/50">
                    <a href="/" className="">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="object-cover w-full backdrop-blur-sm bg-white/30 backdrop-brightness-150 md:backdrop-filter-none"
                            src={mindtrickslayout} alt="Obrázek záhlaví webu"/>
                    </a>
                </div>
                <header
                    className="p-6 h-20 absolute inset-x-0 top-0 z-50 border-slate-700 border-b drop-shadow-slate-300/50">
                    <nav className="mx-auto flex max-w-7xl items-center justify-end w-full mb-4 lg:px-8"
                         aria-label="Global">
                        <div className="flex w-full lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="hidden lg:flex lg:gap-x-8 items-center justify-center">
                                {navigation.map((item) => (
                                    <Link key={item.name} to={item.href}
                                          className="transition ease-in-out py-2 px-4 rounded-xl text-sm font-michroma text-white hover:text-sky-300 hover:-translate-y-1 hover:scale-110 duration-300">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="hidden lg:flex items-center justify-center gap-4">
                                {socials.map((item) => (
                                    <Link key={item.name} to={item.href}
                                          className={`transition-all duration-300 rounded-xl text-sm font-semibold fill-white ${(item.name === 'discord' || item.name === 'linkedin') ? 'p-0.5' : ''} hover:shadow hover:shadow-sky-300 hover:-translate-y-1 hover:scale-110 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}>
                                        <img className={`w-${item.size} h-${item.size}`} alt={item.alt} src={item.src}/>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </nav>

                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50"/>
                        <Dialog.Panel
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Mind Tricks</span>
                                    <img
                                        className="w-auto"
                                        src=""
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <Link
                                                to={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="border-t border-slate-700 mt-10 flex items-center gap-2">
                                        {socials.map((item) => (
                                            <Link key={item.name} to={item.href}
                                                  className="pt-4 transition ease-in-out rounded-xl text-sm font-semibold fill-white hover:fill-blue-300 hover:-translate-y-1 hover:scale-110 duration-300">
                                                <img
                                                    className="w-14 h-14 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                                    alt={item.alt} src={item.src}/>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>
            </div>
            <Outlet/>

            {/*
            <div className="bg-slate-900">
                <div className="flex items-center w-11/12 mx-auto pt-8 px-4 sm:px-6 lg:px-8">
                //zakomentovane
                    <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt=""/>
                   </a>
                    </div>
                    //zakomentovane
                    <div className="flex flex-col justify-center items-center rounded-full p-4 gap-0">
                        <a href="/" className="-m-1.5 p-1.5">
                        <p className="text-2xl font-extrabold tracking-tight text-white">Mind
                            Tricks</p>
                        <p className="text-xl font-bold tracking-tight text-white">E-sport and Sport</p>
                        </a>
                    </div>
                </div>
            </div>
            <header className="h-16 bg-slate-900 border-slate-700 border-b drop-shadow-slate-300/50">
                <nav className="mx-auto flex max-w-7xl items-center justify-end mb-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-8 items-center justify-center">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="transition ease-in-out py-2 px-4 rounded-xl text-sm font-semibold text-white hover: hover:bg-slate-800 hover:-translate-y-1 hover:scale-110 duration-300">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10"/>
                    <Dialog.Panel
                        className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/25">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <Outlet/>
    */}
        </>
    )
}