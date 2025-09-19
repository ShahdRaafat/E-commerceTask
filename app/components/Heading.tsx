import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

function Heading({ children, className }: HeadingProps) {
  return (
    <div className="px-4 py-3 bg-primary-200 rounded-t-2xl mb-6">
      <h2
        className={`text-primary-800  px-4 py-4  text-2xl  md:text-3xl font-semibold ${
          className ?? ""
        }`}
      >
        {children}
      </h2>
    </div>
  );
}
export default Heading;
