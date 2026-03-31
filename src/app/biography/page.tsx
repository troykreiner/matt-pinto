import Image from "next/image";

import { SiteShell } from "@/components/site-shell";

const biographyGlance = [
  {
    label: "Education",
    value: <em>Berklee College of Music</em>,
    detail: <em>Guitar Performance, 2008-2013</em>,
  },
  {
    label: "Teaching",
    value: "Private Guitar Instruction",
    detail: "2006-present, in person and Zoom",
  },
  {
    label: "Broadway And Touring",
    value: <em>Joseph and the Amazing Technicolor Dreamcoat</em>,
    detail: <em>Bloody Bloody Andrew Jackson</em>,
  },
  {
    label: "Residency And Regular Gigs",
    value: "The Bitter End Monday Open Jam",
    detail: "The Last Word, Huntington NY",
  },
  {
    label: "Notable Collaborations",
    value: "Charlie Rosen's 8-Bit Big Band",
    detail: "The Public Theater and Lincoln Center",
  },
  {
    label: "Student Achievement",
    value: "$150,000+ in scholarships",
    detail: "Awarded to music college students",
  },
];

export default function BiographyPage() {
  return (
    <SiteShell>
      <section className="biography-page">
        <div className="biography-module">
          <p className="biography-top-rule">Biography</p>

          <div className="biography-hero">
            <div className="biography-photo-frame">
              <Image
                src="/matt-pinto-bio.jpg"
                alt="Matt Pinto performing live on guitar"
                width={1152}
                height={768}
                className="biography-photo"
                priority
              />
            </div>

            <div className="biography-hero-copy">
              <p className="biography-eyebrow">Guitarist / Musician / Teacher</p>
              <h1 className="biography-title">Matt Pinto</h1>
              <p className="biography-tagline">
                Long Island-bred, New York City-forged. A guitarist who moves
                between the pit and the stage, the classroom and the club.
              </p>
            </div>
          </div>

          <div className="biography-divider">
            <div className="biography-rule" />
            <h2>About</h2>
            <div className="biography-rule" />
          </div>

          <div className="biography-body">
            <p>
              Raised on Long Island, New York, Matt Pinto has spent the better
              part of two decades building a career that resists easy
              categorization. He is, at once, a seasoned Broadway pit musician,
              a sought-after private instructor, a New York City club circuit
              fixture, and a collaborator whose name appears alongside Tony and
              GRAMMY Award winners. What ties it all together is uncommon
              fluency on guitar, and an even rarer ability to make every room he
              plays feel like home.
            </p>
            <p>
              Pinto studied Guitar Performance at{" "}
              <em>Berklee College of Music</em> from 2008 to 2013, where he
              deepened his craft in arranging, songwriting, and music theory
              under a wide range of mentors. That foundation became the
              backbone of a professional life that has moved fluidly from
              rehearsal rooms in Boston to orchestra pits, club stages,
              classrooms, and new-musical development spaces across the
              country.
            </p>
            <p>
              His Broadway and touring credits tell part of the story. From
              2015 to 2016, he served as guitarist and band tech with{" "}
              <em>Troika Entertainment</em> on the international tour of{" "}
              <em>Joseph and the Amazing Technicolor Dreamcoat</em>, performing
              pit guitar in cities across the United States, Canada, and Japan
              while also managing the setup and breakdown of the pit at each
              venue. Earlier, he performed bass and guitar in both the
              Off-Broadway and Broadway productions of{" "}
              <em>Bloody Bloody Andrew Jackson</em> at The Public Theater and
              the Bernard B. Jacobs Theatre.
            </p>
          </div>

          <blockquote className="biography-quote">
            <p>
              Matt&apos;s students have cumulatively received more than
              $150,000 in scholarships to the music colleges of their choice.
            </p>
          </blockquote>

          <div className="biography-body">
            <p>
              In recent years, Pinto has become a trusted collaborator in New
              York&apos;s new-musical development scene. He has served as guitar
              accompanist for <em>The Public Theater&apos;s Mobile Unit</em>,
              working on Shakespeare adaptations including{" "}
              <em>Comedy of Errors</em> and <em>Much Ado About Nothing</em>,
              and has performed in industry readings for new works including{" "}
              <em>The Radium Girls</em> at New 42 Studios and Keenan Scott II&apos;s{" "}
              <em>Return of Young Boy</em> for New York Stage and Film. In
              March 2024, he was handpicked by GRAMMY and Tony Award winner{" "}
              <em>Charlie Rosen</em> to perform in a small jazz orchestra at
              the Lincoln Center Tina Fey and Brearley School Gala, sharing the
              stage with Josh Groban, Sara Bareilles, Fred Armisen, and other
              SNL alumni. He has also appeared multiple times as soloist and
              ensemble guitarist with Rosen&apos;s acclaimed{" "}
              <em>8-Bit Big Band</em> at sold-out performances at Berklee
              Performance Center, City Winery Philadelphia, and House of Blues
              Dallas.
            </p>
            <p>
              As an educator, Pinto has maintained a private guitar studio since
              2006, offering nearly twenty years of one-on-one instruction,
              ensemble coaching, and audition preparation both in person and via
              Zoom. His teaching combines technical rigor with real mentorship,
              and the results speak for themselves: his students have
              cumulatively received more than $150,000 in scholarships to the
              music colleges of their choice. From 2017 to 2022, he also served
              as Music Director at <em>School of Rock Roslyn</em>, overseeing
              curriculum, faculty hiring, and day-to-day operations alongside
              the school&apos;s General Manager.
            </p>
            <p>
              On any given week, Pinto is likely to be performing somewhere in
              or around New York City. Since 2023, he has been a fixture at{" "}
              <em>Richie Cannata&apos;s Monday Night Open Jam at The Bitter End</em>,
              one of the city&apos;s most storied rooms and a launching pad for
              generations of folk and rock musicians. He frequently subs as
              house band guitarist at <em>Arthur&apos;s Tavern</em> and{" "}
              <em>Cafe Wha?</em> in the Village, and since 2025 has held a
              monthly residency at <em>The Last Word</em> in Huntington, New
              York. His original music, including <em>Acoustic EP: Matt Pinto</em>,
              is available on all major streaming platforms.
            </p>
            <p>
              Whether he is navigating a touring Broadway orchestra pit,
              developing a new musical in a Manhattan rehearsal studio, or
              mentoring the next generation of guitarists from Long Island to
              the city, Matt Pinto brings the same values to the work: deep
              musicality, quiet professionalism, and a love for the guitar that
              still feels immediate every time he picks it up.
            </p>
          </div>

          <div className="biography-divider">
            <div className="biography-rule" />
            <h2>At A Glance</h2>
            <div className="biography-rule" />
          </div>

          <div className="biography-grid">
            {biographyGlance.map((item) => (
              <article key={item.label} className="biography-card">
                <p className="biography-card-label">{item.label}</p>
                <p className="biography-card-value">{item.value}</p>
                <p className="biography-card-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
