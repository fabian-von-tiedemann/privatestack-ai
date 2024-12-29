import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { ContactButton } from '@/components/ui/contact-button';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { motion, AnimatePresence } from 'framer-motion'; 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavigationMenuItems } from "@/components/ui/navigation-menu-items"
import { NAVIGATION } from '@/lib/constants';

const navigation = NAVIGATION.main;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isVisible = useScrollDirection();

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-0 z-50 bg-black border-b border-black"
      >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 text-2xl font-bold flex items-center gap-2 text-white">
              <svg width="23" height="30" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                <g clipPath="url(#clip0_1271_3)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.2938 0.11005L2.09585 5.17639Z" fill="white"/>
                  <path d="M19.734 0.109793C19.2651 -0.036686 18.7627 -0.0365946 18.2938 0.11005L2.09585 5.17639C1.08851 5.49146 0.40272 6.42451 0.40272 7.47998V12.8995C0.40272 13.7604 0.861271 14.5561 1.60613 14.9878L17.8581 24.4062C18.6066 24.84 19.53 24.84 20.2785 24.4062L34.7456 16.0222V19.1935L19.0671 28.2795L3.96978 19.5576C2.3607 18.6281 0.34876 19.7893 0.34876 21.6476V26.1497C0.34876 27.0108 0.807478 27.8066 1.55256 28.2382L17.8578 37.6835C18.6071 38.1176 19.5315 38.1169 20.2803 37.6818L34.7456 29.276V33.4323C34.1112 34.4884 32.0284 37.8128 29.1763 40.9292C27.6741 42.5705 25.9956 44.113 24.241 45.2366C22.4807 46.3638 20.7352 47.0117 19.0683 47.0117C17.2749 47.0117 15.3924 46.2614 13.5047 44.9785C11.626 43.7018 9.85048 41.9707 8.30269 40.192C6.76032 38.4195 5.47869 36.64 4.58121 35.2999C4.13343 34.6314 3.78362 34.0757 3.54717 33.6896C3.03471 32.8529 2.24196 31.9238 1.15744 32.5415C0.118707 33.133 -0.072957 33.5004 0.998835 35.2504C1.25361 35.6664 1.62525 36.2565 2.09831 36.9628C3.04253 38.3727 4.40023 40.2596 6.04837 42.1537C7.69108 44.0415 9.65724 45.9769 11.825 47.4501C13.9837 48.9171 16.4523 50 19.0683 50C21.5037 50 23.8099 49.0612 25.8525 47.7531C27.9008 46.4414 29.7762 44.6999 31.3807 42.9467C34.589 39.4413 36.8619 35.7245 37.4065 34.8047C37.6354 34.4181 37.7339 34.001 37.7339 33.5963V28.2774C37.7339 26.4164 35.7167 25.2555 34.1076 26.1906L19.0671 34.9306L3.33707 25.8185V22.6433L17.8602 31.0334C18.6083 31.4656 19.5303 31.465 20.2778 31.0318L36.5305 21.6129C37.2753 21.1813 37.7339 20.3855 37.7339 19.5246V15.0249C37.7339 13.1652 35.7191 12.0041 34.11 12.9366L19.0683 21.6537L3.39103 12.5683V7.90236L19.0144 3.01573L32.5535 7.24513L19.066 15.0828L8.29597 8.86342C7.58136 8.45075 6.66753 8.69552 6.25486 9.41013C5.8422 10.1247 6.08697 11.0386 6.80158 11.4512L17.8599 17.8371C18.6088 18.2695 19.5318 18.2683 20.2796 17.8338L35.1839 9.17281C36.9994 8.11785 36.6952 5.40818 34.6909 4.7821L19.734 0.109793Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_1271_3">
                    <rect width="38" height="50" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="font-['Bricolage_Grotesque'] font-semibold">privatestack<span className="text-white">.ai</span></span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItems 
                items={navigation} 
                currentPath={location.pathname} 
              />
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <ContactButton 
              variant="default"
              title="Boka demo"
              description="Fyll i dina uppgifter så kontaktar vi dig för att boka en demo"
              defaultMessage="Jag är intresserad av en demo av privatestack.ai"
            >
              Be om demo
            </ContactButton>
          </div>
        </nav>
      </Container>

      <MobileMenu
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
        navigation={navigation}
      />
      </motion.header>
    </AnimatePresence>
  );
}