import { useState } from 'react';

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCode(): string {
  const code = getRandomNumber(0, 9999).toString();
  return `const code = "${code}"`;
}
