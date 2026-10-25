/** Where the Sarang apps live. One place, so the header, the Focus page, the settings and the updater agree. */
export const SUITE = {
  md: {
    name: 'Sarang.md',
    repo: 'sarang-cmd/sarang.md',
    repoUrl: 'https://github.com/sarang-cmd/sarang.md',
    siteUrl: 'https://sarang-md.vercel.app/',
    /** The release page always shows the newest installer. */
    latestUrl: 'https://github.com/sarang-cmd/sarang.md/releases/latest',
    /** A file name that never changes, so this link always downloads the newest Windows build. */
    directUrl: 'https://github.com/sarang-cmd/sarang.md/releases/latest/download/Sarang-md-Windows.exe',
  },
  study: {
    name: 'Study with Sarang',
    repoUrl: 'https://github.com/sarang-cmd/study-with-sarang',
    landingUrl: 'https://sarang-cmd.github.io/study-with-sarang/',
    appUrl: 'https://sarang-cmd.github.io/study-with-sarang/app/',
    latestUrl: 'https://github.com/sarang-cmd/study-with-sarang/releases/latest',
  },
} as const;
