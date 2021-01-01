import { Pagination } from "@material-ui/lab";
import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import ReportsListItem from "./ReportsListItem";

const perPage = 8;

export default function ReportsList({ index, data, item }) {
  const reports = data?.info || [];

  const [page, setPage] = useState(1);
  const hasPagination = useMemo(() => reports.length > perPage, [
    reports.length,
  ]);
  const pagesCount = useMemo(() => Math.ceil(reports.length / perPage), [
    reports.length,
  ]);
  const handleChangePage = useCallback((e, value) => setPage(value), []);

  return !Array.isArray(reports) ? null : (
    <Container>
      {reports
        .map((report, i) => (
          <ReportsListItem
            report={report}
            index={index}
            data={data}
            item={item}
            i={i}
            key={i}
          />
        ))
        .slice(perPage * (page - 1), perPage * page - 1)}

      {hasPagination && (
        <Pagination
          count={pagesCount}
          size="small"
          onChange={handleChangePage}
          color="primary"
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0 18px 0;
`;
