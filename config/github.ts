import "server-only";
import { CACHE_TTL_SECONDS } from "./cache";
import type { Project } from "./projects";

export type RepositoryDetails = {
  description: string | null;
  topics: string[];
  language: string | null;
  stars: number;
  updatedAt: string;
  url: string;
};

export type RepositoryResult =
  | { status: "available"; details: RepositoryDetails }
  | { status: "missing" | "unavailable"; details: null };

const API_ORIGIN = "https://api.github.com/repos/";

function validDetails(value: unknown, expectedRepo: string): RepositoryDetails | null {
  if (!value || typeof value !== "object") return null;
  const data = value as Record<string, unknown>;
  const owner = data.owner as Record<string, unknown> | undefined;
  const expectedUrl = `https://github.com/${expectedRepo}`;

  if (
    data.full_name !== expectedRepo ||
    owner?.login !== "Josh-M2" ||
    data.private !== false ||
    data.html_url !== expectedUrl ||
    !(data.description === null || typeof data.description === "string") ||
    !(data.language === null || typeof data.language === "string") ||
    typeof data.stargazers_count !== "number" ||
    !Number.isSafeInteger(data.stargazers_count) ||
    data.stargazers_count < 0 ||
    typeof data.updated_at !== "string" ||
    Number.isNaN(Date.parse(data.updated_at)) ||
    !Array.isArray(data.topics) ||
    !data.topics.every((topic) => typeof topic === "string")
  ) return null;

  return {
    description: data.description as string | null,
    topics: (data.topics as string[]).slice(0, 8),
    language: data.language as string | null,
    stars: data.stargazers_count,
    updatedAt: data.updated_at,
    url: expectedUrl,
  };
}

/** Only curated owner/repo values reach GitHub. Next caches each response for one hour. */
export async function getRepository(project: Project): Promise<RepositoryResult> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "joshua-magdadaro-portfolio/1.0 (+https://github.com/Josh-M2)",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetch(`${API_ORIGIN}${project.repo}`, {
      headers,
      signal: AbortSignal.timeout(5000),
      next: { revalidate: CACHE_TTL_SECONDS },
    });
    if (response.status === 404) return { status: "missing", details: null };
    if (!response.ok) return { status: "unavailable", details: null };
    const details = validDetails(await response.json(), project.repo);
    return details
      ? { status: "available", details }
      : { status: "unavailable", details: null };
  } catch {
    return { status: "unavailable", details: null };
  }
}

export async function getRepositories(items: readonly Project[]) {
  return Promise.all(items.map((project) => getRepository(project)));
}
