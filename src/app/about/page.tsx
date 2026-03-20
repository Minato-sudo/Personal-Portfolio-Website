import React from "react";
import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: about.image || "/og-image.png",
    path: about.path,
  });
}

const quickFacts = [
  { label: "Based In", value: "Islamabad, Pakistan" },
  { label: "Current Focus", value: "Machine Learning, NLP, Analytics" },
  { label: "Education", value: "BS Data Science at FAST-NUCES" },
  { label: "Contact", value: person.email },
  { label: "Open To", value: "💼 Research roles, ML internships" },
];

const sectionCardStyle: React.CSSProperties = {
  border: "1px solid var(--neutral-alpha-medium)",
  borderRadius: "1rem",
  padding: "1.5rem",
  background: "var(--page-background)",
};

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    { title: about.certifications.title, display: about.certifications.display, items: [] },
  ];

  return (
    <Column maxWidth="l" fillWidth paddingTop="40">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={about.image || "/og-image.png"}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px minmax(0, 1fr)",
          gap: "2rem",
          width: "100%",
          maxWidth: "1120px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        <div className={styles.mobileStack}>
          <Column
            fitHeight
            position="sticky"
            style={{ top: "88px" }}
            gap="16"
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.displayLocation}
            </Row>
            <Text variant="body-default-s" onBackground="neutral-weak" align="center">
              {person.location} ({person.timezoneLabel})
            </Text>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8" horizontal="center">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language === "Urdu" ? "Urdu · اردو" : language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        </div>

        <div style={{ width: "100%" }}>
          <Column fillWidth gap="32">
            <Column id={about.intro.title} fillWidth gap="20">
              <Text variant="label-default-m" onBackground="brand-weak">
                About Talha
              </Text>
              <Heading className={styles.textAlign} variant="display-strong-l">
                {person.name}
              </Heading>
              <Text
                className={styles.textAlign}
                variant="display-default-xs"
                onBackground="neutral-weak"
              >
                {person.role}
              </Text>
              <Text variant="body-default-l" onBackground="neutral-weak">
                {about.intro.description}
              </Text>

              <Row
                wrap
                gap="12"
                className={styles.blockAlign}
                horizontal="start"
                fitWidth
                s={{ horizontal: "center" }}
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              href={item.link}
                              icon={item.icon}
                              size="l"
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  width: "100%",
                }}
              >
                {quickFacts.map((fact) => (
                  <div key={fact.label} style={sectionCardStyle}>
                    <Text variant="label-default-s" onBackground="brand-weak">
                      {fact.label}
                    </Text>
                    <Text variant="body-default-m" style={{ marginTop: "0.35rem" }}>
                      {fact.value}
                    </Text>
                  </div>
                ))}
              </div>
            </Column>

            {about.work.display && (
              <Column fillWidth gap="20">
                <Heading as="h2" id={about.work.title} variant="display-strong-s">
                  {about.work.title}
                </Heading>
                {about.work.experiences.map((experience, index) => (
                  <div
                    key={`${experience.company}-${experience.role}-${index}`}
                    id={experience.company}
                    style={{
                      ...sectionCardStyle,
                      borderLeft: index === 0 ? "3px solid #7c3aed" : "3px solid #059669",
                    }}
                  >
                    <Column fillWidth gap="16">
                      <Row
                        fillWidth
                        horizontal="between"
                        vertical="start"
                        gap="16"
                        s={{ direction: "column" }}
                      >
                        <Column gap="8">
                          <Row gap="8" wrap vertical="center">
                            <Text variant="heading-strong-l">{experience.role}</Text>
                            <Tag
                              size="l"
                              style={{
                                background:
                                  index === 0
                                    ? "rgba(124, 58, 237, 0.16)"
                                    : "rgba(5, 150, 105, 0.16)",
                                border: `1px solid ${
                                  index === 0
                                    ? "rgba(124, 58, 237, 0.4)"
                                    : "rgba(5, 150, 105, 0.4)"
                                }`,
                              }}
                            >
                              {index === 0 ? "Research" : "Volunteer"}
                            </Tag>
                          </Row>
                          <Text variant="body-default-m" onBackground="neutral-weak">
                            {experience.company}
                          </Text>
                        </Column>
                        <Text
                          variant="body-default-s"
                          onBackground="neutral-weak"
                          style={{
                            border: "1px solid var(--neutral-alpha-medium)",
                            borderRadius: "999px",
                            padding: "0.5rem 0.875rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {experience.timeframe}
                        </Text>
                      </Row>
                      <Column as="ul" gap="16">
                        {experience.achievements.map(
                          (achievement: React.ReactNode, itemIndex: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${itemIndex}`}
                            >
                              {achievement}
                            </Text>
                          ),
                        )}
                      </Column>
                    </Column>
                  </div>
                ))}
              </Column>
            )}

            {about.studies.display && (
              <Column fillWidth gap="20">
                <Heading as="h2" id={about.studies.title} variant="display-strong-s">
                  {about.studies.title}
                </Heading>
                {about.studies.institutions.map((institution, index) => (
                  <div key={`${institution.name}-${index}`} id={institution.name} style={sectionCardStyle}>
                    <Column fillWidth gap="8">
                      <Text variant="heading-strong-l">{institution.name}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  </div>
                ))}
              </Column>
            )}

            {about.technical.display && (
              <Column fillWidth gap="20">
                <Heading as="h2" id={about.technical.title} variant="display-strong-s">
                  {about.technical.title}
                </Heading>
                {about.technical.skills.map((skill, index) => (
                  <div key={`${skill.title}-${index}`} id={skill.title} style={sectionCardStyle}>
                    <Column fillWidth gap="8">
                      <Text variant="heading-strong-l">{skill.title}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {skill.description}
                      </Text>
                      {skill.tags && skill.tags.length > 0 && (
                        <Row wrap gap="8" paddingTop="8">
                          {skill.tags.map((tag, tagIndex) => (
                            <Tag key={`${skill.title}-${tagIndex}`} size="l">
                              {tag.name}
                            </Tag>
                          ))}
                        </Row>
                      )}
                    </Column>
                  </div>
                ))}
              </Column>
            )}

            {about.certifications.display && (
              <Column fillWidth gap="20" marginBottom="40">
                <Heading as="h2" id={about.certifications.title} variant="display-strong-s">
                  {about.certifications.title}
                </Heading>
                <div style={sectionCardStyle}>
                  <Column as="ul" fillWidth gap="16">
                    {about.certifications.items.map((item, index) => (
                      <Text as="li" variant="body-default-m" key={`certification-${index}`}>
                        {item}
                      </Text>
                    ))}
                  </Column>
                </div>
              </Column>
            )}
          </Column>
        </div>
      </div>
    </Column>
  );
}
