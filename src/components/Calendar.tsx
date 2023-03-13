import * as React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@cebus/react-components";
import { CalendarButton } from "./CalendarButton";

export const Calendar = (props) => {
  const { month } = props;

  return (
    <>
      <Table
        label="Calendar"
        style={{
          width: "200px",
          height: "200px",
        }}
      >
        <TableHeader>
          <TableRow>
            <TableCell style={{ padding: "0px", textAlign: "center" }}>
              S
            </TableCell>
            <TableCell style={{ padding: "0px", textAlign: "center" }}>
              M
            </TableCell>
            <TableCell style={{ padding: "0px", textAlign: "center" }}>
              T
            </TableCell>
            <TableCell style={{ padding: "0px", textAlign: "center" }}>
              W
            </TableCell>
            <TableCell style={{ padding: "0px", textAlign: "center" }}>
              T
            </TableCell>
            <TableCell style={{ padding: "0px", textAlign: "center" }}>
              F
            </TableCell>
            <TableCell style={{ padding: "0px", textAlign: "center" }}>
              S
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="29" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="30" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="31" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="1" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="2" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="3" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="4" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="29" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="30" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="31" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="1" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="2" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="3" />
            </TableCell>
            <TableCell style={{ padding: "0px" }}>
              <CalendarButton date="4" />
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell>29</TableCell>
            <TableCell>30</TableCell>
            <TableCell>31</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>29</TableCell>
            <TableCell>30</TableCell>
            <TableCell>31</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>29</TableCell>
            <TableCell>30</TableCell>
            <TableCell>31</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>29</TableCell>
            <TableCell>30</TableCell>
            <TableCell>31</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>29</TableCell>
            <TableCell>30</TableCell>
            <TableCell>31</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </>
  );
};
