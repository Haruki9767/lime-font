import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-petal petal-one" aria-hidden="true">✿</div>
      <div className="not-found-petal petal-two" aria-hidden="true">✽</div>
      <div className="not-found-card">
        <p className="eyebrow">A page gone wandering</p>
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 id="not-found-title">That page<br /><em>blossomed elsewhere.</em></h1>
        <p className="not-found-copy">The address may be misspelled, or the page may have moved. Let’s get you back to the specimen.</p>
        <div className="not-found-actions">
          <a className="button-link" href="/"><Home size={16} /> Back to the specimen</a>
          <button className="text-link" type="button" onClick={() => window.history.back()}><ArrowLeft size={15} /> Go back</button>
        </div>
      </div>
    </main>
  );
}
