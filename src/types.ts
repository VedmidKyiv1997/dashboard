export type DashboardItemT = {
  UniqueId: number;
  Name: string;
  Description: string;
  Visible: boolean;
  Price: number;
  CurrencyCode: string;
};

export type DashboardResT = {
  CurrentOrderField: string;
  CurrentPage: number;
  CurrentPageSize: number;
  CurrentSortDirection: number;
  FirstItem: number;
  HasNextPage: boolean;
  HasPreviousPage: boolean;
  LastItem: number;
  PageNumber: number;
  PageSize: number;
  TotalItems: number;
  TotalPages: number;
  Records: DashboardItemT[];
};
