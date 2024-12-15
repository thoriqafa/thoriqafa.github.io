import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Impor CSS default
import '../../styles/custom_style.css';
import WorkIcon from '@mui/icons-material/Work'; // Import WorkIcon from MUI

const Experience = () => {
  return (
    <div class="untree_co-section pb-0">
            <div class="container">
                <div class="row mb-4">
                <div class="col-lg-7 text-center mx-auto">
                    <h2 class="section-heading gsap-reveal-hero mb-4"><strong>Experience</strong></h2>
                    <div class="wave gsap-reveal-hero" >
                    <svg>
                        <path d="M10,10 L50,100 L90,50" stroke="#0389ff"></path>
                    </svg>
                    </div>
                </div>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="Juli 2024 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">PT. Bumi Menara Internusa</h3>
                    <h4 className="vertical-timeline-element-subtitle">IT Staff Developer</h4>
                    <p>
                        
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Mei 2023 - Juni 2024"
                    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">PT. Mitra Integrasi Informatika</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Application Developer
                    </h4>
                    <p>
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oktober 2022 - Maret 2023"
                    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">PT. Otto Menara Globalindo (McEasy)</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Database Administrator
                    </h4>
                    <p></p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                    icon={<WorkIcon />}
                    />
                </VerticalTimeline>
                </div>
        </div>
  );
};

export default Experience;
