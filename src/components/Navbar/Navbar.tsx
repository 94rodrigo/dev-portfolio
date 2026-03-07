import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowDownTrayIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'
import mainIcon from "../../assets/icons/main-icon.png";


const PROJECT_NAME = '/dev-portfolio';

const defaultNavigation = [
    { nameKey: 'nav.home', href: PROJECT_NAME },
    { nameKey: 'nav.about', href: `${PROJECT_NAME}/about` },
    { nameKey: 'nav.projects', href: `${PROJECT_NAME}/projects` },
    { nameKey: 'nav.skills', href: `${PROJECT_NAME}/skills` },
    { nameKey: 'nav.contact', href: `${PROJECT_NAME}/contact` },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { t, i18n } = useTranslation();
    
    const navigation = defaultNavigation.map(item => ({
        ...item,
        name: t(item.nameKey),
    }));
    
    function isSelectedPath(path: string): boolean {
        return useLocation().pathname === path;
    }

    const getCvFileName = (): string => {
        const lang = (i18n.resolvedLanguage || i18n.language || 'en').toLowerCase();
        return lang.startsWith('pt') ? 'Rodrigo_Costa_Currículo.pdf' : 'Rodrigo_Costa_CV.pdf';
    };

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const handleDownloadCv = () => {
        const fileName = getCvFileName();
        const link = document.createElement('a');
        link.href = `${import.meta.env.BASE_URL}documents/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getDownloadCvButton = () => {
        return (
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={handleDownloadCv}
                    className="relative rounded-full p-1 text-white hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 bg-indigo-600 hover:bg-indigo-700 hover:border hover:outline-sky-50 flex items-center gap-2 pt-3 pb-3 pl-2.5 pr-2.5 ml-3 mr-3"
                    id="btn-download-cv"
                    title={t('navbar.cvLanguage')}
                >
                    <span className="absolute -inset-1.5" />
                    <ArrowDownTrayIcon aria-hidden="true" className="size-6" />
                    <span>{t('navbar.downloadCV')}</span>
                </button>
            </div>
        );
    };

    return (
        <Disclosure
            as="nav"
            className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src={mainIcon}
                                className="h-8 w-auto"
                            />
                            <span className="text-gray-200"> /Rodrigo Costa</span>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.nameKey}
                                        to={item.href}
                                        aria-current={isSelectedPath(item.href) ? 'page' : undefined}
                                        className={classNames(
                                            isSelectedPath(item.href) ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                            'flex items-center rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                {getDownloadCvButton()}
                            </div>
                        </div>
                        

                        <Menu as="div" className="relative inline-block">
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                                {t('navbar.language')}
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                            </MenuButton>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-35 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <button onClick={() => handleLanguageChange('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:bg-white/5">
                                            {t('navbar.english')}
                                        </button>
                                    </MenuItem>

                                    <MenuItem>
                                        <button onClick={() => handleLanguageChange('pt')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:bg-white/5">
                                            {t('navbar.portuguese')}
                                        </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={isSelectedPath(item.href) ? 'page' : undefined}
                            className={classNames(
                                isSelectedPath(item.href) ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    {getDownloadCvButton()}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
