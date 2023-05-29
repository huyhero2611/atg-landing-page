import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Container, Grid, Typography, useTheme, Box, Tab } from "@mui/material";
import Image from "next/image";
import React from "react";

function AtgToken() {
  const theme = useTheme();

  const tabArr = [
    {
      title: "Staking",
      content:
        "Users can stake their tokens to earn rewards and to have the right to participate in All Things Green activities like Learn to Earn or other campaigns.",
    },
    {
      title: "Burning",
      content:
        "1% of ATG tokens will be burned for each transaction. Each minted ATG Pass will also burn a certain amount of ATG tokens. This burning mechanism keeps the circulating supply inflation under control.",
    },
    {
      title: "Taxation",
      content:
        "Buying tax and selling tax will be fixed at 3% and 5% respectively. 30% of taxes will partly be transferred into the environmental protection fund. Another 30% will be rewarded to ATG holders.",
    },
    {
      title: "Payment",
      content:
        "ATG token will be the main currency on our marketplace to pay for products and services. A part of profit from the marketplace will be used for environmental protection programs as we committed.",
    },
  ];

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background: "#E9EFE2", py: "140px" }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 10, textAlign: "center" }}>
          ATG Token
        </Typography>
        <Grid container>
          <Grid item xs={6} lg={6} md={6} sm={6} sx={{ display: "flex" }}>
            <Image
              src="/images/atg_token_staking.svg"
              width={648}
              height={840}
              alt="ATG token"
            />
          </Grid>
          <Grid item xs={6} lg={6} md={6} sm={6}>
            <Box
              sx={{
                ml: 17,

                "& .MuiTab-root": {
                  color: "#999999",
                  padding: "32px",
                  textAlign: "start",

                  "&.Mui-selected": {
                    background: "#fff",
                    color: "#212121",
                    boxShadow: "0px 4px 28px -8px rgba(0, 0, 0, 0.05)",
                    borderRadius: "40px",

                    "& .MuiTypography-body1": {
                      color: "#424242",
                    },
                  },
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  orientation="vertical"
                >
                  {tabArr.map(({ title, content }, index) => (
                    <Tab
                      key={index}
                      label={
                        <>
                          <Typography variant="h3">{title}</Typography>
                          <Typography variant="body1">{content}</Typography>
                        </>
                      }
                      value={`${index}`}
                      sx={{ textAlign: "start", maxWidth: "unset" }}
                    />
                  ))}
                </TabList>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AtgToken;