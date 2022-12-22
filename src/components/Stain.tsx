import { Box } from '@mantine/core';

export const Stain = ({ blur, radius, transform, variant, ...props }: any) => {
  return (
    <Box
      style={{
        // background:
        //   'conic-gradient(red 0deg, orange 60deg, yellow 120deg, green 180deg, blue 240deg, purple 300deg, red 360deg)',
        filter: `blur(${blur}px)`,
        borderRadius: radius,
        transform: `translate(${transform})`,
        position: 'absolute',
      }}
      {...props}
      sx={(theme: any) => {
        const colorArray = theme.colors[theme.primaryColor];
        return {
          background: `conic-gradient(
    ${colorArray[5]} 0deg,
    ${colorArray[5]} 45deg,
    transparent 90deg,
    transparent 135deg,
    transparent 180deg,
    transparent 225deg,
    ${colorArray[5]} 270deg,
    transparent 315deg,
    transparent 360deg
    )`,
        };
      }}
    ></Box>
  );
};

const stains = {
  backgroundBlue: `conic-gradient(
    #16abff33 0deg,
    #0885ff33 55deg,
    #54d6ff33 120deg,
    #0071ff33 160deg,
    transparent 360deg
    )`,
};
