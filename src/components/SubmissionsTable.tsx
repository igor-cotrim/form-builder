import React from "react";

import { GetFormWithSubmissions } from "@/actions";
import { ElementsType, FormElementInstance } from "@/models";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { formatDistance } from "date-fns";
import { RowCell } from ".";

type columnsProps = {
  id: string;
  label: string;
  required: boolean;
  type: ElementsType;
};

type rowProps = { [key: string]: string } & { submittedAt: Date };

async function SubmissionsTable({ id }: { id: number }) {
  const form = await GetFormWithSubmissions(id);

  if (!form) throw new Error("Form not found");

  const formElements = JSON.parse(form.content) as FormElementInstance[];

  const columns: columnsProps[] = [];
  const rows: rowProps[] = [];

  formElements.forEach((element) => {
    switch (element.type) {
      case "TextField":
        columns.push({
          id: element.id,
          label: element.extraAttributes?.label,
          required: element.extraAttributes?.required,
          type: element.type,
        });
        break;
      default:
        break;
    }
  });

  form.formSubmissions.forEach((submission) => {
    const content = JSON.parse(submission.content);

    rows.push({
      ...content,
      submittedAt: submission.createdAt,
    });
  });

  return (
    <>
      <h1 className="my-4 text-2xl font-bold">Submissions</h1>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id} className="uppercase">
                  {column.label}
                </TableHead>
              ))}
              <TableHead className="text-right uppercase text-muted-foreground">
                Submitted at
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <RowCell
                    key={column.id}
                    type={column.type}
                    value={row[column.id]}
                  />
                ))}
                <TableCell className="text-right text-muted-foreground">
                  {formatDistance(row.submittedAt, new Date(), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default SubmissionsTable;
