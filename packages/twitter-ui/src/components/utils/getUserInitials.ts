export default function getUserInitials(name: string): string {
  return name
    .split(" ")
    .map((name) => name[0])
    .join(" ");
}
