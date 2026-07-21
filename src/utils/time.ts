/**
 * Converts seconds to mm:ss
 *
 * 165 -> 2:45
 * 90 -> 1:30
 */
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

/**
 * Converts a time range to mm:ss-mm:ss
 *
 * { min: 165, max: 195 }
 * ->
 * 2:45–3:15
 */
export function formatDurationRange(min: number, max: number): string {
  if (min === max) {
    return formatDuration(min);
  }

  return `${formatDuration(min)}–${formatDuration(max)}`;
}
