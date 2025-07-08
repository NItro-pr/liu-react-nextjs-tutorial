
const lessonList = [1,2,3,4,]

export default function App() {
  return (
    <div>
      <h1>React Next.js Tutorial</h1>
      <ul>
        {lessonList.map((lesson) => (
          <li key={lesson}>
            <a href={`/lessons/${lesson}`}>Lesson {lesson}</a>
          </li>
        ))}

        <li>
          <a href="/todo">ToDo App</a>
        </li>

        <li>
          <a href="/tailwind">TailwindCSS</a>
        </li>
      </ul>
    </div>
  );
}