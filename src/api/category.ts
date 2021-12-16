import ky from "ky";
import { config } from "../../app/config";

export async function createCategory(data: any) {
  const json = await ky
    .post(`${config.api}/category`, { json: { name: data.category } })
    .json();

  return json;
}
