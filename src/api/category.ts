import ky from "ky";
import { config } from "../../config";

export async function createCategory(data: any) {
  const json = await ky
    .post(`${config.api}/category`, { json: { name: data.category } })
    .json();

  return json;
}

export async function getCategory() {
  const json = await ky.get(`${config.api}/category`).json();
  return json;
}

export async function delCategory(id: string) {
  const json = await ky.delete(`${config.api}/category/${id}`).json();

  return json;
}

export async function singleCategory(id: string | undefined) {
  const json = await ky.get(`${config.api}/category?id=${id}`).json();
  return json;
}

export async function editCategory(id: string, data: any) {
  const json = await ky
    .put(`${config.api}/category/${id}`, { json: { name: data.category } })
    .json();
  return json;
}
