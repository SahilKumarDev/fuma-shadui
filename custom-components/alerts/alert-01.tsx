import { TriangleAlert } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="rounded-lg border border-border px-4">
      <p className="text-sm flex items-center gap-2">
        <TriangleAlert
          className="text-amber-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Some information is missing!
      </p>
    </div>
  );
}
