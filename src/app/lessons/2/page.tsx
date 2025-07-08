function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <div>
      <Greeting name="世界" />
      <Greeting name="React" />
    </div>
  );
}