import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const projects = {
  'new-app-design': {
    title: 'New App Design',
    heroTitle: "Enhancing Taco Bell's digital experience through app design",
    heroImage: '/portfolio/new-app-design.jpg',
    heroBg: '#1a0a2e',
    impact: [
      'Sold the organization on the vision for an enhanced experience for users and the design to elevate brand equity and cohesion.',
      'Oversaw Product Management, Product Design and UX research to design the app visually and experientially with a mix of internal resources and external consultant talent.',
      'Led strategy for the experience design and worked to ensure coordination with other channels and parts of the business to create functionality to enable a seamless experience for customers',
      'Designed and led multiple workshops to involve partners across all parts of the business to generate ideas for new and enhanced features and functionality within the app.',
      'Guided research to ensure designers were provided with necessary insights, feedback and testing throughout the design process',
      'Enhanced ways of working for the Product Management, Design and Engineering teams to foster stronger collaboration and coordination',
      'Devised an "innovation Circle" among cross functional leaders to infuse innovation and cutting-edge experience design through the app design process',
    ],
    moodImage: '/portfolio/new-app-mood-dark.jpg',
    galleryImages: [
      '/portfolio/phone-cantina.jpg',
      '/portfolio/phone-crunchy-taco.jpg',
      '/portfolio/phone-rewards-landing.jpg',
      '/portfolio/phone-decades.jpg',
      '/portfolio/phone-rewards.jpg',
    ],
    featuredImage: '/portfolio/phone-with-background-luxe.jpg',
    nextSlug: 'creating-a-design-system',
    nextTitle: 'Creating a Design System',
    prevSlug: null,
    prevTitle: null,
  },
  'creating-a-design-system': {
    title: 'Creating a Design System',
    heroTitle: 'Strengthening the brand through meaningful, consistent, and cohesive design',
    heroImage: '/portfolio/gradients.jpg',
    heroBg: '#2d1463',
    impact: [
      'Sold the value of developing a design system and worked to educate and persuade engineering and product partners to prioritize the work to collaboratively create a design system to enhance consistency across the digital experience and increase efficiency across multiple teams.',
      "Led the creation of Taco Bell's first digital design system through partnership with the engineering team leading work on tokens, components, design standards, documentation, system structure and process.",
      'Set the vision and strategy ensuring execution of a robust and flexible system enhancing efficiency for both design and engineering teams and freeing up capacity to focus on more strategic design challenges',
      'Hired, organized and oversaw a dedicated team to ensure the design system was well structured to create a shared foundation for digital design across the business.',
      'Ensured accessibility in the system through adherence to WCAG standards and testing within the system and with appropriate audiences to ensure a foundation for accessible design',
      'Planned for scalability with initial focus on the mobile experience and next steps to expand the approach to create connected systems across all digital channels (web, kiosk, digital menu boards, etc.)',
    ],
    moodImage: '/portfolio/creating-a-design-system-mood.jpg',
    descriptionContent: {
      statement: 'The goal of the the design system was to enhance the aesthetic appeal and create a cohesive, accessible, and scalable design system that supports Taco Bell across all digital channels.',
      body: "The framework empowers the design team with a unified vision and a practical toolkit, establishing a digital-first approach that reflects Taco Bell's brand values consistently and effectively.",
      oversawLabel: "I oversaw the team's work on:",
      oversawItems: [
        { bold: 'Base Palettes', text: '—covering color, brand, functional, and neutral tones—ensuring that our brand identity remains clear and cohesive across all touchpoints.' },
        { bold: 'Semantic Colors', text: ' used for background, foreground, borders, and accents to bring clarity to the visual language of our UI, aligning with contrast consistency and accessibility standards. Structured a typographic system defining Fonts, Styles, Hierarchy, and Logic to achieve clear communication and a strong visual flow.' },
        { bold: 'Spacing principles', text: ' were meticulously outlined through grids, logic, and tokens to maintain harmony and balance throughout layouts.' },
        { bold: 'Depth guidelines', text: ', such as elevation styles, shadows, and focus indicators, were added to convey interaction states effectively and enhance the user experience. Defined Borders (radii and width specifications),' },
      ],
    },
    descriptionImages: [
      '/portfolio/design-system-components.jpg',
      '/portfolio/design-system-app-screens.jpg',
    ],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'shaping-organizational-culture',
    nextTitle: 'Shaping Organizational Culture',
    prevSlug: 'new-app-design',
    prevTitle: 'New App Design',
  },
  'shaping-organizational-culture': {
    title: 'Shaping Organizational Culture',
    heroTitle: 'Creating culture: Bringing a newly formed, 300+ person organization together',
    heroImage: '/portfolio/shaping-organizational-culture.jpg',
    heroStyle: 'split',
    heroBg: '#1c1c2e',
    impactHeading: 'Creating a code to bring people together',
    impact: [
      'Led the leadership team in identifying key and values that we wanted to engender as an organization',
      'Worked to articulate the key values and beliefs into a Digital and Tech Code with 9 key principles that very intentionally codified key behaviors and attitudes that support the desired culture of the new division',
      'Developed a vision for bringing the D&T Code to life through visuals, practices, incentives and recognition and adoption of the principles in employee and team actions',
      'Created a strategy and plan for adoption and usage of the code inspiring leadership to use it with their teams and to inspire action and change at all levels in the organization',
      'Created design assets (imagery, icons, backgrounds, templates, cards, pins) to support recognition and inspire excitement around the code',
      'Worked with the leadership team to embed the principles into communications, presentations, conversations and planning with their teams to ensure widespread adoption',
    ],
    moodImage: '/portfolio/org-culture-digital-code.jpg',
    featuredImage: null,
    galleryImages: [
      '/portfolio/org-culture-card-live-mas.jpg',
      '/portfolio/org-culture-card-build-trust.jpg',
      '/portfolio/org-culture-card-taking-risks.jpg',
      '/portfolio/org-culture-card-know-your-customer.jpg',
      '/portfolio/org-culture-card-remove-friction.jpg',
      '/portfolio/org-culture-card-play-and-win.jpg',
      '/portfolio/org-culture-card-ignite-change.jpg',
      '/portfolio/org-culture-card-last-mile.jpg',
      '/portfolio/org-culture-card-be-you.jpg',
    ],
    galleryStyle: 'grid',
    nextSlug: 'enhancing-collaboration',
    nextTitle: 'Enhancing Collaboration',
    prevSlug: 'creating-a-design-system',
    prevTitle: 'Creating a Design System',
  },
  'global-wealth-management-firm': {
    title: 'Global Wealth Management Firm',
    heroTitle: 'REIMAGINING THE CLIENT & EMPLOYEE EXPERIENCE',
    heroImage: '/portfolio/global-wealth-management-firm.jpg',
    heroStyle: 'split',
    heroBg: '#0d2d1e',
    impact: [],
    moodImage: '/portfolio/fisher-collage.jpg',
    moodImageFit: 'contain',
    richImpact: [
      {
        label: 'THE PROBLEM',
        body: 'This global wealth management firm needed a digital experience to complement its high-quality high touch advisor experience and to improve advisor efficiency. Additionally, the firm was plagued outdated technology and  manual and complicated processes lacking efficient workflow.  They sought our help in creating a world class digital experience for their clients and employees.',
      },
      {
        label: 'OUR HYPOTHESIS',
        body: 'Making the experience real and tangible for executives through vivid storytelling, depicting the future experience for their advisors and clients, will engender alignment around a common vision and enable a unified, focused approach moving forward.',
      },
      {
        label: 'MY CONTRIBUTIONS',
        body: 'I oversaw the lifecycle of the project and managed teams in: research, experience strategy, UX and UI Design, business case and roadmap development. Trained multiple PwC  teams in design thinking and human centered design approaches and oversaw the training of client teams. I worked closely with the owner and c-suite leadership of the firm to instill collaborative and innovative new ways of working throughout the organization.',
        bullets: [
          'Directed discovery work including qualitative and quantitative research plans, advisor and client interviews and focus groups, and technology usage mapping',
          'Led the design and execution of a quantitative client survey used to create robust client personas based on behavioral preferences and characteristics. Utilized k-means clustering to inform persona creation.',
          'Ran translation of research data to create advisor and client personas and current state journey map highlighting pain points and opportunities for enhancement in the experience',
          'Created a customer centric future journey and showcased it through the dynamic and emblematic story of "David," an example client, as he experienced significant life events and interacted with his advisor, "Lauren" throughout his journey.',
          'Developed a creative brief and oversaw the creation of design mockups to showcase the vision for the future state experience of advisors and clients.',
          'Spearheaded the strategy, design, and creation of a dynamic and immersive physical space utilizing video, audio, visual and tactile elements to tell the story of "David" and "Lauren" and showcase the new advisor and client experience.',
          'Oversaw the creation of a roadmap to layout the plan for technology, process, and cultural changes needed to carry out the future experience vision',
          'Designed a collaboration model unifying employees and accelerating work through collaborative design sessions and design thinking principles throughout the organization.',
        ],
      },
      {
        label: 'THE RESULT',
        body: 'Firm-wide alignment to the north star of their future client and employee experience.   Our client now possessed a detailed, program wide roadmap outlining the steps necessary to realize their world class digital experience. This roadmap included the user research and designs for immediate next steps. The completion of this project resulted in radical acceleration of the Firm\'s goal to deliver new client and advisor digital experiences. Immediately following completion of this project we began technology design work.',
      },
    ],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'large-utility-provider',
    nextTitle: 'Large Utility Provider',
    prevSlug: 'enhancing-collaboration',
    prevTitle: 'Enhancing Collaboration',
  },
  'large-utility-provider': {
    title: 'Large Utility Provider',
    heroTitle: 'TRANSFORMING A COMPANY THROUGH DIGITAL EXPERIENCE',
    heroImage: '/portfolio/large-utility-provider.jpg',
    heroStyle: 'split',
    heroBg: '#0a2540',
    impact: [],
    moodImage: '/portfolio/njr-collage.jpg',
    moodImageFit: 'contain',
    richImpact: [
      {
        label: 'THE PROBLEM',
        body: 'With almost no digital presence, this company lacked the ability to provide an experience to meet customers\' ever-growing expectations. Additionally, their internal processes were analog and inefficient, and their technology was outdated, causing inefficiencies for employees and limiting the capabilities of the organization. This large utility company wanted to transform its organization to facilitate an enhanced digital first, customer centric, experience and enable it operationally.',
      },
      {
        label: 'OUR HYPOTHESIS',
        body: 'Developing a robust digital strategy would help the client move into the digital age and create operational efficiencies while enhancing the experience for their employees and customers.',
      },
      {
        label: 'MY CONTRIBUTIONS',
        body: 'Led the experience strategy and design work streams across multiple projects and teams. I oversaw user research, digital strategy development, content assessment, digital style guide and branding, user story & requirements development and employee operations and experience work.',
        bullets: [
          'Created UX research plan and conducted dozens of customer and employee interviews and shadowing sessions to gather data and develop experience insights',
          'Directed the creation of personas and day in the life journey maps to summarize findings and make the experience real highlighting key pain points and opportunities to enhance the experience',
          'Translated insights and opportunities into initiatives to achieve the future experience vision and facilitated the prioritization of initiatives based in impact, cost and dependencies',
          'Created the digital experience strategy and multi-year implementation roadmap with business justification for each initiative',
          'Oversaw content and UX assessment of current "My Account" experience and developed recommendations',
          'Guided experience design for the CRM implementation to optimize user adoption and increase employee efficiency by up to 20%',
          'Led the creation of a new digital style guide introducing new branding and UX standards and invigorating the current brand while making it more relevant for a digital experience',
          'Designed and facilitated collaborative, co-creative PI events with workshops to accelerate work, align teams, and engender innovative thinking',
        ],
      },
      {
        label: 'THE RESULT',
        body: 'We delivered a multi-year roadmap guiding the organization\'s transformation to an innovative, user-friendly, digital-first customer experience. We leveraged business, experience, and technology perspectives and teams to address the way customers interact with the company and began working on several of the roadmap\'s initiatives.',
      },
    ],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'national-financial-services',
    nextTitle: 'National Financial Services Organization',
    prevSlug: 'global-wealth-management-firm',
    prevTitle: 'Global Wealth Management Firm',
  },
  'national-financial-services': {
    title: 'National Financial Services Organization',
    heroTitle: 'DESIGNING A CUSTOMER-CENTRIC ORGANIZATION TO DELIVER A PERSONALIZED CLIENT EXPERIENCE',
    heroImage: '/portfolio/national-financial-services.jpg',
    heroStyle: 'split',
    heroBg: '#0a2540',
    impact: [],
    moodImage: '/portfolio/pheaa-collage.jpg',
    moodImageFit: 'contain',
    richImpact: [
      {
        label: 'THE PROBLEM',
        body: 'The company leadership sought to understand their CX capabilities relative to competitors, identify opportunities to deliver an improved experience for their clients, and stand up an organization to champion CX initiatives and own accountability for the client experience.',
      },
      {
        label: 'OUR HYPOTHESIS',
        body: "The strategy's success would be dependent on the client's ability to execute on it. Our team focused equally on creating the experience vision and strategy and creating an operating model to deliver on the strategy to help the organization become more customer centric.",
      },
      {
        label: 'MY CONTRIBUTIONS',
        body: 'I oversaw the organizational design for the new CX (Customer Experience) organization and drove the digital experience vision. I acted as the VP of Customer Experience to launch and grow the new division; built a team of 4 managers and 30+ team members, and created and executed the organization\'s CX strategy.',
        bullets: [
          'Co-developed digital experience vision leading the strategy team and working with creative team to develop innovative ideas and design mockups',
          'Devised the framework and maturity model used and led the assessment of the organization based on their capabilities across 6 key categories relating to CX',
          'Led several collaborative client workshops to refine experience vision and organizational design and enhance alignment among key stakeholders in the organization',
          'Designed the new CX division including organizational structure, capabilities, governance model, roles and reporting, job descriptions, and operating model',
          'Led the new division as the interim VP of Customer Experience and built a team of 30+ through external hiring and internal recruiting and training',
          'Created the CX Charter, mission, goals, and objectives and worked with CEO and C-Suite leadership to create an enterprise customer experience strategy',
          'Oversaw training for CX managers on design thinking and empowered them to train their teams in collaboration and results-driven accountability.',
          'Directed the hiring and and training of new CX staff including the new replacement for VP of Customer Experience',
        ],
      },
      {
        label: 'THE RESULT',
        body: 'Developed the components and processes necessary to stand up a successful CX organization to achieve CX future state vision and left the client with a fully operational CX team that was already making an impact. We developed a clear and solid plan for the organization to move CX forward at all levels and helped create a more customer centric culture as a whole.',
      },
    ],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'global-food-retailer',
    nextTitle: 'Global Food Retailer',
    prevSlug: 'large-utility-provider',
    prevTitle: 'Large Utility Provider',
  },
  'global-food-retailer': {
    title: 'Global Food Retailer',
    heroTitle: 'INCREASING BRAND LOYALTY AND ENHANCING THE CUSTOMER EXPERIENCE',
    heroImage: '/portfolio/global-food-retailer.jpg',
    heroStyle: 'split',
    heroBg: '#7b1200',
    impact: [],
    moodImage: '/portfolio/chipotle-collage.jpg',
    moodImageFit: 'contain',
    richImpact: [
      {
        label: 'THE PROBLEM',
        body: 'The quick-service and fast-casual restaurant market has seemingly unlimited options for customers to choose from, making it difficult to differentiate. The client had been struggling to retain customers after food borne illnesses damaged the brand. The client had very little customer data, and wanted to design a loyalty program to capture customer information that would enable targeting segments to increase frequency and retaining high-value customers to grow sales comp and the bottom line.',
      },
      {
        label: 'OUR HYPOTHESIS',
        body: 'Two things customers value most are a trustworthy brand and being rewarded for their loyalty. Without a mechanism to collect customer data, like a loyalty program, companies are unable to recognize repeat customer behavior to reward them, encourage and incentivize new purchases, and build an ongoing trusting relationship with each consumer',
      },
      {
        label: 'MY CONTRIBUTIONS',
        body: 'I directed the strategy efforts to understand the state of the business and customer loyalty concerns and oversaw the design team ensuring that ideas and concepts translated to customer adoption and loyalty and would ultimately enhance the experience customers had with the brand.',
        bullets: [
          'Led the collection of strategic research and data to inform the loyalty program and incentive design',
          'Guided the design work through the creation of a creative experience brief to highlight important strategic elements to be included in the creative and operational design if the program',
          'Generated dozens of loyalty ideas and worked to combine them into concepts to engender customer loyalty through return visits, higher frequency purchases, and larger basket size',
          'Facilitated collaborative prioritization of loyalty concepts in a multi-day session with the client to prioritize the concepts to model out',
          'Oversaw creation of design mockups to accurately represent loyalty concepts and ensured the design was aligned with consumer insights and research findings',
        ],
      },
      {
        label: 'THE RESULT',
        body: 'Within the first few months of the launch the loyalty app had been downloaded by 5M people. The loyalty program is now using customer data to more effectively target and engage lapsed users and increase visit and purchase frequency. Data has shown that loyalty members increased purchase frequency after joining the program.',
      },
    ],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'global-snack-beverage-distributer',
    nextTitle: 'Global Snack and Beverage Distributer',
    prevSlug: 'national-financial-services',
    prevTitle: 'National Financial Services Organization',
  },
  'global-snack-beverage-distributer': {
    title: 'Global Snack and Beverage Distributer',
    heroTitle: 'REDEFINING THE FUTURE OF GTM AND SALES EXECUTION',
    heroImage: '/portfolio/global-snack-beverage-distributer.jpg',
    heroStyle: 'split',
    heroBg: '#1a1a1a',
    impact: [],
    moodImage: '/portfolio/frito-collage.jpg',
    moodImageFit: 'contain',
    richImpact: [
      {
        label: 'THE PROBLEM',
        body: 'Rapid changes in employee demographics, user preferences, customer expectations, and technological advancement are driving constant change. The client was getting by with temporary patches, home grown systems, and siloed data which was adding extra strain on already overextended frontline team members, directly impacting employee attrition and creating a staffing crisis.',
      },
      {
        label: 'OUR HYPOTHESIS',
        body: 'Gaining a deep understanding of employee processes, sentiments, and technology through ethnographic research would enable the creation of a robust new Go-T-Market and Sales strategy that would enhance productivity, efficiency, and adoption of on the job tools and technology.',
      },
      {
        label: 'MY CONTRIBUTIONS',
        body: 'I led global research efforts gathering insights from teams in the US and Mexico to understand the needs of people throughout the distribution process. This required a cultural understanding of work in multiple countries and capitalized on my proficiency in Spanish. I also led strategic work across four business unit work streams to build unique solutions for new technology requirements to enhance frontline staff productivity',
        bullets: [
          'Designed and led ethnographic research approach observing and interviewing distribution staff, leads and supervisors through distribution centers, store visits and ride alongs on delivery routes',
          'Oversaw the design and facilitation of multiple collaborative workshops to develop requirements and user stories for new technology solutions',
          'Directed efforts of multiple scrum teams across several sprints to utilize research insights to quickly iterate on technology designs providing an enhanced experience for employees in the field',
          'Led the Experience Team in generating insights and in working with the Technology and Business Teams to ensure that the end user experience was the focus of the design',
          'Identified the key issues facing Frontline teams with sales representatives arriving at each stop on their route unsure of what they will encounter inside to enable them to pivot and operate with grace under pressure.',
          'Leveraged insights collected in market to develop future state process flows designed to address the key issues facing Sales Reps',
          'Mapped future state flows to a correlating list of user stories and features to scope and prioritize the effort needed to bring these future flows to life',
        ],
      },
      {
        label: 'THE RESULT',
        body: 'Empowered frontline teams to quickly adapt to an evolving retail ecosystem by enhancing collaboration, elevating customer experience, and improving resiliency in order to deliver demand-based perfect service. We took actionable insights and increased agility and improved team collaboration throughout the organization',
      },
    ],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'experience-strategy-podcast',
    nextTitle: 'Experience Strategy and Design Podcast',
    prevSlug: 'global-food-retailer',
    prevTitle: 'Global Food Retailer',
  },
  'experience-strategy-podcast': {
    title: 'Experience Strategy and Design Podcast',
    heroTitle: 'BRINGING THE WORLD OF EXPERIENCE DESIGN TO LIFE THROUGH AUDIO',
    heroImage: '/portfolio/experience-strategy-podcast.jpg',
    heroStyle: 'split',
    heroBg: '#c0192b',
    impact: [],
    moodImage: '/portfolio/podcast-collage.jpg',
    moodImageFit: 'contain',
    richImpact: [
      {
        label: 'THE PROBLEM',
        body: 'There are so many elements and facets to Experience work that are underutilized or misunderstood. Many industry practitioners and business leaders do not understand the nuances and power of Experience Design so we created a medium to break it down, make it interesting, and share it with the business world.',
      },
      {
        label: 'OUR HYPOTHESIS',
        body: 'By interviewing experts in the world of Experience Strategy and Experience Design we can help spread good practices to help ensure that Experience is something that is thoughtfully considered in every project. Design thinking and Human Centered Design approaches enhance any project and are relevant in any type of work.',
      },
      {
        label: 'MY CONTRIBUTIONS',
        body: 'I started the first and only Experience Strategy and Design podcast within PwC. I developed the idea, gathered a team, built a plan, and secured funding to create and host a podcast to take listeners into the world of Experience Strategy and Design and dive into how world class, human centered experiences are created.',
        bullets: [
          'Developed the vision for the podcast and designed the structure of the episodes to be engaging, informative, and relatable and to appeal to specialized and general audiences',
          'Recruited a team to strategize, plan, and produce the podcast and dedicate time outside of typical work responsibilities to deliver a product we are all passionate about',
          'Coached team members and provided opportunities to grow new skill sets (i.e interviewing, sound editing, product marketing, creating and publishing content, branding)',
          "Created a new way to showcase my team's expertise and build awareness of the work we do and how it can be beneficial in a variety of fields, industries, and projects",
          'Organized a contest to crowdsource the Experience Unwrapped cover art design and market the new podcast to grow listenership',
        ],
      },
      {
        label: 'THE RESULT',
        body: 'Created a global reaching podcast series available to the entire global PwC firm that has served to inform and educate on the world of Experience Strategy and Design and bring the field in the spotlight across industries',
      },
    ],
    galleryImages: [],
    featuredImage: null,
    nextSlug: null,
    nextTitle: null,
    prevSlug: 'global-snack-beverage-distributer',
    prevTitle: 'Global Snack and Beverage Distributer',
  },
  'enhancing-collaboration': {
    title: 'Enhancing Collaboration',
    heroTitle: 'ENHANCING COLLABORATION THROUGH HUMAN-CENTERED DESIGN',
    heroImage: '/portfolio/enhancing-collaboration.jpg',
    heroStyle: 'split',
    heroBg: '#1a73e8',
    impact: [],
    moodImage: '/portfolio/google-collage.jpg',
    moodImageFit: 'contain',
    richImpact: [
      {
        label: 'THE PROBLEM',
        body: 'Across a global organization serving brand clients at scale, silos between engineering, product management, and design were limiting the quality and speed of innovation. Teams lacked shared frameworks for collaboration, and a culture of human-centered thinking had yet to take root broadly across the organization.',
      },
      {
        label: 'OUR HYPOTHESIS',
        body: 'By embedding UX thinking, structured ideation, and cross-functional collaboration practices into the DNA of the organization, we could strengthen agility, improve the quality of solutions, and inspire a culture of innovation that would benefit both internal teams and the brand clients they serve.',
      },
      {
        label: 'MY CONTRIBUTIONS',
        body: 'As a User Experience Leader at Google, I led global programs and drove initiatives to build a stronger culture of collaboration, design thinking, and innovation across engineering, product, and design disciplines.',
        bullets: [
          'Facilitated cross-functional collaboration by bringing together engineering, product management, and design leaders for ideation and innovation workshops, strengthening organizational agility',
          'Oversaw global programs (100+ staff) serving brand clients, optimizing hiring, training, collaboration and agile ways of working',
          'Developed and presented "UX 101" strategy assets, inspiring empathy and collaboration among partners and influencing a culture of innovation across Google',
          'Developed a framework around "creative tension" to help teams better understand their counterparts and inspire co-creation to achieve more abundant and effective collaboration between teams and deliver more innovative solutions',
          'Coached discipline leaders in leveraging "creative tension" across functions to develop more innovative solutions to business problems',
        ],
      },
      {
        label: 'THE RESULT',
        body: 'Built a stronger foundation for cross-functional collaboration and human-centered design thinking across a global organization. The "creative tension" framework gave teams a shared language and approach for co-creation, and a culture of empathy and innovation took hold — improving the quality of solutions delivered to brand clients and elevating the role of UX across the organization.',
      },
    ],
    galleryImages: [],
    featuredImage: null,
    nextSlug: 'global-wealth-management-firm',
    nextTitle: 'Global Wealth Management Firm',
    prevSlug: 'shaping-organizational-culture',
    prevTitle: 'Shaping Organizational Culture',
  },
};

export default function ProjectDetail() {
  const { query } = useRouter();
  const slug = query.slug;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="px-6 py-24 text-center">
        <p className="mb-4 text-gray-500">Project not found.</p>
        <Link href="/portfolio" className="underline text-sm">← Back to Portfolio</Link>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} — Ray Kearney</title>
        <meta name="description" content={project.heroTitle} />
      </Head>

      <main>

        {/* ── Hero ── */}
        {project.heroStyle === 'split' ? (
          <section className="flex flex-col lg:flex-row" style={{ minHeight: '90vh' }}>
            <div className="w-full lg:w-1/2 flex items-center px-10 xl:px-16 py-20 bg-gray-100">
              <h1 className="text-3xl xl:text-5xl font-black text-gray-900 leading-tight">
                {project.heroTitle}
              </h1>
            </div>
            <div className="w-full lg:w-1/2 overflow-hidden" style={{ minHeight: '400px' }}>
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            </div>
          </section>
        ) : (
          <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
            <img
              src={project.heroImage}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to right, ${project.heroBg}ee 40%, ${project.heroBg}44 75%, transparent 100%)` }}
            />
            <div className="relative flex items-end p-10 xl:p-16" style={{ minHeight: '90vh' }}>
              <h1 className="text-3xl xl:text-5xl font-black text-white leading-tight max-w-lg">
                {project.heroTitle}
              </h1>
            </div>
          </section>
        )}

        {/* ── Mood image + Impact ── */}
        {(project.impact.length > 0 || project.richImpact) && (
          <section className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Left: mood/collage image */}
            <div className={`w-full lg:w-[40%] overflow-hidden min-h-[360px] flex items-center justify-center ${project.moodImageFit === 'contain' ? 'bg-white p-6' : 'bg-gray-100'}`}>
              {project.moodImage && (
                <img
                  src={project.moodImage}
                  alt=""
                  className={project.moodImageFit === 'contain' ? 'w-full h-full object-contain' : 'w-full h-full object-cover'}
                  style={project.moodImageFit !== 'contain' ? { minHeight: '360px' } : {}}
                />
              )}
            </div>

            {/* Right: standard bullets OR rich labeled sections */}
            <div className="w-full lg:w-[60%] px-8 xl:px-10 py-8 flex flex-col justify-start">
              {project.richImpact ? (
                project.richImpact.map((section, i) => (
                  <div key={i} className="mb-7">
                    <h3 className="font-bold text-sm mb-2">{section.label}</h3>
                    {section.body && <p className="text-sm leading-relaxed mb-3 text-gray-700">{section.body}</p>}
                    {section.bullets && (
                      <ul className="space-y-3">
                        {section.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-sm leading-relaxed">
                            <span className="mt-1.5 shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <>
                  {project.impactHeading ? (
                    <h2 className="text-2xl xl:text-3xl font-bold mb-6">{project.impactHeading}</h2>
                  ) : (
                    <h2 className="text-lg font-bold mb-5">My Impact:</h2>
                  )}
                  <ul className="space-y-4">
                    {project.impact.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-1.5 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>
        )}

        {/* ── Description text + images ── */}
        {project.descriptionContent && (
          <section className="flex flex-col lg:flex-row border-t border-gray-100">
            <div className="w-full lg:w-[45%] px-10 xl:px-14 py-14 flex flex-col justify-start">
              <p className="text-xl font-bold leading-snug mb-6">{project.descriptionContent.statement}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{project.descriptionContent.body}</p>
              <p className="text-sm mb-4">{project.descriptionContent.oversawLabel}</p>
              <div className="space-y-4">
                {project.descriptionContent.oversawItems.map((item, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    <strong>{item.bold}</strong>{item.text}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[55%] px-6 xl:px-10 py-14">
              <div className="grid grid-cols-2 gap-3">
                {project.descriptionImages?.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-full h-auto object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Featured large image ── */}
        {project.featuredImage && (
          <section
            className="py-16 flex justify-center"
            style={{ background: project.featuredBg === 'white' ? '#fff' : '#000' }}
          >
            <img
              src={project.featuredImage}
              alt=""
              className="max-h-[85vh] w-auto object-contain"
              onError={(e) => { e.target.parentElement.style.display = 'none'; }}
            />
          </section>
        )}

        {/* ── Gallery ── */}
        {project.galleryImages?.length > 0 && (
          project.galleryStyle === 'grid' ? (
            <section className="py-12 px-6 xl:px-10">
              <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                {project.galleryImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className={`w-full h-auto object-cover${project.galleryImages.length % 2 !== 0 && i === project.galleryImages.length - 1 ? ' col-span-2 max-w-[50%] mx-auto' : ''}`}
                    onError={(e) => { e.target.parentElement?.classList.add('hidden'); e.target.style.display = 'none'; }}
                  />
                ))}
              </div>
            </section>
          ) : (
            <section className="py-12 px-6 xl:px-10">
              <div className="flex gap-4 justify-center overflow-x-auto">
                {project.galleryImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-[480px] w-auto object-contain flex-shrink-0"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ))}
              </div>
            </section>
          )
        )}

        {/* ── Prev / Next navigation ── */}
        <div className="flex items-center justify-between px-6 xl:px-10 py-10 border-t border-gray-100">
          <div>
            {project.prevSlug && (
              <Link
                href={`/portfolio/${project.prevSlug}`}
                className="text-base font-black flex items-center gap-2 hover:gap-4 transition-all"
              >
                <span className="text-xl">‹</span> {project.prevTitle}
              </Link>
            )}
          </div>
          <div>
            {project.nextSlug && (
              <Link
                href={`/portfolio/${project.nextSlug}`}
                className="text-base font-black flex items-center gap-2 hover:gap-4 transition-all"
              >
                {project.nextTitle} <span className="text-xl">›</span>
              </Link>
            )}
          </div>
        </div>

      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(projects).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects[params.slug] ?? null;
  return { props: { project } };
}
