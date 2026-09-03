const KEY = "csmc-bookmarks";

export function getBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function isBookmarked(id: string) {
  return getBookmarks().includes(id);
}

export function toggleBookmark(id: string): string[] {
  const next = isBookmarked(id) ? getBookmarks().filter((x) => x !== id) : [...getBookmarks(), id];
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export async function copyLink(url: string) {
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    window.prompt("Copy this link", url);
    return false;
  }
}

export async function shareLink(title: string, url: string) {
  if (navigator.share) {
    try {
      await navigator.share({ title, url });
      return "shared";
    } catch {
      return "cancelled";
    }
  }
  await copyLink(url);
  return "copied";
}
