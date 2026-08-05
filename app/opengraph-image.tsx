import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const runtime = "nodejs";
export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadProfilePhoto(): Promise<string> {
  const file = await readFile(
    join(process.cwd(), "public/brand/profile-og.png"),
  );
  return `data:image/png;base64,${file.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const profilePhoto = await loadProfilePhoto();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0C0C0C",
          color: "#E8E0D0",
          padding: "52px 60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#3A5A40",
            }}
          />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#90C0A0",
            }}
          >
            {profile.brand.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              flex: 1,
              maxWidth: 760,
            }}
          >
            <div
              style={{
                fontSize: 58,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: -1,
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.25,
                color: "#90C0A0",
              }}
            >
              {profile.role}
            </div>
            <div
              style={{
                fontSize: 22,
                lineHeight: 1.45,
                color: "#A8A090",
              }}
            >
              {profile.hero.taglineFull}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 196,
                height: 196,
                borderRadius: 999,
                border: "3px solid #3A5A40",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1A1A1A",
              }}
            >
              <img
                src={profilePhoto}
                alt=""
                width={196}
                height={196}
                style={{
                  objectFit: "cover",
                  objectPosition: "center 18%",
                }}
              />
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#A8A090",
                textAlign: "center",
              }}
            >
              {profile.location}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#A8A090",
          }}
        >
          <div>{profile.brand.domain}</div>
          <div style={{ color: "#90C0A0" }}>{profile.seo.regionLabel}</div>
        </div>
      </div>
    ),
    size,
  );
}
