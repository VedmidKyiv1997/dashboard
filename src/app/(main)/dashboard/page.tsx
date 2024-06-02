"use client";

import { useContext, useEffect, useState } from "react";
import { columns, shortColumns } from "~/app/(main)/dashboard/columns";
import { DataTable } from "~/app/(main)/dashboard/data-table";
import { getDashboard } from "~/axios/dashboard";
import { TokenStorageContext } from "~/context/tokenContext";

import { type DashboardResT } from "~/types";

export default function Dashboard() {
  const ctx = useContext(TokenStorageContext);

  const [data, setData] = useState<DashboardResT | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ctx?.token) void getDashboardData();
    else setData(null);
  }, [ctx?.token]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDashboardData = async (page?: number) => {
    const res = await getDashboard(page);
    setData(res ?? null);
  };

  const nextPage = async () => {
    if (data?.HasNextPage) {
      await getDashboardData(data.PageNumber + 1);
    }
  };

  const previousPage = async () => {
    if (data?.HasPreviousPage) {
      await getDashboardData(data.PageNumber - 1);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={width >= 1024 ? columns : shortColumns}
        data={data?.Records ?? []}
        paginationProps={{
          hasPreviousPage: data?.HasPreviousPage,
          hasNextPage: data?.HasNextPage,
          nextPage,
          previousPage,
          totalItems: data?.TotalItems,
        }}
      />
    </div>
  );
}
