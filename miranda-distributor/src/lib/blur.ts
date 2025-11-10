import blurMap from "@/lib/_blur.json";

export function getBlur(path: string) {
  return (blurMap as Record<string, string>)[path];
}
