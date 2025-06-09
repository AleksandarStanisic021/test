import Skip from "./Skip";
import { SkipProps } from "./tools/SkipProps";

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
    <div>
      <h1>ScipContainer</h1>

      {data.map((skip) => (
        <Skip key={skip.id} {...skip} />
      ))}
      <p>More details will be added soon.</p>
    </div>
  );
}
