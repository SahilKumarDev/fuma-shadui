import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { readComponentSource } from "@/lib/readComponentSource";
import { TheamToggler } from "../../components/theam/TheamToggler";
import { Separator } from "../../components/ui/separator";
import { CodeBlock } from "../../components/_components/codeblock";

const ComponentData = async ({
  collection,
  directory,
  componentName,
}: {
  collection: string;
  directory: string;
  componentName: string;
  className?: string;
}) => {
  const Component = (
    await import(`@/data/${collection}/${directory}/${componentName}`)
  ).default;
  const source = await readComponentSource(
    collection,
    directory,
    componentName
  );
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

          <TabsContent value="code" className="">
            <CodeBlock code={source!} />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default ComponentData;
