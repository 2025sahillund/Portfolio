import { useState } from "react";
import {
    Brain,
    Pill,
    PackageOpen,
    HeartPulse,
    ShieldAlert,
    UserRound,
    Cloud,
    Lock,
    CheckCircle2,
    X
} from "lucide-react";
import careSyncData from "../data/caresyncData";
import "../styles/caresync.css";
import { motion, AnimatePresence } from "framer-motion";
const icons={

Brain,

Pill,

ShieldAlert,

Lock,

PackageOpen,

HeartPulse,

UserRound,

Cloud

}

export default function CareSync() {
    const [activeScreen, setActiveScreen] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const currentScreen = careSyncData.screenshots[activeScreen];

    return (
        <section className="caresync-section" id="caresync">

            <div className="caresync-container">

                {/* Header */}

                <div className="caresync-header">

              <div className="header-top">

                <div className="header-left">

                    <span className="section-tag">
                        MOBILE APPLICATION
                    </span>

                    <h2>CareSync</h2>

                    <h3>
                        Intelligent Healthcare Management Platform
                    </h3>

                    <p>
                        CareSync is a comprehensive healthcare application designed to
                        simplify medication management, improve treatment adherence and
                        provide patients with a secure platform to monitor their daily
                        health. By combining smart reminders, medicine organization,
                        emergency support and cloud synchronization, CareSync delivers
                        a reliable healthcare experience for patients, elderly users
                        and caregivers.
                    </p>

                </div>

                <div className="innovation-panel">

                    <h4>Why CareSync?</h4>

                   <div className="innovation-grid">

                        {careSyncData.innovation.map((item) => {

                            const Icon = icons[item.icon];

                            return(

                                <div
                                    className="innovation-item"
                                    key={item.title}
                                >

                                    

                                   <div className="innovation-content">

                                        <div className="innovation-title">

                                            <Icon size={18}/>

                                            <h5>{item.title}</h5>

                                        </div>

                                        <p>{item.description}</p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

                </div>

                 {/* Core Features */}

         <div className="features-section">

                <h3>Current Features</h3>
                
                <p className="feature-subtitle">
                    Everything currently available in the CareSync application.
                    </p>
                <div className="features-grid">

                    {careSyncData.features.map((feature) => {

                        const Icon = icons[feature.icon];

                        return (

                            <div
                                className="feature-card"
                                key={feature.title}
                            >

                                <div className="feature-icon">
                                    <Icon size={24} />
                                </div>

                                <h4>{feature.title}</h4>

                                <p>{feature.description}</p>

                            </div>

                        );

                    })}

                </div>

            </div>
        
                    <div className="interactive-demo">

                        <div className="demo-content">

                            {/* =========================
                                SCREEN NAVIGATION
                            ========================= */}
                        
                            <div className="screen-sidebar">

                                <span className="sidebar-title">

                                    Screens

                                </span>

                                {careSyncData.screenshots.map((screen, index) => (
                                    <button
                                        key={screen.title}
                                        className={
                                            activeScreen === index
                                                ? "sidebar-btn active"
                                                : "sidebar-btn"
                                        }
                                        onClick={() => setActiveScreen(index)}
                                    >
                                        <span className="screen-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="screen-title">
                                            {screen.title}
                                        </span>
                                    </button>
                                ))}

                            </div>

                            {/* LEFT */}

                            <div className="demo-left">

                           <div className="phone-showcase">

                                <div className="phone-frame">

                                    <motion.div
                                        className="preview-window"
                                        key={currentScreen.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >

                                        <img
                                            src={currentScreen.image}
                                            alt={currentScreen.title}
                                            className="preview-image"
                                            onClick={() => setSelectedImage(currentScreen.image)}
                                        />

                                    </motion.div>

                                </div>

                            </div>

                            </div>

                            {/* RIGHT */}

                            <AnimatePresence mode="wait">

                                <motion.div
                                    key={currentScreen.title}
                                    className="demo-right"

                                    initial={{
                                        opacity: 0,
                                        y: 20
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    exit={{
                                        opacity: 0,
                                        y: -20
                                    }}

                                   transition={{
                                        delay: 0.08,
                                        duration: 0.45,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >

                                    <span className="demo-label">
                                        CURRENT SCREEN
                                    </span>

                                    <span className="preview-tag">
                                        SCREEN PREVIEW
                                    </span>

                                    <h3>
                                        {currentScreen.title}
                                    </h3>

                                    <p>
                                        {currentScreen.description}
                                    </p>

                                    <div className="demo-divider"></div>

                                    <div className="highlights">

                                        <h4>
                                            Key Highlights
                                        </h4>

                                       <div className="highlight-list">

                                            {currentScreen.highlights.map((item, index) => (

                                                <motion.div

                                                    className="highlight-row"

                                                    key={item.title}

                                                    initial={{
                                                        opacity:0,
                                                        x:20
                                                    }}

                                                    animate={{
                                                        opacity:1,
                                                        x:0
                                                    }}

                                                    transition={{
                                                        delay:.18 + index*.08,
                                                        duration:.28
                                                    }}

                                                >

                                                    <div className="highlight-icon">

                                                        <CheckCircle2 size={18}/>

                                                    </div>

                                                    <div>

                                                        <h5>

                                                            {item.title}

                                                        </h5>

                                                        <p>

                                                            {item.text}

                                                        </p>

                                                    </div>

                                                </motion.div>

                                            ))}

                                        </div>

                                    </div>

                                </motion.div>

                            </AnimatePresence>

                        </div>

                      
                    </div>
       
            {/* Product Roadmap */}

                <div className="roadmap-section">

                    <div className="roadmap-header">

                        <span>FUTURE DEVELOPMENT</span>

                            <h3>Work In Progress</h3>

                            <p>
                                The next generation of CareSync focuses on AI-powered healthcare,
                                smarter patient monitoring, and connected digital health experiences.
                            </p>

                    </div>

                    <div className="roadmap-grid">

                        {careSyncData.roadmap.map((item) => (

                            <div
                                className="roadmap-card"
                                key={item.title}
                            >

                                <div className={`status ${item.status.toLowerCase()}`}>

                                    {item.status}

                                </div>

                                <h4>{item.title}</h4>

                                <p>{item.description}</p>

                            </div>

                        ))}

                    </div>

                </div>
            </div>
                {selectedImage && (

                    <div
                        className="project-modal"
                        onClick={() => setSelectedImage(null)}
                    >

                    <div
                        className="project-modal-box"
                        onClick={(e)=>e.stopPropagation()}
                    >

                    <button
                    className="project-close"
                    onClick={()=>setSelectedImage(null)}
                    >

                    <X size={24}/>

                    </button>

                    <img
                    src={selectedImage}
                    alt="CareSync"
                    />

                    </div>

                    </div>

                    )}
        </section>
    );
}