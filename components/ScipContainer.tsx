import Skip from "./Skip";

export default function ScipContainer() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Scip Container</h1>
      <p className="text-lg">This is a container for Scip related content.</p>
      <p className="text-sm text-gray-500">You can add more components here.</p>
      <Skip />
    </div>
  );
}
