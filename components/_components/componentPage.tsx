import ComponentData from "./componentData";

interface ComponentPageProps {
  directory: string;
  files: string[];
  page: string;
}

export default function ComponentPage({
  directory,
  files,
  page
}: ComponentPageProps) {
  return (
    <div className="space-y-8">
      {files.map((componentName) => {
        return (
          <ComponentData
          collection={page}
            key={componentName}
            directory={directory}
            componentName={componentName}
          />
        );
      })}
    </div>
  );
}
