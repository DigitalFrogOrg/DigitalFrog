'use client';

import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';

const CallButton = () => {
  
  return (
    <div
      className={`callBtn visible`}
    >
      <FaPhone />
    </div>
  );
};

export default CallButton;
