import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, User, LogOut, ChefHat, ShoppingBag, ArrowRight, LogIn, Home } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react'; // Pour le dropdown Desktop
import { motion, AnimatePresence } from 'framer-motion'; // Pour l'animation du menu mobile

// Logo (peut être externalisé)
const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link to="/" className="flex items-center space-x-2 flex-shrink-0 group">
    {/* Le SVG change de taille et potentiellement de couleur avec le scroll */}
    <svg 
      className={`w-auto text-deep-green group-hover:text-deep-green-light transition-all duration-300 ease-in-out ${isScrolled ? 'h-12' : 'h-14'}`}
      viewBox="0 0 975 667" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
    >
      {/* Path data du logo ici... */}
      <path d="M65.96 191.41C150.39 191.41 201.52 245.83 201.52 305.86C201.52 356.65 170.85 406.45 136.22 427.89C134.57 428.22 132.59 428.22 130.94 428.22C107.85 428.22 82.46 407.77 78.17 394.91C123.03 367.53 149.41 311.8 153.7 270.9C149.41 260.02 137.21 249.79 112.14 246.16C114.45 250.78 116.1 255.39 116.1 260.34C116.1 275.18 110.16 289.03 103.9 302.56C87.41 338.18 72.57 391.61 66.96 428.22C48.49 427.89 28.37 410.74 22.76 393.26C24.41 360.61 41.23 293.33 55.08 248.47C47.82 249.79 41.56 251.11 34.96 251.11C10.88 251.11 0 228.35 0 208.89C0 205.26 0.33 201.96 0.99 198.67C20.45 193.72 41.89 191.41 65.96 191.41Z" fill="#005248"/>
      <path d="M281.01 381.39C281.01 378.09 281.01 374.13 281.67 369.85C272.11 391.95 254.95 428.56 243.41 428.56C223.29 424.6 206.14 401.18 205.15 377.11V372.49C205.15 320.71 241.76 267.94 265.18 264.97C280.02 268.27 292.56 279.48 300.14 292.35C302.12 282.46 304.1 270.58 305.75 260.36C330.16 262.01 357.53 276.52 357.53 303.9C357.53 324.35 344.01 357.33 337.08 374.48C352.91 367.22 371.71 354.36 378.97 348.42C378.97 373.82 352.58 428.24 321.58 428.57C295.19 427.91 281.01 403.5 281.01 381.41V381.39ZM294.86 315.43C272.1 331.92 256.27 359.3 248.36 393.93C263.2 382.72 280.02 357.32 287.94 340.5C289.92 333.57 293.55 321.37 294.87 315.43H294.86Z" fill="#005248"/>
      <path d="M520.12 300.58C520.12 320.37 418.52 573.67 397.74 667C379.27 666.67 358.16 653.48 351.24 637.32C356.52 611.92 428.1 421.95 437.67 384.68C429.75 404.14 418.54 428.55 411.94 428.55C397.43 426.24 375.33 413.71 367.74 401.51C365.1 395.57 364.11 387.33 364.11 377.43C364.11 364.9 365.76 350.05 369.06 336.53C376.98 302.23 391.49 270.9 401.38 263.64C415.56 264.3 444.92 281.45 444.92 302.56C444.92 319.05 434.7 319.71 424.14 353.68C420.18 366.54 416.88 380.07 414.58 394.58C425.46 386 438.66 365.56 447.23 348.41C454.49 323.01 463.72 288.71 472.3 260.02C500.01 262.33 520.12 279.81 520.12 300.59V300.58Z" fill="#005248"/>
      <path d="M514.17 413.39C514.17 401.19 523.41 373.15 530.66 347.76C543.52 302.57 627.1 30.35 632.05 0C657.12 0.99 671.48 15.83 671.48 44.2C671.48 82.46 580.47 374.81 570.57 407.46C588.38 400.53 609.16 386.68 617.4 380.42C617.4 405.82 589.7 460.57 557.7 460.57C534.61 460.57 514.16 438.47 514.16 413.41L514.17 413.39Z" fill="#06D6A0"/>
      <path d="M602.561 411.74C602.561 398.55 607.511 380.74 611.791 365.57C615.421 353.04 625.311 311.81 628.941 292.35C654.671 294.33 680.721 309.17 680.721 335.89C680.721 357.99 667.201 383.38 657.961 407.79C674.781 401.19 694.561 389.52 702.141 383.26C702.141 408.66 676.431 460.56 645.761 460.56C618.051 460.56 602.551 435.82 602.551 411.75L602.561 411.74ZM637.521 250.13C637.521 241.23 634.881 234.96 634.881 234.96C636.201 234.63 638.511 234.63 639.501 234.63C658.631 234.63 691.281 247.16 691.281 271.57C691.281 282.12 685.011 293.34 675.121 294.33C663.251 294.33 640.161 286.74 632.571 275.53C636.201 268.27 637.521 259.37 637.521 250.13Z" fill="#06D6A0"/>
      <path d="M813.259 378.74C804.469 382.76 794.959 385.23 785.319 385.99C783.529 386.13 781.649 386.2 780.049 385.39C778.469 384.6 777.399 383.07 776.359 381.64C767.029 368.75 754.449 359.98 742.609 349.66C741.269 348.5 739.839 346.66 740.779 345.16C741.389 344.2 742.669 343.98 743.799 343.92C756.069 343.18 767.679 349.39 777.629 356.61C779.619 358.05 781.659 359.58 784.079 360.02C789.459 360.99 794.129 356.28 796.999 351.63C804.569 339.37 807.089 322.91 799.449 310.7C791.789 298.45 776.239 293.59 761.819 292.7C749.259 291.93 736.349 293.51 725.009 298.95C713.669 304.39 704.019 313.97 700.059 325.92C695.089 340.91 699.569 357.73 708.029 371.07C709.329 373.12 710.739 374.99 711.719 377.18C711.429 376.54 692.259 386.69 690.599 387.97C676.789 398.62 675.969 419.78 683.849 434.24C690.819 447.04 704.049 455.81 718.249 459.09C735.599 463.09 754.899 459.01 768.349 447.35C781.799 435.69 788.609 416.44 784.289 399.18C791.109 398.93 798.199 398.61 804.249 395.44C810.299 392.27 814.959 385.35 813.259 378.74ZM741.439 408.48C740.999 409.43 739.689 409.51 738.649 409.41C727.019 408.28 715.869 402.85 707.769 394.43C713.399 396.9 722.119 398.18 725.149 398.66C727.959 399.1 730.809 399.44 733.669 399.69C735.839 401.7 738.029 403.68 740.199 405.67C741.009 406.41 741.899 407.48 741.439 408.48Z" fill="#06D6A0"/>
      <path d="M875.32 413.39C875.32 403.17 877.3 388.65 881.59 370.51C874.66 378.76 865.1 396.57 857.18 415.04C849.92 435.16 843 451.65 837.72 460.55C820.24 460.22 795.83 448.02 787.26 430.21C787.26 430.21 799.46 400.2 806.39 379.75C819.58 340.5 903.74 47.61 908.03 11C931.78 12.65 954.82 30.79 954.82 57.5C954.82 79.27 881.59 338.52 870.37 375.46C886.2 335.22 903.68 298.61 909.95 297.29C931.39 298.61 952.5 313.12 959.75 325.32C944.58 360.61 936 383.04 928.75 408.1C945.57 401.5 967.01 386.66 974.92 380.4C974.92 405.8 948.21 460.55 917.53 460.55C891.14 460.55 875.31 436.47 875.31 413.39H875.32Z" fill="#06D6A0"/>
    </svg>
    {/* <span className={`font-bold text-xl transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>Daylish</span> */}
  </Link>
);

// Hook scroll
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollPosition;
}

// Composant NavLink Desktop avec indicateur actif
const NavLink = ({ to, children, isScrolled }: { to: string; children: React.ReactNode, isScrolled: boolean }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  // Styles de texte (logique inchangée)
  const textClasses = isActive
    ? (isScrolled ? 'text-deep-green' : 'text-white')
    : `${isScrolled ? 'text-deep-green/80' : 'text-white/80'} ${isScrolled ? 'group-hover:text-deep-green' : 'group-hover:text-white'}`;

  // Styles de capsule (logique de base inchangée, mais application séparée)
  const activeCapsuleClasses = `absolute inset-0 rounded-full transition-all duration-300 ease-out ${isScrolled ? 'bg-deep-green/5' : 'bg-white/15'}`; // Fond actif, toujours visible (scale 1 par défaut)

  const inactiveCapsuleClasses = `
    absolute inset-0 rounded-full
    ${isScrolled ? 'bg-deep-green/5' : 'bg-white/5'}          // Fond de base
    ${isScrolled ? 'group-hover:bg-deep-green/30' : 'group-hover:bg-white/10'} // Fond au survol
    scale-x-0 group-hover:scale-x-100                      // Animation de scale
    transition-transform duration-300 ease-out               // Transition spécifique pour transform
    transform-gpu origin-center                             // Optimisation et origine
  `;

  return (
    <Link
      to={to}
      className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 group ${textClasses}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={isActive ? activeCapsuleClasses : inactiveCapsuleClasses}
      />
    </Link>
  );
};

// Composant pour items du dropdown user
const DropdownMenuItem = ({ children, onClick, icon: Icon, isDanger = false }: {
  children: React.ReactNode;
  onClick?: () => void;
  icon: React.ElementType;
  isDanger?: boolean;
}) => (
  <Menu.Item>
    {({ active }) => (
      <button
        onClick={onClick}
        className={`${active ? (isDanger ? 'bg-red-50 text-red-700' : 'bg-deep-green/5 text-deep-green') : 'text-gray-700'} group flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors duration-150`}
      >
        <Icon className={`mr-2 h-5 w-5 ${active && !isDanger ? 'text-deep-green' : (active && isDanger ? 'text-red-600' : 'text-gray-400')} transition-colors duration-150`} aria-hidden="true" />
        {children}
      </button>
    )}
  </Menu.Item>
);

// Composant SVG personnalisé pour 'Nos plats'
const NosPlatsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 18" fill="none" className="inline-block align-middle">
    <path d="M0 18V6L8 0L16 6V18H0ZM2 16H14V7L8 2.5L2 7V16ZM6 15H7V11C7.41667 11 7.77067 10.854 8.062 10.562C8.354 10.2707 8.5 9.91667 8.5 9.5V6.5H7.5V9.5H7V6.5H6V9.5H5.5V6.5H4.5V9.5C4.5 9.91667 4.646 10.2707 4.938 10.562C5.22933 10.854 5.58333 11 6 11V15ZM10 15H11V6.5C10.45 6.5 9.97933 6.69567 9.588 7.087C9.196 7.479 9 7.95 9 8.5V11.5H10V15Z" fill="#006B60"/>
  </svg>
);

// Composant SVG personnalisé pour 'Devenir Chef Partenaire'
const ChefPartenaireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" className="inline-block align-middle">
    <path d="M4.99998 11.5583C4.15495 11.3769 3.41343 10.8743 2.93185 10.1566C2.45027 9.43889 2.26629 8.5622 2.41871 7.71145C2.57113 6.8607 3.04804 6.10241 3.74883 5.59654C4.44963 5.09068 5.31951 4.87679 6.17498 5C6.3855 4.5222 6.6821 4.08719 7.04998 3.71667C7.43703 3.32864 7.89682 3.02078 8.40303 2.81073C8.90924 2.60068 9.45192 2.49255 9.99998 2.49255C10.548 2.49255 11.0907 2.60068 11.5969 2.81073C12.1031 3.02078 12.5629 3.32864 12.95 3.71667C13.3179 4.08719 13.6145 4.5222 13.825 5C14.6805 4.87679 15.5503 5.09068 16.2511 5.59654C16.9519 6.10241 17.4288 6.8607 17.5812 7.71145C17.7337 8.5622 17.5497 9.43889 17.0681 10.1566C16.5865 10.8743 15.845 11.3769 15 11.5583V17.5H4.99998V11.5583Z" stroke="#006B60" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14.1667H15" stroke="#006B60" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  const handleLogout = () => {
    setIsMobileMenuOpen(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const isScrolled = scrollPosition > 20; 
  const isOnHomePage = location.pathname === '/';

  // Header transparent avant scroll, blanc avec ombre après scroll
  const useEffectiveScrolled = isScrolled || !isOnHomePage;
  const adaptiveTextColor = 'text-deep-green';
  const adaptiveHoverBg = 'hover:bg-gray-100';
  const adaptiveBorderColor = 'border-deep-green/50';
  const adaptiveHoverBorderColor = 'hover:border-deep-green';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${useEffectiveScrolled ? 'h-16 shadow-md bg-transparent backdrop-blur-lg' : 'h-24 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo Section */}
            <div className="flex items-center">
              <Logo isScrolled={useEffectiveScrolled} />
            </div>

            {/* Navigation Desktop */} 
            <nav className="hidden md:flex items-center space-x-6 mx-auto">
              <NavLink to="/catalogue" isScrolled={true}>
                <span className="relative flex items-center font-sans font-bold text-deep-green gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 group focus:ring-2 focus:ring-deep-green-light focus:ring-offset-2 cursor-pointer">
                  <span className="flex items-center gap-1.5 relative z-10 transition-transform duration-200 group-hover:scale-105">
                    <NosPlatsIcon />
                    <span className="relative text-sm">
                      Nos plats
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-deep-green rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </span>
                </span>
              </NavLink>
              <NavLink to="/register?role=chef" isScrolled={true}>
                <span className="relative flex items-center font-sans font-bold text-deep-green gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 group focus:ring-2 focus:ring-deep-green-light focus:ring-offset-2 cursor-pointer">
                  <span className="flex items-center gap-1.5 relative z-10 transition-transform duration-200 group-hover:scale-105">
                    <ChefPartenaireIcon />
                    <span className="relative text-sm">
                      Devenir Chef Partenaire
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-deep-green rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </span>
                </span>
              </NavLink>
            </nav>

            {/* Actions Utilisateur Desktop & Bouton Mobile */} 
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className={`flex items-center space-x-2 p-1 rounded-full ${adaptiveHoverBg} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-green-light transition-colors group`}>
                        <span className="sr-only">Ouvrir le menu utilisateur</span>
                        <img
                          src={user.avatar || 'https://via.placeholder.com/150'}
                          alt=""
                          className={`h-9 w-9 rounded-full object-cover ring-2 ring-offset-1 transition-all duration-300 ${adaptiveHoverBg} ${adaptiveHoverBorderColor}`}
                        />
                         {/* Nom caché sur écrans moyens pour laisser place aux boutons */} 
                        <span className={`text-sm font-medium ${adaptiveTextColor} group-hover:${adaptiveHoverBorderColor} hidden lg:inline transition-colors`}>{user.name}</span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                          <DropdownMenuItem onClick={() => { navigate('/profile'); setIsMobileMenuOpen(false); }} icon={User}>
                            Mon Profil
                          </DropdownMenuItem>
                        </div>
                        <div className="px-1 py-1">
                           <DropdownMenuItem onClick={handleLogout} icon={LogOut} isDanger>
                             Se déconnecter
                          </DropdownMenuItem>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <div className="flex items-center space-x-3">
                    <Link
                      to="/login" 
                      className={`group relative flex items-center px-4 py-2 text-sm font-normal font-sans rounded-lg border border-transparent transition-all duration-200 ease-out text-deep-green bg-transparent hover:bg-deep-green/5 focus:ring-2 focus:ring-deep-green-light hover:scale-105 hover:shadow-lg active:scale-95`}
                    >
                       <LogIn className="mr-1.5 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-deep-green/60" />
                      Connexion
                    </Link>
                    <Link 
                       to="/register" 
                       className="group relative inline-flex items-center px-5 py-2 text-sm font-bold font-sans rounded-xl overflow-hidden bg-[#FFEDCB] text-deep-green shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 ease-out focus:ring-2 focus:ring-deep-green-light hover:bg-[#FFEDCB]"
                    >
                       {/* Effet Shimmer */}
                       <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFEDCB]/60 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-50 group-hover:opacity-100"></span>
                       <span className="relative z-10">Inscription</span>
                       <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1 relative z-10" />
                    </Link>
                    {/* Devenir Chef (si affiché) */}
                    {isLoggedIn && user.role !== 'chef' && (
                      <Link 
                        to="/register?role=chef" 
                        className="group relative ml-4 px-4 py-2 text-sm font-bold font-sans rounded-lg border border-deep-green text-deep-green bg-white hover:bg-deep-green/5 hover:text-deep-green focus:ring-2 focus:ring-deep-green-light hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 ease-out flex items-center gap-2"
                      >
                        <ChefPartenaireIcon />
                        Devenir Chef
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Bouton Menu Mobile */}
              <div className="md:hidden ml-3">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${adaptiveTextColor} ${adaptiveHoverBg} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-deep-green-light transition-colors`}
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Ouvrir le menu principal</span>
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }} 
            transition={{ duration: 0.3 }} 
            className={`md:hidden fixed inset-x-0 top-16 z-40 mx-4 origin-top 
                       transition-transform duration-300 ease-in-out transform-gpu 
                       ${adaptiveTextColor === 'text-deep-green' ? 'translate-y-0' : 'translate-y-8'}`}
          >
            <div className="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-100 overflow-hidden py-4"> 
              <div className="px-5 py-4 space-y-3"> 
                <Link
                  to="/catalogue" 
                  className="-m-3 p-3 flex items-center rounded-lg text-base font-medium text-deep-green hover:bg-deep-green/5 transition ease-in-out duration-150" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                   <ShoppingBag className="flex-shrink-0 h-6 w-6 text-deep-green-light mr-4" aria-hidden="true" />
                   Catalogue
                 </Link>
              </div>
              <div className="px-5 py-5"> 
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center mb-4"> 
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full object-cover" src={user.avatar || 'https://via.placeholder.com/150'} alt="" />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-deep-green">{user.name}</div>
                        <div className="text-sm font-medium text-deep-green/80">{user.email}</div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Link to="/profile" className="block -m-3 p-3 rounded-lg text-base font-medium text-deep-green hover:bg-deep-green/5 transition ease-in-out duration-150" onClick={() => setIsMobileMenuOpen(false)}>
                         <User className="inline h-5 w-5 mr-3 text-deep-green-light" />Mon Profil
                      </Link>
                      {user.role !== 'chef' && (
                         <Link to="/register?role=chef" className="block -m-3 p-3 rounded-lg text-base font-medium text-deep-green hover:bg-deep-green/5 transition ease-in-out duration-150" onClick={() => setIsMobileMenuOpen(false)}>
                            <ChefPartenaireIcon />Devenir Chef
                </Link>
                      )}
                      <button 
                        onClick={handleLogout} 
                        className="block w-full text-left -m-3 p-3 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition ease-in-out duration-150 group"
                      >
                         <LogOut className="inline h-5 w-5 mr-3 text-red-500 group-hover:text-red-600" />Se déconnecter
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Link to="/login" className="block -m-3 p-3 rounded-lg text-base font-medium text-deep-green hover:bg-deep-green/5 transition ease-in-out duration-150" onClick={() => setIsMobileMenuOpen(false)}>
                       <LogIn className="inline h-5 w-5 mr-3 text-deep-green-light" />Se connecter
                    </Link>
                    <Link to="/register" className="block -m-3 p-3 rounded-lg text-base font-medium text-deep-green hover:bg-deep-green/5 transition ease-in-out duration-150" onClick={() => setIsMobileMenuOpen(false)}>
                       <ArrowRight className="inline h-5 w-5 mr-3 text-deep-green-light" />S'inscrire
                     </Link>
                  </div>
            )}
          </div>
        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}