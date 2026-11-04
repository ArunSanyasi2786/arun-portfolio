const basePath = process.env.NODE_ENV === 'production' ? '/arun-portfolio' : '';

export function asset(path: string) {
  return `${basePath}${path}`;
}
