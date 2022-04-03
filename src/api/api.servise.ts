import { httpClient } from "./httpClient";
import { Paths } from "./paths";

export const getCryptocurrencies = async (
  start: number,
  limit: number,
  convert: "USD" | "EUR"
): Promise<any> => {
  const res = await httpClient.get(
    Paths.LISTING + `?start=${start}&limit=${limit}&convert=${convert}`
  );
  return res?.data;
};

export const getInfoAboutCryptoCurrencies = async (
  ids: number[]
): Promise<any> => {
  const res = await httpClient.get(Paths.INFO + `?id=${ids.join(",")}`);

  return res?.data;
};
