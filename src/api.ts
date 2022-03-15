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
  id: string;
  title: string;
  copyright: string;
  url: string;
  objectid: string;

  images: { date: string; iiifbaseuri: string; format: string; idsid: string };
  seeAlso: { id: string; format: string; profile: string };
}

interface ImuseumObjectImages {
  date: string;
  iiifbaseuri: string;
}

export function getmuseums() {
  return fetch(`${BASE_PATH}/object/?apikey=${API_KEY}`, {
    headers: {
      Accept: "application / json",
    },
  }).then((response) => response.json());
}
