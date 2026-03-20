import Image from "next/image";
import { Button, Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { baseURL, gallery, person } from "@/resources";
import styles from "./projects.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL,
    image: gallery.image || "/og-image.png",
    path: gallery.path,
  });
}

// ============================================================
// TODO: Projects Page - Easy to Extend
// To add a new project: copy a project object in the `projects`
// array below and fill in the fields. No other changes needed.
// To add a real screenshot: replace the `image` URL with your
// local image path in /public/images/projects/
// ============================================================
const projects = [
  {
    title: "Disaster Risk Analytics Framework",
    subtitle: "Resilience Under Pressure",
    description:
      "Fused 4 global datasets with 78 variables to compute the Disaster Impact Index, Resilience & Recovery Score, and Climate Risk Index. Built Tableau dashboards showing governance quality affects disaster recovery speed more than GDP.",
    image: "/images/projects/disaster-risk.svg",
    tags: ["Python", "Tableau", "Statistical Analysis", "Data Fusion"],
    href: "https://github.com/Minato-sudo/",
  },
  {
    title: "Inflation Prediction Model",
    subtitle: "Forecasting Through Comparative Modeling",
    description:
      "Built a multi-model predictive system using R, ARIMA, SVM, and Random Forest to forecast inflation trends. Explored global economic patterns and inter-variable correlations through advanced statistical modeling.",
    image: "/images/projects/inflation-model.svg",
    tags: ["R", "ARIMA", "SVM", "Random Forest", "Statistical Modeling"],
    href: "https://github.com/Minato-sudo/",
  },
  {
    title: "Database Project",
    subtitle: "Relational Design for a Structured Web System",
    description:
      "Designed a database-driven web application with SQL schema planning, ERD-backed relational modeling, and multiple EJS interface flows for dashboard, account, login, and judge management.",
    image: "/images/projects/database-project.svg",
    tags: ["SQL", "MySQL", "Node.js", "EJS", "ERD"],
    href: "https://github.com/Minato-sudo/Database_Project",
  },
  {
    title: "Taskify - Task Management App",
    subtitle: "Productivity for Personal and Team Workflows",
    description:
      "Developed a full-featured task management application in C# with scheduling, prioritization, and deadline tracking. Designed for personal productivity workflows and small team use.",
    image: "/images/projects/taskify.svg",
    tags: ["C#", "Application Development", "UI/UX"],
    href: "https://github.com/Minato-sudo/",
  },
  {
    title: "Traffic & Game Systems (C++)",
    subtitle: "Algorithms and Systems-Level Design",
    description:
      "Simulated traffic congestion algorithms and built a game data management system in C++. Focused on performance optimization and systems-level thinking in C++.",
    image: "/images/projects/traffic-systems.svg",
    tags: ["C++", "Systems Programming", "Algorithms"],
    href: "https://github.com/Minato-sudo/",
  },
  {
    title: "AI Image Generation (KDD Lab)",
    subtitle: "NLP and Deep Learning for Visual Generation",
    description:
      "Applied NLP and Deep Learning during Talha's internship at FAST's KDD Lab to optimize AI image generation pipelines. Developed scene-graph-based and multi-language sub-prompt models to improve output fidelity.",
    image: "/images/projects/ai-image-gen.svg",
    tags: ["Python", "Deep Learning", "NLP", "Image Generation"],
    href: "https://github.com/Minato-sudo/",
  },
];

export default function ProjectsPage() {
  return (
    <Column maxWidth="l" fillWidth paddingTop="40" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={gallery.image || "/og-image.png"}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="16" horizontal="center" align="center">
        <Text variant="label-default-m" onBackground="brand-weak">
          Selected projects by Talha Arshad
        </Text>
        <Heading variant="display-strong-m" align="center">
          Projects
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          align="center"
          style={{ maxWidth: "52rem" }}
        >
          From data pipelines to predictive models - a selection of projects in machine
          learning, analytics, and software systems.
        </Text>
      </Column>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
              <Image
                src={project.image}
                alt={project.title}
                unoptimized
                width={800}
                height={450}
                priority={project.title === "Disaster Risk Analytics Framework"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <Column gap="16" padding="24" fillWidth style={{ flex: 1 }}>
              <Column gap="8">
                <Heading as="h2" variant="heading-strong-l">
                  {project.title}
                </Heading>
                <Text variant="label-default-m" onBackground="brand-weak">
                  {project.subtitle}
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {project.description}
                </Text>
              </Column>
              <Row wrap gap="8">
                {project.tags.map((tag) => (
                  <Tag key={`${project.title}-${tag}`} size="l">
                    {tag}
                  </Tag>
                ))}
              </Row>
              <Row paddingTop="8">
                <Button href={project.href} variant="secondary" size="s">
                  Explore →
                </Button>
              </Row>
              {/* TODO: Replace these GitHub links with project-specific deployment links or deeper case study pages if available. */}
            </Column>
          </article>
        ))}
      </div>
    </Column>
  );
}
