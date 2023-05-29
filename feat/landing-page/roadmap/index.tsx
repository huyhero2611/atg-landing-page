import { Box, Container, Typography } from "@mui/material";
import React from "react";

function RoadMap() {
  const roadmapArr = [
    {
      title: "Q2.2023",
      list: Array(4).fill("Lorem ipsum dolor sit amet"),
    },
    {
      title: "Q3.2023",
      list: Array(4).fill("Lorem ipsum dolor sit amet"),
    },
    {
      title: "Q4.2023",
      list: Array(4).fill("Lorem ipsum dolor sit amet"),
    },
    {
      title: "Q1.2024",
      list: Array(4).fill("Lorem ipsum dolor sit amet"),
    },
    {
      title: "Q2.2024",
      list: Array(4).fill("Lorem ipsum dolor sit amet"),
    },
  ];

  return (
    <Box sx={{ background: "#E9EFE2", pt: "140px" }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 10 }}>
          Roadmap
        </Typography>
        <Box
          sx={{
            backgroundImage: "url('images/roadmap.svg')",
            backgroundRepeat: "no-repeat",
            width: "1315px",
            height: "727px",
            position: "relative",
          }}
        >
          {roadmapArr.map(({ title, list }, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                bottom: `${35 + index * 31}px`,
                left: `${271 * index}px`,
                ml: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{ textAlign: "center", mb: 4, color: "#fff" }}
              >
                {title}
              </Typography>
              <ul>
                {list.map((subItem, subIndex) => (
                  <li key={subIndex} style={{ marginBottom: "12px" }}>
                    <Typography variant="body2">{subItem}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default RoadMap;