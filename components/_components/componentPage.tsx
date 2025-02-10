import ComponentData from "./componentData";

interface ComponentPageProps {
  directory: string;
  files: string[];
}

export default function ComponentPage({
  directory,
  files,
}: ComponentPageProps) {
  return (
    <div className="space-y-8">
      {files.map((componentName) => {
        return (
          <ComponentData
            key={componentName}
            directory={directory}
            componentName={componentName}
          />
        );
      })}
    </div>
  );
}
