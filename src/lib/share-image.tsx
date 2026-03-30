import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

const BACKGROUND = "#056105";
const FOREGROUND = "#BD9E01";

function LogoMark() {
  return (
    <svg
      width="809"
      height="115"
      viewBox="0 0 809 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.1248 11.3864H112.726V112.28H82.4577V51.4557L62.4231 112.28H51.4689L31.4342 51.744V112.28H8.37269V11.3864H48.8744L62.9996 54.1943L77.1248 11.3864ZM173.384 112.28L168.772 92.9664H147.152L142.539 112.28H115.874L144.845 11.3864H180.302L208.697 112.28H173.384ZM151.476 75.382H164.448L157.962 48.573L151.476 75.382ZM271.413 11.3864V36.754H248.208V112.28H215.345V36.754H191.995V11.3864H271.413ZM354.465 11.3864V36.754H331.26V112.28H298.397V36.754H275.047V11.3864H354.465Z"
        fill={FOREGROUND}
      />
      <path
        d="M429.049 10.1059C453.119 10.1059 466.524 20.916 466.524 40.3742C466.524 59.8323 453.119 70.6424 429.049 70.6424H415.5V111H382.638V10.1059H429.049ZM424.292 50.4636C430.923 50.4636 434.238 47.725 434.238 42.2479C434.238 36.7708 430.923 34.0322 424.292 34.0322H415.5V50.4636H424.292ZM472.023 111V10.1059H504.886V111H472.023ZM574.034 10.1059H598.537V111H566.251L535.983 49.7429V111H511.48V10.1059H549.964L574.034 59.1116V10.1059ZM681.808 10.1059V35.4736H658.602V111H625.739V35.4736H602.39V10.1059H681.808ZM728.954 112.73C699.551 112.73 680.957 92.5508 680.957 60.553C680.957 28.5551 699.551 8.37634 728.954 8.37634C758.646 8.37634 776.951 28.5551 776.951 60.553C776.951 92.5508 758.646 112.73 728.954 112.73ZM728.954 85.9206C738.323 85.9206 742.647 77.5608 742.647 60.553C742.647 43.5451 738.323 35.1853 728.954 35.1853C719.585 35.1853 715.261 43.5451 715.261 60.553C715.261 77.5608 719.585 85.9206 728.954 85.9206Z"
        fill={FOREGROUND}
      />
    </svg>
  );
}

function SymbolMark() {
  return (
    <svg
      width="114"
      height="87"
      viewBox="0 0 114 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M82.4491 86.9147V0L113.367 41.087L82.4491 86.9147Z" fill={FOREGROUND} />
      <path d="M41.2241 86.9147V0L72.1424 41.087L41.2241 86.9147Z" fill={FOREGROUND} />
      <path d="M0 86.9147V0L30.9183 41.087L0 86.9147Z" fill={FOREGROUND} />
    </svg>
  );
}

export function shareImageConfig(alt: string) {
  return {
    alt,
    size: {
      width: 1200,
      height: 630,
    },
    contentType: "image/png" as const,
  };
}

export async function generateShareImageResponse() {
  const photo = await readFile(
    join(process.cwd(), "public", "matt-pinto-hero-share.png")
  );
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "16px",
          background: FOREGROUND,
          color: FOREGROUND,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            border: `8px solid ${FOREGROUND}`,
            background: BACKGROUND,
            padding: "24px 26px 22px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", width: "740px", height: "105px" }}>
              <LogoMark />
            </div>
            <div style={{ display: "flex", width: "92px", height: "70px", marginTop: "2px" }}>
              <SymbolMark />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                width: "54%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transform: "translateY(6px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "74px",
                  lineHeight: 0.9,
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                }}
              >
                <span>Playin&apos; Blues,</span>
                <span>Rock &amp; Soul Music</span>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "24px",
                  maxWidth: "520px",
                  fontSize: "30px",
                  lineHeight: 1.08,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Guitarist and songwriter Matt Pinto focuses on original songs
                and also teaches music lessons.
              </div>
            </div>

            <div
              style={{
                width: "37%",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                position: "relative",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  right: "-6px",
                  bottom: "-8px",
                  width: "100%",
                  height: "92%",
                  display: "flex",
                  objectFit: "cover",
                  objectPosition: "center top",
                  opacity: 0.38,
                  mixBlendMode: "multiply",
                  filter: "grayscale(1) contrast(1.05)",
                }}
                src={photoSrc}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  inset: "10% 0 0 8%",
                  borderRadius: "36px 36px 0 0",
                  background:
                    "linear-gradient(180deg, rgba(61, 124, 23, 0.16) 0%, rgba(61, 124, 23, 0.34) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    `linear-gradient(90deg, ${BACKGROUND} 0%, rgba(5, 97, 5, 0.82) 16%, rgba(5, 97, 5, 0.25) 48%, rgba(5, 97, 5, 0.12) 100%)`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    `linear-gradient(180deg, rgba(5, 97, 5, 0.08) 0%, rgba(61, 124, 23, 0.16) 100%)`,
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  background: `radial-gradient(circle at 66% 40%, rgba(189, 158, 1, 0.08), transparent 28%)`,
                }}
              />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              fontSize: "22px",
              lineHeight: 0.95,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
            }}
          >
            <span>Please, listen to each other</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
