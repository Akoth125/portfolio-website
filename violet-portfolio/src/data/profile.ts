// All portfolio content lives here. Edit this file to update the site —
// components just render whatever is defined below.

export const profile = {
  name: 'Violet Akoth Ongonge',
  role: 'Junior Software Developer',
  focus: 'Frontend / Full-Stack',
  location: 'Nairobi, Kenya',
  email: 'violetakoth215@gmail.com',
  phone: '+254 742 789 933',
  linkedin: 'https://linkedin.com/in/violet-ongonge',
  github: 'https://github.com/Akoth125',
  currentFocus:
    'Building a shared authentication service for Inspire Spaces — Next.js, TypeScript, Supabase Auth, PostgreSQL',
  bio: [
    "I'm an Applied Computer Science graduate who builds web applications and responsive interfaces, with a strong interest in frontend and full-stack development.",
    "I enjoy understanding how a product should work, turning requirements into usable interfaces, and working through problems until the pieces connect.",
    "My recent work includes a shared authentication service for Inspire Spaces, built with Next.js, TypeScript, Supabase Auth, and PostgreSQL.",
    "I'm looking for a junior software development role where I can contribute to real products, learn from experienced developers, and grow through practical work.",
  ],
}

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Responsive design'],
  },
  {
    category: 'Backend',
    items: ['Django', 'Django REST Framework', 'REST APIs', 'Supabase Auth'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    category: 'Development',
    items: [
      'Component-based UI',
      'API integration',
      'Authentication flows',
      'Form handling',
      'Debugging',
      'Responsive layouts',
    ],
  },
  {
    category: 'Professional',
    items: [
      'Requirements understanding',
      'Problem-solving',
      'Documentation',
      'Client communication',
      'Independent learning',
    ],
  },
]

export type Project = {
  slug: string
  name: string
  period: string
  stack: string[]
  summary: string
  details: string[]
  link?: string
}

export const projects: Project[] = [
  {
    slug: 'inspire-spaces-auth',
    name: 'Inspire Spaces — Shared Authentication Service',
    period: '2026 — Present',
    stack: ['Next.js', 'TypeScript', 'Supabase Auth', 'PostgreSQL', '@supabase/ssr'],
    summary:
      'A shared authentication service handling registration, verification, and onboarding across Inspire Spaces products.',
    details: [
      'Built registration with email/password auth, password confirmation, email verification, and validation handling.',
      'Developed an onboarding flow that collects profile information after registration and connects it to the authenticated user.',
      'Worked through authentication, routing, profile-saving, and database-access issues while integrating Supabase Auth and PostgreSQL.',
    ],
  },
  {
    slug: 'electronic-voting-system',
    name: 'Electronic Voting System',
    period: '2025',
    stack: ['Python', 'Django', 'SQLite'],
    summary:
      'A web-based voting platform with authentication, role-based access, and automated vote tallying.',
    details: [
      'Implemented authentication and role-based access control for voters and administrators.',
      'Built automated vote tallying with database integrity checks to keep records accurate.',
      'Added audit logging concepts to reduce duplicate entries and support accurate records.',
    ],
  },
  {
    slug: 'construction-ecommerce',
    name: 'Construction Materials E-Commerce Platform',
    period: '2024',
    stack: ['React', 'Django REST Framework'],
    summary:
      'A full-stack e-commerce application for browsing and ordering construction materials.',
    details: [
      'Built a dynamic product catalogue, shopping cart, and order-management functionality.',
      'Connected the React frontend to Django REST API endpoints for application data and user interactions.',
    ],
  },
]

export type ExperienceItem = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Developer — Shared Authentication Service',
    org: 'Inspire Spaces',
    period: '2026 — Present',
    bullets: [
      'Developing a shared authentication service using Next.js App Router, TypeScript, Supabase Auth, PostgreSQL, and @supabase/ssr.',
      'Built registration with email/password authentication, password confirmation, email verification, and validation handling.',
      'Developed an onboarding flow that collects user profile information after registration and connects it to the authenticated user.',
      'Use Git/GitHub to track development progress and collaborate on the project.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    org: 'Remote',
    period: '2023 — Present',
    bullets: [
      'Build responsive websites and web applications based on client requirements.',
      'Translate requirements into frontend interfaces and connect frontend components to backend services through APIs.',
      'Work through revisions and implementation issues while refining functionality and user experience.',
    ],
  },
  {
    role: 'Receptionist & Operations Assistant',
    org: 'Automotive Garage',
    period: '2026 — Present',
    bullets: [
      'Coordinate customer communication, vehicle handovers, invoices, daily summaries, and operational records.',
      'Maintain inventory information and use Fleetmate for vehicle and service documentation.',
    ],
  },
  {
    role: 'IT Support Intern',
    org: 'The Nairobi Hospital',
    period: 'April 2024 — August 2024',
    bullets: [
      'Provided first-level support for hardware, software, printer, and basic network issues under the ICT team.',
      'Assisted with computer, printer, and peripheral configuration, maintenance, updates, and backups.',
      'Documented support issues and escalated problems requiring additional technical assistance.',
    ],
  },
]

export type EducationItem = {
  title: string
  period: string
  detail: string
}

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Science in Applied Computer Science',
    period: '2021 — 2025',
    detail: 'Second Class Honors, Upper Division',
  },
  {
    title: 'KCSE',
    period: '2017 — 2020',
    detail: 'Grade: B+',
  },
]

export const leadership = [
  {
    role: 'Student Leader & Mentor',
    org: 'Kilele Academy',
    period: 'March 2026',
    detail:
      'Mentored high school graduates transitioning into university, supporting academic adjustment, course selection, and social integration.',
  },
  {
    role: 'Volunteer & Peer Mentor',
    org: 'Inspire Spaces',
    period: '2016 — Present',
    detail: 'Participate in youth mentorship, leadership, and student engagement activities.',
  },
]

export const certifications = ['US Embassy Leadership Training Certificate']
