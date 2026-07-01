interface PageSectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export function PageSectionHeader({
  title,
  description,
  centered = false,
}: PageSectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-white">{title}</h2>
      {description && (
        <p
          className={`mt-4 text-gray-400 text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
