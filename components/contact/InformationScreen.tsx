import { useRouter } from "next/router";
import CallIcon from "@mui/icons-material/Call";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { COLOR_FIVE, COLOR_TWO, COLOR_SIX, COLOR_ONE } from "../../utils";
import { paper } from "../../helpers";
import { en, es } from "../../translations";

export const InformationScreen = () => {
  const { locale } = useRouter();
  const Item = paper(COLOR_FIVE, COLOR_TWO, COLOR_SIX);
  return (
    <Stack spacing={{ xs: 1, md: 2 }} sx={{ width: "100%" }}>
      <Item>
        <Typography variant={"h3"} fontWeight={600} textTransform={"uppercase"}>
          {locale === "en" ? en.pageContact.a : es.pageContact.a}
        </Typography>
        <Stack justifyContent={"center"} direction="row">
          <Typography
            variant={"h3"}
            fontWeight={600}
            textTransform={"uppercase"}
          >
            {locale === "en" ? en.pageContact.b : es.pageContact.b}
          </Typography>
          <Typography
            sx={{
              marginLeft: locale === "en" ? "25px" : 0,
            }}
            variant={"h3"}
            color={COLOR_ONE}
            fontWeight={600}
            textTransform={"uppercase"}
          >
            {locale === "en" ? en.pageContact.c : es.pageContact.c}
          </Typography>
        </Stack>
      </Item>
      <div>
        <Divider
          textAlign="left"
          sx={{
            fontSize: { xs: 18, md: 25 },
            "&::before, &::after": {
              borderColor: "secondary.light",
            },
          }}
        >
          {locale === "en" ? en.pageContact.d : es.pageContact.d}
        </Divider>
      </div>
      <Item>
        <Stack spacing={1}>
          <Stack justifyContent={"space-between"} direction="row">
            <CallIcon color="secondary" />
            <Typography variant="body1">+584126804788</Typography>
          </Stack>
          <Stack justifyContent={"space-between"} direction="row">
            <a
              style={{ color: "currentcolor" }}
              href="https://www.linkedin.com/in/jackson-quintero/"
              target={"_blank"}
            >
              <LinkedInIcon color="secondary" />
            </a>
            <a
              style={{ color: "currentcolor" }}
              href="https://www.linkedin.com/in/jackson-quintero/"
              target={"_blank"}
            >
              linkedin
            </a>
          </Stack>
          <Stack justifyContent={"space-between"} direction="row">
            <a
              style={{ color: "currentcolor" }}
              href="https://www.facebook.com/jacksonjose.quinteroangulo/"
              target={"_blank"}
            >
              <FacebookIcon color="secondary" />
            </a>
            <a
              style={{ color: "currentcolor" }}
              href="https://www.facebook.com/jacksonjose.quinteroangulo/"
              target={"_blank"}
            >
              Facebook
            </a>
          </Stack>
          <Stack justifyContent={"space-between"} direction="row">
            <a
              style={{ color: "currentcolor" }}
              href="https://www.instagram.com/codigoarchivo/"
              target={"_blank"}
            >
              <InstagramIcon color="secondary" />
            </a>
            <a
              style={{ color: "currentcolor" }}
              href="https://www.instagram.com/codigoarchivo/"
              target={"_blank"}
            >
              Instagram
            </a>
          </Stack>
          <Stack justifyContent={"space-between"} direction="row">
            <a
              style={{ color: "currentcolor" }}
              href="https://t.me/jackyire"
              target={"_blank"}
            >
              <TelegramIcon color="secondary" />
            </a>
            <a
              style={{ color: "currentcolor" }}
              href="https://t.me/jackyire"
              target={"_blank"}
            >
              Telegram
            </a>
          </Stack>
          <Stack justifyContent={"space-between"} direction="row">
            <a
              style={{ color: "currentcolor" }}
              href="https://wa.me/584126804788"
              target={"_blank"}
            >
              <WhatsAppIcon color="secondary" />
            </a>
            <a
              style={{ color: "currentcolor" }}
              href="https://wa.me/584126804788P"
              target={"_blank"}
            >
              WhatsApp
            </a>
          </Stack>
        </Stack>
      </Item>
    </Stack>
  );
};
