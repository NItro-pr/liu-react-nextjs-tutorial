import { Greeting } from "@/comp/greeting";

export default function App() {
  const name = "Liu";

  return (
    <>
      <Greeting name={name} /> 
      {/* liu */}
      <Greeting name="Hikihara" />
      {/* hikihara */}
      <Greeting name="Makita" />
      {/* makita */}
      {
        Array.from([1, 2, 3]).map((num) => (
          <Greeting key={num} name={`User ${num}`} />
        ))
      }
    

    </>
  );
}