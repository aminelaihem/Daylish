import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'; // Icons standard

// Logo SVG (version simplifiée ou adaptée pour le footer)
const FooterLogo = () => (
    <svg className="h-8 w-auto text-beige" viewBox="0 0 975 667" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Path data (identique au header pour l'instant) */}
      <path d="M65.96 191.41C150.39 191.41 201.52 245.83 201.52 305.86C201.52 356.65 170.85 406.45 136.22 427.89C134.57 428.22 132.59 428.22 130.94 428.22C107.85 428.22 82.46 407.77 78.17 394.91C123.03 367.53 149.41 311.8 153.7 270.9C149.41 260.02 137.21 249.79 112.14 246.16C114.45 250.78 116.1 255.39 116.1 260.34C116.1 275.18 110.16 289.03 103.9 302.56C87.41 338.18 72.57 391.61 66.96 428.22C48.49 427.89 28.37 410.74 22.76 393.26C24.41 360.61 41.23 293.33 55.08 248.47C47.82 249.79 41.56 251.11 34.96 251.11C10.88 251.11 0 228.35 0 208.89C0 205.26 0.33 201.96 0.99 198.67C20.45 193.72 41.89 191.41 65.96 191.41Z" fill="#FFEDCB"/>
       <path d="M281.01 381.39C281.01 378.09 281.01 374.13 281.67 369.85C272.11 391.95 254.95 428.56 243.41 428.56C223.29 424.6 206.14 401.18 205.15 377.11V372.49C205.15 320.71 241.76 267.94 265.18 264.97C280.02 268.27 292.56 279.48 300.14 292.35C302.12 282.46 304.1 270.58 305.75 260.36C330.16 262.01 357.53 276.52 357.53 303.9C357.53 324.35 344.01 357.33 337.08 374.48C352.91 367.22 371.71 354.36 378.97 348.42C378.97 373.82 352.58 428.24 321.58 428.57C295.19 427.91 281.01 403.5 281.01 381.41V381.39ZM294.86 315.43C272.1 331.92 256.27 359.3 248.36 393.93C263.2 382.72 280.02 357.32 287.94 340.5C289.92 333.57 293.55 321.37 294.87 315.43H294.86Z" fill="#FFEDCB"/>
       <path d="M520.12 300.58C520.12 320.37 418.52 573.67 397.74 667C379.27 666.67 358.16 653.48 351.24 637.32C356.52 611.92 428.1 421.95 437.67 384.68C429.75 404.14 418.54 428.55 411.94 428.55C397.43 426.24 375.33 413.71 367.74 401.51C365.1 395.57 364.11 387.33 364.11 377.43C364.11 364.9 365.76 350.05 369.06 336.53C376.98 302.23 391.49 270.9 401.38 263.64C415.56 264.3 444.92 281.45 444.92 302.56C444.92 319.05 434.7 319.71 424.14 353.68C420.18 366.54 416.88 380.07 414.58 394.58C425.46 386 438.66 365.56 447.23 348.41C454.49 323.01 463.72 288.71 472.3 260.02C500.01 262.33 520.12 279.81 520.12 300.59V300.58Z" fill="#FFEDCB"/>
       <path d="M514.17 413.39C514.17 401.19 523.41 373.15 530.66 347.76C543.52 302.57 627.1 30.35 632.05 0C657.12 0.99 671.48 15.83 671.48 44.2C671.48 82.46 580.47 374.81 570.57 407.46C588.38 400.53 609.16 386.68 617.4 380.42C617.4 405.82 589.7 460.57 557.7 460.57C534.61 460.57 514.16 438.47 514.16 413.41L514.17 413.39Z" fill="#06D6A0"/>
       <path d="M602.561 411.74C602.561 398.55 607.511 380.74 611.791 365.57C615.421 353.04 625.311 311.81 628.941 292.35C654.671 294.33 680.721 309.17 680.721 335.89C680.721 357.99 667.201 383.38 657.961 407.79C674.781 401.19 694.561 389.52 702.141 383.26C702.141 408.66 676.431 460.56 645.761 460.56C618.051 460.56 602.551 435.82 602.551 411.75L602.561 411.74ZM637.521 250.13C637.521 241.23 634.881 234.96 634.881 234.96C636.201 234.63 638.511 234.63 639.501 234.63C658.631 234.63 691.281 247.16 691.281 271.57C691.281 282.12 685.011 293.34 675.121 294.33C663.251 294.33 640.161 286.74 632.571 275.53C636.201 268.27 637.521 259.37 637.521 250.13Z" fill="#06D6A0"/>
       <path d="M813.259 378.74C804.469 382.76 794.959 385.23 785.319 385.99C783.529 386.13 781.649 386.2 780.049 385.39C778.469 384.6 777.399 383.07 776.359 381.64C767.029 368.75 754.449 359.98 742.609 349.66C741.269 348.5 739.839 346.66 740.779 345.16C741.389 344.2 742.669 343.98 743.799 343.92C756.069 343.18 767.679 349.39 777.629 356.61C779.619 358.05 781.659 359.58 784.079 360.02C789.459 360.99 794.129 356.28 796.999 351.63C804.569 339.37 807.089 322.91 799.449 310.7C791.789 298.45 776.239 293.59 761.819 292.7C749.259 291.93 736.349 293.51 725.009 298.95C713.669 304.39 704.019 313.97 700.059 325.92C695.089 340.91 699.569 357.73 708.029 371.07C709.329 373.12 710.739 374.99 711.719 377.18C711.429 376.54 692.259 386.69 690.599 387.97C676.789 398.62 675.969 419.78 683.849 434.24C690.819 447.04 704.049 455.81 718.249 459.09C735.599 463.09 754.899 459.01 768.349 447.35C781.799 435.69 788.609 416.44 784.289 399.18C791.109 398.93 798.199 398.61 804.249 395.44C810.299 392.27 814.959 385.35 813.259 378.74ZM741.439 408.48C740.999 409.43 739.689 409.51 738.649 409.41C727.019 408.28 715.869 402.85 707.769 394.43C713.399 396.9 722.119 398.18 725.149 398.66C727.959 399.1 730.809 399.44 733.669 399.69C735.839 401.7 738.029 403.68 740.199 405.67C741.009 406.41 741.899 407.48 741.439 408.48Z" fill="#06D6A0"/>
       <path d="M875.32 413.39C875.32 403.17 877.3 388.65 881.59 370.51C874.66 378.76 865.1 396.57 857.18 415.04C849.92 435.16 843 451.65 837.72 460.55C820.24 460.22 795.83 448.02 787.26 430.21C787.26 430.21 799.46 400.2 806.39 379.75C819.58 340.5 903.74 47.61 908.03 11C931.78 12.65 954.82 30.79 954.82 57.5C954.82 79.27 881.59 338.52 870.37 375.46C886.2 335.22 903.68 298.61 909.95 297.29C931.39 298.61 952.5 313.12 959.75 325.32C944.58 360.61 936 383.04 928.75 408.1C945.57 401.5 967.01 386.66 974.92 380.4C974.92 405.8 948.21 460.55 917.53 460.55C891.14 460.55 875.31 436.47 875.31 413.39H875.32Z" fill="#06D6A0"/>

    </svg>
);

// Composant pour les liens du footer
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-sm text-beige/70 hover:text-yellow transition-colors duration-200 ease-in-out"
    >
      {children}
    </Link>
  </li>
);

// Composant pour les icônes sociales
const SocialIconLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 rounded-full bg-beige/10 hover:bg-yellow text-beige hover:text-deep-green transition-all duration-200 ease-in-out transform hover:scale-110"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{label}</span>
  </a>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-green text-beige/80 relative pt-12 pb-6 overflow-hidden">
      {/* Forme de vague SVG en haut */}
      <div className="absolute top-0 left-0 right-0 text-beige/5 pointer-events-none" style={{ transform: 'translateY(-99%)' }}>
        <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M1440 120H0V26.2166C120 47.8583 280 58.6791 480 58.6791C680 58.6791 800 47.8583 960 26.2166C1120 4.57486 1280 0 1440 0V120Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Colonne Marque */}
          <div className="space-y-3">
            <FooterLogo />
            <p className="text-sm font-display text-yellow italic">
              Le goût du partage, près de chez vous.
            </p>
            <p className="text-xs">
              Connectez-vous avec les saveurs authentiques de votre quartier.
            </p>
          </div>

          {/* Colonne Navigation */}
          <div>
            <h3 className="text-base font-bold text-beige mb-3">Explorer</h3>
            <ul className="space-y-1.5">
              <FooterLink to="/catalogue">Catalogue des plats</FooterLink>
              <FooterLink to="/register?role=chef">Devenir Chef</FooterLink>
            </ul>
          </div>

          {/* Colonne Support/Légal */}
          <div>
            <h3 className="text-base font-bold text-beige mb-3">Aide & Informations</h3>
            <ul className="space-y-1.5">
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/contact">Contactez-nous</FooterLink>
              <FooterLink to="/cgu">Conditions Générales</FooterLink>
              <FooterLink to="/privacy">Politique de Confidentialité</FooterLink>
            </ul>
          </div>

          {/* Colonne Social & Contact */}
          <div>
             <h3 className="text-base font-bold text-beige mb-3">Restons connectés</h3>
             <div className="flex space-x-2 mb-5">
               <SocialIconLink href="#" icon={Instagram} label="Instagram" />
               <SocialIconLink href="#" icon={Facebook} label="Facebook" />
               <SocialIconLink href="#" icon={Twitter} label="Twitter" />
             </div>
             <ul className="space-y-2 text-xs">
                <li className="flex items-center space-x-1.5">
                  <Mail className="h-3.5 w-3.5 text-yellow flex-shrink-0" />
                  <a href="mailto:contact@daylish.com" className="hover:text-yellow transition-colors">contact@daylish.com</a>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Phone className="h-3.5 w-3.5 text-yellow flex-shrink-0" />
                  <span>01 23 45 67 89</span>
                </li>
             </ul>
          </div>
        </div>

        {/* Ligne Copyright */}
        <div className="border-t border-beige/20 pt-6 text-center">
          <p className="text-xs text-beige/60">
            © {currentYear} Daylish. Tous droits réservés.
          </p>
        </div>
      </div>
      
      {/* Motif de fond subtil (optionnel) */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
    </footer>
  );
} 