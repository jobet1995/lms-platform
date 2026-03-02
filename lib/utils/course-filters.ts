import { FilterState } from "@/app/components/courses/CourseFilterSidebar";

export const DEFAULT_FILTERS: FilterState = {
  difficulty: [],
  duration: [],
  minRating: null,
};

export function parseDurationHours(d: string): number {
  const match = d.match(/(\d+)h/);
  return match ? parseInt(match[1]) : 0;
}

export function durationInBucket(d: string, buckets: string[]): boolean {
  if (buckets.length === 0) return true;
  const h = parseDurationHours(d);
  return buckets.some((b) => {
    if (b === 'lt2') return h < 2;
    if (b === '2-5') return h >= 2 && h <= 5;
    if (b === '5-10') return h > 5 && h <= 10;
    if (b === 'gt10') return h > 10;
    return false;
  });
}
