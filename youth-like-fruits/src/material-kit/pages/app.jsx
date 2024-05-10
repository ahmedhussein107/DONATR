import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/material-kit/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <AppView />
    </>
  );
}
