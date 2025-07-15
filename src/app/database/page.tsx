import { getData } from "./actions"
import SearchPanel from "./search"

async function DatabasePage() {
  const allLines = await getData()
  return (
    <div>
      <div>
        <SearchPanel data={allLines} />
      </div>
      {/* <pre>
        {JSON.stringify(allLines, null, 2)}
      </pre> */}
    </div>
  )
}
export default DatabasePage