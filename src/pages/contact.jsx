import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/outline'
import {PageLayout} from "../components/PageLayout.jsx";
import {ButtonPrimary} from "../components/button/ButtonPrimary.jsx";
import {H1} from "../components/headings/H1.jsx";

export function Contact() {

    function onSubmitForm() {

    }

    return (
        <PageLayout>
            <div className="grid w-full items-start grid-cols-1 lg:grid-cols-3 gap-20">
                <div className="lg:col-span-1">
                    <H1 text="Kontaktujte nás" />
                    <p className="mt-6 text-lg leading-8 text-blue-100">Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit. Exercitationem, necessitatibus.
                    </p>
                    <dl className="mt-10 space-y-4 text-base leading-7">
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Address</span>
                                <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true"/>
                            </dt>
                            <dd>
                                Rudolfovská
                                <br/>
                                České Budějovice
                            </dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Telephone</span>
                                <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true"/>
                            </dt>
                            <dd>
                                <a className="hover:text-white" href="tel:+420 606 123 456">
                                    +420 606 123 456
                                </a>
                            </dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Email</span>
                                <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true"/>
                            </dt>
                            <dd>
                                <a className="hover:text-white" href="mailto:kubik@mindtricks.cz">
                                    kubik@mindtricks.cz
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
                <form action="#" method="POST" className="lg:col-span-2 pb-24 sm:pb-32 lg:pt-16 text-blue-100">
                    <div className="max-w-xl lg:mr-0 lg:max-w-full">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Jméno
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                    Příjmení
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number"
                                       className="block text-sm font-semibold leading-6 text-white">
                                    Telefon
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                    Zpráva
                                </label>
                                <div className="mt-2.5">
                  <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                      defaultValue={'Dobrý den, ' +
                          'měl/a bych zájem o vstupní konzultaci. ' +
                          '' +
                          'S pozdravem'}
                  />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-end">
                            <ButtonPrimary onSubmit={onSubmitForm} text={`Odeslat`}/>
                        </div>
                    </div>
                </form>
            </div>
        </PageLayout>
    )
}