export function getUserAvatarColor() {
  const colors = ["#ffd166", "#4eac6d", "#6153cc", "#ef476f", "#e83e8c", "#50a5f1", "#797c8c"];
  const randomIndex = Math.floor(Math.random() * 6);
  const color = colors[randomIndex];

  return color;
}

export function getUserAvatarText(name: string) {
  const nameArr = name.split(" ");
  const text = `${nameArr[0].charAt(0)}${nameArr[1]?.charAt(0) || ""}`;

  return text;
}
