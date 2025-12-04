import Image from "next/image";
import React from 'react';

const Im = () => {
  return (
    <div>
      <Image src="/images/profile.jpg" alt="Profile Photo" width={900} height={700}/>
    </div>
  );
}

export default Im;
