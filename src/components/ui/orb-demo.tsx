import MorphOrb from "@/components/ui/ai-thiking-orb-and-input";

/** A no-network preview of the orb with its built-in sample answer. */
export default function DemoOne() {
  return (
    <div className="flex min-h-[450px] w-full items-center justify-center p-4">
      <MorphOrb />
    </div>
  );
}
