function ResultCard({ record }: { record: Record<string, string> }) {
  return (
    <div className="card bg-base-100 shadow-xl w-64 p-4 mb-4">
      <div className="card-body">
        {Object.entries(record).map(([key, value]) => (
          <div key={key} className="card-item">
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ResultCard;
