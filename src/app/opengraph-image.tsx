import {
  generateShareImageResponse,
  shareImageConfig,
} from "@/lib/share-image";

export const { alt, size, contentType } = shareImageConfig(
  "Matt Pinto share image with logo, green background, and blues, rock, and soul music tagline."
);

export default async function Image() {
  return generateShareImageResponse();
}
