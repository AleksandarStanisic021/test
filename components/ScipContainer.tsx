import Skip from "./Skip";

export default async function ScipContainer() {
  const res = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  const data = await res.json();
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-lg">This is a container for Scip related content.</p>
      {data.map(
        (skip: {
          id: string;
          name: string;
          description: string;
          price: number;
          imageUrl: string;
          location: string;
        }) => (
          <Skip
            key={skip.id}
            id={skip.id ? skip.id : "unknown-id"}
            name={skip.name}
            description={skip.description}
            price={skip.price}
            imageUrl={skip.imageUrl}
            location={skip.location}
          />
        )
      )}
    </div>
  );
}
