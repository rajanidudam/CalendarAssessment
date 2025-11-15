import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";
import { describe, expect, test } from "vitest";

describe("Calendar Component", () => {
  test("renders the correct month and year", () => {
    const testDate = new Date(2025, 10, 15); // November 2025
    render(<Calendar date={testDate} />);

    expect(screen.getByText("November 2025")).toBeInTheDocument();
  });

  test("highlights the selected day", () => {
    const testDate = new Date(2025, 10, 10); // November 10
    render(<Calendar date={testDate} />);

    const highlighted = screen.getByTestId("selected-day");
    expect(highlighted).toHaveTextContent("10");
  });

  test("renders all days of the month", () => {
    const testDate = new Date(2025, 0, 1); // January 2025 (31 days)
    render(<Calendar date={testDate} />);

    for (let day = 1; day <= 31; day++) {
      expect(screen.getByText(day.toString())).toBeInTheDocument();
    }
  });
});
