import Script from "next/script";
import { createElement } from "react";

// Falls back to the production agent so the widget works without extra config.
const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ??
  "agent_9601m6jxpqtretxr1xec3f7spsw2";

export default function ElevenLabsWidget() {
  return (
    <>
      {createElement("elevenlabs-convai", { "agent-id": AGENT_ID })}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
      />
    </>
  );
}
