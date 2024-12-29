import { Container } from './Container';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const certifications = [
  {
    src: 'https://cdn.prod.website-files.com/64e4af11c324d21e5e5a8e24/64e4af11c324d21e5e5a91c0_ISO27001.svg',
    alt: 'ISO 27001 Certification',
    className: 'h-24 w-auto brightness-0 invert'
  },
  {
    src: 'https://cdn.prod.website-files.com/64e4af11c324d21e5e5a8e24/64e4af11c324d21e5e5a91c1_ISO9001_1.svg',
    alt: 'ISO 9001 Certification',
    className: 'h-24 w-auto brightness-0 invert'
  },
  {
    src: 'https://cdn.prod.website-files.com/64e4af11c324d21e5e5a8e24/652c24453b0b2fc33404f06c_ISO14001.svg',
    alt: 'ISO 14001 Certification',
    className: 'h-24 w-auto brightness-0 invert'
  },
  {
    src: 'https://cdn.prod.website-files.com/64e4af11c324d21e5e5a8e24/65a93bad0684caa57b61cba9_ISO45001.png',
    alt: 'ISO 45001 Certification',
    className: 'h-24 w-auto brightness-0 invert'
  },
  {
    src: 'https://cdn.prod.website-files.com/64e4af11c324d21e5e5a8e24/65904445daab429a82beebbb_Certifierad_2023_2024_SVE_dec-p-500.png',
    alt: 'Certifierad 2023-2024',
    className: 'h-24 w-auto bg-black rounded-lg p-2'
  },
  {
    src: 'https://cdn.prod.website-files.com/64e4af11c324d21e5e5a8e24/65cb366d435238808103bb93_SIGILL_SKOLD_STAENDE_LITEN_VIT_TEXT%20(3).png',
    alt: 'Sigill Skold',
    className: 'h-14 w-auto'
  },
  {
    src: 'https://cdn.prod.website-files.com/64e4af11c324d21e5e5a8e24/65169c9cfab1e76d9002349b_AAA_new.svg',
    alt: 'AAA Rating',
    className: 'h-8 w-auto'
  }
];

const navigation = {
  main: [
    { name: 'Plattformen', href: '/plattform' },
    { name: 'Tillämpningar', href: '/anvandningsomraden' },
    { name: 'Priser', href: '/pricing' },
    { name: 'Om oss', href: '/om-oss' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blogg', href: '/blog' },
  ],
  legal: [
    { name: 'Integritetspolicy', href: '#' },
    { name: 'Cookiepolicy', href: '#' },
    { name: 'Villkor', href: '#' },
  ],
  social: [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'X', href: '#', icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ) },
    { name: 'Facebook', href: '#', icon: Facebook },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-16">
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2">
              <div>
                <Link to="/" className="-m-1.5 p-1.5 text-2xl font-bold flex items-center gap-2 text-white">
                  <svg width="23" height="30" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                    <g clipPath="url(#clip0_1271_3)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.2938 0.11005L2.09585 5.17639Z" fill="white"/>
                      <path d="M19.734 0.109793C19.2651 -0.036686 18.7627 -0.0365946 18.2938 0.11005L2.09585 5.17639C1.08851 5.49146 0.40272 6.42451 0.40272 7.47998V12.8995C0.40272 13.7604 0.861271 14.5561 1.60613 14.9878L17.8581 24.4062C18.6066 24.84 19.53 24.84 20.2785 24.4062L34.7456 16.0222V19.1935L19.0671 28.2795L3.96978 19.5576C2.3607 18.6281 0.34876 19.7893 0.34876 21.6476V26.1497C0.34876 27.0108 0.807478 27.8066 1.55256 28.2382L17.8578 37.6835C18.6071 38.1176 19.5315 38.1169 20.2803 37.6818L34.7456 29.276V33.4323C34.1112 34.4884 32.0284 37.8128 29.1763 40.9292C27.6741 42.5705 25.9956 44.113 24.241 45.2366C22.4807 46.3638 20.7352 47.0117 19.0683 47.0117C17.2749 47.0117 15.3924 46.2614 13.5047 44.9785C11.626 43.7018 9.85048 41.9707 8.30269 40.192C6.76032 38.4195 5.47869 36.64 4.58121 35.2999C4.13343 34.6314 3.78362 34.0757 3.54717 33.6896C3.03471 32.8529 2.24196 31.9238 1.15744 32.5415C0.118707 33.133 -0.072957 33.5004 0.998835 35.2504C1.25361 35.6664 1.62525 36.2565 2.09831 36.9628C3.04253 38.3727 4.40023 40.2596 6.04837 42.1537C7.69108 44.0415 9.65724 45.9769 11.825 47.4501C13.9837 48.9171 16.4523 50 19.0683 50C21.5037 50 23.8099 49.0612 25.8525 47.7531C27.9008 46.4414 29.7762 44.6999 31.3807 42.9467C34.589 39.4413 36.8619 35.7245 37.4065 34.8047C37.6354 34.4181 37.7339 34.001 37.7339 33.5963V28.2774C37.7339 26.4164 35.7167 25.2555 34.1076 26.1906L19.0671 34.9306L3.33707 25.8185V22.6433L17.8602 31.0334C18.6083 31.4656 19.5303 31.465 20.2778 31.0318L36.5305 21.6129C37.2753 21.1813 37.7339 20.3855 37.7339 19.5246V15.0249C37.7339 13.1652 35.7191 12.0041 34.11 12.9366L19.0683 21.6537L3.39103 12.5683V7.90236L19.0144 3.01573L32.5535 7.24513L19.066 15.0828L8.29597 8.86342C7.58136 8.45075 6.66753 8.69552 6.25486 9.41013C5.8422 10.1247 6.08697 11.0386 6.80158 11.4512L17.8599 17.8371C18.6088 18.2695 19.5318 18.2683 20.2796 17.8338L35.1839 9.17281C36.9994 8.11785 36.6952 5.40818 34.6909 4.7821L19.734 0.109793Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1255_82">
                        <rect width="38" height="50" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="font-['Bricolage_Grotesque'] font-semibold text-white">privatestack.ai</span>
                </Link>
                <p className="text-sm text-gray-400 max-w-xs">
                  En tjänst som utvecklas och tillhandahålls av Digitalist Open Tech
                </p>
                <div className="mt-6">
                  <svg width="195" height="50" viewBox="0 0 195 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1703_326)" fill="white">
                      <g clipPath="url(#clip1_1703_326)" fill="white">
                        <path d="M71.8915 16.3916V10.9951H77.084V16.3916H71.8915Z"/>
                        <path d="M103.265 16.3917V10.9951H108.458V16.3917H103.265Z"/>
                        <path d="M154.46 16.3917V10.9951H159.653V16.3917H154.46Z"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H38.1284V49.9784H0V0ZM10.5462 39.1497H17.0361V21.6573H10.5462V39.1497ZM27.5823 39.1497H21.0923V10.8286H27.5823V39.1497Z"/>
                        <path d="M57.5237 39.4621C52.0592 39.4621 48.6746 34.3119 48.6746 29.0242C48.6746 23.8266 51.9964 18.5863 57.5237 18.5863C59.6857 18.5863 61.9209 19.5147 63.4109 21.1317V10.9951H68.6034V39.0826H63.7035L63.5925 36.7399C62.138 38.5737 59.7819 39.4621 57.5237 39.4621ZM58.6938 34.9833C61.8235 34.9833 63.5938 32.0143 63.5938 29.0242C63.5938 26.0863 61.8621 23.1031 58.6938 23.1031C55.5602 23.1031 53.867 26.0405 53.867 29.0242C53.867 31.9542 55.4888 34.9833 58.6938 34.9833Z"/>
                        <path d="M71.8915 39.0827V19.0039H77.084V39.0827H71.8915Z"/>
                        <path d="M89.605 47.8126C86.8387 47.8126 83.6781 47.0722 81.4504 45.3075L83.2789 41.4359C84.9485 42.6493 87.061 43.2578 89.0923 43.2578C92.4841 43.2578 94.6874 41.2449 94.6874 37.7922V36.4185C93.3124 38.1929 90.9614 39.0827 88.8003 39.0827C83.3844 39.0827 79.5122 34.4754 79.5122 28.9864C79.5122 23.6472 83.0704 18.5864 88.6542 18.5864C90.9565 18.5864 93.2856 19.5711 94.8327 21.3423L94.9065 19.0039H99.8802V37.5645C99.8802 43.6327 95.6293 47.8126 89.605 47.8126ZM89.751 34.7557C92.88 34.7557 94.8335 32.0952 94.8335 28.9864C94.8335 25.9451 92.9368 23.2171 89.751 23.2171C86.6545 23.2171 84.7043 25.9333 84.7043 28.9864C84.7043 32.019 86.5612 34.7557 89.751 34.7557Z"/>
                        <path d="M103.265 39.0827V19.0039H108.458V39.0827H103.265Z"/>
                        <path d="M130.245 39.4622C124.881 39.4622 121.688 34.0587 121.688 28.9864C121.688 23.834 124.966 18.5864 130.464 18.5864C132.809 18.5864 135.069 19.6702 136.462 21.6362V19.0039H141.617V39.0827H136.389V36.4594C134.92 38.3555 132.598 39.4622 130.245 39.4622ZM131.671 34.7937C134.831 34.7937 136.535 31.9306 136.535 28.9864C136.535 26.0349 134.722 23.2171 131.671 23.2171C128.596 23.2171 126.844 26.1191 126.844 28.9864C126.844 31.9471 128.596 34.7937 131.671 34.7937Z"/>
                        <path d="M145.397 39.0826V10.9951H150.589V39.0826H145.397Z"/>
                        <path d="M154.46 39.0827V19.0039H159.653V39.0827H154.46Z"/>
                        <path d="M170.245 39.4622C167.186 39.4622 164.033 38.4951 162.054 35.9703L165.271 33.0856C166.654 34.6133 168.544 35.4389 170.574 35.4389C171.699 35.4389 173.024 34.9007 173.024 33.5411C173.024 31.7654 170.515 31.468 169.258 31.1119C166.091 30.2739 162.675 28.5494 162.675 24.6594C162.675 20.7102 166.679 18.5864 170.135 18.5864C172.944 18.5864 175.855 19.6271 177.85 21.6988L175.072 24.8871C173.829 23.6691 172.074 22.5718 170.318 22.5718C169.145 22.5718 167.721 22.9734 167.721 24.3937C167.721 25.5766 168.752 26.0082 169.659 26.3674C173.028 27.6386 177.96 28.3307 177.96 33.0477C177.96 37.2229 173.924 39.4622 170.245 39.4622Z"/>
                        <path d="M188.938 39.0829V33.6863H194.13V39.0829H188.938Z"/>
                        <path d="M112.12 39.0826V10.9951H117.312V19.0038H121.261V24.2121H117.312V39.0826H112.12Z"/>
                        <path d="M180.546 39.0826V10.9951H185.739V19.0038H189.688V24.6001H185.739V39.0826H180.546Z"/>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1703_326">
                        <rect width="194.13" height="50" fill="currentColor"/>
                      </clipPath>
                      <clipPath id="clip1_1703_326">
                        <rect width="194.13" height="49.9784" fill="currentColor"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="mt-6 text-sm text-gray-400">
                  Digitalist Open Tech AB<br />
                  Götgatan 55<br />
                  11621 Stockholm, Sweden
                </p>
              </div>
              <div className="mt-6 flex gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Juridiskt</h3>
              <ul className="mt-4 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-12 bg-gray-800" />

          {/* Bottom */}
          <div className="flex flex-col items-center gap-8 overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-8 relative">
              {certifications.slice(0, 5).map((cert) => (
                <img
                  key={cert.alt}
                  src={cert.src}
                  alt={cert.alt}
                  className={cert.className}
                />
              ))}
              <div className="h-24 flex flex-col justify-center gap-2">
                {certifications.slice(5).map((cert) => (
                  <img
                    key={cert.alt}
                    src={cert.src}
                    alt={cert.alt}
                    className={cert.className}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} privatestack.ai. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}