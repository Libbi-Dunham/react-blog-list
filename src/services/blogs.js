import { checkError, client } from './client';

export async function getBlogs() {
  const response = await client.from('blogs').select();
  console.log(response);
  return checkError(response);
}
