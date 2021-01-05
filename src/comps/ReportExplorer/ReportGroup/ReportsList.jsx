import { Pagination } from "@material-ui/lab";
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import ReportsListItem from "./ReportsListItem";

const perPage = 8;

export default function ReportsList({ index, data, item, setOffset, offset }) {
  const reports = useMemo(() => data?.info || [], [data?.info]);

  const hasPagination = useMemo(() => reports.length > perPage, [
    reports.length,
  ]);
  const pagesCount = useMemo(() => Math.ceil(reports.length / perPage), [
    reports.length,
  ]);
  const handleChangePage = useCallback((e, value) => setOffset(value - 1), [
    setOffset,
  ]);

  const renderReports = useMemo(
    () =>
      reports
        .map((report, i) => (
          <ReportsListItem
            report={report}
            index={index}
            item={item}
            i={i}
            key={i}
          />
        ))
        .slice(perPage * offset, perPage * (offset + 1)),
    [data, index, item, offset, reports]
  );

  const renderPagination = useMemo(
    () =>
      hasPagination && (
        <Pagination
          count={pagesCount}
          size="small"
          onChange={handleChangePage}
          page={offset + 1}
          color="primary"
        />
      ),
    [handleChangePage, hasPagination, offset, pagesCount]
  );

  return !Array.isArray(reports) ? null : (
    <Container>
      {renderReports}
      {renderPagination}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0 18px 0;
`;
