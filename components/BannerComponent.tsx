import assest from "@/json/assest";
import { BannerComponentWrapper } from "@/styles/StyledComponents/BannerComponent";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

function BannerComponent() {
  const bannerTitle = useRef(null);

  useGSAP(() => {
    gsap.from(bannerTitle.current, {
      x: "100%",
      delay: "1",
      opacity: "0"
    });
    gsap.to(bannerTitle.current, {
      x: 0,
      opacity: "1"
    });
  });

  return (
    <BannerComponentWrapper>
      <Container fixed>
        <Box className="contentmain_wrapper">
          <Grid2 container spacing={{ xl: "1.5vw", lg: 3, xs: 2 }}>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="bannerContentWrapper">
                <Box className="bannerTitle">
                  <Typography variant="h1" ref={bannerTitle}>
                    Lorem ipsum
                  </Typography>
                  <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit sapiente deserunt numquam cupiditate.
                  </Typography>
                </Box>
                <Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    className="socialMediaWrapper"
                  >
                    <Link href="#" className="socialitem">
                      <Typography>yt</Typography>
                    </Link>
                    <Link href="#" className="socialitem">
                      <Typography>ig</Typography>
                    </Link>
                    <Link href="#" className="socialitem">
                      <Typography>fb</Typography>
                    </Link>
                    <Link href="#" className="socialitem">
                      <Typography>x</Typography>
                    </Link>
                  </Stack>
                  <Box className="performance_wrapper">
                    <Grid2 container spacing={{ xl: "2vw", lg: 8, xs: 4 }}>
                      <Grid2 size={{ md: 6, xs: 12 }}>
                        <Typography className="performTitle">+250k</Typography>
                        <Typography
                          variant="body1"
                          className="Performance_details"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officiis.
                        </Typography>
                      </Grid2>
                      <Grid2 size={{ md: 6, xs: 12 }}>
                        <Typography className="performTitle">+250k</Typography>
                        <Typography
                          variant="body1"
                          className="Performance_details"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officiis.
                        </Typography>
                      </Grid2>
                    </Grid2>
                  </Box>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Box className="banner_imgSection">
                <figure className="bannerbackgroundimage">
                  <Image
                    width={1000}
                    height={600}
                    alt="banner-background"
                    src={assest.bannerimage}
                  />
                </figure>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </BannerComponentWrapper>
  );
}

export default BannerComponent;
