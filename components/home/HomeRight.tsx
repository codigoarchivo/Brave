import Box from "@mui/material/Box";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import anime from "animejs";

export const HomeRight = () => {
  useEffect(() => {
    anime({
      targets: ".animation-keyframes-demo",
      keyframes: [
        { translateY: -0 },
        { translateX: 250 },
        { translateY: 120 },
        { translateX: 0 },
        { translateY: 0 },
      ],
      rotate: {
        value: "+=4turn",
        duration: 6000,
        easing: "easeInOutSine",
      },
      translateX: {
        value: "*=4",
        duration: 6000,
      },
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 5000 },
        { value: 1, easing: "easeInOutQuad", duration: 5200 },
      ],
      delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
      borderRadius: ["0%", "50%"],
      direction: "alternate",
      duration: 5000,
      easing: "easeOutElastic(1, .8)",
      loop: true,
    });
  }, []);

  useEffect(() => {
    var path = anime.path(".motion-path-demo path");

    anime({
      targets: ".motion-path-demo svg",
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      easing: "linear",
      duration: 6000,
      loop: true,
    });
  }, []);

  return (
    <>
      <Box
        className={"box__background-color"}
        sx={{
          position: "relative",
          backgroundColor: "primary.main",
          width: { xs: "50%", md: "50%" },
        }}
      ></Box>

      <Box
        className={"box__image"}
        sx={{
          position: "absolute",
          width: { xs: "60%", sm: "26%", md: "80%", lg: "100%" },
          height: { xs: 218, sm: 137, md: 320, lg: 600, xl: 1000 },
          bottom: 0,
        }}
      >
        <Container>
          <Stack spacing={10} position="relative">
            <div
              style={{
                position: "absolute",
              }}
              className="motion-path-demo"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="30.000000pt"
                height="30.000000pt"
                viewBox="0 0 30.000000 30.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M87 202 c-21 -42 -38 -87 -37 -99 0 -24 54 -83 76 -83 18 0 17 10 -1
34 -19 25 -19 50 0 66 12 10 15 9 15 -5 0 -9 11 -30 24 -46 13 -15 26 -34 29
-41 7 -21 46 20 53 57 6 34 -11 115 -25 115 -5 0 -12 -8 -15 -17 -5 -13 -13
-5 -34 36 -15 30 -31 56 -37 57 -5 2 -27 -32 -48 -74z"
                  />
                </g>
              </svg>
            </div>

            <div
              style={{
                backgroundColor: "black",
                display: "flex",
                height: "100px",
                width: "20%",
                position: "absolute",
              }}
              className="animation-keyframes-demo"
            >
              <h1
                style={{
                  position: "absolute",
                  zIndex: 50000,
                  color: "white",
                  left: 25,
                }}
              >
                hola
              </h1>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
