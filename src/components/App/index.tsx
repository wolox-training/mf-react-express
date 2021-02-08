import React from 'react';

import 'scss/application.scss';
import SignUp from 'screens/SignUp';
import CustomSuspense from 'components/Suspense';

function App() {
  return (
    <CustomSuspense>
      <SignUp />
    </CustomSuspense>
  );
}

export default App;
