import Image from "next/image";
import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  SmartLink,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m" paddingTop="32">
        <Column maxWidth="s" horizontal="center" align="center" gap="20">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.3}>
            <Row wrap gap="8" horizontal="center" style={{ justifyContent: "center" }}>
              <Text
                onBackground="brand-weak"
                style={{
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  borderRadius: "999px",
                  padding: "0.5rem 0.875rem",
                }}
              >
                📍 Islamabad, Pakistan
              </Text>
              <Text
                onBackground="neutral-weak"
                style={{
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  borderRadius: "999px",
                  padding: "0.5rem 0.875rem",
                }}
              >
                🎓 FAST-NUCES | BS Data Science
              </Text>
              <Text
                onBackground="neutral-weak"
                style={{
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  borderRadius: "999px",
                  padding: "0.5rem 0.875rem",
                }}
              >
                🧠 AI/ML, NLP, Analytics
              </Text>
            </Row>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Column
          fillWidth
          radius="xl"
          border="neutral-alpha-medium"
          background="page"
          overflow="hidden"
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
            <Image
              src="/images/projects/disaster-risk.svg"
              alt="Disaster Risk Analytics Framework preview"
              unoptimized
              width={800}
              height={450}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <Row
            fillWidth
            gap="24"
            paddingX="24"
            paddingTop="24"
            paddingBottom="24"
            s={{ direction: "column" }}
          >
            <Column flex={1} gap="8">
              <Text variant="label-default-m" onBackground="brand-weak">
                Featured Project
              </Text>
              <Heading as="h2" variant="display-strong-s">
                Disaster Risk Analytics Framework
              </Heading>
            </Column>
            <Column flex={1} gap="16">
              <Text variant="body-default-m" onBackground="neutral-weak">
                A multi-source analytics framework combining climate, governance, and
                disaster datasets into decision-ready resilience dashboards.
              </Text>
              <Row gap="24" wrap>
                <SmartLink href="/work/disaster-risk-analytics-framework" suffixIcon="arrowRight">
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
                <SmartLink
                  href="https://github.com/Minato-sudo/"
                  suffixIcon="arrowUpRightFromSquare"
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              </Row>
            </Column>
          </Row>
        </Column>
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[1, 2]} exclude={["disaster-risk-analytics-framework"]} />
      <Mailchimp />
    </Column>
  );
}
