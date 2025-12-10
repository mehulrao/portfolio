import { cn } from "../../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
}

export const Section = ({ children, id, className, title, ...props }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)} {...props}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          {title}
          <div className="h-px bg-zinc-800 flex-grow max-w-[200px]" />
        </h2>
      )}
      {children}
    </section>
  );
};

