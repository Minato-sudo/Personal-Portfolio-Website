import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// TODO: Replace with Talha's actual photo.
export const TALHA_AVATAR_PATH = "/images/talha-avatar.jpg";

const person: Person = {
  firstName: "Muhammad Talha",
  lastName: "Arshad",
  name: "Talha Arshad",
  role: "Data Scientist & AI/ML Engineer",
  avatar: TALHA_AVATAR_PATH,
  email: "i232548@isb.nu.edu.pk",
  phone: "+92 346 699 1935",
  location: "Asia/Karachi",
  displayLocation: "Islamabad, Pakistan",
  timezoneLabel: "Pakistan Standard Time",
  languages: ["English", "Urdu"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Updates on machine learning, NLP, and data-driven product work.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Minato-sudo/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/t-arshad/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/og-image.png",
  label: "Home",
  title: "Talha Arshad - Data Scientist & AI/ML Engineer",
  description:
    "Portfolio of Muhammad Talha Arshad - Data Scientist, AI/ML Engineer, and student at FAST-NUCES Islamabad. Projects in machine learning, NLP, and data analytics.",
  headline: <>Turning data into decisions, and ideas into intelligence.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">FAST-NUCES</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Projects
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I&apos;m Talha, a Data Scientist and AI/ML Engineer at{" "}
      <Text as="span" size="xl" weight="strong">
        FAST-NUCES, Islamabad
      </Text>
      . I build predictive models, NLP systems, and data pipelines - turning complex
      data into clear decisions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Islamabad, Pakistan.`,
  image: "/og-image.png",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Talha is an Islamabad-based Data Scientist and AI/ML Engineer with a focused
        interest in turning messy, multi-source data into things that actually work -
        whether that&apos;s a predictive model, an NLP pipeline, or a Tableau dashboard
        that tells a story. He&apos;s currently studying at FAST-NUCES, contributing to
        research at the KDD Lab, and is always building something on the side.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Knowledge Discovery and Data Science (KDD) Lab",
        timeframe: "June 2025 - August 2025",
        role: "Summer Research Intern",
        achievements: [
          <>
            Architected a multilingual image generation pipeline by developing a custom
            XLMRCLIPEncoder that projected sentence embeddings into a 768-dimensional
            space, enabling Stable Diffusion to process prompts in Urdu, Arabic,
            Chinese, Spanish, and English.
          </>,
          <>
            Engineered multi-prompt disentanglement with a regex and spaCy based prompt
            splitter, then modified UNet cross-attention heads to support multiple
            sub-prompts for complex scene generation.
          </>,
          <>
            Trained and evaluated models on COCO and Multi30k datasets at 256 x 256
            resolution using A100 GPUs, monitored runs in Weights & Biases, and worked
            on a unified Gradio and Docker deployment pipeline.
          </>,
        ],
        images: [],
      },
      {
        company: "Jamshed Akhtar Qureshi Education Trust (JAQET)",
        timeframe: "February 2025 - May 2025",
        role: "Volunteer Data Analyst",
        achievements: [
          <>
            Processed and cleaned 100+ survey datasets, including normalization,
            preparation, and spreadsheet-to-analysis handoff.
          </>,
          <>
            Conducted statistical analysis in Python to support data-driven educational
            planning and resource allocation.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "FAST-NUCES, Islamabad",
        description: (
          <>
            BS in Data Science, 2023 - 2027 (Expected). Relevant coursework: Machine
            Learning, Statistical Analysis, Data Mining, Database Management, Data
            Warehousing, Deep Learning, NLP, AI, Advanced Statistics, and Data
            Visualization.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages & Databases",
        description: <>Core languages and data storage technologies used across projects.</>,
        tags: [
          { name: "Python" },
          { name: "R" },
          { name: "C++" },
          { name: "C#" },
          { name: "Node.js" },
          { name: "SQL" },
          { name: "MySQL" },
          { name: "NoSQL" },
        ],
      },
      {
        title: "ML & Data Science",
        description: (
          <>
            Modeling, forecasting, and machine learning methods used across
            Talha&apos;s analytical and research work.
          </>
        ),
        tags: [
          { name: "Statistical Analysis" },
          { name: "ARIMA" },
          { name: "SVM" },
          { name: "Random Forest" },
          { name: "Deep Learning" },
          { name: "NLP" },
          { name: "Generative AI" },
          { name: "Stable Diffusion" },
          { name: "Diffusers" },
        ],
      },
      {
        title: "Tools & Platforms",
        description: (
          <>
            Supporting tools for database design, visualization, experimentation, and
            technical communication.
          </>
        ),
        tags: [
          { name: "Tableau" },
          { name: "GitHub" },
          { name: "LaTeX" },
          { name: "ERD" },
          { name: "Docker" },
          { name: "Weights & Biases" },
          { name: "Hugging Face Hub" },
          { name: "Gradio" },
        ],
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications & Honors",
    items: [
      <>Supervised Machine Learning - Stanford University (Coursera)</>,
      <>Probability for Data Science - Great Learning Academy</>,
      <>Data Science Tools - IBM Cognitive Class</>,
      <>Scholarship Holder (10th Grade) - FBISE</>,
      <>🏆 DataFest &apos;26: Runner-Up - Data Visualization (with S&amp;P Global)</>,
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: `Thoughts, notes, and future articles from ${person.name}.`,
  image: "/og-image.png",
  // TODO: Replace placeholder blog posts with real articles.
  // Blog posts are located in /src/app/blog/posts/ - add or replace .mdx files there.
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Featured Work - ${person.name}`,
  description: `Selected machine learning and analytics case studies by ${person.name}.`,
  image: "/og-image.png",
};

const gallery: Gallery = {
  path: "/projects",
  label: "Projects",
  title: `Projects - ${person.name}`,
  description: `A project showcase featuring data science, AI, and software engineering work by ${person.name}.`,
  image: "/og-image.png",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
