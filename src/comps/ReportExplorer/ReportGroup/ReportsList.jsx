import { Pagination } from "@material-ui/lab";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import ReportsListItem from "./ReportsListItem";

const perPage = 8;

export default function ReportsList({ index, data, item, setOffset }) {
  const reports = useMemo(() => data?.info || [], [data?.info]);

  const [page, setPage] = useState(1);
  const hasPagination = useMemo(() => reports.length > perPage, [
    reports.length,
  ]);
  const pagesCount = useMemo(() => Math.ceil(reports.length / perPage), [
    reports.length,
  ]);
  const handleChangePage = useCallback((e, value) => setPage(value), []);

  const hasOffset = useMemo(() => typeof setOffset === "function", [setOffset]);

  useEffect(() => {
    if (hasOffset) setOffset(page - 1);
  }, [hasOffset, page, setOffset]);

  const allReports = useMemo(
    () =>
      reports.map((report, i) => (
        <ReportsListItem
          report={report}
          index={index}
          data={data}
          item={item}
          i={i}
          key={i}
        />
      )),
    [data, index, item, reports]
  );

  const renderPagination = useMemo(
    () =>
      hasPagination && (
        <Pagination
          count={pagesCount}
          size="small"
          onChange={handleChangePage}
          color="primary"
        />
      ),
    [handleChangePage, hasPagination, pagesCount]
  );

  return !Array.isArray(reports) ? null : (
    <Container>
      {!hasOffset
        ? allReports.slice(perPage * (page - 1), perPage * page - 1)
        : allReports}

      {renderPagination}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0 18px 0;
`;
