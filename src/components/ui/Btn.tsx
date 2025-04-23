import React from "react";

interface SlantedButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const SlantedButton: React.FC<SlantedButtonProps> = ({
  children,
  href,
  className = "",
  onClick,
}) => {
  const baseStyles = `inline-block bg-red-600 text-white font-semibold text-center px-6 py-3 relative overflow-hidden ${className}`;

  const clipStyles = `absolute top-0 right-0 w-6 h-full bg-red-600 transform translate-x-1/2 skew-x-12`;

  const contentStyles = `relative z-10 flex items-center gap-2`;

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );

  const btnContent = (
    <span className={contentStyles}>
      {children}
      {arrow}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={baseStyles} onClick={onClick}>
        <div className={clipStyles} />
        {btnContent}
      </a>
    );
  }

  return (
    <button className={baseStyles} onClick={onClick}>
      <div className={clipStyles} />
      {btnContent}
    </button>
  );
};

export default SlantedButton;
