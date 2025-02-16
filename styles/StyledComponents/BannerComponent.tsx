import { merriweather } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const BannerComponentWrapper = styled(Box)`
  .contentmain_wrapper {
    padding: 60px 0;
    .bannerContentWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      .bannerTitle {
        h1 {
          font-size: 140px;
          font-weight: 900;
          text-align: right;
          line-height: 1;
          max-width: 90%;
          width: 100%;
          margin-left: auto;
          overflow: hidden;
        }
        p {
          font-size: 14px;
          color: #000;
          font-size: 16px;
          max-width: 55%;
          width: 100%;
          margin-left: auto;
          text-align: right;
          margin-top: 40px;
          font-weight: 500;
        }
      }
      .socialMediaWrapper {
        padding: 15px 0;

        .socialitem {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          border-color: #000;
          border-radius: 50%;
          padding: 3px;
          margin-left: -8px;
          color: #000;
          transition: all 0.3s linear;
          &:hover {
            color: #fff;
            border-color: #000;
            background-color: #000;
          }

          &:first-child {
            margin-left: 0;
          }
          p {
            font-family: ${merriweather.style.fontFamily};
            font-weight: 400;
            color: inherit;
          }
        }
      }
      .performance_wrapper {
        .performTitle {
          font-style: italic;
          font-weight: 700;
          font-size: 40px;
          color: #000;
          text-align: right;
        }
        .Performance_details {
          font-size: 14px;
          font-weight: 500;
          text-align: right;
        }
      }
    }
    .banner_imgSection {
      height: 100%;
      .bannerbackgroundimage {
        line-height: 0;
        height: 100%;
        min-height: 300px;
        width: 100%;
        border-radius: 20px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
