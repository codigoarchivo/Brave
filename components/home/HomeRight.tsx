import Box from "@mui/material/Box";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import anime from "animejs";

export const HomeRight = () => {
  useEffect(() => {
    const data = anime({
      targets: ".animation-keyframes-demo",
      keyframes: [
        { translateX: 420 },
        { translateY: 50 },
        { translateX: 450 },
        { translateY: 100 },
        { translateX: 20 },
        { translateY: 150 },
        { translateX: 470 },
        { translateY: 200 },
        { translateX: 10 },
        { translateY: 250 },
        { translateX: 470 },
        { translateY: 20 },
        { translateX: 0 },
        { translateX: 30 },
        { translateY: 350 },
        { translateX: 450 },
        { translateY: 300 },
        { translateX: 20 },
        { translateY: 0 },
        { translateY: -400 },
        { translateY: -350 },
      ],
      rotate: {
        value: "+=4turn",
        duration: 10000,
        easing: "easeInOutSine",
      },
      scale: [{ value: 0.1, easing: "easeOutSine", duration: 10000 }],
      delay: anime.stagger(1000, { grid: [14, 5], from: "center" }),
      borderRadius: ["0%", "50%"],
      direction: "alternate",
      duration: 20000,
      easing: "easeInOutQuad(1, .8)",
      loop: true,
      opacity: 0.8,
    });

    console.log(data);
  }, []);

  return (
    <>
      <Box
        className={"box__background-color"}
        sx={{
          position: "relative",
          backgroundColor: "primary.main",
          width: { xs: "50%", md: "50%" },
          zIndex: 5000,
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
          <Stack position="relative">
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
