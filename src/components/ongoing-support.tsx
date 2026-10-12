import { supportCopy, supportItems } from "@/lib/services";

export function OngoingSupport() {
  return (
    <section className="sp-fit section-shell ongoing-support">
      <h2>
        Built to launch.
        <br />
        <span>Supported to grow.</span>
      </h2>
      <div>
        <p>{supportCopy}</p>
        <ul className="sp-inline-scope">
          {supportItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
