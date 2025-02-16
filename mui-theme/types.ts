declare module "@mui/material/styles" {
  interface customColorsPrimary {
    primary_100?: string;
  }

  interface TextPalette {
    primary?: string;
    secondary?: string;
  }

  interface Palette {
    customColors?: {
      dark?: string;
      main?: string;
      light?: string;
      bodyBg?: string;
      trackBg?: string;
      avatarBg?: string;
      darkPaperBg?: string;
      lightPaperBg?: string;
      tableHeaderBg?: string;
      primary?: customColorsPrimary;
      bannerBg?: string;
      text?: TextPalette;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tonal: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsVariantOverrides {
    tonal: true;
  }
}

export {};
