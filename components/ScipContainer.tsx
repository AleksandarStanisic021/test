import Skip from "./Skip";
import { SkipProps } from "./tools/SkipProps";
import { Button } from "./ui/button";

const URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export default async function ScipContainer() {
  const res = await fetch(URL, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: SkipProps[] = await res.json();

  console.log(data);
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <h1 className="col-span-full text-center text-orange-500 text-2xl font-bold mb-4">
        Skips Available in Lowestoft
      </h1>
      {data.map((skip) => (
        <Skip key={skip.id} {...skip} />
      ))}
      <div className="col-span-full text-center mt-4 m-4 space-x-3">
        <Button className="bg-orange-500 text-white" asChild>
          <a
            href="https://app.wewantwaste.co.uk/skips"
            target="_blank"
            rel="noopener noreferrer">
            Prev
          </a>
        </Button>
        <Button className="bg-orange-500 text-white" asChild>
          <a
            href="https://app.wewantwaste.co.uk/skips"
            target="_blank"
            rel="noopener noreferrer">
            Next
          </a>
        </Button>
      </div>
    </div>
  );
}
