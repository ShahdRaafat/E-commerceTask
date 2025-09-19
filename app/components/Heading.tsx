import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

function Heading({ children, className }: HeadingProps) {
  return (
    <div className="px-4 py-2 bg-primary-200 rounded-t-2xl mb-6">
      <h2
        className={`text-primary-800  py-4  text-l  md:text-xl font-semibold ${
          className ?? ""
        }`}
      >
        {children}
      </h2>
    </div>
  );
}
export default Heading;
