export async function api(path, options = {}) {
  const response = await fetch(`/api/demo${path}`, {
    ...options,
    credentials: "include",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  const data = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    if (response.status === 423 && typeof window !== "undefined") window.dispatchEvent(new Event("cerato-trial-expired"));
    const detail = data?.detail;
    const message = typeof detail === "string" ? detail : detail?.message || data?.message || "Something went wrong. Please try again.";
    const error = new Error(message);
    error.status = response.status;
    error.detail = detail;
    throw error;
  }
  return data;
}

export const json = (body, method = "POST") => ({ method, body: JSON.stringify(body) });
