// export const lightMode = {
//   backGroundColor: '#ffffff',
//   cardColor: '#fa6723',
//   hightLightedColor: '#92ba3c',
//   white: '#FFFFFF',
//   primaryText: '#505050',
//   secondaryText: '#505251',
//   thirdText: '#ECEBE4',
//   fourthText: '#F06623',
//   borderColor: '#92ba3c',
// };

// fcf9f7

export interface Theme {
  // profileBackground: string;
  // sunlighten: string;
  // white: string;
  // primaryText: string;
  // secondaryText: string;
  // thirdText: string;
  // fourthText: string;
  // primaryBackgroud: string;
  // secondryBackground: string;
  // thirdBackground: string;
  // PrimaryButtonColor: string;
  // secondryButtonColor: string;
  // thirdButtonColor: string;
  // buttonPrimaryText: string;
  // borderPrimaryColor: string;
  // placeholderText: string;
  // iconprimaryColor: string;
  // iconSecondaryColor: string;
  // iconThirdColor: string;
  // highlightedColor: string;
  // darkBackground: string;
  // navbarBackground: string;
  // notificationBackground: string;
  // primaryLinerGrandientColor: [string, string];
  // secondaryLinerGrandientColor: [string, string];
  // borderSecondryColor: string;
  // transparentBackGround: string;
  // bannerBackGround: string;
  // bannerIconColor: string;

  backGroundColor: string;
  hightLightedColor: string;
  borderColor: string;
  white: string;
  primaryText: string;
  secondaryText: string;
  headingText: string;
  subHeadingText: string;
  buttonBackGroundColor: string;
}

// app theme type
export type AppThemesTypes = 'light' | 'dark';

// function return type
export interface AppTheme {
  theme: AppThemesTypes;
  colors: Theme;
}

export const LighterTheme: Theme = {
  backGroundColor: 'white',
  hightLightedColor: '#92ba3c',
  white: '#FFFFFF',
  primaryText: '#505050',
  secondaryText: '#505251',
  borderColor: '#92ba3c',
  headingText: '#000802',
  subHeadingText: '#505251',
  buttonBackGroundColor: '#92ba3c',
};

export const DarkTheme: Theme = {
  backGroundColor: '#000a03',
  hightLightedColor: '#92ba3c',
  white: '#fa6723',
  primaryText: '#fa6723',
  secondaryText: '#fa6723',
  borderColor: '#92ba3c',
  headingText: '#ffffff',
  subHeadingText: '#dbd9db',
  buttonBackGroundColor: '#92ba3c',
};

export const getThemeFromType = (themeType: AppThemesTypes): AppTheme => {
  switch (themeType) {
    case 'light':
      return {theme: 'light', colors: LighterTheme};
    case 'dark':
      return {theme: 'dark', colors: DarkTheme};
    default:
      return {theme: 'light', colors: LighterTheme};
  }
};
