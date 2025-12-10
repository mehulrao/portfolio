import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card = ({ children, className, delay = 0, ...props }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
