const API_KEY = "24ac1576-475c-482f-b887-706057a10968";
const BASE_PATH = "https://api.harvardartmuseums.org";

export interface ImuseumObject {
  info: {
    totalrecordsperquery: string;
    totalrecords: string;
  };
  records: ImuseumObjectRecords[];
}

interface ImuseumObjectRecords {
  creditline: string;
  accesslevel: string;
  dateoflastpageview: string;
  division: string;
  rank: number;
  id: number;
  images: ImuseumObjectImages[];
}

interface ImuseumObjectImages {
  date: string;
  imageid: string;
  baseimageurl: string;
}

export function getmuseums() {
  return fetch(`${BASE_PATH}/object/?apikey=${API_KEY}`, {
    headers: {
      Accept: "application / json",
    },
  }).then((response) => response.json());
}
