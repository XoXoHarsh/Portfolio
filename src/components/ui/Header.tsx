import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";

interface HeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center" | "right";
}

const Header = ({
  title,
  subtitle,
  gradient = false,
  className,
  as: Component = "h2",
  align = "left",
}: HeaderProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const titleClasses = cn(
    "font-bold tracking-tight relative z-20", // Increased z-index
    "text-3xl sm:text-4xl md:text-5xl",
    gradient &&
      "bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-500 to-orange-500",
    !gradient && "text-foreground",
    alignmentClasses[align],
    className
  );

  const subtitleClasses = cn(
    "mt-4 text-lg sm:text-xl md:text-2xl relative z-20", // Increased z-index
    "text-foreground/70",
    alignmentClasses[align]
  );

  const wrapperClasses = cn(
    "relative isolate overflow-hidden", // Added isolate for stacking context
    "py-8 px-4" // Added padding
  );

  return (
    <div className={wrapperClasses}>
      {/* Sparkles Container */}
      <div className="absolute inset-0 -z-10">
        {" "}
        <SparklesCore
          id={`tsparticles-${title}`} // Unique ID for each instance
          background="transparent"
          particleColor={gradient ? "#ef4444" : "#ffffff"}
          particleDensity={100}
          speed={1}
          className="h-full w-full"
          minSize={0.6}
          maxSize={1.4}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Component className={titleClasses}>{title}</Component>
        {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default Header;
