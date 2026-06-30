import Image, { type ImageProps } from "next/image";

type CmsImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

function resolveDimensions(className?: string) {
  if (className?.includes("h-full")) {
    return { fill: true as const };
  }

  return {
    width: 1200,
    height: 630,
  };
}

export default function CmsImage({ src, alt, className, sizes, ...props }: CmsImageProps) {
  const dimensions = resolveDimensions(className);

  if ("fill" in dimensions && dimensions.fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes ?? "(max-width: 768px) 100vw, 33vw"}
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      className={className}
      sizes={sizes ?? "(max-width: 768px) 100vw, 800px"}
      {...props}
    />
  );
}
