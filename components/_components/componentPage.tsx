import GridPageLayout from "./GridPageLayout";
import ComponentDataPage from "./componentDataPage";

const alertDir = "alerts";
const alertFiles = [
  "alert-01",
  "alert-02",
  "alert-03",
  "alert-04",
  "alert-05",
  "alert-06",
  "alert-07",
  "alert-08",
  "alert-09",
  "alert-10",
  "alert-11",
  "alert-12",
  "alert-13",
  "alert-14",
];

const fileCount = [...alertFiles].length;

export default function ComponentPage() {
  return (
    <GridPageLayout
      heading="Alerts"
      description={`A beautiful collection of alerts ${fileCount} components built with using Shadcn UI and TailwindCSS.`}
    >
      {alertFiles.map((componentName) => {
        return (
          <ComponentDataPage
            key={componentName}
            directory={alertDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
