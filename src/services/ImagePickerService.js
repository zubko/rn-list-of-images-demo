export async function pickImage() {
  return {
    path: 'file-path',
    width: Math.floor(Math.random() * 1000) + 500,
    height: Math.floor(Math.random() * 1000) + 500,
  };
}
