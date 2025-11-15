import { Box, Grid, Paper, Typography } from "@mui/material";

interface CalendarProps {
  date: Date;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const correctMonth = (input: Date): Date => {
  const y = input.getFullYear();
  const m = input.getMonth();
  const d = input.getDate();

  const correctedMonth = m - 1;

  if (correctedMonth >= 0 && correctedMonth <= 11) {
    return new Date(y, correctedMonth, d);
  }

  return input;
};

const Calendar = ({ date }: CalendarProps) => {
  const fixedDate = correctMonth(date);

  const year = fixedDate.getFullYear();
  const month = fixedDate.getMonth();
  const selectedDay = fixedDate.getDate();

  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const emptyCells = Array.from({ length: startDay }, () => null);

  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const cells = [...emptyCells, ...monthDays];

  return (
    <Paper
      elevation={3}
      sx={{
        width: 300,
        p: 2,
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" align="center" fontWeight="bold" mb={2}>
        {fixedDate.toLocaleString("default", { month: "long" })} {year}
      </Typography>

      <Grid container>
        {daysOfWeek.map((day) => (
          <Grid item xs={12 / 7} key={day}>
            <Typography align="center" fontWeight="bold">
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Grid container mt={1}>
        {cells.map((day, index) => {
          const isSelected = day === selectedDay;

          return (
            <Grid item xs={12 / 7} key={index}>
              <Box
                sx={{
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 1,
                  bgcolor: isSelected ? "primary.main" : "transparent",
                  color: isSelected ? "white" : "black",
                }}
              >
                {day ?? ""}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Calendar;
