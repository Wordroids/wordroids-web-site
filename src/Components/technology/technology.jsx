import React, { useState, useEffect, useRef } from 'react';
import './technology.css';

// Web Development Icons
import { FaHtml5, FaCss3Alt, FaJs, FaAndroid, FaApple, FaReact, FaVuejs, FaNodeJs, FaLaravel, FaPhp } from "react-icons/fa";
import { SiWebpack, SiBabel, SiGulp, SiGrunt, SiNpm, SiFlutter, SiReact as SiReactNative, SiXamarin, SiIonic, SiCordova, SiKotlin, SiAngular, SiNuxtdotjs, SiTypescript, SiDotnet, SiWordpress, SiDrupal, SiJoomla, SiMagento, SiShopify, SiDocker, SiKubernetes, SiJenkins, SiAnsible } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiFizzingFlask } from "react-icons/gi";
import { BiLogoDjango } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

// 8 Web Development
const web_dev_icons = [
  { component: FaHtml5, name: 'HTML5', className: 'icon-html' },
  { component: FaCss3Alt, name: 'CSS3', className: 'icon-css' },
  { component: FaJs, name: 'JavaScript', className: 'icon-js' },
  { component: SiWebpack, name: 'Webpack', className: 'icon-webpack' },
  { component: SiBabel, name: 'Babel', className: 'icon-babel' },
  { component: SiGulp, name: 'Gulp', className: 'icon-gulp' },
  { component: SiGrunt, name: 'Grunt', className: 'icon-grunt' },
  { component: SiNpm, name: 'NPM', className: 'icon-npm' }
];

// 8 Mobile Development
const mobile_dev_icons = [
  { component: FaAndroid, name: 'Android', className: 'icon-android' },
  { component: FaApple, name: 'iOS', className: 'icon-ios' },
  { component: SiFlutter, name: 'Flutter', className: 'icon-flutter' },
  { component: SiReactNative, name: 'React Native', className: 'icon-reactnative' },
  { component: SiXamarin, name: 'Xamarin', className: 'icon-xamarin' },
  { component: SiIonic, name: 'Ionic', className: 'icon-ionic' },
  { component: SiCordova, name: 'Cordova', className: 'icon-cordova' },
  { component: SiKotlin, name: 'Kotlin', className: 'icon-kotlin' }
];

// 8 Frontend Development
const frontend_dev_icons = [
  { component: FaReact, name: 'React', className: 'icon-react' },
  { component: FaVuejs, name: 'Vue.js', className: 'icon-vue' },
  { component: SiAngular, name: 'Angular', className: 'icon-angular' },
  { component: RiNextjsFill, name: 'Next.js', className: 'icon-next' },
  { component: SiNuxtdotjs, name: 'Nuxt.js', className: 'icon-nuxt' },
  { component: FaJs, name: 'JavaScript', className: 'icon-js' },
  { component: SiTypescript, name: 'TypeScript', className: 'icon-ts' },
  { component: FaHtml5, name: 'HTML5', className: 'icon-html' }
];

// 8 Backend Development
const backend_dev_icons = [
  { component: FaPython, name: 'Python', className: 'icon-py' },
  { component: FaLaravel, name: 'Laravel', className: 'icon-laravel' },
  { component: FaNodeJs, name: 'Node.js', className: 'icon-node' },
  { component: FaPhp, name: 'PHP', className: 'icon-php' },
  { component: SiDotnet, name: 'ASP.NET', className: 'icon-dotnet' },
  { component: TbSql, name: 'SQL', className: 'icon-sql' },
  { component: GiFizzingFlask, name: 'Flask', className: 'icon-flask' },
  { component: BiLogoDjango, name: 'Django', className: 'icon-dj' }
];

// 5 CMS
const cms_icons = [
  { component: SiWordpress, name: 'WordPress', className: 'icon-wordpress' },
  { component: SiDrupal, name: 'Drupal', className: 'icon-drupal' },
  { component: SiJoomla, name: 'Joomla', className: 'icon-joomla' },
  { component: SiMagento, name: 'Magento', className: 'icon-magento' },
  { component: SiShopify, name: 'Shopify', className: 'icon-shopify' }
];

// 4 DevOps
const devops_icons = [
  { component: SiDocker, name: 'Docker', className: 'icon-docker' },
  { component: SiKubernetes, name: 'Kubernetes', className: 'icon-k8s' },
  { component: SiJenkins, name: 'Jenkins', className: 'icon-jenkins' },
  { component: SiAnsible, name: 'Ansible', className: 'icon-ansible' }
];

// Slide definitions
const slides = [
  { key: 'webapp', label: 'Web App', icons: web_dev_icons, center: 'Web\nDevelopment', anchor: '#webapp' },
  { key: 'mobileapp', label: 'Mobile App', icons: mobile_dev_icons, center: 'Mobile\nDevelopment', anchor: '#mobileapp' },
  { key: 'frontend', label: 'Frontend', icons: frontend_dev_icons, center: 'Front End\nDevelopment', anchor: '#frontend' },
  { key: 'backend', label: 'Backend', icons: backend_dev_icons, center: 'Back End\nDevelopment', anchor: '#backend' },
  { key: 'cms', label: 'CMS', icons: cms_icons, center: 'CMS\nPlatforms', anchor: '#cms' },
  { key: 'devops', label: 'DevOps', icons: devops_icons, center: 'DevOps', anchor: '#devops' }
];

const CIRCLE_RADIUS = 180;
const CENTER_OFFSET = 170;

const Technology = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [angle, setAngle] = useState(0);
  const requestRef = useRef();

  // Animate the rotation
  useEffect(() => {
    const animate = () => {
      setAngle(prev => prev + 0.005);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const slide = slides[currentSlide];

  // Navigation handler
  const handleNav = idx => {
    setCurrentSlide(idx);
    // Optionally scroll to section
    const anchor = slides[idx].anchor.replace('#', '');
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="technology" className="technology-section">
      <div className="technology-left">
        <div className="circle-container">
          <div className="circle-center">
            <span style={{ whiteSpace: 'pre-line' }}>{slide.center}</span>
          </div>
          {slide.icons.map((icon, idx) => {
            const IconComponent = icon.component;
            const theta = angle + (2 * Math.PI * idx / slide.icons.length);
            const x = CENTER_OFFSET + CIRCLE_RADIUS * Math.cos(theta) - 25;
            const y = CENTER_OFFSET + CIRCLE_RADIUS * Math.sin(theta) - 25;
            return (
              <div
                key={icon.name}
                className={`circle-icon ${icon.className}`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`
                }}
                title={icon.name}
              >
                <IconComponent size={32} />
              </div>
            );
          })}
        </div>
        <div className="slide-nav-buttons">
          {slides.map((s, idx) => (
            <button
              key={s.key}
              className={`slide-nav-btn${idx === currentSlide ? ' active' : ''}`}
              onClick={() => handleNav(idx)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className="technology-right">
        <h4>
          EXPLORE OUR <span className="highlight">TECHNOLOGICAL</span> EXPERTISE
        </h4>
        <h1>
          Harnessing the Power of Advanced Technology to Drive Digital Transformation and Growth
        </h1>
        <p>
          We use the latest technologies to create innovative solutions that boost efficiency, enhance user experiences, and help businesses stay ahead in a rapidly evolving digital landscape
        </p>
      </div>
    </section>
  );
};

export default Technology;
