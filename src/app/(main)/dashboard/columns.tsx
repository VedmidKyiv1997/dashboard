"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type DashboardItemT } from "~/types";

const limitText = (text: string) => {
  const words = text.split(" ");
  const limitedText = words.slice(0, 10).join(" ");
  return limitedText;
};

export const columns: ColumnDef<DashboardItemT>[] = [
  {
    accessorKey: "Name",
    header: "Product",
    cell: ({ row }) => {
      const name: string = row.getValue("Name");
      return <div>{name}</div>;
    },
  },
  {
    accessorKey: "Description",
    header: "Description",
    cell: ({ row }) => {
      const description = limitText(row.getValue("Description"));
      return <div>{description}</div>;
    },
  },
  {
    accessorKey: "Visible",
    header: "Visible",
    cell: ({ row }) => {
      const visible: boolean = row.getValue("Visible");
      return <div>{visible ? "✅" : "❌"}</div>;
    },
  },
  {
    accessorKey: "Price",
    header: "Price",
    cell: ({ row }) => {
      const price: number = row.getValue("Price");

      const formattedPrice = price.toLocaleString(navigator.language, {
        style: "currency",
        currency: row.original.CurrencyCode,
        currencyDisplay: "symbol",
      });
      return <div>{formattedPrice}</div>;
    },
  },
];

export const shortColumns: ColumnDef<DashboardItemT>[] = [
  {
    accessorKey: "Name",
    header: "Product",
    cell: ({ row }) => {
      const name: string = row.getValue("Name");
      return <div>{name}</div>;
    },
  },
  {
    accessorKey: "Price",
    header: "Price",
    cell: ({ row }) => {
      const price: number = row.getValue("Price");
      const formattedPrice = price.toLocaleString(navigator.language, {
        style: "currency",
        currency: row.original.CurrencyCode,
        currencyDisplay: "symbol",
      });
      return <div>{formattedPrice}</div>;
    },
  },
];
