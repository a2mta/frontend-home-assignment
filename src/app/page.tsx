import { Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        HelloCurve
      </Typography>
      <Typography variant="h4" gutterBottom>
        Front-End Engineer Home Assignment
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600 }}>
        Welcome! Please refer to the README.md file for assignment details and
        instructions.
      </Typography>
    </Box>
  );
}
