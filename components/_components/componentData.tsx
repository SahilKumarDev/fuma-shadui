import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { readComponentSource } from "@/lib/readComponentSource";
import { TheamToggler } from "../theam/TheamToggler";
import { Separator } from "../ui/separator";
import { CodeBlock } from "./codeblock";

const ComponentData = async ({
  directory,
  componentName,
}: {
  directory: string;
  componentName: string;
  className?: string;
}) => {
  const Component = (
    await import(`@/custom-components/${directory}/${componentName}`)
  ).default;
  const source = await readComponentSource(directory, componentName); // I will use in code block
  const capitalizeComponentName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  const cardComponentName = capitalizeComponentName.split("-").join(" ");

  return (
    <Tabs defaultValue="preview">
      <Card>
        <CardHeader className="py-3 flex-row items-center justify-between">
          <CardTitle>{cardComponentName}</CardTitle>

          <div className="flex items-center justify-center">
            <TheamToggler />
            <TabsList className="border border-fd-border rounded-lg bg-fd-accent">
              <TabsTrigger
                value="preview"
                className=" data-[state=active]:bg-red-600 hover:cursor-pointer"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className=" data-[state=active]:bg-red-600 hover:cursor-pointer"
              >
                Code
              </TabsTrigger>
            </TabsList>
          </div>
        </CardHeader>

        <Separator className="bg-fd-border" />

        <CardContent className="py-4">
          <TabsContent
            value="preview"
            className="flex items-center justify-center py-10"
          >
            <Component />
          </TabsContent>

          <TabsContent
            value="code"
            className=""
          > 
            <CodeBlock code={source!} />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default ComponentData;
