import React from "react";

interface GridPageLayoutProps {
  heading: string;
  description: string;
  layout?: "page-grid-layout" | "page-grid-layout-two";
  children: React.ReactNode;
}

const GridPageLayout = ({
  description,
  children,
  heading,
  layout,
}: GridPageLayoutProps) => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-1 lg:space-y-2 font-orbit-max">
        <h1 className="lg:text-6xl text-4xl underline underline-offset-8 decoration-[#FF7700]">
          {heading}
        </h1>
        <p className="lg:text-xl text-base dark:text-white-60 tracking-wide text-black/70">
          {description}
        </p>
      </div>

      <div className="px- sm:px-6">
        <div className="mx-auto  w-full max-w-8xl">
          <div className={layout || "grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default GridPageLayout;
